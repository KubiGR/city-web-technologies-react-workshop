import axios from "axios";

class GithubApi {
  constructor() {
    this.baseUrl = "https://api.github.com";
    this.token = process.env.REACT_APP_GITHUB_API_TOKEN;
    this.stateGistId = process.env.REACT_APP_GIST_STATE_ID;
  }

  async getGistState() {
    try {
      const response = await axios.get(
        `${this.baseUrl}/gists/${this.stateGistId}`
      );
      return JSON.parse(response.data.files["state.json"].content);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async updateGistState(state) {
    if (this.updatingState) return;

    this.updatingState = true;

    try {
      const response = await axios.patch(
        `${this.baseUrl}/gists/${this.stateGistId}`,
        {
          files: {
            "state.json": {
              content: JSON.stringify(state),
            },
          },
        },
        {
          headers: {
            Authorization: `token ${this.token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      this.updatingState = false;
    }
  }
}

const githubApi = new GithubApi();

export { githubApi };
