import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
	imports: [SharedModule],
	exports: [ToolbarComponent],
	declarations: [ToolbarComponent],
	providers: [],
})
export class LayoutModule { }
