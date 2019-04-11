// MUST STAY IN SYNC with Bazel version of main.dev.ts

// @angular/bazel doesn't automatically:
//   - switch to the AoT .ngfactory
//   - adjust the platformBrowser[Dynamic]
//   so we manually import it

import { enableProdMode } from "@angular/core";
import { platformBrowser } from "@angular/platform-browser";

import { AppModuleNgFactory } from "./app/app.module.ngfactory";

enableProdMode();

platformBrowser()
  .bootstrapModuleFactory(AppModuleNgFactory)
  // tslint:disable-next-line: no-console
  .catch(err => console.log(err));
