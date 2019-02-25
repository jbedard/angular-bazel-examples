import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

// An implementation of the MD banner (https://material.io/design/components/banners.html)
// Layout/sizing spec (with-icon version): https://material.io/design/components/banners.html#specs
// Colour spec: https://material.io/design/components/banners.html#theming

// Should be replaced with @angular/material version when available (https://github.com/angular/material2/issues/11452)

@Component({
    selector: 'foo-banner',
    styleUrls: [ './banner.css' ],
    templateUrl: './banner.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent {
    @Input()
    public readonly icon?: string;

    @Input()
    public readonly dismissText?: string;
    @Input()
    public readonly confirmText?: string;

    @Output()
    public readonly dismiss = new EventEmitter<void>();
    @Output()
    public readonly confirm = new EventEmitter<void>();

    // https://material.io/design/components/banners.html#theming (color section)
    @HostBinding('class')
    public readonly hostClass = 'mat-elevation-z1';
}
