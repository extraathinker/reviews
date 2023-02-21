var pic = document.getElementById('picture');
var pname = document.getElementById('name');
var desig = document.getElementById('designation');
var descr = document.getElementById('description');
var previous = document.getElementById('previous');
var next = document.getElementById('next');
var j = 0;
var people = [
    {
        pic: 'Sohan.png',
        pname: 'Sohan Kumar',
        desig: 'Web developer',
        descr: 'He is a good web developer. He knows many programming language which are python, java, html, css, javascript, sql, etc.' 
    },
    {
        pic: 'priya.jpeg',
        pname: 'Priya Rathor',
        desig: 'Backend developer',
        descr: 'She is a backend developer. She knows C, C++, etc.'
    },
    {
        pic: 'Mohan.png',
        pname: 'Mohan Chaudhary',
        desig: 'Frontend developer',
        descr: 'He is a frontend developer. He knows php, java, etc.'
    },
    {
        pic: 'Oscar.jpeg',
        pname: 'Oscar Wild',
        desig: 'Full stack developer',
        descr: 'He is a full stack developer. He knows Java, Sql, etc.'
    },
    {
        pic: 'Bhargav.jpeg',
        pname: 'Bhargav Singh',
        desig: 'C++ developer',
        descr: 'He is a C++ developer. He knows C++, java, etc.'
    }
]

previous.addEventListener('click',function(){ 
    if (j >0){
        j--;
        pic.src = people[j].pic;
        pname.innerHTML = people[j].pname;
        desig.innerHTML = people[j].desig;
        descr.innerHTML = people[j].descr;
    }
})
next.addEventListener('click',function(){
    if (j <5){
        j++;
        pic.src = people[j].pic;
        pname.innerHTML = people[j].pname;
        desig.innerHTML = people[j].desig;
        descr.innerHTML = people[j].descr;
    }
})
