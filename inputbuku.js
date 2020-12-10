lightBoxClose = function() {
    document.querySelector(".lightbox").classList.add("closed");
}

function daftar()
{
    let namaPengarang = document.querySelector("#namaPengarang");
    let judulBuku = document.querySelector("#judulBuku");
    let idBuku = document.querySelector("#idBuku");
    let tanggalInput = document.querySelector("#tanggalInput");
    let status = document.querySelector("#status");

    if(namaPengarang.value == "")
        {
            alert("Masukkan nama pengarang");
            namaPengarang.focus();
        }
    else if(judulBuku.value == "")
        {
            alert("Masukkan judul buku");
            judulBuku.focus();
        }
    else if(idBuku.value == "")
        {
            alert("Masukkan ID Buku");
            idBuku.focus();
        }
    else if(tanggalInput.value == "")
        {
            alert("Masukkan tanggal input buku");
            tanggalInput.focus();
        }
    else if(status.value == "")
        {
            alert("Masukkan status buku");
            status.focus();
        }
    else{
            alert("Data berhasil disimpan")
    }

    let nama = document.forms["form"]["namaPengarang"].value;
    let judul = document.forms["form"]["judulBuku"].value;
    let id = document.forms["form"]["idBuku"].value;
    let tanggal = document.forms["form"]["tanggalInput"].value;
    let stat = document.forms["form"]["status"].value;

    let tabel = document.getElementById("daftarBuku");
    let row = tabel.insertRow(-1);
    let kolom1 = row.insertCell(0);
    let kolom2 = row.insertCell(1);
    let kolom3 = row.insertCell(2);
    let kolom4 = row.insertCell(3);
    let kolom5 = row.insertCell(4);

    kolom1.innerHTML = nama;
    kolom2.innerHTML = judul;
    kolom3.innerHTML = id;
    kolom4.innerHTML = tanggal;
    kolom5.innerHTML = stat;
}