export default {
  extensions: ["ts"],
  ignoredByWatcher: [
    ".github/",
    ".vscode/",
    "src/",
    "*.json",
    "*.tgz",
    ".gitignore",
    "LICENSE",
    "README.md",
  ],
  require: ["ts-node/register"],
};
