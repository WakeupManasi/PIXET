import * as vscode from "vscode";

export function cleanFile() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const doc = editor.document;
  const text = doc.getText();

  const cleaned = text
    .replace(/console\.log\(.*?\);?/g, "")
    .replace(/^\s*[\r\n]/gm, "");

  const edit = new vscode.WorkspaceEdit();
  edit.replace(doc.uri, new vscode.Range(0, 0, doc.lineCount, 0), cleaned);

  vscode.workspace.applyEdit(edit);

  vscode.window.showInformationMessage("Pixit cleaned your file ✨");
}
