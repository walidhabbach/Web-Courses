let content = document.querySelector('.content');
let Search = document.getElementById('Search');
let PriceRange=document.getElementById('Price-Range');
let list = document.querySelector('#categories');  
let Data = []; 

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

function creationCours(path, title, price) {
    let div = document.createElement('div'); // <div></div>
    div.setAttribute('class', 'card shadow  col-md-3 ms-3 mb-3 text-center'); //<div class="card col-3 me-2 mb-2 "></div>
    let img = document.createElement('img'),
    p = document.createElement('h5'),
    span = document.createElement('p');

    img.src = "http://localhost:82/ProjetJs/Web-Courses"+path;
    img.style.height='100%';
   
    div.style.height = "35vh";
    div.style.width = "15rem"; 
    img.setAttribute('class', 'card-img-top');
    p.appendChild(document.createTextNode(title));
    p.setAttribute('class', 'card-title');
    span.appendChild(document.createTextNode(price));
    span.setAttribute('class', 'card-text');

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);

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
                    
                    creationCours(Data[i].IMG_URL, Data[i].TITLE, Data[i].PRICE);   
                }
                LoadCategory();
                PriceRange.max = Math.max(...Data.map(course => course.PRICE));
                PriceRange.min = Math.min(...Data.map(course => course.PRICE));
               
            }
        }

}
function SearchByPriceRange(){
    content.innerHTML='';
    for (let i = 0; i < Data.length; i++) {   
        if(PriceRange.value >= parseFloat(Data[i].PRICE)){
             creationCours(Data[i].IMG_URL, Data[i].TITLE, Data[i].PRICE);   
        }   
    }
}
function SearchByTitle(){
    content.innerHTML='';
    for (let i = 0; i < Data.length; i++) {
        if(Data[i].TITLE.toLocaleLowerCase().includes(Search.value)){
             creationCours(Data[i].IMG_URL, Data[i].TITLE, Data[i].PRICE);   
        }
    } 
}
function SearchByCategory(category){
    content.innerHTML='';
    for (let i = 0; i < Data.length; i++) {
         if(Data[i].CATEGORY.toLocaleLowerCase() == category.toLocaleLowerCase()){
            creationCours(Data[i].IMG_URL, Data[i].TITLE, Data[i].PRICE);   
        }
    }
    console.log(category);
}
function SearchByTitle_Category(category){
    content.innerHTML='';
    for (let i = 0; i < Data.length; i++) {
         if(Data[i].CATEGORY.toLocaleLowerCase() == category.toLocaleLowerCase() && Data[i].TITLE.toLocaleLowerCase().includes(Search.value)){
            creationCours(Data[i].IMG_URL, Data[i].TITLE, Data[i].PRICE);   
        }
    }
    console.log(category);
}
Search.addEventListener("keyup",()=>{
    content.innerHTML='';
    if(Search.value!=''){
        SearchByTitle();
    }else{
        GetAllCourses();
    } 
    
});

 
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
     console.log(list);
   
}