import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'shared-about-me',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './about-me.component.html',
  styles: ``
})
export class AboutMeComponent {
  public isMobile: boolean = false; // Declarar la variable como propiedad pública

  constructor() {
    this.detectDevice(); // Llamar a la función para detectar el dispositivo
  }

  ngOnInit() {
    // Opcionalmente puedes ejecutar lógica adicional aquí
  }

  private detectDevice(): void {
    this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (this.isMobile) {
      console.log("Estás en un dispositivo móvil.");
    } else {
      console.log("No estás en un dispositivo móvil.");
    }
  }
}
