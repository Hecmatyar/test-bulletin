import {Directive, ElementRef, Renderer2, AfterViewInit, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[dateFormat]'
})
export class DateFormatDirective implements OnInit {
  @Input() dateFormat: any;
  optionsYear = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour12: false
  };
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.setFormattedDate();
  }
  getFormattedDate() {
    return new Date(this.dateFormat).toLocaleDateString('ru-ru', this.optionsYear);
  }
  setFormattedDate() {
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.getFormattedDate());
  }
}
