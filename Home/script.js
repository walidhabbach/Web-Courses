
function creationCours(path, title, price) {
    let div = document.createElement('div'); // <div></div>
    div.setAttribute('class', 'card shadow col-md-3  col-sm-12 me-3 mb-3 text-center'); //<div class="card col-3 me-2 mb-2 "></div>
    let img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');

    img.src = "http://localhost:83/ProjetJs/Web-Courses"+path;
    img.style.height='70%';
   
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

    document.querySelector('.All_Courses').append(div);
}


function addCourses(){

    let Query =  "SELECT * FROM courses;";
    // Send the FormData object as an AJAX request
    var xhr = new XMLHttpRequest();
    

      // xhr.onreadystatechange = function() {
      //   if (xhr.readyState == 4 && xhr.status == 200) { 
        
      //       console.log(JSON.parse(xhr.responseText));
            
      //   }
      // };
      xhr.open('GET','http://localhost:83/ProjetJs/Web-Courses/Home/GetCourses.php');   
      xhr.send();   
         xhr.onload = function() {
            if (xhr.status == 200) { 
                var data = JSON.parse(xhr.responseText);
                console.log(data);
                //IDCOURSE, IMG_URL , TITLE, PRICE
                for (let i = 0; i < 2; i++) {
                    creationCours(data[i].IMG_URL, data[i].TITLE, data[i].PRICE);   
                }

            }
           
        }

}

function setCourses(){

        let Data = {
            PRICE :0.0,
            TITLE :'',
            url :'' ,
            category:''
   
        }; 

        // Send the Data object as an AJAX request
        var xhr = new XMLHttpRequest();
  
        // Set the function to run when the response is received

         for (let i = 0; i < 1; i++) {
           
            Data.url = courses[i].image;
            Data.TITLE =  courses[i].title;
            Data.PRICE = courses[i].price;
            Data.category = courses[i].category;

            xhr.open('POST','http://localhost:83/ProjetJs/Web-Courses/Home/setcourses.php');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(Data));  
            
        }


    }


    var courses = [{
        image: './images/javascriptDef.png',
        title: 'what is javascript?',
        category: 'JS',
        price: 9.9
    },
    {
        image: './images/htmlBasics.PNG',
        title: 'basics of HTML',
        category: 'HTML',
        price: 5.9
    },
    {
        image: './images/htmlElements.png',
        title: 'HTML elements and tags',
        category: 'HTML',
        price: 9.9
    },
    {
        image: './images/cssSelectors.jpg',
        title: 'CSS selectors',
        category: 'CSS',
        price: 69.9
    },
    {
        image: './images/javascriptVariables.png',
        title: 'variables and data type of javascript',
        category: 'JS',
        price: 19.9
    },
    {
        image: './images/javascriptOperators.png',
        title: 'Javascript operators and conditions',
        category: 'JS',
        price: 29.9
    },
    {
        image: './images/htmlAttrVal.jpg',
        title: 'HTML attributes and values',
        category: 'HTML',
        price: 19.9
    },
    {
        image: './images/cssProperties.png',
        title: 'CSS properties',
        category: 'CSS',
        price: 29.9
    },
    {
        image: './images/javascriptObjects.png',
        title: 'Javascript objects and arrays',
        category: 'JS',
        price: 39.9
    },
    {
        image: './images/cssMesures.png',
        title: 'mesures and unites of CSS',
        category: 'CSS',
        price: 19.9
    },
    {
        image: './images/cssAnimation.png',
        title: 'CSS animations',
        category: 'CSS',
        price: 19.9
    },
    {
        image: './images/javascriptFunctions.png',
        title: 'The basics of javascript',
        category: 'JS',
        price: 29.9
    },
    {
        image: './images/javascriptEvents.png',
        title: 'javascript events',
        category: 'JS',
        price: 59.9
    },
    {
        image: './images/cssColors.png',
        title: 'css colors',
        category: 'css',
        price: 29.9
    },
    {
        image: './images/phpBasics.png',
        title: 'getting started with php',
        category: 'php',
        price: 15.9
    },
    {
        image: './images/javascriptFunctions2.png',
        title: 'functions and loops with javascript',
        category: 'JS',
        price: 19.9
    },
    {
        image: './images/phpDataBase.png',
        title: 'connecting to database using PHP',
        category: 'PHP',
        price: 29.9
    },
    {
        image: './images/phpCRUD.png',
        title: 'manipulating crud using php',
        category: 'php',
        price: 45.9
    },
    {
        image: './images/javascriptDOM.png',
        title: 'DOM the power of javascript',
        category: 'JS',
        price: 23.9
    },
    {
        image: './images/javascriptDOM.png',
        title: 'DOM the power of javascript',
        category: 'JS_g4',
        price: 23.9
    }
]