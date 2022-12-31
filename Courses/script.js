let content = document.querySelector('.content');
let Search = document.getElementById('Search');
let PriceRange=document.getElementById('Price-Range');
let list = document.querySelector('#categories');  
let Data = []; 

content.addEventListener('click', (event)=>{

    if(!isNaN(parseInt(event.target.parentNode.id))){
        let id = parseInt(event.target.parentNode.id); 
        console.log(parseInt(id));
        if (confirm("Do you want to add this course to your wish list!")) {
            AddToWishList(parseInt(id));
        }
        
    }
    
});


list.addEventListener("click",(event)=>{

    if(event.target.id=='Category_Click'){
        if(event.target.innerHTML=='All Courses'){
             GetAllCourses();  
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
        GetAllCourses();
    } 
    
});


function creationCours(id,path, title, price) {
    let div = document.createElement('div'); // <div></div>

    div.setAttribute('id',parseInt(id)); 
    div.setAttribute('class', 'card shadow  col-md-3 ms-3 mb-3 text-center'); //<div class="card col-3 me-2 mb-2 "></div>
    let img = document.createElement('img'),
    p = document.createElement('h5'),
    span = document.createElement('p');

    img.src = "http://localhost:82/ProjetJs/Web-Courses"+path;
    img.style.height='100%'; 
    img.style.width ='100%'; 
    
    div.style.height = "34vh";
    div.style.width = "18rem"; 

    img.setAttribute('class', 'card-img-top');
    p.appendChild(document.createTextNode(title));
    p.setAttribute('class', 'card-title mt-2');
    span.appendChild(document.createTextNode(price+"$"));
    span.setAttribute('class', 'card-text');

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);


    let div2 = document.createElement('div');
    div2.className = "text";
    div2.innerHTML = "Add To Wishlist";

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
function GetAllCourses(){

    let Query =  "SELECT * FROM courses;";
    // Send the FormData object as an AJAX request
    var xhr = new XMLHttpRequest();


      xhr.open('GET','http://localhost:82/ProjetJs/Web-Courses/Home/GetCourses.php');   
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
   
}
function SearchByTitle_Category(category){
    content.innerHTML='';
    for (let i = 0; i < Data.length; i++) {
         if(Data[i].CATEGORY.toLocaleLowerCase() == category.toLocaleLowerCase() && Data[i].TITLE.toLocaleLowerCase().includes(Search.value)){
            creationCours(parseInt(Data[i].IDCOURSE),Data[i].IMG_URL, Data[i].TITLE, Data[i].PRICE);   
        }
    }
    
}


function AddToWishList(IdCourse){
    // Send the Data object as an AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open('POST','http://localhost:82/ProjetJs/Web-Courses/WishList/Add.php');
    // Set the function to run when the response is received
    xhr.onload = function() {
        if (xhr.status === 200) { 
            // The request was successful. Do something with the response.
            let responce= xhr.responseText;
   
            if(responce=="inserted"){
                 alert("inserted");
            }else if(responce=="Not inserted"){
                alert("Not inserted");
             }else{
                alert(xhr.responseText); ;
             }
             
        } else {
            // There was an error with the request
            console.log('Error: ' + xhr.status);
        }
    };

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('IdCourse=' + IdCourse);  

}

function LoadCategory() {
    list.innerHTML='';
    let tab = Data.map(function(element) { return element.CATEGORY.toUpperCase() });
    let categories = ['All Courses', ...new Set(tab)];
    console.log(Data); 
    categories.forEach((element) => {
        let a = document.createElement('a');
        let li = document.createElement('li'); 
        a.className = "btn btn-light text-start w-100"; 
        a.id="Category_Click";
                
        a.appendChild(document.createTextNode(element));
        li.appendChild(a);
        list.append(li); 
     }) 
  
   
}