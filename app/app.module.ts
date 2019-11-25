import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppComponent } from "./app.component";
import { BannerModule } from "@npmscope/ui/banner";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BannerModule,
    BrowserModule,
    StoreModule,
    StoreDevtoolsModule
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
