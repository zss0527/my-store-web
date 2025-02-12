import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './common/about/about.component';
import { ContactComponent } from './common/contact/contact.component';
import { CustomerComponent } from './common/customer/customer.component';
import { AddComponent } from './common/add/add.component';
import { StatusComponent } from './common/status/status.component';
import { authGuard } from './Guard/auth.guard';
import { childauthGuard } from './Guard/childauth.guard';
import { authdGuard } from './Guard/authd.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'about/:submenu/:id',
        component: AboutComponent
    },
    {
        path: 'contact',
        // component: ContactComponent
        loadComponent: () => import('./common/contact/contact.component').then(m => m.ContactComponent)
    },
    {
        path: 'customer',
        component: CustomerComponent,
        canActivate: [authGuard],
        canActivateChild: [childauthGuard],
        canDeactivate: [authdGuard],
        children: [
            {
                path: 'add',
                component: AddComponent
            },
            {
                path: 'edit/:id',
                component: AddComponent
            }
        ]
    },
    {
        path: '**',
        component: StatusComponent
    }
];
