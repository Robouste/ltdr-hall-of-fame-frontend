import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

	private url: string;

	constructor(private http: HttpClient) {
		this.url = environment.serverURL + "Users";
	}

	list(): Observable<any> {
		return this.http.get(this.url)
			.pipe();
	}
}
