import { Component } from '@angular/core';
import { AppNavComponent } from './nav/app.nav';
import { AppServicesComponent } from './services/app.services';
import { AppContactComponent } from './contact/app.contact';
import { AppGalleryComponent } from './gallery/app.gallery.component';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { GallerizeDirective } from 'ng-gallery/lightbox';

@Component({
    imports: [
        AppContactComponent,
        AppGalleryComponent,
        AppNavComponent,
        AppServicesComponent,
        GalleryModule,
        GallerizeDirective,
    ],
    selector: 'app-root',
    standalone: true,
    styleUrl: './app.component.scss',
    templateUrl: './app.component.html',
})
export class AppComponent {
    imagesLeft: GalleryItem[] = [
        new ImageItem({ src: "/servis/compressed/1.webp", thumb: "/servis/thumbnails/1.webp" }),
        new ImageItem({ src: "/servis/compressed/2.webp", thumb: "/servis/thumbnails/2.webp" }),
        new ImageItem({ src: "/servis/compressed/3.webp", thumb: "/servis/thumbnails/3.webp" }),
        new ImageItem({ src: "/servis/compressed/4.webp", thumb: "/servis/thumbnails/4.webp" }),
        new ImageItem({ src: "/servis/compressed/5.webp", thumb: "/servis/thumbnails/5.webp" }),
        new ImageItem({ src: "/servis/compressed/6.webp", thumb: "/servis/thumbnails/6.webp" }),
        new ImageItem({ src: "/servis/compressed/7.webp", thumb: "/servis/thumbnails/7.webp" }),
        new ImageItem({ src: "/servis/compressed/8.webp", thumb: "/servis/thumbnails/8.webp" }),
        new ImageItem({ src: "/servis/compressed/9.webp", thumb: "/servis/thumbnails/9.webp" }),
        new ImageItem({ src: "/servis/compressed/10.webp", thumb: "/servis/thumbnails/10.webp" }),
        new ImageItem({ src: "/servis/compressed/11.webp", thumb: "/servis/thumbnails/11.webp" }),
        new ImageItem({ src: "/servis/compressed/12.webp", thumb: "/servis/thumbnails/12.webp" }),
    ];


    imagesRight: GalleryItem[] = [
        new ImageItem({ src: "/odtahovka/1.webp" }),
        new ImageItem({ src: "/odtahovka/2.webp" }),
        new ImageItem({ src: "/odtahovka/3.webp" }),
        new ImageItem({ src: "/odtahovka/4.webp" }),
        new ImageItem({ src: "/odtahovka/5.webp" }),
        new ImageItem({ src: "/odtahovka/6.webp" }),
        new ImageItem({ src: "/odtahovka/7.webp" }),
    ];
}
