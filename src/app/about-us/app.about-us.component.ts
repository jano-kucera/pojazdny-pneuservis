import { ViewportScroller } from "@angular/common";
import { Component, inject } from "@angular/core";
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
    standalone: true,
    styleUrl: "./app.about-us.component.scss",
    templateUrl: "./app.about-us.component.html",
})
export class AppAboutUsComponent {
    /** Viewport scroller. */
    public viewportScroller: ViewportScroller = inject(ViewportScroller);

    /** Accordion items. */
    public accordionItems: AccordionItem[] = [
        {
            icon: "fa-car",
            subItems: [
                { title: "Pneuservis pre vozidlá do 3,5 tony" },
                { title: "Sezónne prezúvanie (pre 4 a viac vozidiel)" },
            ],
            title: "Komu pomáhame?",
        },
        {
            icon: "fa-clock",
            subItems: [
                { title: "Výjazdy k defektom NONSTOP" },
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
