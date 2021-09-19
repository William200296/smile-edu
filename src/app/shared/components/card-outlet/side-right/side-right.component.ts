import { Component, OnInit } from '@angular/core';

export interface CollegeDetailModel {
  idSchool: number;
  schoolName: string;
}

export interface ReligionDetailModel {
  idReligion: number;
  relgionName: string;
}

@Component({
  selector: 'app-side-right',
  templateUrl: './side-right.component.html',
  styleUrls: ['./side-right.component.scss']
})
export class SideRightComponent implements OnInit {

  panelOpenState: boolean = false;
  schooles: CollegeDetailModel[] = [
    {
      idSchool: 1,
      schoolName: 'GRAN COLEGIO DE SURCO'
    }, {
      idSchool: 2,
      schoolName: 'SUPREMO COLEGIO DE SURCO'
    }, {
      idSchool: 3,
      schoolName: 'COLEGIO DE SURCO'
    }
  ];

  religions: ReligionDetailModel[] = [
    {
      idReligion: 1,
      relgionName: 'Adventista'
    }, {
      idReligion: 2,
      relgionName: 'Católico'
    }, {
      idReligion: 3,
      relgionName: 'Cristiano'
    }, {
      idReligion: 4,
      relgionName: 'Evangélica'
    }, {
      idReligion: 5,
      relgionName: 'Judía'
    }, {
      idReligion: 6,
      relgionName: 'Mormón'
    }, {
      idReligion: 7,
      relgionName: 'Pentecostes'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  openTab = (cityName: string, event: any) => {
    let i;
    const x = document.getElementsByClassName('dynamic-tab');
    for (i = 0; i < x.length; i++) {
      (x[i] as HTMLElement).style.display = "none";
    }
    let j;
    const y = document.getElementsByClassName('button-tab');
    for (j = 0; j < y.length; j++) {
      (y[j] as HTMLButtonElement).classList.remove('selected');
    }
    (document.getElementById(cityName) as HTMLElement).style.display = "block";
    (event.target as HTMLButtonElement).classList.add('selected');
  }

}
