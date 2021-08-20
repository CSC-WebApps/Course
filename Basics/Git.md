
# Git

![image](https://cloud.githubusercontent.com/assets/742934/15635543/d1044ff6-25ae-11e6-9680-077830cff8f5.png)

### Why Version Control?

> You're working on a team project and need to make edits to reports and code. You waiting for your team member to make a change and then email you back another a copy. There has to be a better way...

"Version control is the lab notebook of the digital world: it’s what professionals use to keep track of what they’ve done and to collaborate with other people. Every large software development project relies on it, and most programmers use it for their small jobs as well. And it isn’t just for software: books, papers, small data sets, and anything that changes over time or needs to be shared can and should be stored in a version control system." -- [Version Control with Git](http://swcarpentry.github.io/git-novice/)


## Practice: Creating a Repo

Let's try the basics. Let's create a new local git repository.

Create a new directory (Basics) and file (README.md).

```bash|{type:'file', path: 'Basics/README.md'}
# Project 0
Hello!
```

We are going to create a new git repository, but maybe not the way you've done it before. 
In the next set of commands, we will be working inside the `Basics/` directory.

This will create a new .git directory to store commits and other objects.

```bash|{type:'command', path: 'Basics'}
git init
```

We can quickly inspect the contents of the git's directory and object store.

```bash|{type:'command', path: 'Basics'}
ls -l .git
echo "objects:"
ls -l .git/objects
```

Before adding a file to the repository, it must first be staged.

```bash|{type:'command', path: 'Basics'}
git add README.md
```

We will commit our staged changes into the repository.

```bash|{type:'command', path: 'Basics'}
git commit -m "initial commit"
```

Nice work!

### Stage, unstage, and discard changes

Changes flow from our working tree, to staging index, and into repository.

![git-staging](resources/imgs/git-staging.png)


**Exercise**: Use the following sets of steps and execute them in any order you wish. Observe what happens to the _working tree_ and _index_, by running the `git status` step.

Update the README.md and stage our change.

```bash|{type:'command', path: 'Basics', shell: 'bash'}
echo " Update: $(date)" >> README.md
cat README.md
git add README.md
```

View the current state of our **working tree** and **index**.

```bash|{type:'command', path: 'Basics'}
git status
```

Unstage file (remove from index), but keep changes in working tree.

```bash|{type:'command', path: 'Basics'}
git restore --staged README.md
```

Discard changes in worktree (we will lose our work!). This will restore changes to both the index and the working tree based on the latest version in the repo.

```bash|{type:'command', path: 'Basics'}
git restore --source=HEAD --staged --worktree README.md
```

### Remotes

While having a local git repository is cool, we should connect it to another remote repository. In other words, we have no place to `git push` to...

![git-remote](resources/imgs/git-remote.png)

#### Remote operations

* Get new data: `git fetch <remote> [branch]`
* Upload your data: `git push <remote> <branch>`
* Get new data and merge into working tree: `git pull <remote> <refspec>`

*Hot Take*: Avoid `git pull` on large repositories! You may want to handle merges yourself into your target branch instead of having git mess with your working tree.

**Exercise**: Let's open a terminal and perform the following steps.

```bash | {type: 'terminal'}
```

1. Create a repo on GitHub (If you are a NCSU student, use GitHub Enterprise: https://github.ncsu.edu). 

2. Follow the instructions on GitHub to add a remote url to an *existing git repository*. Basically, you need to run something like: `git remote add origin https://github.com/<user>/<repo>.git`

3. Push your changes to GitHub. Verify you can see your updated README.md!

4. On GitHub, edit the README.md, to say "Hello GitHub!". Commit the changes on GitHub. Now you have changes in your remote (origin), that are missing on your local copy.

5. Run `git pull` and verify you now have the updated changes.


## Git Branching Playground

Manipulating the commit graph can get quite complicated! This interactive visualization is very useful for getting a deeper understanding of how operations such as branches, merges, cherry-picking, and more work!

We will solve the "Introduction Sequence" levels in:  
http://pcottle.github.io/learnGitBranching/   

![example](https://cloud.githubusercontent.com/assets/742934/9494425/c4dd4b66-4bd3-11e5-9aac-04bfc8fed771.png)


## Git Configuration and Security

If you want to make sure your commits are properly linked to your GitHub account, make sure you have configured your computer to have your name and email filled out.

```
$ git config --global user.name "FirstName LastName"
$ git config --global user.email email@example.com
```

You might also consider an authenication strategy. If you're being asked to login everytime your pull/push to your remote repository, you might want to enable caching of your credentials. For example, you could use: 

```
git config --global credential.helper store
```

However, this may store your credentials in plain text on your computer. There are other platform-specific credential.helpers that you can use to more securely store your credentials. It is also possible to generate [personal access tokens](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) that you can use authenicate instead of a passcode.

An alternative approach is to use sshkeys. In this case, you have a public/private keypair, with the public key stored on GitHub. You then use a [different url pattern](https://help.github.com/articles/which-remote-url-should-i-use/) for your commands such as `git clone`. Instead of the `https://` prefix, you instead use `git@github.com:user/repo.git`.

If you are interested in exploring this option: See these guides on GitHub:
  * [Generating SSH Key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)
  * [Adding SSH Key to GitHub](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)
  * [Testing SSH Connection](https://help.github.com/articles/testing-your-ssh-connection/)

