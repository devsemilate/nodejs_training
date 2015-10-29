var command_inspector = function(){
	var command;
	var getCommand = function(input){
		return input.split(" ")[0];
	};
	var getCommandContent = function(input,command_string){
		return input.substr(command_string.length+1,input.length);
	};
	var doCommand = function(input){
		var command_string = getCommand(input);
		command = command_factory.getInstanceCommand(command_string);
		return command.doCommand(getCommandContent(input,command_string));
	};

	return {
		doCommand : doCommand
	}
}();

var command_factory = function(){
	var getInstanceCommand = function(command){
		switch (command){
			case "say":
				return new sayCommand();
				break;
			default :
				return new noCommand(command);
				break;
		}
	} ;
	return{
		getInstanceCommand : getInstanceCommand
	}
}();



function Command(_commandName) {
	this.commandName = _commandName;
};

Command.prototype.doCommand = function(something){
	// no thing to do
};

/* say command*/
function sayCommand(){
	Command.call(this,"say");
};
sayCommand.prototype = Object.create(Command.prototype);
sayCommand.prototype.constructor = sayCommand;

sayCommand.prototype.doCommand = function (something) {
	return something;
}

/* no command*/
function noCommand(whoknow){
	Command.call(this,whoknow);
};
noCommand.prototype = Object.create(Command.prototype);
noCommand.prototype.constructor = noCommand;

noCommand.prototype.doCommand = function(something){
	return "no command "+this.commandName;
};