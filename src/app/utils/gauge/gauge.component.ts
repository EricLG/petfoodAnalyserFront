import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core'

@Component({
    selector: 'app-gauge',
    templateUrl: './gauge.component.html',
    styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements AfterViewInit {

    @Input() cursor: number|undefined
    @Input() label = ''

    @ViewChild('canvasElementRef', {static: false})
    canvasElementRef: ElementRef<HTMLCanvasElement> | null = null;

    // Canvas and gauge size
    canvasW = 75
    canvasH = 24
    gaugeW = 75
    gaugeH = 15

    ngAfterViewInit(): void {
        if (this.canvasElementRef) {
            const ctx = this.canvasElementRef.nativeElement.getContext('2d')

            if (ctx) {
                if (this.cursor) {
                    this.drawGauge(ctx)
                    this.drawCursor(ctx, this.cursor)
                }
                ctx.stroke()
            }
        }
    }

    getCursor(): string {
        return this.cursor ? `${this.cursor}` : 'N/A'
    }

    drawGauge(ctx: CanvasRenderingContext2D): void {
        const RED = '#ff0000'
        const ORANGE = '#ffa200'
        const GREEN = '#04e700'

        const gaugeTopY = (this.canvasH - this.gaugeH) /2
        const gaugeBottomY = this.gaugeH
        const boundaryLow = 30
        const boundaryHight = 45

        ctx.fillStyle = RED
        ctx.fillRect(0, gaugeTopY, boundaryLow, gaugeBottomY)

        ctx.fillStyle = ORANGE
        ctx.fillRect(boundaryLow, gaugeTopY, boundaryHight, gaugeBottomY)

        ctx.fillStyle = GREEN
        ctx.fillRect(boundaryHight, gaugeTopY, this.gaugeW, gaugeBottomY)

    }

    drawCursor(ctx: CanvasRenderingContext2D, cursor: number): void {
        ctx.beginPath()
        ctx.lineWidth = 3
        let positionX = (cursor*3) - 60

        if (positionX >= 75) {
            positionX = 74
        } else if (positionX <= 0) {
            positionX = 1
        }
        ctx.moveTo(positionX, 0)
        ctx.lineTo(positionX, this.canvasH)
    }
}
