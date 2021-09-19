import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent implements OnInit {

  isOpen: boolean = false;
  @ViewChild('contentAccordion') accordion!: ElementRef;
  @Input('title') titleAccordion!: string;

  constructor() { }

  ngOnInit(): void {
  }

  openAccordion = () => {
    this.isOpen = !this.isOpen;
    (this.accordion.nativeElement as HTMLDivElement).classList.toggle('opened');
  }

}
