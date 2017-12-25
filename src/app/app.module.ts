import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { JokesModule } from './jokes/jokes.module';
import { JokeService } from './services/joke.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './services/user.service';
import { VoteService } from './services/votes.service';
import { LoginModule } from './login/login.module';
import { LoginService } from './services/login.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SettingsModule } from './settings/settings.module';
import { StatisticsModule } from './statistics/statistics.module';
import { ProfilModule } from './profil/profil.module';
import { StatsService } from './services/stats.service';
import { OrderByPipe } from './shared/pipes/order-by.pipe';
import { ConnectedGuard } from './guards/connected.guard';
import { AdminGuard } from './guards/admin.guard';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		RouterModule.forRoot(appRoutes),
		HttpClientModule,
		SharedModule,
		JokesModule,
		LoginModule,
		SettingsModule,
		StatisticsModule,
		ProfilModule
	],
	providers: [
		JokeService,
		UserService,
		VoteService,
		LoginService,
		StatsService,
		OrderByPipe,
		ConnectedGuard,
		AdminGuard,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptorService,
			multi: true
		},
		{
			provide: LocationStrategy,
			useClass: HashLocationStrategy
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
