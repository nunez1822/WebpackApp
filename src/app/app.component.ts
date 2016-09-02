import { Component, ViewContainerRef, OnInit } from '@angular/core';
import '../../public/css/styles.css';
import { ToastrService } from 'toastr-ng2';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(
    private toastrService: ToastrService,
    private viewContainerRef: ViewContainerRef
  ) {
    this.toastrService.viewContainerRef = this.viewContainerRef;
  }

  ngOnInit() {
    this.toastrService.success('Hello world!', 'Toastr fun!');
  }

  dateValue:string;
 }
