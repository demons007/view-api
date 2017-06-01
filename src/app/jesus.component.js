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
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var jesus_service_1 = require("./jesus.service");
var JesusComponent = (function () {
    function JesusComponent(jService) {
        this.jService = jService;
        this.name = 'Jesus';
        this.dis = false;
        this.term = "angular";
    }
    JesusComponent.prototype.ngOnInit = function () {
        //this.items = this.jService.doAjaxServe();
    };
    JesusComponent.prototype.postJesus = function (evt) {
        this.items = this.jService.doAjaxServe();
        this.dis = true;
    };
    return JesusComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], JesusComponent.prototype, "mappr", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Observable_1.Observable)
], JesusComponent.prototype, "items", void 0);
JesusComponent = __decorate([
    core_1.Component({
        selector: 'jesus',
        providers: [jesus_service_1.JesusService],
        template: "<button (click)=\"postJesus($event)\">Try Post</button>\n  \t\t<table [hidden]=\"!dis\">\n  \t\t\t<tr><td>Id</td><td>Name</td><td>City</td><td>Gender</td></tr>\n  \t\t\t<tr *ngFor=\"let item of items | async\"><td>{{item.Id}}</td><td>{{item.Name}}</td><td>{{item.City}}</td><td>{{item.Gender}}</td></tr>\n  \t\t</table>\n  ",
        styles: ['h1{font-weight: normal;}', 'table{width:100%;border:1px dashed black;border-collapse:separate;border-spacing:5em;}', 'tr{border:1px solid black;}']
    }),
    core_2.Injectable(),
    __metadata("design:paramtypes", [jesus_service_1.JesusService])
], JesusComponent);
exports.JesusComponent = JesusComponent;
//# sourceMappingURL=jesus.component.js.map