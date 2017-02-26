define(["lodash"], function(_) {

  function CommandHistory() {

    const history = [];
    let domContainer = document.getElementById('history');
    let historyLength = 0;
    let recallIndex = null;

    return {
      domContainer: domContainer,

      pushCommand: function (command) {
        const lineContainer = document.createElement("div");
        const historyLine = document.createElement("pre");
        const commandText = document.createTextNode(command);
        historyLine.appendChild(commandText);
        lineContainer.appendChild(historyLine);
        history.push({
          command: command,
          domNode: historyLine
        });
        domContainer.insertBefore(
          lineContainer,
          domContainer.firstChild
        );
        ++historyLength;
      },

      recall: function() {
        if (recallIndex === null || recallIndex === 0) {
          recallIndex = historyLength -1;
        } else {
          --recallIndex;
        }
        return history[recallIndex];
      },

      setContainer: function(container) {
        domContainer = container;
      },

      resetIndex: function() {
        recallIndex = 0;
      }
    };
  }

  return CommandHistory;
});
