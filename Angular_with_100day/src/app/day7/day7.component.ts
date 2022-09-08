import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-day7',
  templateUrl: './day7.component.html',
  styleUrls: ['./day7.component.css']
})
export class Day7Component implements OnInit, OnChanges {
  // private _progress = 50;
  // get progress() {
  //   return this._progress;
  // }

  // @Input() set progress(val: number) {
  //   console.log('val', val)
  //   if (typeof val !== "number") {
  //     const progress = Number(val);
  //     if (Number.isNaN(progress)) {
  //       this._progress = 0;

  //     } else {
  //       this._progress = progress;
  //     }
  //     this._progress = val;
  //   }
  // }
  @Input() progress = 50;
  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'tomato';

  constructor() {
    console.log({
      progress: this.progress,
      backgoundColor: this.backgroundColor,
      progressColor: this.progressColor

    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('changed', {
    //   progress: this.progress,
    //   backgoundColor: this.backgroundColor,
    //   progressColor: this.progressColor

    // })

  }
  ngOnInit(): void {
    console.log('init', {
      progress: this.progress,
      backgoundColor: this.backgroundColor,
      progressColor: this.progressColor

    })
  }
}