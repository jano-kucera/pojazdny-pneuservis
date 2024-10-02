import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { RouterLink } from "@angular/router";
import { AppThemeToggleComponent } from "./theme-toggle/app.theme-toggle.component";

/**
 * Navigation item definition.
 */
interface NavigationItem {
    /** Icon. */
    icon: string;

    /** Location.*/
    location: string;

    /** Title. */
    title: string;
}

/**
 * Navigation component.
 */
@Component({
    imports: [
        AppThemeToggleComponent,
        MatButtonModule,
        MatSidenavModule,
        MatTabsModule,
        RouterLink,
    ],
    selector: "app-navigation",
    standalone: true,
    styleUrl: "./app.navigation.scss",
    templateUrl: "./app.navigation.html",
})
export class AppNavigationComponent {
    /** Navigation items. */
    public items: NavigationItem[] = [
        {
            icon: undefined,
            location: "domov",
            title: "Domov",
        },
        {
            icon: undefined,
            location: "o-nas",
            title: "O Nás",
        },
        {
            icon: undefined,
            location: "sluzby",
            title: "Služby",
        },
        {
            icon: undefined,
            location: "kontakt",
            title: "Kontakt",
        },
        {
            icon: "fa-facebook",
            location: "https://www.facebook.com/profile.php?id=100059595616564",
            title: "",
        },
        {
            icon: "fa-instagram",
            location: "https://www.instagram.com/pojazdnypneuservis/",
            title: "",
        },
    ];

    /**
     * Handler for the navigation links clicks.
     * @param link Navigation link.
     */
    public goTo(link: NavigationItem): void {
        if (link.icon) {
            window.location.href = link.location;
        } else {
            document.getElementById(link.location).scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        }
    }
}
