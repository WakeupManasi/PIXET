import * as vscode from "vscode";

export function openCompanion(context: vscode.ExtensionContext) {
  const panel = vscode.window.createWebviewPanel(
    "pixitCompanion",
    "Pixit Companion",
    vscode.ViewColumn.Beside,
    { enableScripts: true }
  );

  panel.webview.html = getHTML();
}

function getHTML() {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: var(--vscode-editor-background);
        color: var(--vscode-editor-foreground);
        font-family: sans-serif;
      }

      #companion {
        text-align: center;
      }

      button {
        margin-top: 10px;
        padding: 8px 12px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div id="companion">
      <h3>🤖 Pixit</h3>
      <p>I'm your dev companion</p>
      <button onclick="alert('Generate feature coming soon!')">
        Quick Action
      </button>
    </div>
  </body>
  </html>
  `;
}
