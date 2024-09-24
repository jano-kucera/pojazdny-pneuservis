import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { GALLERY_CONFIG, GalleryConfig } from 'ng-gallery';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled' })),
        provideAnimationsAsync(),
        {
            provide: GALLERY_CONFIG,
            useValue: {
                autoHeight: true,
                dots: true,
                itemAutosize: true,
                autoPlay: false,
                counter: true,
                imageSize: "cover",
            } satisfies GalleryConfig
        }
    ]
};
