import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";

/**
 * Accordion item definition.
 */
interface AccordionItem {
    /** Icon. */
    icon?: string;

    /** Accordion sub items. */
    subItems?: AccordionItem[];

    /** Text. */
    title: string;
}

/**
 * About us component.
 */
@Component({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatExpansionModule,
        MatListModule,
    ],
    selector: "app-about-us",
    styleUrl: "./app.about-us.component.scss",
    templateUrl: "./app.about-us.component.html"
})
export class AppAboutUsComponent {
    /** Accordion items. */
    public accordionItems: AccordionItem[] = [
        {
            icon: "fa-car",
            subItems: [
                { title: "Pneuservis pre vozidlá do 3,5 tony" },
                {
                    title: "Sezónne prezúvanie (pre <b class='orange'>4 a viac</b> vozidiel)",
                },
            ],
            title: "Komu pomáhame?",
        },
        {
            icon: "fa-clock",
            subItems: [
                { title: "Výjazdy k defektom <b class='orange'>NONSTOP</b>" },
                { title: "Za každého počasia" },
                { title: "Ktorúkoľvek hodinu" },
            ],
            title: "Kedy vyrazíme?",
        },
        {
            icon: "fa-wrench",
            subItems: [
                { title: "Bezpečne označíme vozidlo" },
                { title: "Opravíme defekt" },
                { title: "Prípadne zabezpečíme odťah" },
                { title: "Všetky služby nájdeš nižšie" },
            ],
            title: "Ako pomôžeme?",
        },
        {
            icon: "fa-euro",
            subItems: [
                { title: "Ceny riešime individuálne" },
                { title: "Po telefonickej dohode" },
            ],
            title: "A čo ceny?",
        },
    ];
}
