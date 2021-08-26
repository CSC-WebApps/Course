
# Shells

A shell is a computing environment where commands can be interpreted, evaluated, and its output displayed (i.e., an instance of a *read–eval–print* loop (REPL)). A good shell provides access to a rich set of commands and allows simple programming of commands, which can be used to create powerful scripts and tools.

```bash|{type:'command'}
ls /etc -R | grep ":$" | sed -e "s/:$//" -e "s/[^-][^\/]*\//--/g" -e "s/^/ /" -e "s/-/|/"
```

**But with great power comes great bullshittery**. Commands and their options can be "terse, inconsistent, and difficult to learn". A steep learning curve often prevents novices from enjoying the eventual payoff. If you've hardly used a command line environment before, you might want to go review this more thorough tutorial:
[software carpentry: shell-novice](http://swcarpentry.github.io/shell-novice/index.html)---this page is more of a discussion of common tasks and mistakes, advanced topics, and resources.

You may also want to reference the online book, [the Unix Workbench](https://seankross.com/the-unix-workbench/).

## Shell Basics

Depending on your operating system and desktop manager, you have many ways to open up a shell. There may even be several different choices for shell programs.

### Accessing and Using Shells

* **Mac**: you can run the Terminal in Applications and pin to your Dock.

* **Windows**: You access a shell in several ways. You can right click on the Windows Icon in the Task Bar and open a terminal window. You can also type in the name of the shell program in the search bar (e.g., Cmd/Powershell). 

*Tip*: IDES, such as VS Code provide easy access to a terminal (View ⇨ Terminal).


### Privileged commands

Some commands require adminstrative or super user privileges.

* **Mac/Linux**: To access a privileged shell, you simply can run `su` or prepend a command with `sudo`. `sudo` will cache your password, typically for 5 minutes, after successfully running a command. To avoid typing a password at all, you may add your user to `/etc/sudoers`---note it is recommended you make changes to this file using the special utility: [visudo](https://www.digitalocean.com/community/tutorials/how-to-edit-the-sudoers-file).

* **Windows**. If you need to run a command with admin, you must start a shell with admin privilege. There is typically an admin command shell available in the menu when right clicking the Windows Icon on the Task Bar. You can also get one from right clicking the Cmd executable in the search bar.

   *Tip*: If opening up a cmd shell in admin mode, make sure you do not perform operations, such as `git clone` in your current directory (`C:\WINDOWS\system32`). Otherwise, you will be writing to a location that only admin will have access to which will make it difficult to run the commands/tasks you are intending on doing.

### Deciding on a Terminal/Shell for Windows

In windows, you can use Cmd, Powershell, or emulated shells, such as Bash for Git, or Bash with Windows Linux Subsystem (WSL). 

`Cmd` is tried and true, and if you [made windows awesome](setup/configure-shell.md), will mostly what you want to do. The downsides are that interactions such as copy/paste are a little clunky. However, if open up a terminal with Cmd through Code, then this problem is mostly eliminated. `Powershell` is a powerful shell, with great scripting support. However, the syntax is esoteric and inconsistent with any other shell you may use. For example, running common linux commands like `cd ~ && ls` does not work in Powershell.

Enumlated shells are useful for getting a _linux-like_ experience in Windows. Unfortunately, there are **many downsides to using emulated shells**. One downside is that you may be limited in accessing other executables/environments on windows. 
For example, with `WSL`, you are actually running commands inside a small virtual machine, which limits your ability to run commands from windows. In general, using `WSL`, will turn on Hyper-V, which essentially breaks virtualization for tools, such as VirtualBox. In `Git Bash`, node packages and environment settings you setup will not work as expected when running in Cmd/etc. Furthermore, you never truly escape Windows, for example, Windows style newline endings `'\r\n'` may exist in files you edit, which will break bash scripts. Another common problem is that when you install packages, you will often get libraries for linux binaries, which then will not work when running outside of the emulated shell.

As a result, emulated shells seem helpful, but often create more problems than they solve.

*Tip*: Personal recommendation---stick with `Cmd` for system installation, and use a virtual machine if you truly need a linux environment.

### Commands

99% of the reason you use shells is to run useful commands.

##### Essential commands.

* **`ls`**: list content of a directory.
* **`cd`**: change directories to a new path.
* **`mkdir`**: make a new directory.
* **`pwd`**: output current directory
* **`cp`**: copy files
* **`rm`**: rm files
* **`touch`**: make a new file/update status**
* **`cat`**: output the contents of a file.
* **`head`**: output the first lines of a file.
* **`tail`**: output the last lines of a file.
* **`grep`**: search files for a key phrase.
* **`wget`**: retrieve file from the web.
* **`cut`**: extract output of a file (columns)
* **`awk`** and **`sed`**: Magic commands for extracting, searching, and transforming content.

##### Combining commands

Command can run sequentially or conditionally:

```bash
command1 ; command2
(command1 ; command2) # in a sub-shell
command1 || command2  # do command2 only if command1 fails
command1 && command2  # do command2 only if command1 succeeds
```

*Note*: In Windows, `;` does not work in Cmd, but does in Powershell. Use `&&` for the most portable operation.

Try running this command that combines these shell commands.

```bash|{type: 'command'}
echo "Hello World" > shells-test.txt && cat shells-test.txt
```

Now, try using the `||` operator. 

```bash|{type: 'command', }
cat shells-test.txt || echo "backup plan"
```

See what happens in this case.

```bash|{type: 'command', failed_when: "!stdout.includes('backup plan')"}
cat filedoesnotexist.txt || echo "backup plan"
```

##### Command I/O

The UNIX shell commands push data from sources through filters along pipes. Normally, each command runs as a process and reads and writes data the following way:

* **Standard input (stdin)**: get information from keyboard.
* **Standard output (stdout)**: write information as output to console.
* **Standard error (stderr)**: write error information as output to console.

Pipes and redirects change stdin and stdout from default sources. For example, we can change the stdin of a process to be piped from the output of another process. Or rather than printing to the console, we can get a process to write to a file.

```bash
command              # default standard in and standard out
command < inputFile  # redirect of inputFile contents to command as standard in
command > outputFile # redirect command output to outputFile as standard out
command1 | command2  # pipes output of command1 as standard in to command2
```

## Activity: Data Wrangling with bash

Download data with `wget`.

```bash|{type:'command'}
wget -nc https://perso.telecom-paristech.fr/eagan/class/igr204/data/film.csv --show-progress --progress=bar:force 2>&1
```

Data wrangling. 

List the first three rows of the film.csv file

```bash|{type:'command'}
head -n 3 film.csv
```

Extract a column of text from a file, using `cut`, skip over first line with `tail`, and then preview first 10 rows with `head`.

Run this command, then modify it to extract other rows.

```bash|{type:'command'}
cut -f 3 -d ';' film.csv | tail -n +3 | head 
```

#### Exercise: Data Science with Bash

Using a combination of `cut`, `wc`, `head`, `tail`, `grep`, `sort`, `uniq`, pipes (`|`) and any other unix suitable commands, create a command that calculates the following.

**Extend the following commands** to try to accomplish each task:

1. Count the number of columns inside the "users.*.csv" file.

```bash|{type:'command', failed_when:"!stdout.includes('10')"}
head -n 1 film.csv | tr ';' '\n'
```

2. Count the number of times "City" is included in the movie title.

```bash|{type:'command', failed_when:"!stdout.includes('7')"}
cut -f 3 -d ';' film.csv | head
```

3. Find the longest movie.

```bash|{type:'command', failed_when:"stdout.charAt(9)!='H'"}
 
```

*Warning*: While this can be useful for quick and dirty analysis, for more serious processing, you will want to use a more robust csv parser. For example, using `awk` to count the number of fields (NF) seperated by `;`, we can see, that some data may be incorrect. This is because quoted semi-columns are not being escaped by the bash commands.

### Try on your own

``` | {type: 'terminal'}
```