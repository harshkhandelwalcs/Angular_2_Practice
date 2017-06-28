"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_test_service_1 = require("./http-test.service");
var FromComponent = (function () {
    function FromComponent(myService) {
        this.myService = myService;
        this.data = [];
    }
    FromComponent.prototype.onSubmit = function (value) {
        this.data.push(value);
        this.myService.postJson(value).subscribe(function (res) {
            console.log("success", res);
        }, function (err) {
            console.log(err);
        });
    };
    FromComponent.prototype.updateData = function (value) {
        console.log(value);
    };
    return FromComponent;
}());
FromComponent = __decorate([
    core_1.Component({
        selector: 'my-form',
        templateUrl: "app/myform.component.html",
        providers: [http_test_service_1.HTTPTestService],
    }),
    __metadata("design:paramtypes", [http_test_service_1.HTTPTestService])
], FromComponent);
exports.FromComponent = FromComponent;
//# sourceMappingURL=form.component.js.map