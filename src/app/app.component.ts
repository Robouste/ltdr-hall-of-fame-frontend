import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from "@angular/cdk/layout";
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

	public mobileQuery: MediaQueryList;
	private _mobileQueryListener: () => void;

	public isAdmin = false;
	public isConnected = false;

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		media: MediaMatcher,
		private router: Router,
		private loginService: LoginService
	) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);

		router.events.subscribe(
			() => {
				this.isAdmin = loginService.isAdmin();
				this.isConnected = loginService.isConnected();
			}
		);
	}

	login() {
		this.router.navigate(['login']);
	}

	logout() {
		this.loginService.logout();
		this.router.navigate(['login']);
	}

	ngOnDestroy() {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}
}
