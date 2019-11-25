import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BannerModule } from "@npmscope/ui/banner";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BannerModule,
    BrowserModule
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
