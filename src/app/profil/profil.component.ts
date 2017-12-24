import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';

declare var md5;

@Component({
	selector: 'app-profil',
	templateUrl: './profil.component.html',
	styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

	public password: string;
	public password2: string;

	public isLoading = false;

	constructor(
		private userService: UserService,
		private loginService: LoginService,
		private snackBar: MatSnackBar
	) { }

	ngOnInit() {
	}

	updatePassword() {

		this.isLoading = true;

		const password = md5(this.password);
		const userId = this.loginService.connectedUser.id;

		this.userService.updatePassword(userId, password)
			.subscribe(
				result => {
					this.openSnackBar("Mot de passe mis à jour !");
					this.isLoading = false;
				},
				(error: HttpErrorResponse) => {
					this.openSnackBar(error.error || error.statusText);
					this.isLoading = false;
				}
			);
	}

	openSnackBar(message, duration = 5000) {
		this.snackBar.open(message, "Ok...", {
			duration: duration
		});
	}

}
