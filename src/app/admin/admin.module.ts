import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin/admin.component';
import {RouterModule, Routes} from '@angular/router';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { SessionItemComponent } from './session-item/session-item.component';
const adminRoutes: Routes = [
 {
 path: '',
 component: AdminComponent,
 children: [{ path: 'add', component: SessionAddFormComponent },
 { path: 'edit/:id', component:
SessionEditFormComponent },
 { path: 'list', component: SessionItemListComponent
},
 { path: '', redirectTo: 'list', pathMatch: 'full' }
 ],
 }
];
@NgModule({
 imports: [RouterModule.forChild(adminRoutes),
 CommonModule,
 FormsModule
 ],
 declarations: [
 SessionItemComponent,
 SessionItemListComponent,
 SessionAddFormComponent,
 SessionEditFormComponent,
 AdminComponent
 ],
 providers: [],
 bootstrap: [AdminComponent]
})
export class AdminModule { }
