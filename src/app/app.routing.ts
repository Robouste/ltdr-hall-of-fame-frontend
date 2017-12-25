import { Routes } from "@angular/router";
import { JokesComponent } from './jokes/jokes.component';
import { LoginComponent } from "./login/login.component";
import { SettingsComponent } from "./settings/settings.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { ProfilComponent } from "./profil/profil.component";
import { ConnectedGuard } from './guards/connected.guard';
import { AdminGuard } from "./guards/admin.guard";

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
		component: SettingsComponent,
		canActivate: [AdminGuard]
	},
	{
		path: "stats",
		component: StatisticsComponent,
		canActivate: [ConnectedGuard]
	},
	{
		path: "profil",
		component: ProfilComponent,
		canActivate: [ConnectedGuard]
	}
];
