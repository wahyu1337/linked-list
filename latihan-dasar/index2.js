class Hewan {
    constructor(name, suara) {
        this.name = name;
        this.suara = suara;
    }
}

const kucing = new Hewan("Kucing", "Meong");
const anjing = new Hewan("Anjing", "Woof!");
const harimau = new Hewan("Harimau", "raawrrr!");

console.log(`${kucing.name} bilang ${kucing.suara}`);
console.log(`${anjing.name} bilang ${anjing.suara}`);
console.log(`${harimau.name} bilang ${harimau.suara}`);