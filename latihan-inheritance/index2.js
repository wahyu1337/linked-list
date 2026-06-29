class Bentuk {
    constructor(nama) {
        this.nama = nama;
    }

    hitungLuas() {
        return 0;
    }

    tampilkan() {
        console.log(`${this.nama} - Luas: ${this.hitungLuas()}`)
    }
}


// class persegi
class Persegi extends Bentuk{
    constructor(sisi) {
        super("persegi");
        this.sisi = sisi;
    }

    hitungLuas() {
        return this.sisi ** 2;
    }
}

// class segitiga
class Segitiga extends Bentuk {
    constructor(alas, tinggi) {
        super("Segitiga");
        this.alas = alas;
        this.tinggi = tinggi;
    }

    hitungLuas() {
        return (this.alas * this.tinggi) / 2;
    }
}

// testing persegi
const persegi1 = new Persegi(4);
console.log(persegi1);
persegi1.tampilkan();

// testing segitiga
const segitiga1 = new Segitiga(4, 6);
console.log(segitiga1);
segitiga1.tampilkan();