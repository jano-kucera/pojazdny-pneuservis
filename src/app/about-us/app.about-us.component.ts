import { ViewportScroller } from "@angular/common";
import { Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";

/**
 * About us component.
 */
@Component({
    imports: [MatButtonModule, MatExpansionModule, MatListModule],
    selector: "app-about-us",
    standalone: true,
    styleUrl: "./app.about-us.component.scss",
    templateUrl: "./app.about-us.component.html",
})
export class AppAboutUsComponent {
    /** Viewport scroller. */
    public viewportScroller: ViewportScroller = inject(ViewportScroller);
}
