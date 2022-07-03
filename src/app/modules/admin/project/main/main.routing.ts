import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/router';
import { ProjectComponent } from '../../dashboards/project/project.component';
import { ProjectResolver } from '../../dashboards/project/project.resolvers';
import { MainComponent } from './main.component';


export const mainRoutes: Route[] = [
    {
        path     : '',
        component: MainComponent,
        resolve  : {
            data: ProjectResolver
        }
    }
];
//export const MainRoutes = RouterModule.forChild(routes);
