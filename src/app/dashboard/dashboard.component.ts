import { Component, OnInit } from '@angular/core';
import { Joke } from '../viewmodels/joke.model';
import { JokeService } from '../services/joke.service';
import { User } from '../viewmodels/user.model';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AddJokeDialogComponent } from './add-joke-dialog.component';
import { Vote } from '../viewmodels/vote.model';
import { VoteService } from '../services/votes.service';
import { LoginService } from '../services/login.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: 'dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

	public jokes: Array<Joke> = [];
	public users: Array<User> = [];

	constructor(
		private jokeService: JokeService,
		private voteService: VoteService,
		private loginService: LoginService,
		private dialog: MatDialog,
		private snackBar: MatSnackBar
	) { }

	ngOnInit() {
		this.getJokes();
	}

	getJokes() {
		this.jokeService.list()
			.subscribe((result) => {
				this.jokes = result;
			});
	}

	openAddJokeDialog() {
		if (!this.loginService.connectedUser) {
			this.openSnackBar("T'es pas connecté !");
			return;
		}
		const dialogRef = this.dialog.open(AddJokeDialogComponent, {
			width: '325px',
			disableClose: true
		});

		dialogRef.afterClosed().subscribe((value: Joke) => {
			if (value) {
				this.addJoke(value);
			}
		});
	}

	addJoke(joke: Joke) {
		this.jokeService.add(joke)
			.subscribe((result) => {
				this.getJokes();
			});
	}

	updateVote(joke: Joke, voteState) {
		if (!this.loginService.connectedUser) {
			this.openSnackBar("T'es pas connecté !");
			return;
		}
		if (this.userHasVoted(joke, voteState)) {
			this.openSnackBar("Tu peux pas voter deux fois la même chose grand");
			return;
		}
		const vote = new Vote();
		vote.jokeId = joke.id;
		vote.userId = this.loginService.connectedUser.id;
		vote.voteState = voteState;

		this.voteService.submitVote(vote)
			.subscribe(response => {
				this.getJokes();
			});
	}

	userHasVoted(joke: Joke, voteState) {
		return this.loginService.connectedUser ?
			joke.votes.find(f => f.userId === this.loginService.connectedUser.id && f.voteState === voteState)
			: false;
	}

	openSnackBar(message, duration = 5000) {
		this.snackBar.open(message, "Ok...", {
			duration: duration
		});
	}
}
