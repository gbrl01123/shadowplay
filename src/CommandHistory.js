define(["lodash"], function(_) {

  function CommandHistory() {

    const history = [{command: '', domNode: null}];
    let domContainer = document.getElementById('history');
    let recallIndex = history.length - 1;

    function recall(offset) {
      return history[recallIndex + offset]
        ? history[recallIndex += offset]
        : history[recallIndex];
    }

    function domNode(data) {
      if (data.length == 1) {
        return document.createTextNode(data[0]);
      } else {
        let node = document.createElement(data.pop());
        node.appendChild(domNode(data));
        return node;
      }
    }
    
    function historyLine(command) {
      let line = domNode([command, "pre", "div"]);
      domContainer.insertBefore(
        line,
        domContainer.firstChild
      );
      return line;
    }

    return {
      domContainer: domContainer,

      pushCommand: function (command) {
        let placeholder = history.pop();
        history.push({
          command: command,
          domNode: historyLine(command)
        });
        history.push(placeholder);
        recallIndex = history.length - 1;
        return history[recallIndex].command;
      },

      recallBefore: function() {
        return recall(-1);
      },

      recallAfter: function() {
        return recall(1);
      }
    };
  }

  return CommandHistory;
});
