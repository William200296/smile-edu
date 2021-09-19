import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { YearDetailModel } from 'src/app/shared/components/year-detail/year-detail.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('menu') menuItem!: ElementRef;

  mobileQuery: MediaQueryList;
  fillerNav: SideNavItem[] = NAV_ITEMS;
  year: YearDetailModel[] = DATA_YEARS;
  itemLegends: LegendItemModel[] = DATA_LEGEND;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.menuItem.nativeElement.click();
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  showMenu = (event: any) => {

    const a = event.target as HTMLLinkElement;
    const container = a.closest('mat-sidenav-container') as HTMLElement;
    // Seteamos MatSideContent
    const sideContent = container.querySelector('mat-sidenav-content') as HTMLElement;
    sideContent.classList.toggle('margin-container-left-closed');
    sideContent.classList.toggle('margin-container-left-opened');
    // Seteamos MatSideNav
    const matSidenav = a.closest('mat-sidenav') as HTMLElement;
    matSidenav.classList.toggle('mat-sidenav-add-custom-class');

  }

}

export interface LegendItemModel {
  name: string;
  color: string;
}

const DATA_LEGEND: LegendItemModel[] = [
  {
    name: 'Al día',
    color: '#00c853'
  }, {
    name: 'Con deuda',
    color: '#FB0019'
  }, {
    name: 'Datos incompletos',
    color: '#DADADA'
  }, {
    name: 'Datos completos',
    color: '#003399'
  }, {
    name: 'Extranjero',
    color: '#640AB0'
  }
];

export interface SideNavItem {
  iconName: string;
  listDetail: string;
  hasLine?: boolean;
}

const NAV_ITEMS: SideNavItem[] = [
  {
    iconName: 'dns',
    listDetail: 'Dashboard'
  }, {
    iconName: 'bookmark',
    listDetail: 'Noticias'
  }, {
    iconName: 'book',
    listDetail: 'Agenda',
    hasLine: true
  }, {
    iconName: 'tv',
    listDetail: 'Planificación institucional'
  }, {
    iconName: 'supervised_user_circle',
    listDetail: 'Talento humano'
  }, {
    iconName: 'monetization_on',
    listDetail: 'Tesorería'
  }, {
    iconName: 'bookmark_border',
    listDetail: 'Gestión académica'
  }, {
    iconName: 'add_to_photos',
    listDetail: 'Matrícula'
  }, {
    iconName: 'list',
    listDetail: 'Programación curricular'
  }, {
    iconName: 'settings',
    listDetail: 'Configuración',
    hasLine: true
  }, {
    iconName: 'credit_card',
    listDetail: 'Facturación',
    hasLine: true
  }
];

const DATA_YEARS: YearDetailModel[] = [
  {
    yearName: '3añ. Inicial',
    yearList: [
      {
        name: 'Los pecesitos',
        progress: '6/15'
      }, {
        name: 'Los gatitos',
        progress: '4/15'
      }
    ]
  }, {
    yearName: '4añ. Inicial',
    yearList: [
      {
        name: 'Los patitos',
        progress: '8/15'
      }, {
        name: 'Los ositos',
        progress: '10/15'
      }
    ]
  }, {
    yearName: '5añ. Inicial',
    yearList: [
      {
        name: 'Los conejitos',
        progress: '9/15'
      }, {
        name: 'Los leoncitos',
        progress: '7/15'
      }
    ]
  }, {
    yearName: '1° Primaria',
    yearList: [
      {
        name: 'Los leñadores',
        progress: '6/20'
      }, {
        name: 'Los pastores',
        progress: '9/20'
      }
    ]
  }, {
    yearName: '2° Primaria',
    yearList: [
      {
        name: 'Los leñadores',
        progress: '6/20'
      }, {
        name: 'Los pastores',
        progress: '9/20'
      }
    ]
  }, {
    yearName: '3° Primaria',
    yearList: [
      {
        name: 'Los leñadores',
        progress: '6/20'
      }, {
        name: 'Los pastores',
        progress: '9/20'
      }
    ]
  }, {
    yearName: '4° Primaria',
    yearList: [
      {
        name: 'Los leñadores',
        progress: '6/20'
      }, {
        name: 'Los pastores',
        progress: '9/20'
      }
    ]
  }, {
    yearName: '5° Primaria',
    yearList: [
      {
        name: 'Los leñadores',
        progress: '6/20'
      }, {
        name: 'Los pastores',
        progress: '9/20'
      }
    ]
  }, {
    yearName: '6° Primaria',
    yearList: [
      {
        name: 'Los leñadores',
        progress: '6/20'
      }, {
        name: 'Los pastores',
        progress: '9/20'
      }
    ]
  }
];
