import { Directive, OnInit, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
declare const require: any;
let Shake = require('shake.js');
@Directive({ selector: '[shake]' })
export class ShakeDirective implements OnInit {
    @Output() shake: EventEmitter<any> = new EventEmitter();
    _shake: any;
    constructor(
        public ele: ElementRef,
        public render: Renderer2
    ) { }

    ngOnInit() {
        this._shake = new Shake({
            threshold: 15,
            timeout: 1000
        });
        window.addEventListener('shake', () => {
            this._doShake();
        }, false);
        this._shake.start();
        this.render.addClass(this.ele.nativeElement, 'animated');
    }

    _doShake() {
        this.render.addClass(this.ele.nativeElement, 'shake');
        this.shake.emit();
        setTimeout(() => {
            this.render.removeClass(this.ele.nativeElement, 'shake');
        }, 2000);
    }
}