//Komentar
// AKtivitas 1: Setup Berkan & Integrasi Javascript (scripr.js)
// Mnecetak sebuah nilai = console.log("Teks")

console.log("=== Kalkulator Nilai Rapor Kelas ===");
console.log("Javascript Terhubung!");

// Variabel "const" = konstanta sifatnya tetap dan tidak bisa diubah

const NAMA_KAMPUS = "UPI PWK"; // Nama kampus x tidak bisa diubah, karena constanta
const NAMA_KULIAH = ["Promnet", "Jarkom", "SCM",]; // sama tidak bisa diubah juga

// VARIABEL Let = "let" digunakan untuk nilai yang bisa diubah sewaktu waktu
let NAMA_GURU = "Pak Zamzam"; // Nama guru berubah untuk guru yang mengajar
let KELAS_PRAKTIKUM = "Lab B"; // Nama kelas yang dipakai juga bisa berubah, misal sekarang di lab a nanti kita lab b

// cetak nilai nilai dari variabel let dan variabel const
// Operator + itu digunakan untuk menggabungkan teks string

console.log("Kampus : " + NAMA_KAMPUS); // Tampilkan nama Kampus
console.log("Kelas : " + KELAS_PRAKTIKUM); // Tampilkan nama Kelas
console.log("Guru : " + NAMA_GURU); // Tampilkan nama Guru

// Demo perbedaan variabel const dan let

NAMA_GURU = "Pak Deni"; // NAMA_GURU variabel let'
console.log("Guru Baru (Setelah diubah dengan variabel let)" + NAMA_GURU)

// Menggunakan Variabel Const
// NAMA_KAMPUS = "UPI BUMSIL"; // Akan terjadi EROR Uncaught Typeerror

// Input Interaktif
// alert ini berfungsi sebagai penampil dialog pop up
alert("Selamat Datang di Aplikasi Kalkulator Niali Rapor!");

// Menampilkan variabel nama mahasiswa 

let NAMA_MAHASISWA = prompt("Halo! Masukan Nama Kamu Untuk Memulai: ");

// Condinational Statement IF, ELSE, ELSE IF
// Tulis "if (NAMA_MAHASISWA)"
// Maksudnya adalah " Jika NAMA_MAHASISWA ada isinya" jalankan blok data
// "else" : jika tidak sesuai atau tidak memenuhi atau kosong jalankan blok bawah

if (NAMA_MAHASISWA) {
    // Jika user mengisi nama: 
    alert("Halo, " + NAMA_MAHASISWA + "! Yuk kita hitung nilai rapor kamu.");
    console.log("Siswa yang aktif : " + NAMA_MAHASISWA);
}else {
    // jika user tidak mengisi nama (kosong) maka ia dipanggil anonim
    alert("Kamu tidak memasukan nama. Kamu dipanggil Mahasiswa Anonim")
    NAMA_MAHASISWA = "Siswa Anonim";
    console.log("Siswa yang aktif : " + NAMA_MAHASISWA);
}

// Operasi aritmatika - Hitung nilai Rata-rata
// Bisa diubah sewaktu wkatun nilainya
let NILAI_PROMNET = 80;
let NILAI_JARKOM = 75;
let NILAI_SCM = 90;

// jumlahkan nilai
let JUMLAH_NILAI = NILAI_PROMNET + NILAI_JARKOM + NILAI_SCM;

// bagi hasil penjumlahan dibagi 3
let NILAI_RATARATA = JUMLAH_NILAI / 3;

// Cetak nilai nya / output
console.log("NILAI " + NAMA_MAHASISWA + "TETEWWW");
console.log("PROMNET : " + NILAI_PROMNET);
console.log("JARKOM : " + NILAI_JARKOM);
console.log("SCM : " + NILAI_SCM);

// Tampilkan jumlah Nilai
console.log("Jumlah nilai kamu adalah : " + JUMLAH_NILAI)

// Tampilkan nilai rata rata 
console.log("Nilai Rata-Rata Adalah: " + NILAI_RATARATA); 

