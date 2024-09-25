import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppThemeService {
    lightTheme = window.matchMedia?.('(prefers-color-scheme: light)')?.matches;
}

