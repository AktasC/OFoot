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
    - `git branch -r`

- Create a branch :
    - `git branch "my_branch"`
        - All branch names should start with `frontend || backend` followed by `/name_of_the_feature`
        - If there are any special caracters you should use the `"` double quotes or escape the caracter    
            Example : `git branch "frontend/user_&_dashboard"` OR `git branch frontend/user_\&_dashboard`

- Switch to a branch :
    - `git checkout "my_branch"`

![Create branch & Checkout](/img/new_branch.png)

- Create and switch to a branch simultaneously :
    - `git checkout -b "my_branch"`
- Delete a branch :
     - `git branch -d "my_branch"`

## Pull Requests

Once you've created a branch, you can create a pull request in order to merge it with the `master` branch.  

- Navigate to `https://github.com/o-clock-wave/projet-ofoot/compare`
    - Set `dev` (the target branch) as `base` and select **your branch** as `compare`
    - Click on `Create Pull Request`

![Compare branch before PR](/img/git_compare.png)

- Type in your title and add a comprehensive and explanatory description.
    - The title must be simple yet efficient enough to explain the whole "purpose" of the branch  
        Your description must include a list of modifications
    - You can also assign your peers as reviewers, notifying them when you create the PR.

![PR creation form](/img/pr_form.png)   
