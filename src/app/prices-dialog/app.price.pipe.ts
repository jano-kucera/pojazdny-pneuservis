import type { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";
import { CarType } from "./app.car-type.enum";

/**
 * Pipe for price calculation.
 */
@Pipe({
    name: "appPrice",
    standalone: true,
})
export class AppPricePipe implements PipeTransform {
    /**
     * Calculates the price based on settings.
     * @param carType Car type.
     * @param complete Flag for complete change of tires.
     * @param diskSize Disk size.
     * @returns Calculated price.
     */
    public transform(
        carType: CarType,
        complete: boolean,
        diskSize: number,
    ): number {
        diskSize = Math.min(Math.max(diskSize, 14), 22);

        switch (carType) {
            case CarType.Basic:
                switch (diskSize) {
                    case 14:
                        return complete ? 34 : 25;
                    case 15:
                        return complete ? 35 : 25;
                    case 16:
                        return complete ? 37 : 27;
                    case 17:
                        return complete ? 39 : 27;
                    case 18:
                        return complete ? 41 : 28;
                    case 19:
                        return complete ? 45 : 30;
                    case 20:
                        return complete ? 51 : 32;
                    case 21:
                        return complete ? 56 : 35;
                    case 22:
                        return complete ? 63 : 40;
                    default:
                        return NaN;
                }

            case CarType.Offroad:
                return diskSize <= 15
                    ? complete
                        ? 64
                        : 44
                    : complete
                      ? 70
                      : 46;

            case CarType.Suv:
                switch (diskSize) {
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                        return complete ? 42 : 30;
                    case 18:
                    case 19:
                        return complete ? 50 : 35;
                    case 20:
                        return complete ? 58 : 40;
                    case 21:
                        return complete ? 65 : 45;
                    case 22:
                        return complete ? 72 : 45;
                    default:
                        return NaN;
                }

            case CarType.Van:
                return diskSize <= 15
                    ? complete
                        ? 45
                        : 31
                    : complete
                      ? 48
                      : 33;
        }
    }
}
