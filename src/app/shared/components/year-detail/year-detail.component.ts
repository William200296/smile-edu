import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

export interface YearDetailModel {
  yearName: string;
  yearList: YearList[];
}

interface YearList {
  name: string;
  progress: string;
}

@Component({
  selector: 'app-year-detail',
  templateUrl: './year-detail.component.html',
  styleUrls: ['./year-detail.component.scss']
})
export class YearDetailComponent implements OnInit {

  @ViewChild('container') cont!: ElementRef;
  @Input('year') detailYear!: YearDetailModel;

  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openBox(): void {

    this.isOpen = !this.isOpen;
    this.cont.nativeElement.classList.toggle('box-open');

  }

}
