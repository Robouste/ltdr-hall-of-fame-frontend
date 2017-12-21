import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		RouterModule.forRoot(appRoutes),
		SharedModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
