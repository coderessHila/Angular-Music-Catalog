import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from './snack-bar.component';
import {MatButtonModule} from "@angular/material/button";
import { AddedToFavsSnackBarComponent } from './added-to-favs-snack-bar/added-to-favs-snack-bar.component';
import { RemovedFromFavsSnackBarComponent } from './removed-from-favs-snack-bar/removed-from-favs-snack-bar.component';
import { NoFavsPermissionSnackBarComponent } from './no-favs-permission-snack-bar/no-favs-permission-snack-bar.component';



@NgModule({
  declarations: [
    SnackBarComponent,
    AddedToFavsSnackBarComponent,
    RemovedFromFavsSnackBarComponent,
    NoFavsPermissionSnackBarComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule
    ],
  exports: [
    SnackBarComponent,
    AddedToFavsSnackBarComponent,
    RemovedFromFavsSnackBarComponent,
    NoFavsPermissionSnackBarComponent
  ]
})
export class SnackBarModule { }
