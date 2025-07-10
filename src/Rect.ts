export class Rect {
    static emptyRect(): Rect {
        return new Rect(0, 0, 0, 0);
    }

    public top: number;
    public left: number;
    public width: number;
    public height: number;

    constructor(top: number, left: number, width: number, height: number) {
        this.top = top;
        this.left = left;
        this.width = width;
        this.height = height;
    }

    clone(): Rect {
        return new Rect(this.top, this.left, this.width, this.height);
    }

    normalize(): Rect {
        if (this.width < 0) {
            this.left += this.width;
            this.width *= -1;
        }
        if (this.height < 0) {
            this.top += this.height;
            this.height *= -1;
        }
        return this;
    }

    doesInclude(rect: Rect): boolean {
        return (this.left < rect.left) &&
            (this.top < rect.top) &&
            (this.bottom() > rect.bottom()) &&
            (this.right() > rect.right());
    }

    coordsInRect(x: number, y: number): boolean {
        return (x >= this.left) && (x <= this.right()) && (y >= this.top) && (y <= this.bottom());
    }

    doesIntersectWith(rect: Rect): boolean {
        return this.coordsInRect(rect.left, rect.top) ||
            this.coordsInRect(rect.left, rect.bottom()) ||
            this.coordsInRect(rect.right(), rect.top) ||
            this.coordsInRect(rect.right(), rect.bottom());
    }

    /**
     * Clips the rectangle within the given bounds.
     *
     * @param left - Minimum left value
     * @param top - Minimum top value
     * @param right - Maximum right value
     * @param bottom - Maximum right value
     */
    contain(left: number, top: number, right: number, bottom: number): void {
        if (this.left < left) {
            this.width += this.left - left;
            this.left = left;
        }
        if (this.top < top) {
            this.height += this.top - top;
            this.top = top;
        }
        if (this.right() > right) {
            this.width = right - this.left;
        }
        if (this.bottom() > bottom) {
            this.height = bottom - this.top;
        }
    }

    /**
     * Returns a new `Rect` that is clipped within the given bounds.
     *
     * @param left - Minimum left value
     * @param top - Minimum top value
     * @param right - Maximum right value
     * @param bottom - Maximum right value
     */
    containedRect(left: number, top: number, right: number, bottom: number): Rect {
        const rect = this.clone();
        rect.contain(left, top, right, bottom);
        return rect;
    }

    /**
     * Compares itself with the given `rect`.
     *
     * @param rect - The rectangle to be compared
     */
    isDifferent(rect: Rect): boolean {
        return (
            (this.left !== rect.left) ||
            (this.top !== rect.top) ||
            (this.width !== rect.width) ||
            (this.height !== rect.height)
        );
    }

    bottom(): number {
        return this.top + this.height;
    }

    right(): number {
        return this.left + this.width;
    }

    /**
     * Returns a new rect by adding *amount* to x and y.
     *
     * @param amount - Shift amount
     */
    shifted(amount: number): Rect {
        return new Rect(this.top + amount, this.left + amount, this.width, this.height);
    }

    horizontalCenter(): number {
        return Math.floor(Math.abs(this.left + this.width / 2));
    }

    verticalCenter(): number {
        return Math.floor(Math.abs(this.top + this.height / 2));
    }

    resizedWithMagnitude(magnitude: number): Rect {
        return new Rect(
            this.top * magnitude,
            this.left * magnitude,
            this.width * magnitude,
            this.height * magnitude
        );
    }

    toString(): string {
        const mf = Math.floor;
        return `[x:${mf(this.top)} y:${mf(this.left)} w:${mf(this.width)} h:${mf(this.height)}]`;
    }

    static fromObject(obj: { top: number, left: number, width: number, height: number }): Rect {
        return new Rect(obj.top, obj.left, obj.width, obj.height);
    }

    toObject(): { top: number, left: number, width: number, height: number } {
        return {
            top: this.top,
            left: this.left,
            width: this.width,
            height: this.height
        };
    }

    /**
     * Calculates the area of the rectangle (width × height)
     */
    area(): number {
        return this.width * this.height;
    }
}
