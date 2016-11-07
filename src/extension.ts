// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import {window, Uri, workspace, commands, Disposable, ExtensionContext, StatusBarAlignment, StatusBarItem, TextDocument} from 'vscode';


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "wikilink4md" is now active!');
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	
    function getFileName(file: string): string {
        var forwardSlash = file.lastIndexOf("/");
        var backSlash = file.lastIndexOf("\\");
        if (forwardSlash === -1 && backSlash === -1) {
            return file;
        }

        return file.substring((forwardSlash > backSlash) ? forwardSlash + 1 : backSlash + 1);
    }
	
	
	var disposable = vscode.commands.registerCommand('extension.wikilink4md', () => {
		// The code you place here will be executed every time your command is executed

		// Get the active editor
		let editor = vscode.window.activeTextEditor;
		let selectedText = "";
		if (editor) {
			// Get the selected text
			let selection = editor.selection;
			selectedText = editor.document.getText(selection);
		}
            // Display a message box to the user
            vscode.window.showInformationMessage('Hello World!' + selectedText);
	
	});

	        if (workspace.rootPath === null){
            return;
        }
        var config = workspace.getConfiguration("findFiles");
        var lengthToStripOff = workspace.rootPath.length + 1;

        workspace.findFiles(<string>config.get("fileIncludeGlob"), <string>config.get("fileExcludeGlob"), <number>config.get("maxResults")).then(files=> {
            var displayFiles = files.map(file=> {
                return { description: file.fsPath.substring(lengthToStripOff), label: getFileName(file.fsPath), filePath: file.fsPath };
            });
            window.showQuickPick(displayFiles).then(val=> {
                workspace.openTextDocument(val.filePath).then(d=> {
                    window.showTextDocument(d);
                });
            });
        });
    

	context.subscriptions.push(disposable);
}	

// this method is called when your extension is deactivated
export function deactivate() {
}