import { NgModule } from '@angular/core';
import { RoleFilterPipe } from './role-filter.pipe';
import { RemoveUserPipe } from './remove-user.pipe';
import { OrderByPipe } from './order-by.pipe';

const PIPES = [
	RoleFilterPipe,
	RemoveUserPipe,
	OrderByPipe
];

@NgModule({
	imports: [],
	exports: [PIPES],
	declarations: [PIPES],
	providers: [],
})
export class PipesModule { }
