import { inject, Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AppThemeService } from "../app.theme.service";
import { AppPricesDialogComponent } from "./app.prices-dialog.component";

/**
 * Prices dialog service.
 */
@Injectable({ providedIn: "root" })
export class AppPricesDialogService {
    /** Angular material dialog service. */
    private dialog: MatDialog = inject(MatDialog);

    /** App's theme service. */
    private appThemeService: AppThemeService = inject(AppThemeService);

    /**
     * Opens prices dialog.
     */
    public openPricesDialog(): void {
        this.dialog.open(AppPricesDialogComponent, {
            enterAnimationDuration: 200,
            maxWidth: "1000px",
            panelClass: this.appThemeService.lightTheme
                ? "light-theme"
                : "dark-theme",
        });
    }
}
