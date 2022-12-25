var content = document.querySelector('.content');

function creationCours(path, title, price) {
    let div = document.createElement('div'); // <div></div>
    div.setAttribute('class', 'card col-3 me-2 mb-2'); //<div class="card col-3 me-2 mb-2 "></div>
    let img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');

    img.src = path;
    img.setAttribute('class', 'card-img');
    p.appendChild(document.createTextNode(title));
    p.setAttribute('class', 'card-title');
    span.appendChild(document.createTextNode(price));
    span.setAttribute('class', 'card-text');

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);

    content.append(div);
}

courses.forEach(function(element) {
    creationCours(element.image, element.title, element.price)
})


var list = document.querySelector('#categories');

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