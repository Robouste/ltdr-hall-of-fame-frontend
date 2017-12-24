import { Routes } from "@angular/router";
import { JokesComponent } from './jokes/jokes.component';
import { LoginComponent } from "./login/login.component";
import { SettingsComponent } from "./settings/settings.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { ProfilComponent } from "./profil/profil.component";

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
	},
	{
		path: "settings",
		component: SettingsComponent
	},
	{
		path: "stats",
		component: StatisticsComponent
	},
	{
		path: "profil",
		component: ProfilComponent
	}
];
