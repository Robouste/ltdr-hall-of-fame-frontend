import { NgModule } from '@angular/core';
import { StatisticsComponent } from './statistics.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [StatisticsComponent]
})
export class StatisticsModule { }
