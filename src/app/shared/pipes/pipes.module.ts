import { NgModule } from '@angular/core';
import { RoleFilterPipe } from './role-filter.pipe';
import { RemoveUserPipe } from './remove-user.pipe';

const PIPES = [
	RoleFilterPipe,
	RemoveUserPipe
];

@NgModule({
	imports: [],
	exports: [PIPES],
	declarations: [PIPES],
	providers: [],
})
export class PipesModule { }
