import { NgModule } from '@angular/core';
import { ProfilComponent } from './profil.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [ProfilComponent]
})
export class ProfilModule { }
