describe("string command inspector testing",function(){
	[{expected : "hello world!",testvalue : "say hello world!"},
	{expected : "123456~!@#$%^&*()_+}{",testvalue : "say 123456~!@#$%^&*()_+}{"},
	{expected : "no command fuck",testvalue : "fuck hello world!"}].forEach(function(testcase){
		it("do command in right way", function () {
			var expected = testcase.expected;
			var actualy = command_inspector.doCommand(testcase.testvalue);
			expect(actualy).toBe(expected);
		});
	});
});