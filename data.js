const nama = "Muhammad Ainul Bashiroh";
let usia = 20;

let biodata = document.getElementById('biodata');
console.log(biodata);

function generateBiodata() {
    let generasi;
    
    console.log(`Nama saya adalah ${nama} dan usia saya ${usia} tahun`)
    if(usia >= 16 && usia < 20) {
        generasi = "Generasi Remaja"
        // console.log('anda Remaja')
        // ini adalah kondisi pertama
    } else if(usia >= 20) {
        generasi ="Generasi Dewasa"
        // console.log('anda Dewasa')
        // ini jika kondisi tidak terpenuhi
    } else {
        generasi = "Generasi Anak-anak"
        // console.log('anda Anak-anak')
    }
    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();