import { Vote } from './vote.model';

export class Joke {
	id: number;
	description: string;
	author: string;
	votes: Array<Vote> = [];

	public get upvotes(): Vote[] {
		return this.votes.filter(vh => vh.voteState === 1);
	}

	public get downvotes(): Vote[] {
		return this.votes.filter(vh => vh.voteState === -1);
	}

	constructor(id = null, description = "", author = "", votes = []) {
		this.id = id;
		this.description = description;
		this.author = author;
		this.votes = votes;
	}

	public getUserList(vote: Vote[] = this.votes) {
		return vote.map(v => v.user.name).join("\n");
	}
}
