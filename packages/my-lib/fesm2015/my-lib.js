import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

let MyLibService = class MyLibService {
    constructor() { }
};
MyLibService.ɵprov = ɵɵdefineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(); }, token: MyLibService, providedIn: "root" });
MyLibService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MyLibService);

let MyLibComponent = class MyLibComponent {
    constructor() { }
    ngOnInit() {
    }
};
MyLibComponent = __decorate([
    Component({
        selector: 'lib-my-lib',
        template: `
    <p>
      Hello world
    </p>
  `
    })
], MyLibComponent);

let MyLibModule = class MyLibModule {
};
MyLibModule = __decorate([
    NgModule({
        declarations: [MyLibComponent],
        imports: [],
        exports: [MyLibComponent]
    })
], MyLibModule);

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibComponent, MyLibModule, MyLibService };
//# sourceMappingURL=my-lib.js.map
