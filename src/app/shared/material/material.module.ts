import {
	MatCardModule,
	MatIconModule,
	MatListModule,
	MatButtonModule,
	MatToolbarModule,
	MatDialogModule,
	MatFormFieldModule,
	MatInputModule,
	MatSelectModule,
	MatSnackBarModule,
	MatTableModule,
	MatSortModule,
	MatProgressSpinnerModule,
	MatSidenavModule
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
	MatSelectModule,
	MatSnackBarModule,
	MatTableModule,
	MatSortModule,
	MatProgressSpinnerModule,
	MatSidenavModule
];

@NgModule({
	imports: [MODULES],
	exports: [MODULES],
	declarations: [],
	providers: [],
})
export class MaterialModule { }
