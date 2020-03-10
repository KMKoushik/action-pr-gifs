
<p align="center"><img width="300"src="https://media.giphy.com/media/diUKszNTUghVe/giphy.gif"></a></p>


# action-pr-gifs

Post GIF as comments for PRs based on type of the PR. [Checkout this sample PR](https://github.com/koushikmohan1996/action-pr-gifs/pull/3)

This action uses advanced NLP to detect whether the PR is feature or fix. 

Lol! Just kidding! It just matches with `fix`, `feat` in the title of the PR.

# Sample usage

```yml
 
name: PR

# Controls when the action will run. Triggers the workflow on push or pull request 
# events but only for the master branch
on:
  pull_request:
    branches: [ master ]
jobs:
  pr_check:
    runs-on: ubuntu-latest
    name: A job to Post comment on PR
    steps:
    - uses: actions/checkout@v2
    - name: PR Action
      uses: koushikmohan1996/action-pr-gifs@master
      with:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

# contributing

Nothing much! Just create a PR!


hello
