---
title: Configuring WSL2, Windows Terminal and Oh My Zsh
description: Do you like Windows 10 but love to develop on Linux? With WSL2, Windows Terminal and Oh My Zsh we can do wonders.
img: https://storage.verduzco.me/dotme/blog/wsl-zsh.png
opimg: https://storage.verduzco.me/dotme/blog/wsl-zsh-op-en.png
createdAt: 2020-12-05 10:00
updatedAt: 2020-12-05 10:00
category_id: dev-ops
category_name: DevOps
related: wsl2-windows-terminal-zsh
---

For **Web Development** with **Node.js or Python** I love working with a environment running in **Linux**, but for playing and doing everyday things I love **Windows 10**. Luckily I'm not the only one and Microsoft knows it, so they created **WSL2**.

From **WSL2** it is enough to say that it is a complete environment of **Linux** running on our **Windows 10**, about **Oh My Zsh** I will only say that it is the best to work with **Git**. I'm not going to go deeper into the subject because if the title caught your attention you surely know what I'm talking about.

I will also assume that you know how to install [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install-win10) on your computer and that you already have [Windows Terminal](https://www.microsoft.com/es-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab), this article is about how to run **Oh My Zsh with Windows Terminal** and configure its visual appearance. 

So to start with we just need to make sure we have version 2 of **WSL** with the following command in **PowerShell**:
~~~powershell {}[PowerShell]
wsl -l -v
~~~
The result should be as follows:
<center>

![Versión de WSL](https://storage.verduzco.me/dotme/blog/wsl-version-ps.png)

</center>

What follows is to install **Oh My Zsh** so we execute the following commands to install the prerequisites: 

~~~bash {}[Bash]
sudo apt update
sudo apt install git zsh -y
~~~

Once we have the prerequisites we will run the installation:

~~~bash {}[Bash]
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
~~~

When he asks us if we want to use ***zsh*** as a terminal we say yes.

The next step is to configure the theme, in my case I like `agnoster` so with the `vi ~/.zshrc` command we edit the file and make sure the theme configuration line looks like this: `ZSH_THEME="agnoster"`.

Then we have to add our style to **Windows Terminal**, so we open the configuration which is a `.json` file and edit it to look like this:
~~~json {}[settings.json]
"schemes": [
    {
        "background" : "#002B36",
        "black" : "#002B36",
        "blue" : "#268BD2",
        "brightBlack" : "#657B83",
        "brightBlue" : "#839496",
        "brightCyan" : "#D33682",
        "brightGreen" : "#B58900",
        "brightPurple" : "#EEE8D5",
        "brightRed" : "#CB4B16",
        "brightWhite" : "#FDF6E3",
        "brightYellow" : "#586E75",
        "cyan" : "#2AA198",
        "foreground" : "#93A1A1",
        "green" : "#859900",
        "name" : "wsl",
        "purple" : "#6C71C4",
        "red" : "#DC322F",
        "white" : "#93A1A1",
        "yellow" : "#B58900"
    }
],
~~~

To apply the style we simply add the following line `"colorScheme" : "wsl"` in the profile of the **Terminal** corresponding to **WSL**:
~~~json {}[settings.json]
{
    "guid": "{c6eaf9f4-32a7-5fdc-b5cf-066e8a4b1e40}",
    "hidden": false,
    "name": "Ubuntu",
    "source": "Windows.Terminal.Wsl",
    "colorScheme" : "wsl"
}
~~~

Now we need to install the fonts so that our **Terminal** is able to show icons like the one in **Git**. For this we have to be able to run `git clone` in **PowerShell**. To do the installation we place ourselves in an empty folder and run the following:

~~~powershell {}[PowerShell]
git clone https://github.com/powerline/fonts.git
cd fonts
.\install.ps1
~~~

When the *script* finishes installing all the fonts we simply add the one we want to use in the profile settings of **Windows Terminal**: 

~~~json {}[settings.json]
{
    "guid": "{c6eaf9f4-32a7-5fdc-b5cf-066e8a4b1e40}",
    "hidden": false,
    "name": "Ubuntu",
    "source": "Windows.Terminal.Wsl",
    "colorScheme" : "wsl",
    "fontFace" : "DejaVu Sans Mono for Powerline"
}
~~~
In the penultimate step of our configuration we will change the way the username is displayed and hide the name of the computer. 

To do this we must open the *zsh* configuration file:

~~~bash {}[Bash]
vi ~/.oh-my-zsh/themes/agnoster.zsh-theme
~~~

And replace **line 92** with the following one:

~~~bash {}[Bash]
prompt_segment green black "%(!.%{%F{yellow}%}.)%n"
~~~

Finally, we only change the default path that opens when we launch the console so that our main folder of **Linux** is opened and not that of **Windows**. To achieve this we just execute `vi ~/.zshrc` and add the following line:

~~~bash {}[Bash]
cd ~
~~~

And that's it, now we will have an extremely nice **Terminal** as a result.

<center>

![Versión de WSL](https://storage.verduzco.me/dotme/blog/zsh-wsl.png)

</center>

## Note

The transparency effect is best set in the global profile within the **Windows Terminal** settings: 

~~~json {}[settings.json]
"defaults":
    {
        // Put settings here that you want to apply to all profiles
        "useAcrylic": true, 
        "acrylicOpacity": 0.4
    },
~~~

## Tips

If we're using ***nvm*** to manage the versions of **Node.js** the commands won't be recognized, to fix this just run `vi ~/.zshrc` and add the following to the file:

~~~bash {}[Bash]
export NVM_DIR=~/.nvm
 [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
~~~

If we want the integrated **Terminal** of **Visual Studio Code** to look beautiful as it should, we have to add in the installation configuration of ***WSL*** inside **Code** the font that allows to show the icons in the **Terminal**:

~~~json {}[settings.json (Remote)]
{
    "terminal.integrated.fontFamily": "DejaVu Sans Mono for Powerline"
}
~~~

And that's it... with these settings we will have a **Terminal** in which it is a pleasure to work within **Visual Studio Code**. 

<center>

![Versión de WSL](https://storage.verduzco.me/dotme/blog/zsh-code.png)

</center>

That's all for today, I hope you enjoy your professional environment to develop super cool things. Remember that if your company needs advice for this and many other issues you can always send me a message and I see how I can help.