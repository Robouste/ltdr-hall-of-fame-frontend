import { Component, OnInit, ViewChild } from '@angular/core';
import { Joke } from '../viewmodels/joke.model';
import { JokeService } from '../services/joke.service';
import { User } from '../viewmodels/user.model';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AddJokeDialogComponent } from './add-joke-dialog.component';
import { Vote } from '../viewmodels/vote.model';
import { VoteService } from '../services/votes.service';
import { LoginService } from '../services/login.service';
import { ListComponent } from './list/list.component';

@Component({
	selector: 'app-jokes',
	templateUrl: 'jokes.component.html',
	styleUrls: ['./jokes.component.scss']
})

export class JokesComponent implements OnInit {

	public users: Array<User> = [];

	@ViewChild(ListComponent) listViewChild: ListComponent;

	constructor(
		private jokeService: JokeService,
		private voteService: VoteService,
		private loginService: LoginService,
		private dialog: MatDialog,
		private snackBar: MatSnackBar
	) { }

	ngOnInit() {
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
				this.listViewChild.refresh();
			});
	}

	openSnackBar(message, duration = 5000) {
		this.snackBar.open(message, "Ok...", {
			duration: duration
		});
	}
}
