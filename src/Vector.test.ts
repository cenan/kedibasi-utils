/// <reference types="jest" />

import { Vector } from "./Vector";

describe("Vector", () => {
    test("should create a vector from 2 points", () => {
        const v = Vector.fromPoints({ x: 2, y: 2 }, { x: 3, y: 3 });
        expect(v.x).toBe(1);
        expect(v.y).toBe(1);
    });

    test("should change magnitude of a vector", () => {
        const v1 = new Vector(3, 4);
        const v2 = v1.changeMagnitude(50);
        expect(v2.x).toBe(30);
        expect(v2.y).toBe(40);
    });

    test("should create a perpendicular vector", () => {
        const v1 = new Vector(3, 4);
        const v2 = v1.perpendicularVector();
        expect(v2.x).toBe(4);
        expect(v2.y).toBe(-3);
    });
});
