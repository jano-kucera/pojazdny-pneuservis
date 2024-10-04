import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { AppSwipeDirective, SWIPE_DIRECTION } from "./app.swipe.directive";
import { AppPricingTableComponent } from "./pricing-table/app.pricing-table.component";

/**
 * Service item definition.
 */
interface ServiceItem {
    /** Description. */
    description: string;

    /** Image. */
    image: string;

    /** Title. */
    title: string;
}

/**
 * Services component.
 */
@Component({
    imports: [
        AppPricingTableComponent,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatExpansionModule,
        MatProgressBarModule,
        MatTabsModule,
        AppSwipeDirective,
    ],
    selector: "app-services",
    standalone: true,
    styleUrl: "./app.services.scss",
    templateUrl: "./app.services.html",
})
export class AppServicesComponent {
    /** Selected tab index. */
    public selectedIndex: number = 0;

    /** Service items. */
    public items: ServiceItem[] = [
        {
            description: "Oprava knôtom alebo hríbikom, oprava ventilu.",
            image: "sluzby/defekt.webp",
            title: "Oprava defektu 24/7",
        },
        {
            description: "Vyváženie disku s pneumatikou.",
            image: "sluzby/vyvazovanie.webp",
            title: "Vyvažovanie kolies",
        },
        {
            description: "S montážou/demontážou pneumatiky.",
            image: "sluzby/prezutie.webp",
            title: "Prezutie kolies",
        },
        {
            description:
                "Odťah a autotransport pojazdných aj nepojazdných vozidiel.",
            image: "sluzby/odtah.webp",
            title: "Odťah vozidla",
        },
        {
            description: "Cenník nových pneumatík na požiadanie.",
            image: "sluzby/dodanie.webp",
            title: "Dodanie pneumatík",
        },
        {
            description: "Uskladnenie sezónnych pneumatík v našom sklade.",
            image: "sluzby/uskladnenie.webp",
            title: "Uskladnenie pneumatík",
        },
        {
            description: "Dezinfekcia klimatizácie a interiéru.",
            image: "sluzby/klimatizacia.webp",
            title: "Dezinfekcia klimatizácie",
        },
    ];

    /**
     * Swipe handler, changes selected index on swipe.
     * @param dir Swipe direction.
     */
    public swipe(dir: SWIPE_DIRECTION): void {
        if (dir === SWIPE_DIRECTION.LEFT) {
            this.selectedIndex = (this.selectedIndex - 1) % this.items.length;
        } else {
            this.selectedIndex = (this.selectedIndex + 1) % this.items.length;
        }
    }
}
