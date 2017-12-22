import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vote } from '../viewmodels/vote.model';

@Injectable()
export class VoteService {

	private url = "http://localhost:60559/api/Votes";
	private httpOptions = {
		headers: new HttpHeaders({'Content-type': 'application/json'})
	};

	constructor(private http: HttpClient) { }

	submitVote(vote: Vote) {
		return this.http.post(this.url, vote, this.httpOptions)
			.pipe();
	}
}
