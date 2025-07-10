/// <reference types="jest" />

import { Rect } from "./Rect";

describe("Rect", function() {
  it("should have the bottom value", function() {
    const r = new Rect(10, 10, 100, 100);

    expect(r.bottom()).toBe(110);
  });

  it("should have the right value", function() {
    const r = new Rect(10, 10, 50, 100);

    expect(r.right()).toBe(60);
  });

  describe("#normalize", function() {
    it("should normalize negative widths", function() {
      const r = new Rect(50, 50, -10, 5);

      r.normalize();
      expect(r.left).toBe(40);
      expect(r.width).toBe(10);
    });

    it("should normalize negative heights", function() {
      const r = new Rect(50, 50, 10, -20);

      r.normalize();
      expect(r.top).toBe(30);
      expect(r.height).toBe(20);
    });
  });

  describe("#doesInclude", function() {
    let rect: Rect;

    beforeEach(function() {
      rect = new Rect(10, 10, 100, 100);
    });

    it("should include a rect inside itself", function() {
      const r2 = new Rect(20, 20, 80, 80);

      expect(rect.doesInclude(r2)).toBe(true);
    });

    it("should not include a rect outside itself", function() {
      const r2 = new Rect(20, 20, 100, 80);

      expect(rect.doesInclude(r2)).toBe(false);
    });
  });

  describe("#doesIntersect", function() {
    let rect: Rect;

    beforeEach(function() {
      rect = new Rect(10, 10, 100, 100);
    });

    it("should intersect with an intersecting rect", function() {
      const r2 = new Rect(100, 100, 100, 100);
      const r3 = new Rect(0, 0, 15, 15);

      expect(rect.doesIntersectWith(r2)).toBe(true);
      expect(rect.doesIntersectWith(r3)).toBe(true);
    });

    it("should not intersect with a seperate rect", function() {
      const r2 = new Rect(111, 111, 100, 100);
      const r3 = new Rect(0, 0, 5, 5);

      expect(rect.doesIntersectWith(r2)).toBe(false);
      expect(rect.doesIntersectWith(r3)).toBe(false);
    });
  });

  describe("#area", function() {
    it("should calculate area correctly for positive dimensions", function() {
      const r = new Rect(0, 0, 10, 20);
      expect(r.area()).toBe(200);
    });

    it("should calculate area correctly for negative dimensions", function() {
      const r = new Rect(0, 0, -10, -20);
      expect(r.area()).toBe(200); // Area is always positive
    });

    it("should return 0 for zero dimensions", function() {
      const r1 = new Rect(0, 0, 0, 10);
      const r2 = new Rect(0, 0, 10, 0);
      const r3 = new Rect(0, 0, 0, 0);

      expect(r1.area()).toBe(0);
      expect(r2.area()).toBe(0);
      expect(r3.area()).toBe(0);
    });
  });
});
