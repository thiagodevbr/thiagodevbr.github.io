import { Component } from '@angular/core';
import { cilTrash } from '@coreui/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  icons = { cilTrash };
}
