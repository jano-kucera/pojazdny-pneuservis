import { Injectable } from "@angular/core";

/**
 * Application theme service.
 */
@Injectable({ providedIn: "root" })
export class AppThemeService {
    /** Current theme - defaults to user's preference. */
    public lightTheme: boolean = window.matchMedia?.(
        "(prefers-color-scheme: light)",
    )?.matches;
}
