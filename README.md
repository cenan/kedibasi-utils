# @kedibasi/utils

A utility library providing geometry and array manipulation functions.

## Installation

```bash
npm install @kedibasi/utils
```

## Features

### Vector Operations
```typescript
import { Vector } from '@kedibasi/utils';

// Create vectors
const v1 = new Vector(3, 4);
const v2 = Vector.fromPoints({ x: 2, y: 2 }, { x: 3, y: 3 });

// Vector operations
v1.add(v2);
v1.subtract(v2);
v1.multiply(2);
v1.divide(2);
v1.perpendicularVector();
v1.magnitude();
v1.normalise();
v1.changeMagnitude(10);
```

### Rect Operations
```typescript
import { Rect } from '@kedibasi/utils';

// Create rectangles
const rect = new Rect(10, 20, 100, 50); // top, left, width, height
const emptyRect = Rect.emptyRect();

// Rectangle operations
rect.normalize(); // Ensures width and height are positive
rect.clone(); // Creates a copy
rect.contain(0, 0, 800, 600); // Clips rectangle within bounds
rect.shifted(10); // Returns new rect shifted by amount
rect.resizedWithMagnitude(2); // Scale the rectangle

// Rectangle calculations
rect.doesInclude(otherRect); // Check if contains another rect
rect.doesIntersectWith(otherRect); // Check intersection
rect.coordsInRect(x, y); // Check if point is inside
rect.horizontalCenter(); // Get center X coordinate
rect.verticalCenter(); // Get center Y coordinate

// Accessors
rect.bottom(); // top + height
rect.right(); // left + width

// Serialization
const obj = rect.toObject();
const newRect = Rect.fromObject(obj);
```

### Bezier Curves
```typescript
import { Bezier, TPoint } from '@kedibasi/utils';

const curve: Bezier.TCurveDef = {
    start: { x: 0, y: 0 },
    end: { x: 100, y: 100 },
    c1: { x: 0, y: 100 },
    c2: { x: 100, y: 0 }
};

// Get SVG path string
const pathStr = Bezier.pathString(curve);

// Split curve at t=0.5
const [curve1, curve2] = Bezier.cut(curve, 0.5);
```

### Array Operations
```typescript
import { flattenArray, take, inverse } from '@kedibasi/utils';

// Flatten 2D array
flattenArray([[1, 2], [3, 4]]); // [1, 2, 3, 4]

// Take first n elements
take([1, 2, 3, 4, 5], 3); // [1, 2, 3]

// Reverse array without modifying original
inverse([1, 2, 3]); // [3, 2, 1]
```

## Types

### TPoint
```typescript
import { TPoint } from '@kedibasi/utils';

const point: TPoint = {
    x: 10,
    y: 20
};
```

## License

ISC