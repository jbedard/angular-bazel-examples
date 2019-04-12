import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "ngtest-root",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span>Helllo World!1</span>
    <foo-banner>I'm a banner</foo-banner>
  `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  // TODO
}
