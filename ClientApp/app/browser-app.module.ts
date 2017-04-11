import { NgModule, Injector, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from "./app-material.module";
import { AppModule } from './app.module';
import { AppComponent } from './components/app/app.component';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule.withServerTransition({
            appId: 'my-app-id'
        }),
        AppMaterialModule,
        AppModule
    ],
    providers: [
        {
            provide: 'isBrowser',
            useFactory: (injector) => {
                let platformId = injector.get(PLATFORM_ID);
                return isPlatformBrowser(platformId);
            },
            deps: [ Injector ]
        }
    ]
})
export class AppBrowserModule {
}
