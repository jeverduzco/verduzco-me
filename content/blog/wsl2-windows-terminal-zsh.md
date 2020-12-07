---
title: Configurando WSL2, Windows Terminal y Oh My Zsh
description: ¿Te gusta Windows 10 pero amas desarrollar en Linux? Con WSL2, Windows Terminal y Oh My Zsh podemos hacer maravillas.
img: https://storage.verduzco.me/dotme/blog/wsl-zsh.png
opimg: https://storage.verduzco.me/dotme/blog/wsl-zsh-op.png
createdAt: 2020-12-05 10:00
updatedAt: 2020-12-05 10:00
category_id: dev-ops
category_name: DevOps
---

Para el **Desarrollo Web** con **Node.js o Python** me encanta trabajar con un entorno corriendo en **Linux**, pero para jugar y hacer cosas cotidianas amo a **Windows 10**. Afortunadamente no soy el único y Microsoft lo sabe, así que crearon **WSL2**. 

De **WSL2** basta decir que es un entorno completo de **Linux** corriendo en nuestro **Windows 10**, sobre **Oh My Zsh** solo diré que es lo mejor para trabajar con **Git**. No voy a profundizar más en el tema ya que si el titúlo te llamó la atención seguramente sabes de qué estoy hablando.

También voy a asumir que sabes instalar [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install-win10) en tu computadora y que ya tienes [Windows Terminal](https://www.microsoft.com/es-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab), este articulo va sobre cómo hacer funcionar **Oh My Zsh con Windows Terminal** y configurar su aspecto visual. 

Así que para empezar solo hay que asegurarnos de que tenemos la versión 2 de **WSL** con el siguiente comando en **PowerShell**:
~~~powershell {}[PowerShell]
wsl -l -v
~~~
El resultado debe ser el siguiente:
<center>

![Versión de WSL](https://storage.verduzco.me/dotme/blog/wsl-version-ps.png)

</center>

Lo que sigue es instalar **Oh My Zsh** así que ejecutamos los siguientes comandos para instalar los prerrequisitos: 

~~~bash {}[Bash]
sudo apt update
sudo apt install git zsh -y
~~~

Una vez que tenemos los prerrequisitos vamos a ejecutar la instalación: 

~~~bash {}[Bash]
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
~~~

Cuando nos pregunte si queremos usar ***zsh*** como terminal le decimos que sí.

El siguiente paso es configurar el tema, en mi caso me gusta `agnoster` así que con el comando `vi ~/.zshrc` editamos el archivo y nos aseguramos de que la línea de configuración del tema este así: `ZSH_THEME="agnoster"`

Después hay que agregar nuestro estilo a **Windows Terminal**, así que abrimos la configuración que es un archivo `.json` y lo editamos para que se vea así:
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

Para aplicar el estilo simplemente agregamos la siguiente línea `"colorScheme" : "wsl"` al perfil de la **Terminal** correspondiente a **WSL**:
~~~json {}[settings.json]
{
    "guid": "{c6eaf9f4-32a7-5fdc-b5cf-066e8a4b1e40}",
    "hidden": false,
    "name": "Ubuntu",
    "source": "Windows.Terminal.Wsl",
    "colorScheme" : "wsl"
}
~~~

Ahora nos falta instalar las fuentes para que nuestra **Terminal** sea capaz de mostrar iconos como el de **Git**. Para esto tenemos que poder ejecutar `git clone` en **PowerShell**. Para hacer la instalación nos situamos en una carpeta vacía y ejecutamos lo siguiente:

~~~powershell {}[PowerShell]
git clone https://github.com/powerline/fonts.git
cd fonts
.\install.ps1
~~~

Cuando el *script* termine de instalar todas las fuentes simplemente agregamos la que deseamos utilizar en los ajustes del perfil de **Windows Terminal**: 

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
En el penúltimo paso de nuestra configuración cambiaremos la forma en la que se muestra el nombre de usuario y ocultaremos el nombre del equipo. 

Para lograrlo hay que abrir el archivo de configuración de *zsh*:

~~~bash {}[Bash]
vi ~/.oh-my-zsh/themes/agnoster.zsh-theme
~~~

Y sustituir la **línea 92** por la siguiente:

~~~bash {}[Bash]
prompt_segment green black "%(!.%{%F{yellow}%}.)%n"
~~~

Por último, solo cambiamos la ruta por defecto que se abre cuando lanzamos la consola para que se abra nuestra carpeta principal de **Linux** y no la de **Windows**. Para lograrlo solo ejecutamos `vi ~/.zshrc` y agregamos la siguiente línea:

~~~bash {}[Bash]
cd ~
~~~

Y eso es todo, ahora tendremos una **Terminal** extremadamente bonita como resultado.

<center>

![Versión de WSL](https://storage.verduzco.me/dotme/blog/zsh-wsl.png)

</center>

## Nota 

El efecto de transparencia es preferible configurarlo en el perfil global dentro de los ajustes de **Windows Terminal**: 

~~~json {}[settings.json]
"defaults":
    {
        // Put settings here that you want to apply to all profiles
        "useAcrylic": true, 
        "acrylicOpacity": 0.4
    },
~~~

## Tips

Si estamos usando ***nvm*** para administrar las versiones de **Node.js** no se reconocerán los comandos, para solucionarlo solo hay que ejecutar `vi ~/.zshrc` y agregar lo siguiente al archivo:

~~~bash {}[Bash]
export NVM_DIR=~/.nvm
 [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
~~~

Si queremos que la **Terminal** integrada de **Visual Studio Code** se vea hermosa como debería verse hay que agregar en la configuración de la instalación de ***WSL*** dentro de **Code** la fuente que permite mostrar los iconos en la **Terminal**:

~~~json {}[settings.json (Remote)]
{
    "terminal.integrated.fontFamily": "DejaVu Sans Mono for Powerline"
}
~~~

Y eso es todo... con dichos ajustes tendremos una **Terminal** en la que da gusto trabajar dentro de **Visual Studio Code**. 

<center>

![Versión de WSL](https://storage.verduzco.me/dotme/blog/zsh-code.png)

</center>

Por hoy es todo, espero disfruten de su entorno profesional para desarrollar cosas súper geniales. Recuerden que si en su empresa necesitan asesoría para este y muchos temas más siempre pueden enviarme un mensaje y veo en que puedo ayudar.