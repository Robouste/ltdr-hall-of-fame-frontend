import {
	MatCardModule,
	MatIconModule,
	MatListModule,
	MatButtonModule,
	MatToolbarModule,
	MatDialogModule,
	MatFormFieldModule,
	MatInputModule,
	MatSelectModule
} from '@angular/material';
import { NgModule } from '@angular/core';

const MODULES = [
	MatCardModule,
	MatIconModule,
	MatListModule,
	MatButtonModule,
	MatToolbarModule,
	MatDialogModule,
	MatFormFieldModule,
	MatInputModule,
	MatSelectModule
];

@NgModule({
	imports: [MODULES],
	exports: [MODULES],
	declarations: [],
	providers: [],
})
export class MaterialModule { }
