function faktorial(n) {
    let hasil = 1;

    for (let i = 2; i <= n; i++) {
        hasil *= i;
    }

    return hasil;
}

function buatTabel() {
    let angka = Number(document.getElementById("angka").value);
    const hasil = document.getElementById("hasil");
    let input = document.getElementById("angka").value;

    if (input === "") {
        alert("Masukkan angka terlebih dahulu");
        return;
    }

    let batas = Number(document.getElementById("batas").value);
if (batas < 1 || !Number.isInteger(batas)) {
        alert("Masukkan batas perkalian minimal 1");
        return;
    
    }

    let teks = "";

    for (let i = 1; i <= batas; i++) {
        teks += angka + " x " + i + " = " + (angka * i) + "<br>";
    }

    hasil.innerHTML = teks;
}
