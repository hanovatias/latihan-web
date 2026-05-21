// 1. cek dulu: ada data lama di localstorage gak? kalau gak ada, mulai dari
let jumlahklik = parseInt(localStorage.getItem('jumlahklikHano')) || 0;
let koin = parseInt(localStorage.getItem('koinHano')) || 0;
let autoClickLevel = parseInt(localStorage.getItem('autoClickLevel')) || 0;

// 2. pas pertama buka web , langsung tampil angka terakhir 
tampilkanhasil();

function pencetTombol() {
    jumlahklik +=1; // +1
    koin +=1;
    // 3. simpan angka terbaru ke memori browser
    localStorage.setItem('jumlahklikHano',jumlahklik);
    localStorage.setItem('koinhano',koin);
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
function kurangtombol()
{
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
let autoClickInterval;
let isAutoClicking = false;

function toggleAutoClicker() {
    if (isAutoClicking) {
        clearInterval(autoClickInterval);
        isAutoClicking = false;
        console.log("Auto Clicker OFF");
    } else {
        autoClickInterval = setInterval(pencetTombol, 100); // 100ms = 10 klik/detik
        isAutoClicking = true;
        console.log("Auto Clicker ON");
    }
}
function beliAutoClick() {
    let harga = 50 + (autoClickLevel * 50); // Harga naik tiap beli
    
    if (koin >= harga) {
        koin -= harga;
        autoClickLevel += 1;
        
        // Simpan ke localStorage
        localStorage.setItem('koinHano', koin);
        localStorage.setItem('autoClickLevel', autoClickLevel);
        
        // Update Auto Clicker
        if (isAutoClicking) {
            clearInterval(autoClickInterval);
            autoClickInterval = setInterval(pencetTomboltombol, 100 / autoClickLevel);
        }
        
        updateUI();
    } else {
        alert("Koin nggak cukup bro! Butuh " + harga + " koin");
    }
}

function updateUI() {
    document.getElementById('hasil').innerHTML = 
        'Klik: ' + jumlahklik + ' | Koin: ' + koin + ' | Auto Lv: ' + autoClickLevel;
    document.getElementById('level').innerHTML = "Level: " + getLevel();
}

function getLevel() {
    if (jumlahklik >= 100) return "Dewa Clicker";
    else if (jumlahklik >= 50) return "Sultan Klik";
    else if (jumlahklik >= 20) return "Jagoan Klik";
    else if (jumlahklik >= 10) return "Amatir";
    else return "Pemula";
}