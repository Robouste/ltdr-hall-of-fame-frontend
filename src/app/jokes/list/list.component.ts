
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { JokeService } from '../../services/joke.service';
import { Joke } from '../../viewmodels/joke.model';
import { MatTableDataSource, MatSnackBar, MatSort, MatDialog } from '@angular/material';
import { Vote } from '../../viewmodels/vote.model';
import { LoginService } from '../../services/login.service';
import { VoteService } from '../../services/votes.service';
import { ViewJokeDialogComponent } from './view-joke-dialog.component';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	public dataSource = new MatTableDataSource<Joke>([]);
	public displayedColumns = ["description", "author", "upvotes", "downvotes"];

	@ViewChild(MatSort) sort: MatSort;

	public isLoading = false;

	constructor(
		private jokeService: JokeService,
		private loginService: LoginService,
		private voteService: VoteService,
		private snackBar: MatSnackBar,
		private dialog: MatDialog
	) { }

	ngOnInit() {
		this.loadJokes();
	}

	refresh() {
		this.loadJokes();
	}

	loadJokes() {
		this.isLoading = true;
		this.jokeService.list()
			.subscribe(
				result => {
					this.dataSource = new MatTableDataSource<Joke>(result);
					this.dataSource.sort = this.sort;
				},
				error => {
					this.openSnackBar(error);
				},
				() => {
					this.isLoading = false;
				}
		);
	}

	applyFilter(filterValue: string) {
		filterValue = filterValue.trim();
		filterValue = filterValue.toLowerCase();
		this.dataSource.filter = filterValue;
	}

	updateVote(joke: Joke, voteState, event: MouseEvent) {

		event.stopPropagation();

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
				this.refresh();
			});
	}

	userHasVoted(joke: Joke, voteState) {
		return this.loginService.connectedUser ?
			joke.votes.find(f => f.userId === this.loginService.connectedUser.id && f.voteState === voteState)
			: false;
	}

	openJoke(joke: Joke) {
		const dialogRef = this.dialog.open(ViewJokeDialogComponent, {
			width: "320px"
		});
		dialogRef.componentInstance.joke = joke;
	}

	openSnackBar(message, duration = 3000) {
		this.snackBar.open(message, "Dismiss", {
			duration: duration
		});
	}
}
