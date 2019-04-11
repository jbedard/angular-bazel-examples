// MUST STAY IN SYNC with Bazel version of main.prod.ts

// @angular/bazel doesn't automatically:
//   - switch to the AoT .ngfactory
//   - adjust the platformBrowser[Dynamic]
//   so we manually import it

import { platformBrowser } from "@angular/platform-browser";

import { AppModuleNgFactory } from "./app/app.module.ngfactory";

platformBrowser()
  .bootstrapModuleFactory(AppModuleNgFactory)
  // tslint:disable-next-line: no-console
  .catch(err => console.log(err));
