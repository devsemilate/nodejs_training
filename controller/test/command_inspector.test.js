describe("string command inspector testing",function(){
	it("should say correct",function(){
		var expected = "hello world!";
		var actualy = command_inspector.say("hello world!");
		expect(actualy).toBe(expected);
	});
});