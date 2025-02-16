import type { TPoint } from "./TPoint";

export class Vector {
    public static fromPoints(p1: TPoint, p2: TPoint): Vector {
        return new Vector(p2.x - p1.x, p2.y - p1.y);
    }

    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    add(v2: Vector): Vector {
        return new Vector(this.x + v2.x, this.y + v2.y);
    }

    subtract(v2: Vector): Vector {
        return new Vector(this.x - v2.x, this.y - v2.y);
    }

    multiply(n: number): Vector {
        return new Vector(this.x * n, this.y * n);
    }

    divide(n: number): Vector {
        const x = n === 0 ? 0 : this.x / n; // Avoid divide by zero errors..
        const y = n === 0 ? 0 : this.y / n;
        return new Vector(x, y);
    }

    // https://gamedev.stackexchange.com/a/70076
    perpendicularVector(): Vector {
        return new Vector(this.y, -1 * this.x);
    }

    magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalise(): Vector {
        return this.divide(this.magnitude());
    }

    // https://stackoverflow.com/a/41321162
    changeMagnitude(newMagnitude: number): Vector {
        const magnitude = Math.sqrt(this.x * this.x + this.y * this.y);
        this.x = this.x * newMagnitude / magnitude;
        this.y = this.y * newMagnitude / magnitude;
        return this;
    }
}
