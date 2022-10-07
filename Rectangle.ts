import { Shape } from "./Shape";
import { Resizeable } from "./resize";
export class Rectangle extends Shape implements Resizeable {
    width: number;
    height: number;

    constructor(width: number,
        height: number,
        name: string) {
        super(name);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }
    resize(percent: number): void {
        this.width *= 1 + percent/100;
        this.height *= 1 + percent/100
    }
    toString(): string {
        return `${super.show()}. I have width = ${this.width}, height = ${this.height} with Area = ${this.calculateArea()}`;
    }
}
