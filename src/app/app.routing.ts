import { Routes } from "@angular/router";
import { JokesComponent } from './jokes/jokes.component';
import { LoginComponent } from "./login/login.component";

export const appRoutes: Routes = [
	{
		path: "",
		pathMatch: "full",
		redirectTo: "login"
	},
	{
		path: "jokes",
		component: JokesComponent
	},
	{
		path: "login",
		component: LoginComponent
	}
];
