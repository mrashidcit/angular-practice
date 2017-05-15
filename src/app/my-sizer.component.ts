import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'my-sizer',
  template: `
    <p>
      my-sizer Works!
    </p>
  `,
  styles: []
})
export class MySizerComponent implements OnInit {
  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec() { this.resize(-1);}
  inc() { this.resize(+1);}

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, + this.size + delta));
    this.sizeChange.emit(this.size);
  }

  constructor() { }

  ngOnInit() {
  }

}
