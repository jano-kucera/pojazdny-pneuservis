import { ViewportScroller } from "@angular/common";
import { Component, inject } from "@angular/core"
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { RouterLink } from "@angular/router";

interface NavigationItem {
    icon: string;
    location: string;
    title: string;
}

@Component({
    imports: [
        MatButtonModule,
        MatSidenavModule,
        MatTabsModule,
        RouterLink,
    ],
    selector: "app-navigation",
    standalone: true,
    styleUrl: "./app.navigation.scss",
    templateUrl: "./app.navigation.html"
})
export class AppNavigationComponent {

    viewportScroller = inject(ViewportScroller);

    items: NavigationItem[] = [
        { icon: undefined, location: "domov", title: "Domov" },
        { icon: undefined, location: "o-nas", title: "O Nás" },
        { icon: undefined, location: "sluzby", title: "Služby" },
        { icon: undefined, location: "kontakt", title: "Kontakt" },
        { icon: "fa-facebook", location: "https://www.facebook.com/profile.php?id=100059595616564", title: "" },
        { icon: "fa-instagram", location: "https://www.instagram.com/pojazdnypneuservis/", title: "" }
    ];

    goTo(link: NavigationItem) {
        if (link.icon) {
            window.location.href = link.location;
        } else {
            this.viewportScroller.scrollToAnchor(link.location);
        }
    }
}
