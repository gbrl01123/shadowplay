require([
  "lodash", "./CommandLine", "./CommandHistory", "./Graphical", "./shadowplay.scss"
], function(_, CommandLine, CommandHistory, Graphical) {
  const commandHistory = CommandHistory();
  const commandLine = CommandLine(commandHistory);
  // const commandLine = CommandLine(CommandHistory());
  window.ch = commandHistory;
  window.cl = commandLine;
});
