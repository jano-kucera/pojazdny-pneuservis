import { Component } from '@angular/core';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { GallerizeDirective } from 'ng-gallery/lightbox';

@Component({
    imports: [GalleryModule, GallerizeDirective],
    selector: 'app-gallery',
    standalone: true,
    styleUrl: "./app.gallery.component.scss",
    templateUrl: './app.gallery.component.html'
})

export class AppGalleryComponent {

    images: GalleryItem[] = [
        new ImageItem({ src: "/galeria-odtahovka/1.webp" }),
        new ImageItem({ src: "/galeria-odtahovka/2.webp" }),
        new ImageItem({ src: "/galeria-odtahovka/3.webp" }),
        new ImageItem({ src: "/galeria-odtahovka/4.webp" }),
        new ImageItem({ src: "/galeria-odtahovka/5.webp" }),
        new ImageItem({ src: "/galeria-odtahovka/6.webp" }),
        new ImageItem({ src: "/galeria-odtahovka/7.webp" }),
    ];
}
