import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

	constructor(private http: HttpClient) { }

	list(): Observable<any> {
		return this.http.get("http://localhost:60559/api/Users")
			.pipe();
	}
}
