import { TPoint } from "./TPoint";

export namespace Bezier {
    export type TCurveDef = {
        start: TPoint;
        end: TPoint;
        c1: TPoint;
        c2: TPoint;
    };

    export type TCurveDefSpread = {
        startx: number;
        starty: number;
        endx: number;
        endy: number;
        c1x: number;
        c1y: number;
        c2x: number;
        c2y: number;
    };

    export function pathString(curve: TCurveDef): string {
        return `M${curve.start.x} ${curve.start.y} ` +
            `C ${curve.c1.x} ${curve.c1.y},` +
            `  ${curve.c2.x} ${curve.c2.y},` +
            `  ${curve.end.x} ${curve.end.y}`;
    }

    export function pathStringSpread(curve: TCurveDefSpread): string {
        return `M${curve.startx} ${curve.starty} ` +
            `C ${curve.c1x} ${curve.c1y},` +
            `  ${curve.c2x} ${curve.c2y},` +
            `  ${curve.endx} ${curve.endy}`;
    }

    /**
     * Divide bezier curve into two halves using De Casteljau's Algorithm
     *
     * @see {@link https://stackoverflow.com/questions/18655135/divide-bezier-curve-into-two-equal-halves StackOverflow Question}
     *
     * @param curve Source bezier curve
     * @param t Where to cut the curve, between 0 and 1
     * @returns Two curves
     */
    export function cut(curve: TCurveDef, t: number): [TCurveDef, TCurveDef] {
        const _lerp = (a: TPoint, b: TPoint, _t: number): TPoint => {
            return { x: a.x * (1 - _t) + b.x * _t, y: a.y * (1 - _t) + b.y * _t };
        };
        const p4 = _lerp(curve.start, curve.c1, t);
        const p5 = _lerp(curve.c1, curve.c2, t);
        const p6 = _lerp(curve.c2, curve.end, t);
        const p7 = _lerp(p4, p5, t);
        const p8 = _lerp(p5, p6, t);
        const p9 = _lerp(p7, p8, t);
        return [
            {
                start: curve.start,
                c1: p4,
                c2: p7,
                end: p9
            },
            {
                start: p9,
                c1: p8,
                c2: p6,
                end: curve.end
            }
        ];
    }
}
