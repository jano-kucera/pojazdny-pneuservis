import { Directive, EventEmitter, HostListener, Output } from "@angular/core";

/**
 * Swipe direction.
 */
export enum SWIPE_DIRECTION {
    LEFT = "LEFT",
    RIGHT = "RIGHT",
}

/**
 * Swipe directive.
 */
@Directive({
    selector: "[appSwipe]",
    standalone: true,
})
export class AppSwipeDirective {
    /** Swipe start coord store. */
    private swipeCoord?: [number, number];

    /** Swipe start time store. */
    private swipeTime?: number;

    /** Swipe emitter. */
    @Output()
    public swipe: EventEmitter<SWIPE_DIRECTION> =
        new EventEmitter<SWIPE_DIRECTION>();

    /**
     * On touch start.
     * @param event Touch event.
     */
    @HostListener("touchstart", ["$event"])
    public onTouchStart(event: TouchEvent): void {
        this.swipeCoord = [
            event.changedTouches[0].clientX,
            event.changedTouches[0].clientY,
        ];
        this.swipeTime = new Date().getTime();
    }

    /**
     * On touch end.
     * @param event Touch event.
     */
    @HostListener("touchend", ["$event"])
    public onTouchEnd(event: TouchEvent): void {
        const coord = [
            event.changedTouches[0].clientX,
            event.changedTouches[0].clientY,
        ];
        const time = new Date().getTime();

        const direction = [
            coord[0] - this.swipeCoord[0],
            coord[1] - this.swipeCoord[1],
        ];
        const duration = time - this.swipeTime;

        if (
            duration < 1000 //
            && Math.abs(direction[0]) > 30 // Long enough
            && Math.abs(direction[0]) > Math.abs(direction[1] * 3)
        ) {
            this.swipe.emit(
                direction[0] > 0 ? SWIPE_DIRECTION.LEFT : SWIPE_DIRECTION.RIGHT,
            );
        }
    }
}
