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
var employee_service_1 = require("./employee.service");
var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent(_employeeservice) {
        this._employeeservice = _employeeservice;
        this.employees = [];
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        this.employees = this._employeeservice.getEmployee();
    };
    return EmployeeDetailComponent;
}());
EmployeeDetailComponent = __decorate([
    core_1.Component({
        selector: 'employee-details',
        template: "<h2>Employees Details</h2>\n  <ul>\n    <li *ngFor=\"let employee of employees\">\n    {{employee.id}}    ,   {{employee.name}}    ,   {{employee.gender}}\n    </li>\n    </ul>"
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeDetailComponent);
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=employee_details.component.js.map