var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function test1(target) {
    target.prototype.skills = 'criket';
    console.log(target);
}
var player1 = (function () {
    function player1() {
    }
    return player1;
}());
player1 = __decorate([
    test1
], player1);
var virat = new player1();
console.log(virat.skills);
function test2(target) {
    console.log(target);
}
var player2 = (function () {
    function player2() {
    }
    return player2;
}());
player2 = __decorate([
    test2
], player2);
