import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule, isBrowser } from 'angular2-universal';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

var imports: any[] = [
  UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
  RouterModule.forRoot([
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'counter', component: CounterComponent },
    { path: 'fetch-data', component: FetchDataComponent },
    { path: '**', redirectTo: 'home' }
  ])
];

if (isBrowser) {
  imports = [...imports, MaterialModule]
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    NavMenuComponent,
    CounterComponent,
    FetchDataComponent,
    HomeComponent
  ],
  imports: imports,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
}
