const core = require('@actions/core');
const github = require('@actions/github');
const generateGif = require('./gifGenerator');


async function run() {
  try {
    const githubToken = core.getInput('GITHUB_TOKEN');

    const { context } = github;
    if (context.payload.pull_request == null) {
      core.setFailed('No pull request found.');
    }

    const pullRequestNumber = context.payload.pull_request.number;
    const prTitle = context.payload.pull_request.title;
    const octokit = new github.GitHub(githubToken);
    const message = generateGif(prTitle);

    octokit.issues.createComment({
      ...context.repo,
      issue_number: pullRequestNumber,
      body: message,
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
