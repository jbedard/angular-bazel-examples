import {Injectable} from '@angular/core';
import {Overlay} from '@angular/cdk/overlay';

import {BannerComponent} from '@npmscope/ui/banner';

@Injectable({providedIn: 'root'})
export class Overlayer {
    constructor(private overlay: Overlay) {}

    public show() {
        this.overlay.create().attach(BannerComponent);
    }
}