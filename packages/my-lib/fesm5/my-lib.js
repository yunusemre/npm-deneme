import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

var MyLibService = /** @class */ (function () {
    function MyLibService() {
    }
    MyLibService.ɵprov = ɵɵdefineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(); }, token: MyLibService, providedIn: "root" });
    MyLibService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], MyLibService);
    return MyLibService;
}());

var MyLibComponent = /** @class */ (function () {
    function MyLibComponent() {
    }
    MyLibComponent.prototype.ngOnInit = function () {
    };
    MyLibComponent = __decorate([
        Component({
            selector: 'lib-my-lib',
            template: "\n    <p>\n      Hello world\n    </p>\n  "
        })
    ], MyLibComponent);
    return MyLibComponent;
}());

var MyLibModule = /** @class */ (function () {
    function MyLibModule() {
    }
    MyLibModule = __decorate([
        NgModule({
            declarations: [MyLibComponent],
            imports: [],
            exports: [MyLibComponent]
        })
    ], MyLibModule);
    return MyLibModule;
}());

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibComponent, MyLibModule, MyLibService };
//# sourceMappingURL=my-lib.js.map
