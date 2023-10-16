// DOM Selection

// getElementById()         -> Element
// const judul = document.getElementById('judul');     // h1 #judul
// judul.style.color = 'red';
// judul.style.backgroundColor = 'pink';
// judul.innerHTML = "Diubah pake JavaScript";


// getElementsByTagName()   -> HTMLCollection
// const p = document.getElementsByTagName('p');       // [p.p1, p.p2, p.p3, p]
// p[2].style.backgroundColor = 'lightblue';

// const h1 = document.getElementsByTagName('h1')[0];  // [h1]
// h1.style.fontSize = '3rem';


// getElementsByClassName() -> HTMLCollection
// const p1 = document.getElementsByClassName('p1');   // [p.p1]
// p1[0].innerHTML = 'ini diubah dengan js';


// querySelector()          -> Element
// const p4 = document.querySelector('#b p');
// p4.style.color= 'green';
// p4.style.fontSize= '30px';


// querySelectorAl()        -> NodeList
// const p = document.querySelectorAll('p');
// for(let i = 0; i < p.length; i++) {
//     p[i].innerHTML = 'Diubah dengan menggunakan Javascript';
//     p[i].style.backgroundColor = 'pink';
// }



// Mengubah Node Root
// Mengubah scope node root (document)

const sectionB = document.getElementById('b');
const p4 = sectionB.getElementsByTagName('p');
p4[0].style.backgroundColor = 'yellow';