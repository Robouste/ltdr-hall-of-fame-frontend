import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

declare module String {
	export let format: any;
}

@Injectable()
export class UserService {

	private url: string;
	private promoteUrl: string;
	private demoteUrl: string;

	constructor(private http: HttpClient) {
		this.url = environment.serverURL + "Users";
		this.promoteUrl = this.url + "/{0}/promote";
		this.demoteUrl = this.url + "/{0}/demote";
	}

	list(): Observable<any> {
		return this.http.get(this.url)
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
}
