import { Vote } from './vote.model';

export class Joke {
	id: number;
	description: string;
	author: string;
	votes: Array<Vote> = [];

	public get upvotes(): number {
		return this.votes.filter(vh => vh.voteState === 1).length;
	}

	public get downvotes(): number {
		return this.votes.filter(vh => vh.voteState === -1).length;
	}

	constructor(id = null, description = "", author = "", votes = []) {
		this.id = id;
		this.description = description;
		this.author = author;
		this.votes = votes;
	}
}
