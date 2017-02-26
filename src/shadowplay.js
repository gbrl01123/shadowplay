require([
  "lodash", "./CommandLine", "./CommandHistory", "./shadowplay.scss"
], function(_, CommandLine, CommandHistory) {
  const commandHistory = CommandHistory();
  const commandLine = CommandLine(commandHistory);
  // const commandLine = CommandLine(CommandHistory());
  window.ch = commandHistory;
  window.cl = commandLine;
});
