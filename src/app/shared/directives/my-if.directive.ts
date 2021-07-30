import { Directive, ElementRef, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[notIf]'
})
export class NotIfDirective {

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input()
  set notIf(val) {
    if(!val) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
