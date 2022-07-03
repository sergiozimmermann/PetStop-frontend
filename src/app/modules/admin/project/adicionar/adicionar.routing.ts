import { Routes, RouterModule, Route } from '@angular/router';
import { AdicionarComponent } from './adicionar.component';

export const adicionarRoutes: Route[] = [
    {
        path     : '',
        component: AdicionarComponent
    }
];

//export const AdicionarRoutes = RouterModule.forChild(routes);
