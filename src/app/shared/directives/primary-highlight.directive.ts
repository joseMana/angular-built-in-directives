import { Directive, ElementRef, HostListener, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appPrimaryHighlight],[baz],[baz=blah],.appPrimaryHighlight'
})
export class PrimaryHighlightDirective {

  constructor() { 
    //this.element.nativeElement.style.backgroundColor = 'yellow';
  }

  /*Notice the @Input decorator. It adds metadata to the class that makes the 
  directive's highlightColor property available for binding. */
  
  // @Input() highlightColor: string;

  /* HostBinding is used to modify the  */
  @HostBinding('style.background-color') bgColor = 'yellow';
  @HostBinding('style.cursor') setCursor = null;

  /* The @HostListener decorator lets you subscribe to events of the DOM element that hosts an attribute directive */
  @HostListener('mouseenter') onMouseEnter() {
    //this.element.nativeElement.style.backgroundColor = 'yellow';
    //this.highlightColor('yellow');
     this.bgColor = 'yellow';
     this.setCursor = 'pointer';
  }

  /*
    Use @HostListener to safely bind HTML events. In this case, i used mouseleave to set 
    the background and cursor values.  
  */
  @HostListener('mouseleave') onMouseLeave() {

    /* using the renderer is one way to change element behavior, but not advisable 
    since it tightly couples your app to the DOM */
    //this.renderer.setStyle(this.element.nativeElement, 'background-color', null);


     this.bgColor = null;
     this.setCursor = null;
  }


}
