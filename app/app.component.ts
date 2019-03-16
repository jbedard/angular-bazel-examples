import {ChangeDetectionStrategy, Component} from '@angular/core';

import {BehaviorSubject} from 'rxjs';

import {Overlayer} from '@npmscope/ui/injected';

@Component({
    selector: 'ng-pkging-root',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div (click)="doIt()">I'm an app!</div>
    `,
})
export class AppComponent {
    public isAuthenticated$ = new BehaviorSubject<boolean>(false);

    constructor(private overlay: Overlayer) {}

    public doIt() {
        this.overlay.show();
    }

    public login(username: string, password: string): void {
        this.isAuthenticated$.next(true);
    }

    public logout(): void {
        this.isAuthenticated$.next(false);
    }
}
