The Multi Translator extension is an extension ported from a gnome-shell extension called [Text Translator](https://github.com/gufoe/text-translator) by [gufoe](https://github.com/gufoe).

## Differences with the original extension

* [x] Removed instant translation and auto-speak options to avoid translation service *abuse*.
* [x] Themable interface.
* [x] Migrated to Cinnamon's native settings system.
* [x] Unified all .js files into just one.
* [x] Obvious needed changes like changing all gnome-shell APIs usage to Cinnamon's, changed the use of JavaScript classes to prototypes, etc.

## Dependencies

**If one or more of these dependencies are missing in your system, you will not be able to use this extension.**

- **xsel** command: XSel is a command-line program for getting and setting the contents of the X selection.
- **trans** command: Command provided by the package translate-shell. Is a simple command line interface for several translation providers (Google Translate, Yandex Translate, Bing Translate and Apertium) which allows you to translate strings in your terminal.
    - Check translate-shell [dependencies](https://github.com/soimort/translate-shell#dependencies) and [recommended dependencies](https://github.com/soimort/translate-shell#recommended-dependencies).

**Note:** The translate-shell package available on Ubuntu 16.04.x/Linux Mint 18.x repositories is outdated and broken. It can be installed anyway so it will also install its dependencies. But updating to the latest version should be done as described bellow.

## How to install latest version of translate-shell

#### Option 1. Direct Download

This method will only install the trans script into the specified locations.

For the current user only. **~/.local/bin** needs to be in your PATH.
```shell
$ wget -O ~/.local/bin/trans git.io/trans && chmod ugo+rx ~/.local/bin/trans
```

For all users without overwriting the installed version.
```shell
$ sudo wget -O /usr/local/bin/trans git.io/trans && sudo chmod ugo+rx /usr/local/bin/trans
```

#### Option 2. From Git - [More details](https://github.com/soimort/translate-shell/blob/develop/README.md#option-3-from-git-recommended-for-seasoned-hackers)

This method will not just install the trans script but also its man pages. Refer to the link above for more installation details.

```shell
$ git clone https://github.com/soimort/translate-shell
$ cd translate-shell
$ make
$ sudo make install
```

## Extension usage

Once installed and enabled, the following shortcuts will be available.

#### Global shortcuts (configurable from the extension settings)

- **<kbd>Super</kbd> + <kbd>T</kbd>:** Open translator dialog.
- **<kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd>:** Open translator dialog and translate text from clipboard.
- **<kbd>Super</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd>:** Open translator dialog and translate from primary selection.

#### Shortcuts available on the translation dialog

- **<kbd>Ctrl</kbd> + <kbd>Enter</kbd>:** Translate text.
- **<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd>:** Copy translated text to clipboard.
- **<kbd>Ctrl</kbd> + <kbd>S</kbd>:** Swap languages.
- **<kbd>Ctrl</kbd> + <kbd>D</kbd>:** Reset languages to default.
- **<kbd>Tab</kbd>:** Toggle transliteration of result text.

## Tested environments

* [ ] ![Cinnamon 2.8](https://odyseus.github.io/CinnamonTools/lib/badges/cinn-2.8.svg) ![Linux Mint 17.3](https://odyseus.github.io/CinnamonTools/lib/badges/lm-17.3.svg)
* [x] ![Cinnamon 3.0](https://odyseus.github.io/CinnamonTools/lib/badges/cinn-3.0.svg) ![Linux Mint 18](https://odyseus.github.io/CinnamonTools/lib/badges/lm-18.svg)
* [ ] ![Cinnamon 3.2](https://odyseus.github.io/CinnamonTools/lib/badges/cinn-3.2.svg) ![Linux Mint 18.1](https://odyseus.github.io/CinnamonTools/lib/badges/lm-18.1.svg)

## ToDo

### Multi Translator extension ToDo list:

* [ ] **Implement a mechanism to check for dependencies** ![@critical](https://img.shields.io/badge/Priority-Critical-red.svg)
* [ ] **Add more translation providers that doesn't require the use of translate-shell** ![@high](https://img.shields.io/badge/Priority-High-red.svg)
* [ ] **Provide alternate methods in case translate-shell breaks or doesn't exists (manually configurable or automatic)** ![@high](https://img.shields.io/badge/Priority-High-red.svg)
* [ ] **Change all synchronous functions to asynchronous** ![@high](https://img.shields.io/badge/Priority-High-red.svg)
* [ ] **Add the possibility to select a custom theme** ![@high](https://img.shields.io/badge/Priority-High-red.svg)
* [ ] **Create a mechanism to display statistics** Statistics are already stored and used by the option called **Show most used languages**. ![@high](https://img.shields.io/badge/Priority-High-red.svg)
* [x] **Create the translation template**
* [x] **Add more translation providers:** At least as much as translate-shell supports.
* [x] **Add Yandex API keys configuration**
* [x] **Make Yandex API keys usage random**
* [x] **Implement translation history**
* [x] **Keep looking for a way to reload the themes without the need to restart Cinnamon** Keep in mind the comment block in extension.js>TranslatorExtension>_loadTheme().
* [x] **Create the dark Linux Mint theme**
* [x] **Add translation mechanism**

### Multi Translator applet ToDo list:

**The development of this applet has not started yet. Will start it when the extension reached a stable stage and it's published on the Spices website.**

#### Clicking on applet
   * [ ] Can bring up the extension dialog.
   * [ ] Can translate selection/clipboard and show result in a popup menu (Just like Popup Translator applet).
   * [ ] Can translate selection/clipboard and show result in a notification.

#### Ideas
* [ ] Make the applet complement with the extension, but not depend on it.
* [ ] Make the translation mechanism shared between the extension and the applet.
  * [ ] It will require to store the history file in a place that can be accessed by the extension and the applet.
  * [ ] It will require to ship the extension and the applet with the exact same Python script.
* [ ] Add several translation mechanisms that doesn't depend on the extension, but just on the **trans** command.
* [ ] Create a couple of key bindings to trigger several types of translations.
* [ ] Add options to choose between a **brief** and a **detailed** translation result.

## Issue reports

**Issue reporters should adjunct the output of the following commands.**
**Check the content of the log files for sensible information BEFORE running the commands!!!**

`inxi -xxxSc0 -! 31`
`pastebin ~/.cinnamon/glass.log`
`pastebin ~/.xsession-errors`

## [Download prototype extension](https://odyseus.github.io/CinnamonTools/pkg/0dyseus@MultiTranslatorExtension.tar.gz)

**References to anyone that could be interested in testing the extension.**

@buzz @copecu @fortalezense @maladro1t @NikoKrause @pizzadude @Radek71 @sphh