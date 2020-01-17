# Handling GIT like a pro

## Versioning

- Stage **all changed files** for commit :
    - `git add .`

- Commit **all staged files** :
    - `git commit -m "message"`

- Unstage files
    - `git reset`

- Revert everything **to the last commit** :
    - `git reset --hard`


## Observation

- List modified/new files **not yet commited** :
    - `git status`

- List changes to files **not yet staged**
    - `git diff`


## Branch management

- List all branches :
    - `git branch`

- Create a branch :
    - `git branch new_branch`

- Switch to a branch :
    - `git checkout my_branch`

- Delete a branch :
     - `git branch -d my_branch`

