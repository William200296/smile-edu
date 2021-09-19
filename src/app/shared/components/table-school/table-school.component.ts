import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-school',
  templateUrl: './table-school.component.html',
  styleUrls: ['./table-school.component.scss']
})
export class TableSchoolComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [
    'year',
    'place',
    'program',
    'grade',
    'classRoom',
    'scholarship',
    'status'
  ];
  dataSource =  new MatTableDataSource<SchoolDataModel>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialogRef: MatDialogRef<TableSchoolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  close(): void {
    this.dialogRef.close();
  }

}

export interface SchoolDataModel {
  year: number;
  place: string;
  program: string;
  grade: string;
  classRoom: string;
  scholarship: string;
  status: boolean;
}

const ELEMENT_DATA: SchoolDataModel[] = [
  {
    year: 2020,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'LOS LEÑADORES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: true
  }, {
    year: 2020,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'LOS PASTORES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: false
  }, {
    year: 2019,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'MIGUEL DE CERVANTES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: false
  }, {
    year: 2020,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'LOS LEÑADORES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: true
  }, {
    year: 2020,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'LOS PASTORES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: false
  }, {
    year: 2019,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'MIGUEL DE CERVANTES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: false
  }, {
    year: 2020,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'LOS LEÑADORES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: true
  }, {
    year: 2020,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'LOS PASTORES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: false
  }, {
    year: 2019,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'MIGUEL DE CERVANTES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: false
  }, {
    year: 2020,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'LOS LEÑADORES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: true
  }, {
    year: 2020,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'LOS PASTORES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: false
  }, {
    year: 2019,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'MIGUEL DE CERVANTES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: false
  }, {
    year: 2020,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'LOS LEÑADORES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: true
  }, {
    year: 2020,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'LOS PASTORES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: false
  }, {
    year: 2019,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'MIGUEL DE CERVANTES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: false
  }, {
    year: 2020,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'LOS LEÑADORES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: true
  }, {
    year: 2020,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'LOS PASTORES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: false
  }, {
    year: 2019,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'MIGUEL DE CERVANTES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: false
  }, {
    year: 2020,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'LOS LEÑADORES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: true
  }, {
    year: 2020,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'LOS PASTORES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: false
  }, {
    year: 2019,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'MIGUEL DE CERVANTES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: false
  }, {
    year: 2020,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'LOS LEÑADORES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: true
  }, {
    year: 2020,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'LOS PASTORES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: false
  }, {
    year: 2019,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'MIGUEL DE CERVANTES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: false
  }, {
    year: 2020,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'LOS LEÑADORES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: true
  }, {
    year: 2020,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'LOS PASTORES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: false
  }, {
    year: 2019,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'MIGUEL DE CERVANTES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: false
  }, {
    year: 2020,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'LOS LEÑADORES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: true
  }, {
    year: 2020,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'LOS PASTORES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: false
  }, {
    year: 2019,
    place: 'PREMIUM COLLEGE - SURCO',
    program: 'Año lectivo',
    grade: '1° PRI',
    classRoom: 'MIGUEL DE CERVANTES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: false
  }
];
