import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../viewmodels/user.model';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoginService {

	private url = "http://localhost:60559/api/Login";
	private httpOptions = {
		headers: new HttpHeaders({'Content-type': 'application/json'})
	};

	private token: string;
	public connectedUser: User;

	constructor(private http: HttpClient) { }

	login(user: User): Observable<any> {
		return this.http.post<User>(this.url, user, this.httpOptions)
			.pipe(
				tap(result => {
					this.setSession(result.token);
					this.connectedUser = result.user;
				})
			);
	}

	private setSession(authResult) {
		localStorage.setItem("id_token", authResult);
	}

	logout() {
		this.connectedUser = null;
		localStorage.removeItem("id_token");
	}
}
