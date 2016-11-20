# Link4MD

This is a extension for quickly include file links in your markdown files.

<!-- TOC -->

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Settings](#Default-Settings)
- [ChangeLog](#changelog)
- [License](#license)
- [Links](#links)

<!-- /TOC -->

## Features

inspired by this [Sublime plugin](https://github.com/dansheffler/MyWiki) as a extension in Visual studio code.

- Allow implementation of links.
- Markdown Link Structure

## Installation
```
ext install Link4MD
```

## Usage
1. Move cursor to keyword, and click it.
1. Ctrl+Shift+P / F1, input 'link4md'. Or use `ctrl + shift + -`.

## Keyboard Shortcuts
```
{ "command":"extension.quickOpenFile", "key":"ctrl+shift+-" }
```
This is default setting, you can override in your keyboard shortcuts.

## Default Settings
You can configure the settings, to display a specific types of files and folders, or exclude specific files and folders.
Similarly you could configure the number of files displayed.

```
"properties": {
  "findFiles.fileIncludeGlob": {
    "type": "string",
    "default": "**",
    "description": "A glob pattern that defines the files to search for."
  },
  "findFiles.fileExcludeGlob": {
    "type": "string",
    "default": "**\\node_modules\\**",
    "description": "A glob pattern that defines files and folders to exclude."
  },
  "findFiles.maxResults": {
    "type": "number",
    "default": 1000,
    "description": "An upper-bound for the result."
  }
}
```

## ChangeLog
- 0.2.0
    - Change Wikilinks Format to Markdown Format
    - Change default keybinding
    - Add icon

- 0.0.2
    - First working version, with some errors 

- 0.0.1
    - First Version

## License
The package is Open Source Software released under the [MIT_License](https://wangeleile.mit-license.org/). It's developed by AlanWalk.

## Links
- [Source Code](https://github.com/wangeleile/link4MD)
- [Market](https://marketplace.visualstudio.com/items/)
