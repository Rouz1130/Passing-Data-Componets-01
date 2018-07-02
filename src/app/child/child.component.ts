// 1: importing required libraries for onChanges lifecycle hook:  OnChanges, SimpleChanges, SimpleChange 
import { Component, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';



@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

// 2: modififed class to implement interface OnChanges
export class ChildComponent implements OnChanges {
//  @Input() count: number;

// Property setter for tracking changes example 
 private _count = 0;
 @Input() 
 set count(count: number) {
   this._count = count;
   console.log(count); 
 }

 get count(): number {return this._count}


 // 3: ngOnChanges method.
 ngOnChanges(changes: SimpleChanges) {

  for (let property in changes) {
    if (property === 'count') {
      console.log('Previous:', changes[property].previousValue);
      console.log('Current:', changes[property].currentValue);
      console.log('firstChange', changes[property].firstChange);
    }
  }

 }

}
