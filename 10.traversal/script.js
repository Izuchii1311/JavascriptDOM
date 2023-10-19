// Event Handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });



// DOM TRAVERSAL
// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');

// CARA 1
// for(let i = 0; i < close.length; i ++) {
//     close[i].addEventListener('click', function(e) {
//         // Cara lain & tidak Traversal
//         // card[i].style.display = 'none';

//         // Traversal
//         // close[i].parentElement.style.display = 'none';

//         // Traversal 2
//         // console.log(e);
//         e.target.parentElement.style.display = 'none';
//     });
// }


// CARA 2
// const close = document.querySelectorAll('.close');
// close.forEach(function(e) {
//     e.addEventListener('click',function(f) {
//         f.target.parentElement.style.display = 'none';
//         // prevent default
//         f.preventDefault();
//         // stop bubling
//         // jika tidak diberikan event bubling ketika x di klik akan menampilkan alert('ok')
//         f.stopPropagation();
//     });
// });

// // event bubling
// // Maka ketika cardnya di klik akan menampilkan alert
// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click', function(a) {
//         alert('ok');
//     });
// })


// Kasus 2
// const nama = document.querySelector('.nama');
// console.log(nama.previousElementSibling)





// Event Bubling Case
// Cara ini lebih efektif dibanding CARA 2 karena bisa menangani kasus jika ada tampilan data secara dinamis.
const container = document.querySelector('.container');
container.addEventListener('click', function(r) {
    // console.log(r.target);

    if(r.target.className == 'close') {
        r.target.parentElement.style.display = 'none';
        r.preventDefault();
    }
});