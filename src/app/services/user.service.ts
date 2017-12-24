import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../viewmodels/user.model';

declare module String {
	export let format: any;
}

@Injectable()
export class UserService {

	private url: string;
	private promoteUrl: string;
	private demoteUrl: string;
	private updatePasswordUrl: string;

	constructor(private http: HttpClient) {
		this.url = environment.serverURL + "Users";
		this.promoteUrl = this.url + "/{0}/Promote";
		this.demoteUrl = this.url + "/{0}/Demote";
		this.updatePasswordUrl = this.url + "/{0}/UpdatePassword";
	}

	list(): Observable<any> {
		return this.http.get(this.url)
			.pipe();
	}

	add(user: User): Observable<any> {
		const data = {
			name: user.name,
			description: user.description
		};
		return this.http.post<User>(this.url, data)
			.pipe();
	}

	promote(id): Observable<any> {
		return this.http.get(String.format(this.promoteUrl, id))
			.pipe();
	}

	demote(id): Observable<any> {
		return this.http.get(String.format(this.demoteUrl, id))
			.pipe();
	}

	updatePassword(userId, password: string): Observable<any> {
		const data = {
			password: password
		};

		return this.http.put(String.format(this.updatePasswordUrl, userId), data)
			.pipe();
	}
}
