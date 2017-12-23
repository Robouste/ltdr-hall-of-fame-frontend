import { NgModule } from '@angular/core';

import { JokesComponent } from './jokes.component';
import { SharedModule } from '../shared/shared.module';
import { AddJokeDialogComponent } from './add-joke-dialog.component';

@NgModule({
	imports: [SharedModule],
	exports: [],
	declarations: [JokesComponent, AddJokeDialogComponent],
	providers: [],
	entryComponents: [AddJokeDialogComponent]
})
export class JokesModule { }
