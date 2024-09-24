import { Component } from "@angular/core"
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

    items: NavigationItem[] = [
        { icon: undefined, location: "#domov", title: "Domov" },
        { icon: undefined, location: "#o-nas", title: "O Nás" },
        { icon: undefined, location: "#sluzby", title: "Služby" },
        { icon: undefined, location: "#kontakt", title: "Kontakt" },
        { icon: undefined, location: "#galeria", title: "Galéria" },
        { icon: "fa-facebook", location: "https://www.facebook.com/profile.php?id=100059595616564", title: "" },
        { icon: "fa-instagram", location: "https://www.instagram.com/pojazdnypneuservis/", title: "" }
    ];

    goTo(link: NavigationItem) {
        if (link.location.startsWith("#")) {
            document.querySelector(link.location)?.scrollIntoView({ block: "center" });
        } else {
            window.location.href = link.location;
        }
    }
}
