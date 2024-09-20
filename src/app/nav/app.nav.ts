import { Component } from "@angular/core"

interface NavItem {
    icon: string;
    location: string;
    title: string;
}

@Component({
    selector: "app-nav",
    standalone: true,
    styleUrl: "./app.nav.scss",
    templateUrl: "./app.nav.html"
})
export class AppNavComponent {
    items: NavItem[] = [
        { icon: undefined, location: "#domov", title: "Domov" },
        { icon: undefined, location: "#o-nas", title: "O Nás" },
        { icon: undefined, location: "#sluzby", title: "Služby" },
        { icon: undefined, location: "#kontakt", title: "Kontakt" },
        { icon: undefined, location: "#galeria", title: "Galéria" },
        { icon: "fa-facebook", location: "https://www.facebook.com/profile.php?id=100059595616564", title: "" },
        { icon: "fa-instagram", location: "https://www.instagram.com/pojazdnypneuservis/", title: "" }
    ];

    expanded: boolean = false;
}
