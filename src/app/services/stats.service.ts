import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Stats } from '../viewmodels/stats.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StatsService {

	private url = "";
	private httpOptions = {
		headers: new HttpHeaders({'Content-type': 'application/json'})
	};

	constructor(
		private http: HttpClient
	) {
		this.url = environment.serverURL + "Stats";
	}

	getStats(): Observable<Stats> {
		return this.http.get<Stats>(this.url)
			.pipe();
	}
}
