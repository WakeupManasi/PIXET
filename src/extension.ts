import * as vscode from "vscode";
import { generateComponent } from "./commands/generateComponent";
import { cleanFile } from "./commands/cleanFile";
import { openCompanion } from "./webview/companion";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("pixit.generateComponent", generateComponent),
    vscode.commands.registerCommand("pixit.cleanFile", cleanFile),
    vscode.commands.registerCommand("pixit.openCompanion", () =>
      openCompanion(context)
    )
  );
}

export function deactivate() {}
