import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditStudentPage } from './edit-student';

@NgModule({
  declarations: [
    EditStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(EditStudentPage)
  ],
})
export class EditStudentPageModule {}
