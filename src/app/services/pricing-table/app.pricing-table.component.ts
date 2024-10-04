import { Component } from "@angular/core";
import { MatTableModule } from "@angular/material/table";

/**
 * Table data definition.
 */
interface TableData {
    /** Row color. */
    color: string;
    /** Row value. */
    price: string;
    /** Row title. */
    service: string;
}

/**
 * Pricing table component.
 */
@Component({
    imports: [
        MatTableModule,
    ],
    selector: "app-pricing-table",
    standalone: true,
    styleUrl: "./app.pricing-table.component.scss",
    templateUrl: "./app.pricing-table.component.html",
})
export class AppPricingTableComponent {
    /** Table data. */
    public tableData: TableData[] = [
        {
            color: undefined,
            price: "1,50€",
            service: "Príplatok za TPMS Ventil (1ks)",
        },
        {
            color: undefined,
            price: "1,50€",
            service: "Príplatok za RUN-FLAT pneumatiku (1ks)",
        },
        {
            color: undefined,
            price: "10,00€",
            service: "Oprava defektu knôtom",
        },
        {
            color: undefined,
            price: "15,00€",
            service: "Oprava defektu hríbikom",
        },
        {
            color: undefined,
            price: "10,00€",
            service: "Utesnenie disku",
        },
        {
            color: undefined,
            price: "od 40,00 €",
            service: "Oprava defektu výjazd (24/7) 8:00 - 20:00",
        },
        {
            color: undefined,
            price: "od 60,00 €",
            service: "Oprava defektu výjazd (24/7) 20:00 - 8:00",
        },
        {
            color: undefined,
            price: "1,50€ / 2,50€",
            service: "Ventil gumený/ Ventil VAN",
        },
        {
            color: undefined,
            price: "10,00€",
            service: "Programovanie TPMS snímačov +montáž (1ks)",
        },
        {
            color: undefined,
            price: "25,00€",
            service: "Čistenie klimatizácie vozidla",
        },
        {
            color: undefined,
            price: "35,00€",
            service: "Uskladnenie sady pneumatík",
        },
        {
            color: undefined,
            price: "0,50€",
            service: "Vrecia na pneumatiky (1ks)",
        },
        {
            color: undefined,
            price: "45,00€",
            service:
                "Minimálna objednávka na kompletné prezutie / výmena sezónnych pneumatík (osobné, Van, SUV) len k jednému vozidlu",
        },
        {
            color: undefined,
            price: "15,00€",
            service:
                "Vynáška pneumatík / kolies (4ks) z pivnice alebo iných skladových priestorov",
        },
    ];
}
