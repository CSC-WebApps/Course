## Preliminary Course Setup

```bash
 _    _      _      ___                  
| |  | |    | |    / _ \                 
| |  | | ___| |__ / /_\ \_ __  _ __  ___ 
| |/\| |/ _ \ '_ \|  _  | '_ \| '_ \/ __|
\  /\  /  __/ |_) | | | | |_) | |_) \__ \
 \/  \/ \___|_.__/\_| |_/ .__/| .__/|___/
                        | |   | |        
                        |_|   |_|

The Ottomatica Distribution ttyS0

v2021.8 - Kernel 5.10.1

ncsu-csc login: ░
```

### Communication channels

1. We will use [Discord](https://discord.com/), a platform supporting instant messaging, group discussion in channels, and even voice, and video broadcasts, for course communication, clarification questions, class activities, and announcements. You can get the Desktop and mobile app or use the web version.  

    You can join the server using this signup link:
    (_Provided in email._)

### Development Tools

We will be use using node.js through the course.

2. Follow the instructions to install [nodejs](https://nodejs.org/en/). 

_If running nodejs on Windows, you may want to check the option to install devtools, which will improve your ability to build c/c++ based modules on windows_.

### Docable Notebooks

3. We will use online docable notebooks for some learning exercises and workshops. You should be able to run the notebooks in your browser.

```js | {type: 'script'}
let keyboard = (_=>[..."`1234567890-=~~QWERTYUIOP[]\\~ASDFGHJKL;'~~ZXCVBNM,./~"].map(x=>(o+=`/${b='_'.repeat(w=x<y?2:' 667699'[x=["BS","TAB","CAPS","ENTER"][p++]||'SHIFT',p])}\\|`,m+=y+(x+'    ').slice(0,w)+y+y,n+=y+b+y+y,l+=' __'+b)[73]&&(k.push(l,m,n,o),l='',m=n=o=y),m=n=o=y='|',p=l=k=[])&&k.join`
`)();

console.log(keyboard);
```

### Opunit checks

Do you have a functioning development environment needed for the course? 

We have a tool that can help check. On your computer

4. Inside a [terminal](https://github.com/chrisparnin/EngineeringBasics/blob/master/Shells.md#shells), run:

```bash
npm install ottomatica/opunit -g
```

5. On your computer, now run:

```bash
opunit profile CSC-DevOps/profile:342.yml
```

You should see something like:

![opunit-pass](https://github.com/CSC-DevOps/Course/raw/master/imgs/opunit-pass.png)

For more details about this report, [see this page](https://github.com/CSC-DevOps/profile). You will want to have as many green checks as possible before starting class.
