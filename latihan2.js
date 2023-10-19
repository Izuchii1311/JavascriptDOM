function getComputer() {
    // Menangkap pilihan computer
    // Membangkitkan bilangan random
    const comp = Math.random();

    // tidak menggunakan if else, karena jika menggunakan return maka else tidak akan di jalankan.
    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.66) return 'semut';
        return "orang";
}

function getRules(comp, p) {
    if (p == comp) return 'SERI';
    if (p == 'gajah') return (comp == 'orang') ? 'MENANG' : "KALAH";
    if (p == 'orang') return (comp == 'semut') ? 'MENANG' : "KALAH";
    if (p == 'semut') return (comp == 'gajah') ? 'MENANG' : "KALAH";
}

// Animation putar computer
function putar() {
    const imgCom = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if(new Date().getTime() - waktuMulai > 1000) {
            clearInterval();
            return;
        }

        imgCom.setAttribute('src', 'latihan2/' + gambar[i++] + '.png');
        if (i == gambar.length) {
            i = 0;
        }
    }, 100);
}


const pilihan = document.querySelectorAll('li img');
// akan melakukan perulangan dan menerima 1 pilihan
pilihan.forEach(function(i) {
    // menerima gambar i yang di klik saja
    i.addEventListener('click', function() {
        const pilihanComp = getComputer();
        const pilihanP = i.className;
        const hasil = getRules(pilihanComp, pilihanP);

        // putar
        putar();

        setTimeout(function() {
            const imgComp = document.querySelector('.img-komputer');
            imgComp.setAttribute('src', 'latihan2/' + pilihanComp + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;

            const score = document.querySelector('.score');
            let nilai = 0;

            if (hasil == "MENANG") {
                nilai++;
            }
            score.innerHTML = "Score: " + nilai++;
        }, 1000);

    })
});


// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//     const pilihanComp = getComputer();
//     const pilihanP = pGajah.className;
//     const hasil = getRules(pilihanComp, pilihanP);

//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', 'latihan2/' + pilihanComp + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
//     const pilihanComp = getComputer();
//     const pilihanP = pOrang.className;
//     const hasil = getRules(pilihanComp, pilihanP);

//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', 'latihan2/' + pilihanComp + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
//     const pilihanComp = getComputer();
//     const pilihanP = pSemut.className;
//     const hasil = getRules(pilihanComp, pilihanP);

//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', 'latihan2/' + pilihanComp + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });