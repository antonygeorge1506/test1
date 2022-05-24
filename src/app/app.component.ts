import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  constructor(private elRef:ElementRef) {}
  title = 'test1';
  className = "johnClass";
  className1 = "johnClass1";
  i = 0;
  btnIndex = 0;
  uuid="uuid";
  buttonHtml:any;

  ngOnInit() {
    const functions=['onclick','onclick1','onclick2'];
    let element = document.getElementById('buttonDiv');
    element.innerHTML=`<button id="">click</button>`;
    element.addEventListener('click', this.onclick.bind(this));
    element.addEventListener('click', this.onclick1.bind(this));
  }
  onclick(){
    console.log("onclick");
  }
  onclick1(){
    console.log("onclick1");
    
  }
  onclick2(){
    console.log("onclick2");

  }

  changeButtonColor() {
    this.i =this.i+1;
    console.log("i=="+this.i);
    this.className = (this.i % 2 == 0) ? "johnClass" : "johnClass2";
  }

  btnClicked(){

    //create botton
    let element = document.getElementById(this.uuid);    
    this.buttonHtml = `<button>BtnTest - ${this.btnIndex++}</button>`;
    // element.innerHTML = element.innerHTML + this.buttonHtml;
    element.innerHTML = element.innerHTML + this.buttonHtml;
    
    //after add button, get elment list by "querySelectorAll".
    let elementList = this.elRef.nativeElement.querySelectorAll('button');
  
    console.log("elementList:",elementList);
    console.log("elementList[2]:",elementList[2]);
    //Add event handler each.
    elementList[2].addEventListener('click', this.btnCellClick1.bind(this));
    elementList[3].addEventListener('click', this.btnCellClick2.bind(this));
  }
  
  btnCellClick1(){
       console.log('btn Click 1');
  }
  
  btnCellClick2(){
    console.log('btn Click 2');
  }
}
