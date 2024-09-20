import { Component } from "@angular/core"
import { MatTab, MatTabGroup } from "@angular/material/tabs";
import { AppSwipeDirective, SWIPE_DIRECTION } from "./app.swipe.directive";

interface ServiceItem {
    description: string;
    image: string;
    title: string;
}

@Component({
    imports: [MatTab, MatTabGroup, AppSwipeDirective],
    selector: "app-services",
    standalone: true,
    styleUrl: "./app.services.scss",
    templateUrl: "./app.services.html"
})
export class AppServicesComponent {
    selectedIndex: number = 0;

    swipe(dir: SWIPE_DIRECTION) {
        if (dir === SWIPE_DIRECTION.LEFT) {
            this.selectedIndex = (this.selectedIndex - 1) % this.items.length;
        } else {
            this.selectedIndex = (this.selectedIndex + 1) % this.items.length;
        }
    }

    items: ServiceItem[] = [
        {
            description: "Oprava knôtom alebo hríbikom, oprava ventilu.",
            image: "sluzby/defekt.webp",
            title: "Oprava defektu 24/7"
        },
        {
            description: "Vyváženie disku s pneumatikou.",
            image: "sluzby/vyvazovanie.webp",
            title: "Vyvažovanie kolies"
        },
        {
            description: "S montážou/demontážou pneumatiky.",
            image: "sluzby/prezutie.webp",
            title: "Prezutie kolies"
        },
        {
            description: "Cenník nových pneumatík na požiadanie.",
            image: "sluzby/dodanie.webp",
            title: "Dodanie pneumatík"
        },
        {
            description: "Uskladnenie sezónnych pneumatík v našom sklade.",
            image: "sluzby/uskladnenie.webp",
            title: "Uskladnenie pneumatík"
        },
        {
            description: "Dezinfekcia klimatizácie a interiéru.",
            image: "sluzby/klimatizacia.webp",
            title: "Dezinfekcia klimatizácie"
        }
    ];
}
