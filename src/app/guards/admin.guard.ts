import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class AdminGuard implements CanActivate {
	constructor(private loginService: LoginService, private router: Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

		if (this.loginService.isAdmin()) {
			return true;
		}
		else {
			this.router.navigate(['login']);
		}
		return false;
	}
}
