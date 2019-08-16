// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import TestHover from './hover';
import TestCompletion from './completion';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloword" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	// 注册一个事件监听
	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		let msg = 'Hello World!';
		vscode.window.showInformationMessage(msg);
	});

	context.subscriptions.push(
		vscode.languages.registerHoverProvider(['javascript', 'typescript', 'vue'], new TestHover()));

	context.subscriptions.push(
		vscode.languages.registerCompletionItemProvider(['javascript', 'typescript', 'vue'], new TestCompletion(), '.', '\"'));

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
