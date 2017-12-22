import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { LayoutModule } from './layout/layout.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { JokeService } from './services/joke.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { VoteService } from './services/votes.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		RouterModule.forRoot(appRoutes),
		HttpClientModule,
		SharedModule,
		LayoutModule,
		DashboardModule
	],
	providers: [
		JokeService,
		UserService,
		VoteService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
