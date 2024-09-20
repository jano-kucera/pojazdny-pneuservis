import { Directive, HostListener, EventEmitter, Output } from '@angular/core';

export enum SWIPE_DIRECTION {
    LEFT = 'LEFT',
    RIGHT = 'RIGHT'
};

@Directive({
    selector: '[appSwipe]',
    standalone: true,
    outputs: ['swipe']
})
export class AppSwipeDirective {
    private swipeCoord?: [number, number];
    private swipeTime?: number;

    @Output()
    swipe = new EventEmitter<SWIPE_DIRECTION>();

    @HostListener('touchstart', ['$event'])
    onTouchStart(event: TouchEvent) {
        this.swipeCoord = [event.changedTouches[0].clientX, event.changedTouches[0].clientY];
        this.swipeTime = new Date().getTime();
    }

    @HostListener('touchend', ['$event'])
    onTouchEnd(event: TouchEvent) {
        const coord = [event.changedTouches[0].clientX, event.changedTouches[0].clientY];
        const time = new Date().getTime();

        const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
        const duration = time - this.swipeTime;

        if (duration < 1000 //
            && Math.abs(direction[0]) > 30 // Long enough
            && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) {
            this.swipe.emit(direction[0] > 0 ? SWIPE_DIRECTION.LEFT : SWIPE_DIRECTION.RIGHT);
        }
    }
}
