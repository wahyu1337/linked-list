class lingkaran {
    // constructor
    constructor(radius) {
        this.radius = radius;
    }

    // function luas
    luas() {
        return Math.PI * this.radius ** 2;
    }
}

const l = new lingkaran(7);

console.log(l.luas());