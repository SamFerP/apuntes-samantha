import { Component } from '@angular/core';
import { SidemenuComponent } from '../../shared/sidemenu/sidemenu.component';
import { PageComponent } from '../page/page.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SidemenuComponent,PageComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
