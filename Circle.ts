import {Shape} from "./Shape";
import { Resizeable } from "./resize";
export class Circle extends Shape implements Resizeable{
    radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter(): number {
        return Math.PI * this.radius * 2;
    }
    resize(percent): void {
        this.radius *= 1 + percent/100;
    }
    toString(): string {
        return `${super.show()} and I have a radius = ${this.radius} with Area = ${this.calculateArea()}`;
    }
}
