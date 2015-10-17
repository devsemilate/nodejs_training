var command_inspector = function(){
	var say = function(something){
		console.log(something);
		return something;
	};
	return {
		say : say
	}
}();