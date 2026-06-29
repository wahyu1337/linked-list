class Kendaraan {
    constructor(jenis, kecepatan) {
        this.jenis = jenis;
        this.kecepatan = kecepatan;
    }

    bergerak() {
        console.log(`${this.jenis} bergerak!`);
    }
}

class Mobil extends Kendaraan {
    constructor(merek, kecepatan) {
        super("Mobil", kecepatan);
        this.merek = merek;
    }

    info() {
        console.log(`Jenis Kendaraan ${this.jenis} bermerek ${this.merek} bergeran dengan kecepatan ${this.kecepatan}`);
    }
}

const bmw = new Mobil("BMW", "240km/h");
console.log(bmw);
bmw.info();