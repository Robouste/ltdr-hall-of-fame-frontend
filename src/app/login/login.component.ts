import { Component, OnInit } from '@angular/core';
import { User } from '../viewmodels/user.model';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

declare var md5;

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public user: User = new User();
	public testicule: string;

	constructor(
		private loginService: LoginService,
		private router: Router
	) { }

	ngOnInit() {
	}

	login() {
		this.user.password = md5(this.user.password);

		this.loginService.login(this.user)
			.subscribe(result => {
				this.router.navigate(['jokes']);
			});
	}

	test() {
		this.testicule = md5(this.user.password);
	}
}
