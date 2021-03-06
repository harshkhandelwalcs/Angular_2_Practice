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
var HTTPTestComponent = (function () {
    function HTTPTestComponent(_httpService) {
        this._httpService = _httpService;
        this.data = {
            "id": " ",
            "name": " ",
            "desc": " ",
            "price": " "
        };
        // public name;
        // public desc;
        // public price;
        this.info = [];
    }
    HTTPTestComponent.prototype.ngOnInit = function () {
        this.getProductListing();
    };
    HTTPTestComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this._httpService.postJson(value).subscribe(function (data) {
            _this.getProductListing();
        }, function (error) { return alert(error); }, function () { return console.log("Submit Data"); });
    };
    HTTPTestComponent.prototype.getProductListing = function () {
        var _this = this;
        this._httpService.getData()
            .subscribe(function (data) {
            _this.info = data;
        }, function (error) { return alert(error); }, function () { return console.log("GeTCurrent List"); });
    };
    HTTPTestComponent.prototype.onEdit = function (value) {
        console.log(value);
        this.data.id = value._id;
        this.data.name = value.name;
        this.data.desc = value.desc;
        this.data.price = value.price;
    };
    HTTPTestComponent.prototype.onUpdate = function (value) {
        var _this = this;
        this._httpService.updateData(this.data).subscribe(function (data) {
            _this.getProductListing();
        }, function (err) {
            console.log(err);
        });
    };
    HTTPTestComponent.prototype.deleteData = function (item_id) {
        var _this = this;
        this._httpService.deleteInfo(item_id)
            .subscribe(function (data) {
            _this.getProductListing();
        }, function (error) { return alert(error); }, function () { return console.log("Delete Data"); });
    };
    return HTTPTestComponent;
}());
HTTPTestComponent = __decorate([
    core_1.Component({
        selector: 'http-Test',
        templateUrl: "app/http-test.component.html",
        providers: [http_test_service_1.HTTPTestService],
    }),
    __metadata("design:paramtypes", [http_test_service_1.HTTPTestService])
], HTTPTestComponent);
exports.HTTPTestComponent = HTTPTestComponent;
//# sourceMappingURL=http-test.component.js.map