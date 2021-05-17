export class Cat {
    id : number;
    nom: string;
    race : string;
    age: number;
    vivant: boolean;
    constructor(id : number, nom : string, race : string, age : number, vivant : boolean) {
        this.id = id;
        this.nom = nom;
        this.race = race;
        this.age = age;
        this.vivant = vivant;
    }
}