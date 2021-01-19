import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "../layout/layout.component";

const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'users'
    },
    {
        path: '', component: LayoutComponent,
        children: [
            {
                path: 'users', loadChildren: () => import('../users/users.module').then(m => m.UsersModule)
            }
        ]
    },
    {
        path: '**', redirectTo: 'users'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InitAppRoutingModule {
}
