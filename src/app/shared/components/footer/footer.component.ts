import { Component } from '@angular/core';

@Component({
  selector: 'shared-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styles: `
    .body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }

    .footer {
      
  z-index: 5; /* Asegura que esté encima del fondo */
  text-align: center;
  padding: 10px 0;
  margin-top: auto; /* Asegura que esté al final */
  color: white;
    }

    .footer .line {
      flex-grow: 1;
      height: 1px;
      background: white;
      margin-right: 10px;
    }

    .footer .text {
      white-space: nowrap;
      font-size: 14px;
      letter-spacing: 2px;
    }
  `
})
export class FooterComponent {

}
