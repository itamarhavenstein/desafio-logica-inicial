class hero {
    constructor(name, age, kind) {
        this.name = name;
        this.age = age;
        this.kind = kind;
    }

    attack() {
        return `o ${this.kind} atacou ${kindAtack(this.kind)}!`;
    }
}

const kindHero = {
    Warrior: "Guerreiro",
    Wizard: "Mago",
    Monk: "Monge",
    Ninja: "Ninja"
}

function kindAtack(kind) {
    switch (kind) {
        case kindHero.Warrior:
            return "usando espada";
        case kindHero.Wizard:
            return "usando magia";
        case kindHero.Monk:
            return "usando artes marciais";
        case kindHero.Ninja:
            return "usando shuriken";
    }
}


let hero1 = new hero("Roberto", 26, kindHero.Warrior);
let hero2 = new hero("Norberto", 35, kindHero.Wizard);
let hero3 = new hero("Henrique", 65, kindHero.Monk);
let hero4 = new hero("Eusebio", 40, kindHero.Ninja);

console.log(hero1.attack());
console.log(hero2.attack());
console.log(hero3.attack());
console.log(hero4.attack());