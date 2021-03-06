import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../viewmodels/user.model';
import { MatSnackBar, MatDialog } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { AddUserDialogComponent } from './add-user-dialog.component';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

	public users: User[] = [];
	public currentUser: User;
	public newUser: User = new User();
	public loadingUsers = false;

	constructor(
		private userService: UserService,
		private loginService: LoginService,
		private snackBar: MatSnackBar,
		private dialog: MatDialog
	) { }

	ngOnInit() {
		this.currentUser = this.loginService.connectedUser || new User();
		this.getUsers();
	}

	promote(userId) {
		this.loadingUsers = true;
		this.userService.promote(userId)
			.subscribe(
				result => {
					this.getUsers();
				},
				(error: HttpErrorResponse) => {
					this.openSnackBar(error.error || error.statusText);
					this.loadingUsers = false;
				}
			);
	}

	demote(userId) {
		this.loadingUsers = true;
		this.userService.demote(userId)
			.subscribe(
				result => {
					this.getUsers();
				},
				(error: HttpErrorResponse) => {
					this.openSnackBar(error.statusText);
					this.loadingUsers = false;
				}
			);
	}

	getUsers() {
		this.loadingUsers = true;
		this.userService.list()
			.subscribe(
			result => {
				this.users = result;
			},
			(error: HttpErrorResponse) => {
				this.openSnackBar(error.error || error.status + ": " + error.statusText);
				this.loadingUsers = false;
			},
			() => {
				this.loadingUsers = false;
			}
			);
	}

	openAddUserDialog() {
		const dialogRef = this.dialog.open(AddUserDialogComponent, {
			width: "320px"
		});

		dialogRef.afterClosed().subscribe((user: User) => {
			if (user) {
				this.addUser(user);
			}
		});
	}

	addUser(user: User) {
		this.loadingUsers = true;
		this.userService.add(user)
			.subscribe(
				result => {
					this.getUsers();
				},
				error => {
					this.loadingUsers = false;
					this.openSnackBar(error.statusText);
				}
			);
	}

	openSnackBar(message, duration = 5000) {
		this.snackBar.open(message, "Ok...", {
			duration: duration
		});
	}

}
