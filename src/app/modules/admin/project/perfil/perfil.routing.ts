import { Routes, RouterModule } from '@angular/router';

import { Route } from '@angular/router';
import { PerfilComponent } from 'app/modules/admin/project/perfil/perfil.component';

export const perfilRoutes: Route[] = [
    {
        path     : '',
        component: PerfilComponent,
    }
];

//export const PerfilRoutes = RouterModule.forChild(routes);
