import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AddJokeDialogComponent } from './add-joke-dialog.component';

@NgModule({
	imports: [SharedModule],
	exports: [],
	declarations: [DashboardComponent, AddJokeDialogComponent],
	providers: [],
	entryComponents: [AddJokeDialogComponent]
})
export class DashboardModule { }
