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
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(0, 0, 0, 0.3); /* Semi-transparent background */
      color: white;
      padding: 0 20px;
      font-size: 14px;
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
