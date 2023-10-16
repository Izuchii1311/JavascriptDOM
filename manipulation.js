// Manipulation
// Manipulation Element

// InnerHML
// const judul = document.getElementById('judul');
// judul.innerHTML = 'Ini dirubah dengan menggunakan JavaScript';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = "Hello World";


// Style.<property>
// const judul = document.getElementById('judul');
// judul.style.fontSize = '3rem';



// Attribute()
// setAttribute()
// const judul = document.getElementById('judul');
// judul.setAttribute('name', 'Hello World');

// getAttribute()
// const a = document.querySelector('section#a a');
// a.getAttribute('href');
// console.log(a);

// removeAttribute()
// const a = document.querySelector('section#a a');
// a.removeAttribute('href');
// console.log(a);


// add new class
// const p2 = document.querySelector('.p2');
// p2.setAttribute('class', 'label');                       // jika seperti ini akan menimpa class sebelumnya



// ClassList
// const p2 = document.querySelector('.p2');
// p2.classList.add('biru-muda');





// Manipulation Node
// Case 1
const pBaru = document.createElement('p');
const txtPBaru = document.createTextNode('Paragraf Baru');

    // Simpan tulilsan ke dalam Paragraf
    pBaru.appendChild(txtPBaru);

    // Simpan pBaru diakhir section A
    const sectionA = document.getElementById('a');
    sectionA.appendChild(pBaru)

    pBaru.style.backgroundColor = 'lightblue';


// Case 2
const li = document.createElement('li');
const isiLi = document.createTextNode("Item Baru");

    // Simpan tulisan ke dalam li baru
    li.appendChild(isiLi);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

    // Masukkan ke dalam li sebelum li ke 2
    ul.insertBefore(li, li2);

    li.style.backgroundColor = 'lightblue';


// Case 3
const link = document.querySelector('section#a a');

    // Menghapus child
    sectionA.removeChild(link);


// Case 4
const sectionB = document.querySelector('section#b');
const p4 = sectionB.querySelector('p');
const h2 = document.createElement('h2');
const isiH2 = document.createTextNode('H2 ini dibuat dengan menggunakan JavaScript');

    h2.appendChild(isiH2);

sectionB.replaceChild(h2, p4);

    h2.style.backgroundColor = 'lightblue';