import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from "./shared/shared.module";
import { HomePageComponent } from "./shared/pages/home-page/home-page.component";
import { AboutMeComponent } from "./shared/pages/about-me/about-me.component";
import { ExperienceComponent } from './shared/pages/experience/experience.component';
import { EducationComponent } from './shared/pages/education/education.component';
import { ProjectsComponent } from './shared/pages/projects/projects.component';
import { ContactComponent } from './shared/pages/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FooterComponent } from "./shared/components/footer/footer.component";
declare var particlesJS: any;

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet,
    HttpClientModule,
    SidebarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
    public isMobile: boolean = false; 
    title = 'devcasanova';
    ngOnInit(): void {
      this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if(this.isMobile){
        particlesJS.load('particles-js', '/dev-dacasanova/assets/particlesjs-config2.json', function() {
          console.log('Particles.js config loaded');
      });
      }else{
        particlesJS.load('particles-js', '/dev-dacasanova/assets/particlesjs-config.json', function() {
          console.log('Particles.js config loaded');
      });
      }
    }
}
