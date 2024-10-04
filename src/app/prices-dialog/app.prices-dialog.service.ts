import { inject, Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AppPricesDialogComponent } from "./app.prices-dialog.component";

/**
 * Prices dialog service.
 */
@Injectable({ providedIn: "root" })
export class AppPricesDialogService {
    /** Angular material dialog service. */
    private dialog: MatDialog = inject(MatDialog);

    /**
     * Opens prices dialog.
     */
    public openPricesDialog(): void {
        this.dialog.open(AppPricesDialogComponent, {
            enterAnimationDuration: 200,
            maxWidth: "1000px",
        });
    }
}
