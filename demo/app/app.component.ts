import {
  Component, OnInit, ChangeDetectionStrategy,
  ChangeDetectorRef, ViewEncapsulation, Renderer2,
  ElementRef
} from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    public cd: ChangeDetectorRef,
    public render: Renderer2,
    public ele: ElementRef
  ) { }
  ngOnInit() { }

  doShake() {
    this.title = 'shake';
    this.cd.markForCheck();
  }
}
