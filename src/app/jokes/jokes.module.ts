import { NgModule } from '@angular/core';

import { JokesComponent } from './jokes.component';
import { SharedModule } from '../shared/shared.module';
import { AddJokeDialogComponent } from './add-joke-dialog.component';
import { ListComponent } from './list/list.component';
import { ViewJokeDialogComponent } from './list/view-joke-dialog.component';

@NgModule({
	imports: [SharedModule],
	exports: [],
	declarations: [JokesComponent, AddJokeDialogComponent, ListComponent, ViewJokeDialogComponent],
	providers: [],
	entryComponents: [AddJokeDialogComponent, ViewJokeDialogComponent]
})
export class JokesModule { }
