import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {BannerWrapperModule} from '@npmscope/ui';


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BannerWrapperModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
