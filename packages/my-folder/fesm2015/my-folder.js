import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

let MyFolderService = class MyFolderService {
    constructor() { }
};
MyFolderService.ɵprov = ɵɵdefineInjectable({ factory: function MyFolderService_Factory() { return new MyFolderService(); }, token: MyFolderService, providedIn: "root" });
MyFolderService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MyFolderService);

let MyFolderComponent = class MyFolderComponent {
    constructor() { }
    ngOnInit() {
    }
};
MyFolderComponent = __decorate([
    Component({
        selector: 'lib-my-folder',
        template: `
    <p>
      my-folder works!
    </p>
  `
    })
], MyFolderComponent);

let MyFolderModule = class MyFolderModule {
};
MyFolderModule = __decorate([
    NgModule({
        declarations: [MyFolderComponent],
        imports: [],
        exports: [MyFolderComponent]
    })
], MyFolderModule);

/*
 * Public API Surface of my-folder
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyFolderComponent, MyFolderModule, MyFolderService };
//# sourceMappingURL=my-folder.js.map
