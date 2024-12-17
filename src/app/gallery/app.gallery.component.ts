import type { OnInit } from "@angular/core";
import { Component, Input } from "@angular/core";
import { GalleryModule, ImageItem } from "ng-gallery";
import { GallerizeDirective } from "ng-gallery/lightbox";

/**
 * App gallery component.
 */
@Component({
    imports: [GalleryModule, GallerizeDirective],
    selector: "app-gallery",
    styleUrl: "./app.gallery.component.scss",
    templateUrl: "./app.gallery.component.html"
})
export class AppGalleryComponent implements OnInit {
    /** Gallery instances counter. */
    public static galleryCounter: number = 1;

    /** Folder name with the images. */
    @Input({ required: true })
    public folderName: string;

    /** Count of the images in the folder (expects naming '1.webp','2.webp', etc.). */
    @Input({ required: true })
    public imagesCount: number;

    /** Signal of gallery image items. */
    public galleryItems: ImageItem[] = [];

    /** ID of this gallery. */
    public galleryId: string = `gallery-${AppGalleryComponent.galleryCounter++}`;

    /**
     * Component's onInit lifecycle hook.
     */
    public ngOnInit(): void {
        for (let i = 1; i <= this.imagesCount; i++) {
            this.galleryItems.push(
                new ImageItem({
                    src: `${this.folderName}/${i}.webp`,
                    thumb: `${this.folderName}/thumbnails/${i}.webp`,
                    type: "image",
                }),
            );
        }
    }
}
