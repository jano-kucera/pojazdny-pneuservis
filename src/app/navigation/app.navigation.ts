import { Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { RouterLink } from "@angular/router";
import { AppPricesDialogService } from "../prices-dialog/app.prices-dialog.service";
import { AppThemeToggleComponent } from "./theme-toggle/app.theme-toggle.component";

/**
 * Navigation item definition.
 */
interface NavigationItem {
    /** Action. */
    action: () => void;

    /** Icon. */
    icon: string;

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
    /** Prices dialog service. */
    private pricesDialogService: AppPricesDialogService = inject(
        AppPricesDialogService,
    );

    /** Navigation items. */
    public items: NavigationItem[] = [
        {
            action: (): void => {
                this.scrollTo("domov");
            },
            icon: undefined,
            title: "Domov",
        },
        {
            action: (): void => {
                this.scrollTo("o-nas");
            },
            icon: undefined,
            title: "O Nás",
        },
        {
            action: (): void => {
                this.scrollTo("sluzby");
            },
            icon: undefined,
            title: "Služby",
        },
        {
            action: (): void => {
                this.pricesDialogService.openPricesDialog();
            },
            icon: undefined,
            title: "Cenník",
        },
        {
            action: (): void => {
                this.scrollTo("kontakt");
            },
            icon: undefined,
            title: "Kontakt",
        },
        {
            action: (): void => {
                window.location.href =
                    "https://www.facebook.com/profile.php?id=100059595616564";
            },
            icon: "fa-facebook",
            title: "",
        },
        {
            action: (): void => {
                window.location.href =
                    "https://www.instagram.com/pojazdnypneuservis/";
            },
            icon: "fa-instagram",
            title: "",
        },
    ];

    /**
     * Scrolls to the selected link.
     * @param elementId Element id.
     */
    private scrollTo(elementId: string): void {
        document.getElementById(elementId).scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    }
}
