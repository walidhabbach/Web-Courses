var content = document.querySelector('.content');

function creationCours(path, title, price) {
    let div = document.createElement('div'); // <div></div>
    div.setAttribute('class', 'card shadow  col-md-3 me-1 mb-3 text-center'); //<div class="card col-3 me-2 mb-2 "></div>
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


var list = document.querySelector('#categories');

function addCourses(){

    let Query =  "SELECT * FROM courses;";
    // Send the FormData object as an AJAX request
    var xhr = new XMLHttpRequest();
    
      xhr.open('GET','http://localhost:82/ProjetJs/Web-Courses/Home/GetCourses.php');   
      xhr.send();   
         xhr.onload = function() {
            if (xhr.status == 200) { 
                var data = JSON.parse(xhr.responseText);
                console.log(data);
                //IDCOURSE, IMG_URL , TITLE, PRICE
                for (let i = 0; i < 19; i++) {
                    creationCours(data[i].IMG_URL, data[i].TITLE, data[i].PRICE);   
                }

            }
           
        }

}


function creationCategory() {
    var tab = courses.map(function(v) { return v.category.toUpperCase() });
    var categories = ['all', ...new Set(tab)];

    categories.forEach((v) => {
        let li = document.createElement('li'); // <li></li>
        li.appendChild(document.createTextNode(v)); // <li>v</li>
        list.append(li);
    })
}
creationCategory()