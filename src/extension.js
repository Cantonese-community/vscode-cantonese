// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

function run_cantonese() {
    const file_path = vscode.window.activeTextEditor.document.fileName;
    let term = vscode.window.createTerminal("Cantonese", "Cantonese", file_path);
    term.show();
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

 // Use the console to output diagnostic information (console.log) and errors (console.error)
 // This line of code will only be executed once when your extension is activated
 console.log('Congratulations, your extension "hello-world" is now active!');

 // The command has been defined in the package.json file
 // Now provide the implementation of the command with  registerCommand
 // The commandId parameter must match the command field in package.json
 let disposable = vscode.commands.registerCommand('extension.PrintCantoneseVersion', function () {
  // The code you place here will be executed every time your command is executed
  return;
 });

 context.subscriptions.push(disposable);

 let command_run_cantonese = vscode.commands.registerCommand('extension.RunCantoneseCode', run_cantonese());

 context.subscriptions.push(command_run_cantonese);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
 activate,
 deactivate
}