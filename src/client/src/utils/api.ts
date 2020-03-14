import { GitHubUser } from '../../../shared/interface/github-user';

class Api {
  public fetchGitHubUsers = async (
    userNames: string[],
  ): Promise<GitHubUser[]> => {
    const users: GitHubUser[] = [];

    for (const name of userNames) {
      const url = `https://api.github.com/users/${name}`;
      const res = await fetch(url);

      users.push(await res.json());
    }

    return users;
  };
}

export const api = new Api();
