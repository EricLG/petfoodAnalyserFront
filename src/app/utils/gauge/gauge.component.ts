import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core'

@Component({
    selector: 'app-gauge',
    templateUrl: './gauge.component.html',
    styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements AfterViewInit {

    @Input() cursor: number|undefined
    @Input() label = ''
    @Input() animal = ''

    @ViewChild('canvasElementRef', {static: false})
    canvasElementRef: ElementRef<HTMLCanvasElement> | null = null;

    // Gauge size and padding
    gaugeW = 100
    gaugeH = 15
    gaugePadding = 5

    ngAfterViewInit(): void {
        if (this.canvasElementRef) {
            const ctx = this.canvasElementRef.nativeElement.getContext('2d')

            if (ctx) {
                if (this.cursor) {
                    const unitRect = this.gaugeW/5

                    this.drawGauge(ctx, unitRect)
                    this.drawCursor(ctx, this.cursor, unitRect)
                }
            }
        }
    }

    // TODO : ugly... to fix with css... one day
    getCursor(): string {
        if (this.cursor) {
            if (this.cursor < 10) {
                return `\xa0\xa0\xa0\xa0${this.cursor}`
            } else if (this.cursor < 100) {
                return `\xa0\xa0${this.cursor}`
            } else {
                return `${this.cursor}`
            }
        } else {
            return ''
        }
    }

    /**
     * Gauge is divided equally divided by 5, to shape 3 rectangles : red : 2 unitRect, orange1 unitRect, green: 2 unitRect
     * @param ctx CanvasContext
     * @param unitRect base width of unit rectangle
     */
    drawGauge(ctx: CanvasRenderingContext2D, unitRect: number): void {
        const RED = '#ed1c24'
        const ORANGE = '#f7941e'
        const GREEN = '#00a14b'
        const radius = 7

        ctx.fillStyle = RED
        this.drawFirstRoundRect(ctx, this.gaugePadding, this.gaugePadding, 2*unitRect, this.gaugeH, radius)

        ctx.fillStyle = ORANGE
        this.drawMiddleRect(ctx, this.gaugePadding + 2*unitRect, this.gaugePadding, unitRect, this.gaugeH)

        ctx.fillStyle = GREEN
        this.drawLastRoundRect(ctx, this.gaugePadding + 3*unitRect, this.gaugePadding, 2*unitRect, this.gaugeH, radius)
    }

    getBoundaries(label: string, animal: string): {boundaryLow: number, boundaryHight: number} {
        if (label === 'RPP') {
            return { boundaryLow: 30, boundaryHight: 35 }
        } else if (animal === 'dogs') {
            return { boundaryLow: 65, boundaryHight: 80 }
        } else {
            return { boundaryLow: 80, boundaryHight: 100 }
        }
    }

    /**
     * Draw the cursor, scaled to the gauge with the boundary points
     * Some Math for scaling : y = ax+b, a = (y2 - y1)/(x2 - x1), b = y - ax
     * We always have 2 points with boundaries : example for rpc dogs : (65, unitRect*2), (80, unitRect*3)
     * @param ctx CanvasContext
     * @param cursor position of the cursor to convert to the gauge scale
     * @param unitRect base width of unit rectangle
     */
    drawCursor(ctx: CanvasRenderingContext2D, cursor: number, unitRect: number): void {
        const { boundaryLow, boundaryHight } = this.getBoundaries(this.label, this.animal)
        const p1 = {x: boundaryLow, y: 2*unitRect}
        const p2 = {x: boundaryHight, y: 3*unitRect}
        const a = (p2.y - p1.y) / (p2.x - p1.x)
        const b = p1.y - a*p1.x
        let positionX = (a*cursor) + b + this.gaugePadding

        if (positionX >= this.gaugeW) {
            positionX = this.gaugeW
        } else if (positionX <= 2*this.gaugePadding) {
            positionX = 2*this.gaugePadding
        }

        ctx.beginPath()
        ctx.lineWidth = 3
        ctx.moveTo(positionX, 0)
        ctx.lineTo(positionX, this.gaugeH + 2*this.gaugePadding)
        ctx.stroke()
    }

    drawFirstRoundRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radiusValue = 0): void {
        const radius = { topLeft: radiusValue, bottomLeft: radiusValue }

        ctx.beginPath()
        ctx.moveTo(x + radius.topLeft, y)
        ctx.lineTo(x + width, y)
        ctx.lineTo(x + width, y + height)
        ctx.lineTo(x + radius.bottomLeft, y + height)
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bottomLeft)
        ctx.lineTo(x, y + radius.topLeft)
        ctx.quadraticCurveTo(x, y, x + radius.topLeft, y)
        ctx.closePath()
        ctx.fill()
    }

    drawMiddleRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number): void {
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + width, y)
        ctx.lineTo(x + width, y + height)
        ctx.lineTo(x, y + height)
        ctx.lineTo(x, y)
        ctx.closePath()
        ctx.fill()
    }

    drawLastRoundRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radiusValue = 0): void {
        const radius = { topRight: radiusValue, bottomRight: radiusValue }

        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + width - radius.topRight, y)
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius.topRight)
        ctx.lineTo(x + width, y + height - radius.bottomRight)
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius.bottomRight, y + height)
        ctx.lineTo(x, y + height)
        ctx.lineTo(x, y)
        ctx.closePath()
        ctx.fill()
    }

}
