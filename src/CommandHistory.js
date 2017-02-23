define(["lodash"], function(_) {
	
	function CommandHistory() {

		const history = [];
		
		return {
			domContainer: document.getElementById('history'),
			
			pushCommand: function (command) {
				const historyLine = document.createElement("pre");
				const commandText = document.createTextNode(command);
				historyLine.appendChild(commandText);
				history.push({
					command: command,
					domNode: historyLine
				});
				this.domContainer.insertBefore(
					historyLine,
					this.domContainer.firstChild
				);
			}
		};
	}

	return CommandHistory;
});
