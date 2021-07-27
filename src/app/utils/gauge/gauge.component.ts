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

    // Canvas and gauge size
    canvasW = 150
    canvasH = 24
    gaugeW = 100
    gaugeH = 15

    ngAfterViewInit(): void {
        if (this.canvasElementRef) {
            const ctx = this.canvasElementRef.nativeElement.getContext('2d')

            if (ctx) {
                if (this.cursor) {
                    this.drawGauge(ctx)
                    this.drawCursor(ctx, this.cursor)
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
            return 'N/A'
        }
    }

    drawGauge(ctx: CanvasRenderingContext2D): void {
        const RED = '#ed1c24'
        const ORANGE = '#f7941e'
        const GREEN = '#00a14b'
        const radius = 7
        const gaugeTopY = (this.canvasH - this.gaugeH) /2
        const gaugeBottomY = this.gaugeH

        ctx.fillStyle = RED
        this.drawFirstRoundRect(ctx, 0, gaugeTopY, (this.gaugeW/3), gaugeBottomY, radius)

        ctx.fillStyle = ORANGE
        this.drawMiddleRect(ctx, this.gaugeW/3, gaugeTopY, (this.gaugeW/3), gaugeBottomY)

        ctx.fillStyle = GREEN
        this.drawLastRoundRect(ctx, this.gaugeW*2/3, gaugeTopY, this.gaugeW/3, gaugeBottomY, radius)
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

    // Some Math for scaling : y = ax+b, a = (y2 - y1)/(x2 - x1), b = y - ax; and we have several points with boundaries.
    // Exemple for rpc dogs : (50, 0), (65, 100/3), (80, 200/3), (95, 100)
    drawCursor(ctx: CanvasRenderingContext2D, cursor: number): void {
        const { boundaryLow, boundaryHight } = this.getBoundaries(this.label, this.animal)
        const diff = boundaryHight - boundaryLow
        const a = (2*(this.gaugeW/3) - (this.gaugeW/3)) / (diff)
        let positionX = (a*cursor) - a*(boundaryLow - diff)

        if (positionX >= this.gaugeW) {
            positionX = this.gaugeW - 1
        } else if (positionX <= 0) {
            positionX = 1
        }

        ctx.beginPath()
        ctx.lineWidth = 3
        ctx.moveTo(positionX, 0)
        ctx.lineTo(positionX, this.canvasH)
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
