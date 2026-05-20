// 1. cek dulu: ada data lama di localstorage gak? kalau gak ada, mulai dari
let jumlahklik = parseInt(localStorage.getItem('jumlahklikHano')) ||0;

// 2. pas pertama buka web , langsung tampil angka terakhir 
tampilkanhasil();

function pencetTombol() {
    jumlahklik++; // +1
    // 3. simpan angka terbaru ke memori browser
    localStorage.setItem('jumlahklikHano',jumlahklik);
    tampilkanhasil();
}

function tampilkanhasil() {
    document.getElementById('hasil').innerHTML = 
        'ANJIR BISA BRO 🔥 udah diklik ' + jumlahklik + ' x';

    // KODE BARU DI BAWAH INI - TINGGAL TEMPEL
    let level = "Pemula";
    if (jumlahklik >= 100) level = "Dewa Clicker";
    else if (jumlahklik >= 50) level = "Sultan Klik";
    else if (jumlahklik >= 20) level = "Jagoan Klik";
    else if (jumlahklik >= 10) level = "Amatir";
    
    document.getElementById('level').innerHTML = "Level: " + level;
}


function kurangtombol() {
    // biar tidak minus minimal 0
    if (jumlahklik > 0) {
    jumlahklik--;
    localStorage.setItem('jumlahklikHano',jumlahklik);
    tampilkanhasil();
}
}

function resettombol_baru() {
    jumlahklik = 0
    localStorage.setItem('jumlahklikHano',jumlahklik);
    tampilkanhasil();
}