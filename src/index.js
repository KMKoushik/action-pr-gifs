const core = require('@actions/core');
const github = require('@actions/github');


try {
  const message = 'Well well well, Thanks for the PR';
  const githubToken = core.getInput('GITHUB_TOKEN');

  const { context } = github;
  if (context.payload.pull_request == null) {
    core.setFailed('No pull request found.');
  }

  const pullRequestNumber = context.payload.pull_request.number;
  const octokit = new github.GitHub(githubToken);

  octokit.issues.createComment({
    ...context.repo,
    issue_number: pullRequestNumber,
    body: message,
  });
} catch (error) {
  core.setFailed(error.message);
}
