import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Joke } from '../viewmodels/joke.model';

@Injectable()
export class JokeService {

	private url = "http://localhost:60559/api/Jokes";
	private httpOptions = {
		headers: new HttpHeaders({'Content-type': 'application/json'})
	};

	constructor(private http: HttpClient) { }

	list(): Observable<Joke[]> {
		return this.http.get<Joke[]>(this.url)
			.pipe(
				map((jokes: Joke[]) => jokes.map(joke => new Joke(joke.id, joke.description, joke.author, joke.votes))),
				catchError(this.handleError('getJokes', []))
			);
	}

	add(joke: Joke): Observable<any> {
		const toSend = {
			author: joke.author,
			description: joke.description
		};

		return this.http.post<Joke>(this.url, toSend, this.httpOptions)
			.pipe();
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// TODO: better job of transforming error for user consumption
			// this.log(`${operation} failed: ${error.message}`);

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}
}
