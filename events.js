// const p3 = document.querySelector('.p3');

// // Event handler
// function ubahWarna() {
//     p3.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarna();


// // addEventListener('event mau apa', parameter ke 2)
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul');
//     const li = document.createElement('li');
//     const liText = document.createTextNode('Item Baru');

//     li.appendChild(liText);
//     ul.appendChild(li);
// });




// Perbedaan
// jika event handler akan menimpa event yang pertamma
const p2 = document.querySelector('.p2');
p2.onclick = function() {
    p2.style.backgroundColor = 'lightblue';
}
p2.onclick = function() {
    p2.style.color = 'red';
}


// jika eventlistener akan menerima 2 event sekaligus bahkan lebih tanpa harus menimpanya
const p3 = document.querySelector('.p3');
p3.addEventListener('click', function() {
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('click', function() {
    p3.style.color = 'red';
});