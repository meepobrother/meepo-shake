import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShakeDirective } from './shake';
@NgModule({
    declarations: [
        ShakeDirective,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ShakeDirective,
    ],
    providers: [],
})
export class ShakeModule { }


