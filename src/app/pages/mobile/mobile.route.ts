import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobileAppComponent } from './mobile.app.component';
import { MobileClaroComponent } from './mobile-claro/mobile-claro.component';
import { MobileClaroEditComponent } from './mobile-claro-edit/mobile-claro-edit.component';
import { MobileClaroListComponent } from './mobile-claro-list/mobile-claro-list.component';

const mobileRouterConfig: Routes = [
    { path: '', component: MobileClaroListComponent },
    { path: 'cadastrar', component: MobileClaroComponent },
    { path: 'editar/:code', component: MobileClaroEditComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(mobileRouterConfig)
    ],
    exports: [RouterModule]
})
export class MobileRoutingModule { }
