// MUST STAY IN SYNC with Bazel version of main.prod.ts

import { platformBrowser } from "@angular/platform-browser";

import { AppModule } from "./app/app.module";

platformBrowser()
  .bootstrapModule(AppModule)
  // tslint:disable-next-line: no-console
  .catch(err => console.log(err));
