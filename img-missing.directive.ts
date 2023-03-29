import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgMissing]',
})
export class ImgMissingDirective {
  @Input() appImgMissing = '';

  constructor(private el: ElementRef, private _renderer: Renderer2) { }

  @HostListener('error')
  private onError(): void {
    this._renderer.setAttribute(this.el.nativeElement, 'src', this.appImgMissing || './assets/images/avatars/female-09.jpg',);
  }
}
