import { Component, OnInit } from '@angular/core';
import { Joke } from '../viewmodels/joke.model';
import { JokeService } from '../services/joke.service';
import { UserService } from '../services/user.service';
import { User } from '../viewmodels/user.model';
import { MatDialog } from '@angular/material';
import { AddJokeDialogComponent } from './add-joke-dialog.component';
import { Vote } from '../viewmodels/vote.model';
import { VoteService } from '../services/votes.service';

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
		private dialog: MatDialog
	) { }

	ngOnInit() {
		this.jokeService.list()
			.subscribe((result) => {
				this.jokes = result;
			});
	}

	openAddJokeDialog() {
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
				console.log(result);
			});
	}

	updateVote(jokeID, voteState) {
		const vote = new Vote();
		vote.jokeId = jokeID;
		vote.userId = 1;
		vote.voteState = voteState;

		this.voteService.submitVote(vote)
			.subscribe(response => {
				console.log(response);
			});
	}
}
