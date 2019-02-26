import {OverlayModule} from '@angular/cdk/overlay';
import {NgModule} from '@angular/core';

import {Overlayer} from './overlayer';

@NgModule({
    imports: [OverlayModule],

    providers: [Overlayer]
})
export class BannerWrapperModule {}
