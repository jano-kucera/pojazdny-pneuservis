import type { ApplicationConfig } from "@angular/core";
import { provideZoneChangeDetection } from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter, withInMemoryScrolling } from "@angular/router";
import type { GalleryConfig } from "ng-gallery";
import { GALLERY_CONFIG } from "ng-gallery";
import { routes } from "./app.routes";

/**
 * Application configuration.
 */
export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(
            routes,
            withInMemoryScrolling({ anchorScrolling: "enabled" }),
        ),
        provideAnimationsAsync(),
        {
            provide: GALLERY_CONFIG,
            useValue: {
                autoHeight: true,
                autoPlay: false,
                counter: true,
                dots: true,
                imageSize: "cover",
                itemAutosize: true,
            } satisfies GalleryConfig,
        },
    ],
};
