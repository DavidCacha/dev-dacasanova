import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'shared-home-page',
  standalone: true,
  imports: [FooterComponent],
  styleUrl: './home-page.component.css',
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent {

}
