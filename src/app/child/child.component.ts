import { Component, Input } from '@angular/core';
// import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

 @Input() count: number;

}