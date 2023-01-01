let content = document.querySelector('.content');
let Search = document.getElementById('Search');
let PriceRange=document.getElementById('Price-Range');
let list = document.querySelector('#categories');  
let Data = []; 

// content.addEventListener('mouseover', (event)=>{

//     if(!isNaN(parseInt(event.target.parentNode.parentNode.class))){
//         let parentId = event.target.parentNode.parentNode.class;
//         document.querySelector("."+parentId+" .text").style.visibility = "visible";
//     } 
// });

document.querySelector(".LogOut").addEventListener("click",()=>{
    if (confirm("Are you sure want to logout ?")) {  
        var xhr = new XMLHttpRequest();
        xhr.open('POST','http://localhost:82/ProjetJs/Web-Courses/Inscription/Session.php'); 
        xhr.send();
        window.location.assign("http://localhost:82/ProjetJs/Web-Courses/Login/index.html"); 
    }
});
content.addEventListener('click', (event)=>{
    console.log(event.target.parentNode.id);
    if(!isNaN(parseInt(event.target.parentNode.id))){
        let id = parseInt(event.target.parentNode.id); 
        console.log(parseInt(id));
        if (confirm("Do you want to remove this course from your wish list!")) {
            DeleteFromWishList(parseInt(id));
            setTimeout(function() {
                GetWishedCourses();
              },1000);
         
        }
        
    }
    
});
list.addEventListener("click",(event)=>{

    if(event.target.id=='Category_Click'){
        if(event.target.innerHTML=='All Courses'){
            GetWishedCourses();  
        }else{
            if(Search.value==''){
                SearchByCategory(event.target.innerHTML);   
            }
            else{ 
                SearchByTitle_Category(event.target.innerHTML);
            }
        }
    }
})
 
PriceRange.addEventListener("change",()=>{
    document.getElementById('valPrice').innerHTML = PriceRange.value;
    SearchByPriceRange();
});

Search.addEventListener("keyup",()=>{
    content.innerHTML='';
    if(Search.value!=''){
        SearchByTitle();
    }else{
        GetWishedCourses();
    } 
    
});



function DeleteFromWishList(IdCourse){
    var xhr = new XMLHttpRequest();
    xhr.open('POST','http://localhost:82/ProjetJs/Web-Courses/WishList/Delete.php');
    xhr.onload = function() {
        if (xhr.status === 200) { 
            let responce= xhr.responseText;
   
            if(responce=="deleted"){
                 alert("deleted");
            }else if(responce=="Not deleted"){
                alert("Not deleted");
             }else{
                alert(xhr.responseText); ;
             }
        } else {
            console.log('Error: ' + xhr.status);
        }
    };
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('IdCourse=' + IdCourse);  

}

function creationCours(id,path, title, price) {

    let div = document.createElement('div'); 
    
    div.setAttribute('id',parseInt(id)); 
    div.setAttribute('class', 'card shadow col-lg-2 col-md-3 mx-2  mb-2 text-center'); 
    let img = document.createElement('img'),
    p = document.createElement('h5'),
    span = document.createElement('p');
    
    img.src = "http://localhost:82/ProjetJs/Web-Courses"+path;
    img.style.height='100%';  
    
    div.style.height = "32vh";
    div.style.width = "17rem"; 
    
    img.setAttribute('class', 'card-img-top');
    p.appendChild(document.createTextNode(title));
    p.setAttribute('class', 'card-title mt-2');
    span.appendChild(document.createTextNode(price));
    span.setAttribute('class', 'card-text mb-2');

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);

    
    let div2 = document.createElement('div');
    div2.className = "text";
    div2.innerHTML = "Remove From Wishlist";

    div.appendChild(div2);

    content.append(div);
    
}


function SortByPrice() {
    if (Data.length > 0) {
        Data.sort((a, b) => {
            let PRICEa = parseFloat(a.PRICE);
            let PRICEb = parseFloat(b.PRICE);

            if (PRICEa > PRICEb) {
                return -1;
            }
            if (PRICEa < PRICEb) {
                return 1;
            }
            return 0;
        });
    }
}
function GetWishedCourses(){

    content.innerHTML='';
    // Send the FormData object as an AJAX request
    var xhr = new XMLHttpRequest();

    
      xhr.open('GET','http://localhost:82/ProjetJs/Web-Courses/WishList/GetWishList.php');   
      xhr.send();   
         xhr.onload = function() {
            if (xhr.status == 200) { 
                Data = JSON.parse(xhr.responseText);
                console.log(Data);
                SortByPrice();
                //IDCOURSE, IMG_URL , TITLE, PRICE
                for (let i = 0; i < Data.length; i++) {
                    
                    creationCours(parseInt(Data[i].IDCOURSE),Data[i].IMG_URL, Data[i].TITLE, Data[i].PRICE);   
                }
                LoadCategory();
                PriceRange.max = Math.max(...Data.map(course => course.PRICE));
                PriceRange.min = Math.min(...Data.map(course => course.PRICE));
                PriceRange.value = Math.max(...Data.map(course => course.PRICE));
                document.getElementById('valPrice').innerHTML = PriceRange.value;
            }
        }
        console.log(content);
}
function SearchByPriceRange(){
    content.innerHTML='';
    for (let i = 0; i < Data.length; i++) {   
        if(PriceRange.value >= parseFloat(Data[i].PRICE)){
             creationCours(parseInt(Data[i].IDCOURSE),Data[i].IMG_URL, Data[i].TITLE, Data[i].PRICE);   
        }   
    }
}
function SearchByTitle(){
    content.innerHTML='';
    for (let i = 0; i < Data.length; i++) {
        if(Data[i].TITLE.toLocaleLowerCase().includes(Search.value)){
             creationCours(parseInt(Data[i].IDCOURSE),Data[i].IMG_URL, Data[i].TITLE, Data[i].PRICE);   
        }
    } 
}
function SearchByCategory(category){
    content.innerHTML='';
    for (let i = 0; i < Data.length; i++) {
         if(Data[i].CATEGORY.toLocaleLowerCase() == category.toLocaleLowerCase()){
            creationCours(parseInt(Data[i].IDCOURSE),Data[i].IMG_URL, Data[i].TITLE, Data[i].PRICE);   
        }
    }
    console.log(category);
}
function SearchByTitle_Category(category){
    content.innerHTML='';
    for (let i = 0; i < Data.length; i++) {
         if(Data[i].CATEGORY.toLocaleLowerCase() == category.toLocaleLowerCase() && Data[i].TITLE.toLocaleLowerCase().includes(Search.value)){
            creationCours(parseInt(Data[i].IDCOURSE),Data[i].IMG_URL, Data[i].TITLE, Data[i].PRICE);   
        }
    }
    
}


 
function LoadCategory() {
    list.innerHTML='';
    let tab = Data.map(function(element) { return element.CATEGORY.toUpperCase() });
    let categories = ['All Courses', ...new Set(tab)];
   
    categories.forEach((element) => {
        let a = document.createElement('a');
        let li = document.createElement('li'); 
        a.className = "btn btn-light text-center w-100"; 
        a.id="Category_Click";
        li.className ="mx-1";
        a.appendChild(document.createTextNode(element));
        li.appendChild(a);
        list.append(li); 
     }) 
   
}