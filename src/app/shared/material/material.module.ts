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
	MatSidenavModule,
	MatMenuModule
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
	MatSidenavModule,
	MatMenuModule
];

@NgModule({
	imports: [MODULES],
	exports: [MODULES],
	declarations: [],
	providers: [],
})
export class MaterialModule { }
