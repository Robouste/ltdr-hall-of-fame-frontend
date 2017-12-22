import { Routes } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from "./login/login.component";

export const appRoutes: Routes = [
	{
		path: "",
		pathMatch: "full",
		redirectTo: "home"
	},
	{
		path: "home",
		component: DashboardComponent
	},
	{
		path: "login",
		component: LoginComponent
	}
];
