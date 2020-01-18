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


## Pull Requests

Once you've created a branch, you can create a pull request in order to merge it with the `master` branch.  

- Navigate to `https://github.com/o-clock-wave/projet-ofoot/compare`
    - Leave `base` (the target branch) as `master` and select **your branch** as `compare`
    - Click on `Create Pull Request`
- Type in your title and add a comprehensive and explanatory description.
    - The title must be simple yet efficient enough to explain the whole "purpose" of the branch
    - Your description must include a list of modifications
