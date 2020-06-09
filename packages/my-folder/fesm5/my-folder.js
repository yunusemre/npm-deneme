import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

var MyFolderService = /** @class */ (function () {
    function MyFolderService() {
    }
    MyFolderService.ɵprov = ɵɵdefineInjectable({ factory: function MyFolderService_Factory() { return new MyFolderService(); }, token: MyFolderService, providedIn: "root" });
    MyFolderService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], MyFolderService);
    return MyFolderService;
}());

var MyFolderComponent = /** @class */ (function () {
    function MyFolderComponent() {
    }
    MyFolderComponent.prototype.ngOnInit = function () {
    };
    MyFolderComponent = __decorate([
        Component({
            selector: 'lib-my-folder',
            template: "\n    <p>\n      my-folder works!\n    </p>\n  "
        })
    ], MyFolderComponent);
    return MyFolderComponent;
}());

var MyFolderModule = /** @class */ (function () {
    function MyFolderModule() {
    }
    MyFolderModule = __decorate([
        NgModule({
            declarations: [MyFolderComponent],
            imports: [],
            exports: [MyFolderComponent]
        })
    ], MyFolderModule);
    return MyFolderModule;
}());

/*
 * Public API Surface of my-folder
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyFolderComponent, MyFolderModule, MyFolderService };
//# sourceMappingURL=my-folder.js.map
