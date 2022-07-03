import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/router';
import { ProjectComponent } from 'app/modules/admin/dashboards/project/project.component';
import { ProjectResolver } from 'app/modules/admin/dashboards/project/project.resolvers';

export const aparelhosRoutes: Route[] = [
    {
        path     : '',
        component: ProjectComponent,
        resolve  : {
            data: ProjectResolver
        }
    }
];

//export const AparelhosRoutes = RouterModule.forChild(routes);
