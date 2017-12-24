import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { LayoutModule } from './layout/layout.module';
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

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		RouterModule.forRoot(appRoutes),
		HttpClientModule,
		SharedModule,
		LayoutModule,
		JokesModule,
		LoginModule,
		SettingsModule,
		StatisticsModule,
	],
	providers: [
		JokeService,
		UserService,
		VoteService,
		LoginService,
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
