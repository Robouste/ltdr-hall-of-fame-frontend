import { Component, OnInit } from '@angular/core';
import { User } from '../viewmodels/user.model';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

declare var md5;

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public user: User = new User();
	public testicule: string;

	public isLoading = false;

	constructor(
		private loginService: LoginService,
		private snackBar: MatSnackBar,
		private router: Router
	) { }

	ngOnInit() {
	}

	login() {
		this.isLoading = true;
		const user = new User();
		user.name = this.user.name;
		user.password = md5(this.user.password);

		this.loginService.login(user)
			.subscribe(
				result => {
					this.router.navigate(['jokes']);
				},
				error => {
					this.openSnackBar(error);
				},
				() => {
					this.isLoading = false;
				}
			);
	}

	test() {
		this.testicule = md5(this.user.password);
	}

	openSnackBar(message, duration = 5000) {
		this.snackBar.open(message, "Ok...", {
			duration: duration
		});
	}
}
