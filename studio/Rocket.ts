import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket implements Payload {
    name: string;
    massKg: number;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        let sum: number = 0;
        for(let i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    }

    currentMassKg(): number {
        return this.sumMass(this.astronauts)+this.sumMass(this.astronauts)
    }

    canAdd(item: Payload): boolean {
        if((this.currentMassKg() + item.massKg) <= this.totalCapacityKg)
            return true;
    }

    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo) == true) {
            this.cargoItems.push(cargo);
        }
        return true;
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut) == true) {
            this.astronauts.push(astronaut)
        }
        return true;
    }

}








// getDaysToLocation(kilometersAway: number): number {
//     let milesAway: number = kilometersAway * this.milesPerKilometer;
//     let hours: number = milesAway / this.speedMph;
//     return hours / 24;