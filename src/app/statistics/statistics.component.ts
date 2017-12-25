import { Component, OnInit } from '@angular/core';
import { StatsService } from '../services/stats.service';
import { Stats } from '../viewmodels/stats.model';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
	selector: 'app-statistics',
	templateUrl: './statistics.component.html',
	styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

	public isLoading = false;
	public stats: Stats;

	constructor(
		private statsService: StatsService,
		private snackBar: MatSnackBar
	) { }

	ngOnInit() {
		this.getStats();
	}

	getStats() {
		this.isLoading = true;
		this.statsService.getStats()
			.subscribe(
				result => {
					this.stats = result;
					this.isLoading = false;
				},
				(error: HttpErrorResponse) => {
					this.openSnackBar(error.error || error.statusText);
					this.isLoading = false;
				}
			);
	}

	openSnackBar(message, duration = 5000) {
		this.snackBar.open(message, "Ok...", {
			duration: duration
		});
	}

}
