
function creationCours(path, title, price) {
    let div = document.createElement('div'); // <div></div>
    div.setAttribute('class', 'card shadow me-3 mb-3 text-center'); //<div class="card col-3 me-2 mb-2 "></div>
    let img = document.createElement('img'),

    titlefield = document.createElement('h5'),
    pricefield = document.createElement('span');
    img.src = "http://localhost:82/ProjetJs/Web-Courses"+path;
    img.style.height='100%';
 
    
    div.style.height = "32vh";
    div.style.width = "17rem"; 
    

    img.setAttribute('class', 'card-img-top');
    titlefield.appendChild(document.createTextNode(title));
    titlefield.setAttribute('class', 'card-title mt-2');
    pricefield.appendChild(document.createTextNode(price+'$'));
    pricefield.setAttribute('class', 'card-text mb-2');

    div.appendChild(img);
    div.appendChild(titlefield);
    div.appendChild(pricefield);

    document.querySelector('.All_Courses').append(div);
}

document.querySelector(".LogOut").addEventListener("click",()=>{

    var xhr = new XMLHttpRequest();
    xhr.open('POST','http://localhost:82/ProjetJs/Web-Courses/Inscription/Session.php'); 
    xhr.send();
    window.location.assign("http://localhost:82/ProjetJs/Web-Courses/Login/index.html"); 

});
function addCourses(){

    let Query =  "SELECT * FROM courses;";
    // Send the FormData object as an AJAX request
    var xhr = new XMLHttpRequest();
    
      xhr.open('GET','http://localhost:82/ProjetJs/Web-Courses/Home/GetCourses.php');   
      xhr.send();   
         xhr.onload = function() {
            if (xhr.status == 200) { 
                let Indexs = [];
                let index ;
                let count = 1;
                let data = JSON.parse(xhr.responseText);
                while(count<=4){
                    //to avoid displaying the same course
                     do{
                         index = getRandomInt(0, data.length-1);
                     }while(Indexs.includes(index));

                     creationCours(data[index].IMG_URL, data[index].TITLE, data[index].PRICE);   
                     Indexs.push(index);
                     count++;  
                }  
            }
           
        }

}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
  }
// function setCourses(){

//         // Send the Data object as an AJAX request
//         var xhr = new XMLHttpRequest();
  
//              xhr.open('POST','http://localhost:82/ProjetJs/Web-Courses/Home/setcourses.php');
//              xhr.setRequestHeader('Content-Type', 'application/json');
//              xhr.send(JSON.stringify(courses));  
//         // Set the function to run when the response is received
       
 
// }

// var courses = [{
//     url_image: '/images/javascriptDef.png',
//     title: 'what is javascript?',
//     category: 'JS',
//     price: 9.9,
//     image : new Image("http://localhost:82/ProjetJs/Web-Courses/images/javascriptDef.png")

// },
// {
//     url_image: '/images/htmlBasics.PNG',
//     title: 'basics of HTML',
//     category: 'HTML',
//     price: 5.9,
//     image : new Image('http://localhost:82/ProjetJs/Web-Courses/images/htmlBasics.PNG')
// },
// {
//     url_image: '/images/htmlElements.png',
//     title: 'HTML elements and tags',
//     category: 'HTML',
//     price: 9.9,
//     image : new Image('/Web-Courses/images/htmlElements.png')
// },
// {
//     url_image: '/images/cssSelectors.jpg',
//     title: 'CSS selectors',
//     category: 'CSS',
//     price: 69.9,
//     image : new Image('/Web-Courses/images/cssSelectors.jpg')
// },
// {
//     url_image: '/images/javascriptVariables.png',
//     title: 'variables and data type of javascript',
//     category: 'JS',
//     price: 19.9,
//     image : new Image('/Web-Courses/images/javascriptVariables.png')
// },
// {
//     url_image: '/images/javascriptOperators.png',
//     title: 'Javascript operators and conditions',
//     category: 'JS',
//     price: 29.9,
//     image : new Image('/Web-Courses/images/javascriptOperators.png')
// },
// {
//     url_image: '/images/htmlAttrVal.jpg',
//     title: 'HTML attributes and values',
//     category: 'HTML',
//     price: 19.9,
//     image : new Image( '/Web-Courses/images/htmlAttrVal.jpg')
// },
// {
//     url_image: '/images/cssProperties.png',
//     title: 'CSS properties',
//     category: 'CSS',
//     price: 29.9,
//     image : new Image('/Web-Courses/images/cssProperties.png')
// },
// {
//     url_image: '/images/javascriptObjects.png',
//     title: 'Javascript objects and arrays',
//     category: 'JS',
//     price: 39.9,
//     image : new Image('/Web-Courses/images/javascriptObjects.png')
// },
// {
//     url_image: '/images/cssMesures.png',
//     title: 'mesures and unites of CSS',
//     category: 'CSS',
//     price: 19.9,
//     image : new Image( '/Web-Courses/images/cssMesures.png')
// },
// {
//     url_image: '/images/cssAnimation.png',
//     title: 'CSS animations',
//     category: 'CSS',
//     price: 19.9,
//     image : new Image('/Web-Courses/images/cssAnimation.png')
// },
// {
//     url_image: '/images/javascriptFunctions.png',
//     title: 'The basics of javascript',
//     category: 'JS',
//     price: 29.9,
//     image : new Image('/Web-Courses/images/javascriptFunctions.png')
// },
// {
//     url_image: '/images/javascriptEvents.png',
//     title: 'javascript events',
//     category: 'JS',
//     price: 59.9,
//     image : new Image('/Web-Courses/images/javascriptEvents.png')
// },
// {
//     url_image: '/images/cssColors.png',
//     title: 'css colors',
//     category: 'css',
//     price: 29.9,
//     image : new Image('/Web-Courses/images/cssColors.png')
// },
// {
//     url_image: '/images/phpBasics.png',
//     title: 'getting started with php',
//     category: 'php',
//     price: 15.9,
//     image : new Image('/Web-Courses/images/phpBasics.png')
// },
// {
//     url_image: '/Web-Courses/courses/images/javascriptFunctions2.png',
//     title: 'functions and loops with javascript',
//     category: 'JS',
//     price: 19.9,
//     image : new Image('/Web-Courses/images/javascriptFunctions2.png')
// },
// {
//     url_image: '/images/phpDataBase.png',
//     title: 'connecting to database using PHP',
//     category: 'PHP',
//     price: 29.9,
//     image : new Image('/Web-Courses/images/phpDataBase.png')
// },
// {
//     url_image: '/images/phpCRUD.png',
//     title: 'manipulating crud using php',
//     category: 'php',
//     price: 45.9,
//     image : new Image('/Web-Courses/images/phpCRUD.png')
// },
// {
//     url_image: '/images/javascriptDOM.png',
//     title: 'DOM the power of javascript',
//     category: 'JS',
//     price: 23.9,
//     image : new Image('/Web-Courses/images/javascriptDOM.png')
// }
// ]