import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-buttoner',
  templateUrl: './buttoner.component.html',
  styleUrls: ['./buttoner.component.scss']
})
export class ButtonerComponent implements OnInit {

  isOpen: boolean = false;
  @ViewChild('opener') openBox!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  openButtoner(): void {
    this.isOpen = !this.isOpen;
    this.openBox.nativeElement.classList.toggle('open');
  }

}
