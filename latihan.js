const tUbahWarna = document.querySelector('#tUbahWarna');

tUbahWarna.addEventListener('click', function() {
    // Menambahkan inline css
    // document.body.style.backgroundColor = 'lightblue';

    // Menambahkan class css
    // document.body.setAttribute('class', 'biru-muda');

    // Melakukan toggle dan menambahkan class css
    document.body.classList.toggle('biru-muda');
})


// Membuat Tombol JS dan Acak Warna.
const tombol = document.createElement('button');
const textTombol = document.createTextNode('Klik me');

    tombol.appendChild(textTombol);
    tombol.setAttribute('type', 'button');

    // Setelah tUbahWarna simpan tombol
    tUbahWarna.after(tombol);

    tombol.addEventListener('click', function() {
        const r = Math.round(Math.random() * 255 + 1);
        const g = Math.round(Math.random() * 255 + 1);
        const b = Math.round(Math.random() * 255 + 1);
        document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    });




// Slider Change Color
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});
sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});
sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});




// Cursor Change Color
document.body.addEventListener('mousemove', function(e) {
    // posisi mouse
    // ClientX harus menempel di dalam object
    // e.clientX;

    // mengetahui ukuran dari document
    // console.log(window.innerWidth);

    const xPos = Math.round((e.clientX / window.innerWidth) * 255);
    const yPos = Math.round((e.clientY / window.innerHeight) * 255);

    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
});