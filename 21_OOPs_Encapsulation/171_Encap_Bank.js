class ICICI {
    #balance;
    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }

    getBalance() {
        return this.#balance;
    }
    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not allowed")
        }
    }
}

let madhuri = new ICICI("Madhuri", 1000);
console.log(madhuri.getBalance());
madhuri.setBalance(10000000, false);
console.log(madhuri.getBalance());

let madhuri_father = new ICICI("Madhuri", 2000);
console.log(madhuri_father.getBalance());
madhuri_father.setBalance(300000, true);
console.log(madhuri_father.getBalance());