import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../viewmodels/user.model';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { AuthResponse } from '../viewmodels/auth-response.model';

import * as moment from "moment";

@Injectable()
export class LoginService {

	private url = "";
	private httpOptions = {
		headers: new HttpHeaders({'Content-type': 'application/json'})
	};

	private _connectedUser: User = null;
	public get connectedUser(): User {

		if (this._connectedUser) {
			return this._connectedUser;
		}

		this._connectedUser = JSON.parse(localStorage.getItem("current_user")) as User;
		return this._connectedUser;
	}

	private _superUsers = [
		"gourou"
	];

	private _adminUsers = [
		"executeur"
	];

	private _lopetteUsers = [
		"disciple"
	];

	constructor(private http: HttpClient) {
		this.url = environment.serverURL + "Login";
	}

	login(user: User, stayLoggedIn = false): Observable<AuthResponse> {
		const data = {
			user: user,
			stayAlive: stayLoggedIn
		};

		return this.http.post<AuthResponse>(this.url, data, this.httpOptions)
			.pipe(
				tap((result: AuthResponse) => {
					this.setSession(result);
				})
			);
	}

	isSuperUser() {
		return this.isConnected() && this._superUsers.includes(this.connectedUser.role);
	}

	isAdmin() {
		return this.isConnected() && this._adminUsers.concat(this._superUsers).includes(this.connectedUser.role);
	}

	isConnected() {
		return this.connectedUser != null && moment().isBefore(this.getExpiration());
	}

	private setSession(authResult: AuthResponse) {

		const expiresAt = moment(authResult.expiresAt);

		this._connectedUser = null;
		localStorage.setItem("id_token", authResult.token);
		localStorage.setItem("current_user", JSON.stringify(authResult.user));
		localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
	}

	logout() {
		this._connectedUser = null;
		localStorage.removeItem("id_token");
		localStorage.removeItem("current_user");
		localStorage.removeItem("expires_at");
	}

	getExpiration() {
		const expiration = localStorage.getItem("expires_at");
		const expiresAt = JSON.parse(expiration);
		return moment(expiresAt);
	}
}
