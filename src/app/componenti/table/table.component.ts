import { Component } from '@angular/core';

import {MatTableModule} from '@angular/material/table';
import { ButtonViewComponent } from '../../buttons/button-view/button-view.component';
import { ButtonEditComponent } from '../../buttons/button-edit/button-edit.component';
import { ButtonDeleteComponent } from '../../buttons/button-delete/button-delete.component';
import { ButtonCreateProjectComponent } from '../../buttons/button-create-project/button-create-project.component';

export interface PeriodicElement {
  title: string;
  id: number;
  image: string;
  description: string;
  link: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, title: 'Hydrogen', image: '../../assets/img/Bat sfondo cyber.jpg', description: 'H', link: 'link', action: 'button'},
  {id: 2, title: 'Helium', image: 'image', description: 'He', link: 'link', action: 'button'},
  {id: 3, title: 'Lithium', image: 'image', description: 'Li', link: 'link', action: 'button'},
  {id: 4, title: 'Beryllium', image: 'image', description: 'Be', link: 'link', action: 'button'},
  {id: 5, title: 'Boron', image: 'image', description: 'B', link: 'link', action: 'button'},
  {id: 6, title: 'Carbon', image: 'image', description: 'C', link: 'link', action: 'button'},
  {id: 7, title: 'Nitrogen', image: 'image', description: 'N', link: 'link', action: 'button'},
  {id: 8, title: 'Oxygen', image: 'image', description: 'O', link: 'link', action: 'button'},
  {id: 9, title: 'Fluorine', image: 'image', description: 'F', link: 'link', action: 'button'},
  {id: 10, title: 'Neon', image: 'image', description: 'Ne', link: 'link', action: 'button'},
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  standalone: true,
  imports: [MatTableModule, ButtonCreateProjectComponent, ButtonViewComponent, ButtonEditComponent, ButtonDeleteComponent,],
})

export class TableComponent {
  displayedColumns: string[] = ['demo-id', 'demo-title',  'demo-image', 'demo-description', 'demo-link', 'demo-action'];
  dataSource = ELEMENT_DATA;
}
