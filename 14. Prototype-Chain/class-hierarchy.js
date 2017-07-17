function name() {
    class Figure {

        constructor() {
            if (new.target === Figure) {
                throw new Error
            }
        }
        get area() {}
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return this.radius * this.radius * Math.PI;
        }

        toString() {
            return `Circle - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `Rectangle - width: ${this.width}, height: ${this.height}`
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}