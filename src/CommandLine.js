define(["lodash"], function(_) {

	function CommandLine (commandHistory) {

		return {
			commandHistory: commandHistory,
			domContainer: initializeCLI(),
		}

		function initializeCLI() {
			let domContainer = document.getElementById('cl');
			domContainer.addEventListener("keydown", CLI);
			domContainer.focus();
			return domContainer;
		}

		function CLI(domEvent) {
			const keyMap = {
				13: function(domEvent) {
					commandHistory.pushCommand(
						clean(domEvent.srcElement.value)
					);
					domEvent.srcElement.value = '';
					return false;
				},
				38: null,//up
				40: null//down
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
