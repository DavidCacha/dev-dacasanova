import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'shared-contact',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  openWhatsApp() {
    console.log('ol')
    const phoneNumber = "527737393856"; // Número de teléfono con código de país (sin '+')
    const message = "Hola, estoy interesado en tus servicios."; // Mensaje predefinido
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); // Abre en una nueva pestaña
  }
  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/pdf/CV_LDCCH_spanish.pdf'; // Ruta al archivo PDF
    link.download = 'documento.pdf'; // Nombre del archivo para la descarga
    link.click();
  }
}
