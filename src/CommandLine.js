define(["lodash"], function(_) {

  function CommandLine (commandHistory) {

    return {
      commandHistory: commandHistory,
      domContainer: initializeCLI()
    }

    function initializeCLI() {
      let domContainer = document.getElementById('cl');
      domContainer.addEventListener("keydown", CLI);
      domContainer.focus();
      return domContainer;
    }

    // let's add a prompt, homeboy
    
    function CLI(domEvent) {
      const keyMap = {
        13: function(domEvent) { // enter
          domEvent.srcElement.value =
            commandHistory.pushCommand(
              clean(domEvent.srcElement.value)
            );
          return false;
        },
        38: function(domEvent) { // arrow up
          domEvent.srcElement.value = commandHistory.recallBefore().command;
        },
        40: function(domEvent) { // arrow down
          domEvent.srcElement.value = commandHistory.recallAfter().command;
        }
      };

      if (domEvent.keyCode in keyMap) {
        keyMap[domEvent.keyCode](domEvent);
      }
    }

    function clean(inputText) {
      return inputText.replace(/[^\w\s(),]/gi, '');
    }
  }

  return CommandLine;
});
