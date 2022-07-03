import { Routes, RouterModule, Route } from '@angular/router';
import { AlterPetComponent } from 'app/modules/admin/project/alter-pet/alter-pet.component';
import { ProjectResolver } from '../../dashboards/project/project.resolvers';
import { MainComponent } from '../main/main.component';
const routes: Routes = [
{
    path     : '',
    component: AlterPetComponent
},
];

export const alterPetRoutes: Route[] = [
    {
        path     : '',
        component: AlterPetComponent
    }
];

//export const AlterPetRoutes = RouterModule.forChild(routes);
