import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vote } from '../viewmodels/vote.model';
import { environment } from '../../environments/environment';

@Injectable()
export class VoteService {

	private url = "";
	private httpOptions = {
		headers: new HttpHeaders({'Content-type': 'application/json'})
	};

	constructor(private http: HttpClient) {
		this.url = environment.serverURL + "Votes";
	}

	submitVote(vote: Vote) {
		return this.http.post(this.url, vote, this.httpOptions)
			.pipe();
	}
}
