var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};System.register(['angular2/angular2'], function(exports_1) {
    var angular2_1;
    var Person;
    return {
        setters:[
            function (_angular2_1) {
                angular2_1 = _angular2_1;
            }],
        execute: function() {
            Person = (function () {
                function Person(firstName, lastName) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                }
                Person.prototype.getFullName = function () {
                    return this.firstName + ' ' + this.lastName;
                };
                Person = __decorate([
                    angular2_1.Component({}),
                    angular2_1.View({}), 
                    __metadata('design:paramtypes', [String, String])
                ], Person);
                return Person;
            })();
        }
    }
});
