class Github {
  constructor() {
    this.client_id = "c945e8d852af5f49f96e";
    this.client_secret = "44a06a9ec2466b5a77c4304969c520f6809dbb39";
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
   const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

   const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

   const profile = await profileResponse.json();
   const repos = await reposResponse.json();

   return {
     profile,
     repos
   }
 }
}
