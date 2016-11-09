# wikilink4md


provides the functions of this [Sublime plugin](https://github.com/dansheffler/MyWiki) as a extension in Visual studio code. 

- Supports WikiStyle [[]] Grammar for Files in the same folder
- After typing [[ a list with all available files in folder pops up and you can choose the correct file. The selected file will be included between [[]].
- After pressing Alt+Enter, If marked file is not existing, open new file and save it with the marked name
- If marked file name is existing, open existing file.


## Hotkeys

STRG + Alt + l opens file selection of current folder and import selected filename

```

## Settings
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
## Source

[Github](https://github.com/wangeleile/wikilink4md)
        
## Change Log

### Version 0.0.5

First running version, File selection is working.

### Version 0.0.1

V0.0.1 Nothing ready, just copied an extension which comes close to wished extension

## License

[MIT](https://raw.githubusercontent.com/DonJayamanne/listFilesVSCode/master/LICENSE)
