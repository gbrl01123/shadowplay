require("./shadowplay.scss")
import _ from "lodash";

const commandLine = document.getElementById('cl');
const commandHistory = document.getElementById('history');
commandLine.addEventListener("keydown", CLI);
commandLine.focus();

function CLI(event) {
	if (event.keyCode == 13){
		let input = commandLine.value.replace(/[^\w\s()]/gi, '');
		prependCommand(input);
		commandLine.value = '';
		return false;
	}
}

function prependCommand(command) {
	const historyLine = document.createElement("pre");
  const fact = document.createTextNode(command);
	historyLine.appendChild(fact);
	commandHistory.insertBefore(historyLine, commandHistory.firstChild);
}
