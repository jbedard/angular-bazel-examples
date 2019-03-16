import {OverlayModule} from '@angular/cdk/overlay';
import {NgModule} from '@angular/core';

import {BannerModule} from '@npmscope/ui/banner';
import {Overlayer} from './overlayer';

@NgModule({
    imports: [BannerModule, OverlayModule],

    providers: [Overlayer]
})
export class BannerWrapperModule {}
