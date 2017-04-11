import { NgModule } from "@angular/core";
import { MdSidenavModule, MdButtonModule, MdIconModule } from '@angular/material';

var componentModules: any[] = [
    MdSidenavModule,
    MdButtonModule,
    MdIconModule
];

@NgModule({
    imports: componentModules,
    exports: componentModules,
})
export class AppMaterialModule { }
