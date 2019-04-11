import {Injectable} from '@angular/core';
import {Overlay} from '@angular/cdk/overlay';

@Injectable({providedIn: 'root'})
export class Overlayer {
    constructor(public overlay: Overlay) {}
}