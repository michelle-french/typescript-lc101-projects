"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.astronauts) + this.sumMass(this.astronauts);
    };
    Rocket.prototype.canAdd = function (item) {
        if ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg)
            return true;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) == true) {
            this.cargoItems.push(cargo);
        }
        return true;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) == true) {
            this.astronauts.push(astronaut);
        }
        return true;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
// getDaysToLocation(kilometersAway: number): number {
//     let milesAway: number = kilometersAway * this.milesPerKilometer;
//     let hours: number = milesAway / this.speedMph;
//     return hours / 24;
