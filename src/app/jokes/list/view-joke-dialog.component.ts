import { Component, OnInit } from '@angular/core';
import { Joke } from '../../viewmodels/joke.model';

@Component({
	selector: 'app-view-joke-dialog',
	templateUrl: 'view-joke-dialog.component.html',
	styleUrls: ["./view-joke-dialog.component.scss"]
})

export class ViewJokeDialogComponent implements OnInit {

	public joke: Joke;

	constructor() { }

	ngOnInit() { }
}
