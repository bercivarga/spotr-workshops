# Git

- `git init`
- `git clone {remote url}`
- `git status`
- `git add` `--all`/`*`
- `git commit` `-m` `-am` -> only for files you've already added `--amend -m`
- `git log` `--all --decorate --oneline --graph` (adog)
- `git diff` `{your branch}` -> can be omitted if you're on this branch `{target branch}` | Seeing the differences between the local and remote version of a branch would look like this: `git diff branch_name origin/branch_name`
- `git branch` `-d` 
- `git checkout` `{branch name}` 
- `git push`
- `git fetch` `--all`
- `git pull` `--all`
- `git merge` `{target branch, e.g. test or origin/test}`
- `git reset` `--hard` (delete file changes and move to commit) `--soft` (keep file changes and move to commit) `HEAD~N` --> where N is the number of commits you want to go back
- `git revert` `HEAD~N` --> where N is the number of commits you want to go back
- Don't forget to commit after resolving conflicts or reverting!