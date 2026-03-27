import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

export async function generateComponent() {
  const name = await vscode.window.showInputBox({
    prompt: "Enter component name"
  });

  if (!name) return;

  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (!workspaceFolders) return;

  const basePath = workspaceFolders[0].uri.fsPath;
  const componentPath = path.join(basePath, name);

  fs.mkdirSync(componentPath);

  fs.writeFileSync(
    path.join(componentPath, `${name}.tsx`),
    `export default function ${name}() {
  return <div>${name}</div>;
}`
  );

  fs.writeFileSync(
    path.join(componentPath, `${name}.css`),
    `.${name} {}`
  );

  vscode.window.showInformationMessage(`Component ${name} created!`);
}
