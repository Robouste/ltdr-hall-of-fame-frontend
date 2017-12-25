import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { SharedModule } from '../shared/shared.module';
import { AddUserDialogComponent } from './add-user-dialog.component';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [SettingsComponent, AddUserDialogComponent],
	entryComponents: [AddUserDialogComponent]
})
export class SettingsModule { }
