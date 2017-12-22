import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { User } from '../../viewmodels/user.model';

@Component({
	selector: 'app-toolbar',
	templateUrl: 'toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent implements OnInit {

	public connectedUser: User;

	constructor(
		private loginService: LoginService,
		private router: Router
	) { }

	ngOnInit() {
		this.router.events.subscribe(() => {
			this.connectedUser = this.loginService.connectedUser;
		});
	}

	login() {
		this.router.navigate(['login']);
	}

	logout() {
		this.loginService.logout();
		this.router.navigate(['login']);
	}
}
