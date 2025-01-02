import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styles: `
  .navbar {
    z-index: 10; 
  }
  @font-face {
    font-family: 'Searns';
    src: url(/src/fonts/Fonters.ttf);
    font-weight: normal;
    font-style: normal;
  }
  .title_page{
    font-family: 'Searns';
    font-weight: bold;
  }
  `
})
export class SidebarComponent {

}
