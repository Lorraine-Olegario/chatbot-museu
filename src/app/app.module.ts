import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ArrowRightComponent } from './icons/arrow-right/arrow-right.component';
import { SparkleComponent } from './icons/sparkle/sparkle.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ArrowRightComponent,
        SparkleComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
