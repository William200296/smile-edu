import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableSchoolComponent } from '../../table-school/table-school.component';

@Component({
  selector: 'app-side-left',
  templateUrl: './side-left.component.html',
  styleUrls: ['./side-left.component.scss']
})
export class SideLeftComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openHistoricClassRoom(): void {
    this.dialog.open(TableSchoolComponent, {
      maxWidth: '750px',
      height: 'auto'
    });
  }

}
