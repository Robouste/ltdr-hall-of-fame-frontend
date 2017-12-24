import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
import { PipesModule } from './pipes/pipes.module';

const MODULES = [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	CommonModule,
	RouterModule,
	MaterialModule,
	PipesModule
];

const COMPONENTS = [
	LoaderComponent
];

@NgModule({
	imports: [MODULES],
	exports: [MODULES, COMPONENTS],
	declarations: [COMPONENTS],
	providers: [],
})
export class SharedModule { }
