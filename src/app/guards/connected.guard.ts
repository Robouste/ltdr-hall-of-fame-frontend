import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../viewmodels/user.model';

@Injectable()
export class ConnectedGuard implements CanActivate {

	constructor(private loginService: LoginService, private router: Router) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (this.loginService.isConnected()) {
			return true;
		}
		this.router.navigate(['login']);
		return false;
	}
}
