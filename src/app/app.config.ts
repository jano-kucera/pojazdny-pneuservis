import type { ApplicationConfig } from "@angular/core";
import { provideZoneChangeDetection } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter, withInMemoryScrolling } from "@angular/router";
import type { GalleryConfig } from "ng-gallery";
import { GALLERY_CONFIG } from "ng-gallery";
import { routes } from "./app.routes";

/**
 * Application configuration.
 */
export const appConfig: ApplicationConfig = {
    providers: [
        // eslint-disable-next-line @typescript-eslint/no-deprecated
        provideAnimations(), // used by ng-gallery
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes, withInMemoryScrolling({ anchorScrolling: "enabled" })),
        {
            provide: GALLERY_CONFIG,
            useValue: {
                autoHeight: false,
                autoplay: false,
                bullets: true,
                counter: true,
                imageSize: "cover",
                itemAutosize: true,
            } satisfies GalleryConfig,
        },
    ],
};
