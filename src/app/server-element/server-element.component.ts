import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent
implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  @Input('serverElement') element: {type: string, name: string, content: string};
  @Input() name:string;
  @ViewChild('heading', {static: true}) header : ElementRef;
  @ContentChild ('contentParagraph', {static: true}) paragraph : ElementRef;


//   LIFE HOOKS  - KÖRS VID CREATED
  constructor() {
    console.log('Constructor called')
  }

  ngOnChanges(changes : SimpleChanges){
    console.log('ngOnChanges called')
    console.log(changes)
  }

//   LIFE HOOKS - KÖRS VID CREATED
  ngOnInit():void {
    console.log('ngOnInit called!')
    console.log(this.header.nativeElement.textContent)
    console.log(this.paragraph.nativeElement.textContent)
  }

  ngDoCheck():void {
    console.log('ngDoCheck is called!')
  }

  ngAfterContentInit():void {
      console.log('ngAfterContentInit is called')
      console.log(this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called')
    console.log(this.header.nativeElement.textContent)
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called')
  }
}
