import { AppComponent } from './app.component';
import { Routes } from "@angular/router";

export const appRoutes: Routes = [
	{
		path: "",
		pathMatch: "full",
		redirectTo: "home"
	},
	{
		path: "home",
		component: AppComponent
	}
];
