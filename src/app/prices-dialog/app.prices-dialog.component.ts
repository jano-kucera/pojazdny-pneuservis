import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatSliderModule } from "@angular/material/slider";
import { CarType } from "./app.car-type.enum";
import { AppPricePipe } from "./app.price.pipe";

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
        MatSliderModule,
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
}
