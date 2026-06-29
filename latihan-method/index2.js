class RekeningBank {
    constructor(saldo) {
        this.saldo = saldo;
    }

    // method setor
    setor(jumlah){
        this.saldo += jumlah;
    }

    // method tarik
    tarik(jumlah){
        if (jumlah > this.saldo) {
            console.log("Saldo tidak cukup");
        } else {
            this.saldo -= jumlah;
        }
    }

    // cek total saldo
    cekSaldo() {
        console.log(`Total Saldo Anda: ${this.saldo}`);
    }
}

const wahyu = new RekeningBank(2000);
wahyu.cekSaldo();
wahyu.setor(1000);
wahyu.cekSaldo();
wahyu.setor(1000);
wahyu.tarik(1500);
wahyu.tarik(2700);
wahyu.cekSaldo();