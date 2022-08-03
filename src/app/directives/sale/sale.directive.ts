import { Directive, ElementRef, HostListener, Input,  Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnSale]'
})
export class SaleDirective {
@Input() onSaleColor:string = 'red'
@Input() onSaleText: string ='On Sale!'
@Input() isOnSale:boolean = true;


  constructor(private elementRef:ElementRef, private renderer:Renderer2) {}  //elementin backgroundu mavi olsun }

ngOnInıt():void{
  if(!this.isOnSale) return
  this.changeBackgroundColor('yellow');
  this.addSaleText();
}


   @HostListener('mouseenter') onMouseEnter(){  // üzerine geldiginde renk degissin
    if(!this.isOnSale) return
    this.changeBackgroundColor(this.onSaleColor) 

   }

   @HostListener('mouseleave') onMouseLeave(){
    this.changeBackgroundColor('blue') 

   }

   changeBackgroundColor(color : string){
    this.elementRef.nativeElement.style.backgroundColor = color
   }

   addSaleText(){
    const saleTextElement : HTMLElement = this.renderer.createElement('span');
    saleTextElement.innerText = this.onSaleText


    this.renderer.appendChild(this.elementRef.nativeElement, saleTextElement)
   }
}