// Percabangan IF ELSE untuk menentukan predikat = A, B, C, D
// Buat variabel kosong --> string kosong
let PREDIKAT = ""; // Akan diisi grade 
let KETERANGAN = ""; //diisi keterangan A -> Sangat Baik

// Percabangan / Conditional Statement ELSE IF
if (NILAI_RATARATA >= 90) {
    // Kondisi yang pertama kali di cek : apakah nilainya memenuhi atau tidak
    PREDIKAT = "A"; 
    KETERANGAN = "SANGAT BAIK GOOD JOB!";
} else if (NILAI_RATARATA >= 80) {
    // kondisi kedua jika kondisi pertama itu tidak terpenuhi
    PREDIKAT = "B";
    KETERANGAN = "BAIK";
} else if (NILAI_RATARATA >= 70) {
    // Jika kondisi pertama dan kedua tidak terpenuhi
    PREDIKAT = "C";
    KETERANGAN = "CUKUP BAIK";
} else{
    // Jika semua kondisi diatas tidak terpenuhi (rata rata nya <70)
    PREDIKAT = "D";
    KETERANGAN = "PERLU PERBAIKAN SEMNGAT!!";
}

// Tampilkan nilai percabangan IF ELSE IF
console.log("Predikat : " + PREDIKAT + "-" + KETERANGAN);

// Tampilkan popup
alert(
    "HASIL RAPOR " + NAMA_MAHASISWA + ":\n" + 
    "RATA-RATA " + NILAI_RATARATA + ":\n" +
    "PREDIKAT " + PREDIKAT + "(" + KETERANGAN + ")"
);

// FUNCTION Cara membungkus sekumpulan kode menjadi satu blok
// Yang bisa di panggil kapan saja dengan nama FUNCTION nya
// Struktur nya : function Penjumlahan (nilai1 + nilai2 + nilai3)

function HITUNG_RATARATA(n1, n2, n3) {
    let JUMLAH = n1 + n2 + n3;
    return JUMLAH / 3
}

function TENTUKAN_PREDIKAT(RATA) {
    // Setiap baris "if" untuk menentukan predikat 
    if(RATA >= 90) return "A - SANGAT BAIK";
    if(RATA >= 80) return "B - BAIK";
    if(RATA >= 70) return "C - CUKUP BAIK";
    return "D - PERLU PERBAIKAN";
}

// Buat varuiabel dulu
// Rata rata
let MAHASISWA_A = HITUNG_RATARATA(88, 92, 85);
// Predikat
let MAHASISWA_A_PREDIKAT = TENTUKAN_PREDIKAT(MAHASISWA_A);

// CETAK Tampilkan Konsole

console.log("Rata - Rata Nilai MAHASISWA A ADALAH " + MAHASISWA_A);
console.log("Predikatnya adalah " + MAHASISWA_A_PREDIKAT);

// ARRAY dan LOOPING RAJA TERAKHIR

// KOTAK PENYIMPANAN YANG DI ISI NILAI
// DITULIS DENGAN [...]
// NOTES INDEX OFF ARRAY DIMULAI DARI 0

// Contoh array menampilkan daftar mahasiswa
let DAFTAR_SISWA = [
    "Qeisya Dwi Hermawan", // posisinya -0 index ke 0
    "Asna Nur Halimah", // posisinya ke -1 index ke 1
    "Futriani", //posisinya ke -2 index ke 2
    "Tahta Pramesti", //posisinya ke -3 index ke 3
    "Zahra Mutia" //posisinya ke -4 index ke 4
    // Total panjang array 5
];

// Cetak ARRAY
console.log("=== Daftar Mahasiswa Kelas A " + KELAS_PRAKTIKUM + "===");

// Looping for

for (let i = 0; i < DAFTAR_MAHASISWA.length; i++) {
    console.log((i + 1) + "." + DAFTAR_MAHASISWA[i]);
}

// .length
console.log("TOTAL MAHASISWA : " + DAFTAR_MAHASISWA.length + "Orang");
console.log("Praktikum Selesai War is Over");