import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { LayoutModule } from './layout/layout.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { JokeService } from './services/joke.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './services/user.service';
import { VoteService } from './services/votes.service';
import { LoginModule } from './login/login.module';
import { LoginService } from './services/login.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		RouterModule.forRoot(appRoutes),
		HttpClientModule,
		SharedModule,
		LayoutModule,
		DashboardModule,
		LoginModule
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
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
