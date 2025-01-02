import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutMeComponent } from './shared/pages/about-me/about-me.component';
import { ExperienceComponent } from './shared/pages/experience/experience.component';
import { EducationComponent } from './shared/pages/education/education.component';
import { ProjectsComponent } from './shared/pages/projects/projects.component';
import { ContactComponent } from './shared/pages/contact/contact.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'about',
        component: AboutMeComponent
    },
    {
        path: 'experience',
        component: ExperienceComponent
    },
    {
        path: 'education',
        component: EducationComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
