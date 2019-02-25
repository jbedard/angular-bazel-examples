import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {BannerComponent} from './banner';

@NgModule({
    declarations: [BannerComponent],

    exports: [BannerComponent],

    imports: [CommonModule, MatButtonModule, MatIconModule]
})
export class BannerModule {}
