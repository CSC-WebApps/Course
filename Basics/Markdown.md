# Markdown

*Markdown*, is a plain text format that can be used to express stylized text. Often other programs or tools will render markdown as html (or even pdf). It is also commonly used in platforms, such as Github, to format issues, and homepages for repositories. You can mix and match html with markdown, but there are limits, as tags such as `<script></script>` are often stripped.

How about an example. The following markdown syntax, would appear as follows:

```markdown
##### Example Header (like <h5>Header</h5>)

Paragraphs are separated by a blank line.  A hard break can be created by adding two spaces after a sentance.

2nd paragraph. *Italic*, **bold**, and `monospace` (inline code). 
```

➡️ Renders as: ➡️ 

##### Example Header (like \<h5\>Header\</h5\>)

Paragraphs are separated by a blank line.  A hard break can be created by adding two spaces after a sentance.

2nd paragraph. *Italic*, **bold**, and `monospace` (inline code). 

## Lists, Blockquotes, Hrefs, and Images

You can do more advanced things, such as creating lists.

```markdown
Itemized lists look like:

  * this one
  * that one
  * the other one

> Block quotes are
> written like so.

Hrefs have an anchor in brackets [] and (link in parens): See [Markdown format](https://daringfireball.net/projects/markdown/)

Embedded Image: ![img](https://http.cat/100)
```

➡️ Renders as: ➡️

Itemized lists look like:

  * this one
  * that one
  * the other one

> Block quotes are
> written like so.

Hrefs have an anchor in brackets [] and (link in parens): [Markdown format](https://daringfireball.net/projects/markdown/)

Embedded Image: ![img](https://http.cat/100)

## Code

```
Code (`inline code`):

    print “Code is just indented four spaces”;
```

➡️ Renders as: ➡️

Code (`inline code`):

    print “Code is just indented four spaces”;


You can also create code using "code fences".

    ```python
    n = 50 # We want to find prime numbers between 2 and 50

    print sorted(set(range(2,n+1)).difference(set((p * f) for p in range(2,int(n**0.5) + 2) for f in range(2,(n/p)+1))))
    ```

➡️ Renders as: ➡️

```python
n = 50 # We want to find prime numbers between 2 and 50

print sorted(set(range(2,n+1)).difference(set((p * f) for p in range(2,int(n**0.5) + 2) for f in range(2,(n/p)+1))))
```


## Tables

There are many different "flavors" of markdown. [Github-flavored markdown](https://help.github.com/articles/organizing-information-with-tables/) supports "tables". Which can be nice to report data results:

```
| Parameters     | 5% tfidf scores - 34 nodes | 10 % tfidf score - 34 nodes | original result for 2 GB - 34 nodes |
| ------------- |:-------------:|:-------------:|:-------------:|
| Vocabsize | 19529 | 39172 | 262144 |
| Total Token size for training | 256469820 | 238648536 | 211167796 |
| Total documents size for training | 209313401 | 209313401 | 7706477 |
| Total Time | 17 min | 24 min | 33 min |
| Total used memory     | 3.5 GB | 4.5 GB | 3.1 GB |
| Memory usage per node | 100 MB | 250 MB | 100 MB |
| Input per node | 5 GB | 6 GB | 3GB |
```
| Parameters     | 5% tfidf scores - 34 nodes | 10 % tfidf score - 34 nodes | original result for 2 GB - 34 nodes |
| ------------- |:-------------:|:-------------:|:-------------:|
| Vocabsize | 19529 | 39172 | 262144 |
| Total Token size for training | 256469820 | 238648536 | 211167796 |
| Total documents size for training | 209313401 | 209313401 | 7706477 |
| Total Time | 17 min | 24 min | 33 min |
| Total used memory     | 3.5 GB | 4.5 GB | 3.1 GB |
| Memory usage per node | 100 MB | 250 MB | 100 MB |
| Input per node | 5 GB | 6 GB | 3GB |

## Markdown editors

* Online: Github's built in editors are great for simple Markdown editing!
* Online: Also see: http://dillinger.io/
* Mac: [MacDown](http://macdown.uranusjr.com/)
* IPad: [ByWord](https://itunes.apple.com/us/app/byword/id482063361?mt=8)
* Windows: [MarkdownPad 2](http://markdownpad.com/download.html)  
  If you have trouble seeing a html preview, you may need to install the [Awesomium SDK](http://markdownpad.com/download/awesomium_v1.6.6_sdk_win.exe). More details [here](http://markdownpad.com/faq.html#livepreview-directx). Restart Markdown Pad 2 after install.



### Integrated development environments (IDEs)

> *If you're still opening and editing files in Notepad.exe, let's show you a better way!*

IDEs are an important part of a professional programming environment. You can perform many tasks such as editing, refactoring, compiling, testing, and debugging. IDEs also usually support an extensive set of plugins that help you integrate with other tools, such as maven, or performing style checking of your code.

#### Lightweight IDEs/editors

While traditional IDEs such as Visual Studio or Eclipse are industry standards, that's not the only option out there!

If you need to quickly edit code scripts, html, or markdown, features such as syntax highlighting, autocomplete, and advanced find and replace tools are essential! However, _you may not want to fire up Eclipse to change just one character_. Here are some alternative IDEs to consider.

![image](https://cloud.githubusercontent.com/assets/742934/15635554/4360c340-25af-11e6-9d9c-c6ffe4b6b5be.png)

* [Code](https://code.visualstudio.com/)
* [Atom](https://atom.io/)
* Level up vim: Put some of these stuff in [your vimrc](https://github.com/thoughtbot/dotfiles/blob/master/vimrc).
* ... Missing something? Send a pull request.

**Exercise**: Install [VSCode](https://code.visualstudio.com/download)!

Alternatively, you can use package managers to install VS Code:

Windows: 

```bash
choco install vscode -y
```

Mac:

```bash
brew install visual-studio-code
```

## Practice: Create an About Me Page

Update your README.md in 'Basics/' in your favorite editor. Using your new markdown skills, include the following details:

* Something about you.
* Where you are from.
* A picture.
* A list of skills
* If brave, a table and a favorite code snippet.

Commit and push the code to your remote repository.