import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatSliderModule } from "@angular/material/slider";
import { MatTableModule } from "@angular/material/table";
import { CarType } from "./app.car-type.enum";
import { AppPricePipe } from "./app.price.pipe";

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
 * Prices dialog component.
 */
@Component({
    imports: [
        AppPricePipe,
        FormsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatDialogModule,
        MatDividerModule,
        MatIconModule,
        MatSliderModule,
        MatTableModule,
    ],
    selector: "app-prices-dialog",
    standalone: true,
    styleUrl: "./app.prices-dialog.component.scss",
    templateUrl: "./app.prices-dialog.component.html",
})
export class AppPricesDialogComponent {
    /** Dialog ref. */
    public dialogRef: MatDialogRef<typeof AppPricesDialogComponent, undefined> =
        inject(MatDialogRef);

    /** Car types options. */
    public carTypes: CarType[] = [
        CarType.Basic,
        CarType.Suv,
        CarType.Van,
        CarType.Offroad,
    ];

    /** Selected car type. */
    public carType: CarType = CarType.Basic;

    /** Selected disk size. */
    public diskSize: number = 16;

    /** Flag for complete change of tires. */
    public completeChange: boolean = true;

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
