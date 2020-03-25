export class UserItemRepoModel{
	constructor(data) {
		data = data || {};
		this.id = data.id;
		this.name = data.name;
		this.description = data.description;
		this.forks_count = data.forks_count;
		this.watchers_count = data.watchers_count;
		this.private = data.private;
		this.url = data.html_url;
		this.open_issues_count = data.open_issues_count;
	}
}

export class UserItemModel{
	constructor(data) {
		data = data || {};
		this.login = data.login;
		this.id = data.id;
		this.email = data.email;
		this.company = data.company;
		this.followers = data.followers;
		this.avatar_url = data.avatar_url;
		this.updated_at = data.updated_at;
		this.url = data.html_url;
	}
}

export class UserListItemModel{
	constructor(data) {
		data = data || {};
		this.login = data.login;
		this.id = data.id;
		this.avatar_url = data.avatar_url;
		this.url = data.html_url;
	}
}