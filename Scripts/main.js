nova.commands.register("serbea.convertErbToSerbea", (editor) => {
	if (editor.selectedText.match(/^\s*$/)) {
		editor.selectAll();
	}
	var range = editor.selectedRange;
	var txt = editor.selectedText;
	txt = txt
		.replace(/<%=\s*render(.*?)%>/gs, "{%@$1%}")
		.replace(/<%=(.*?)%>/gs, "{{$1}}")
		.replace(/<%(.*?)%>/gs, "{%$1%}");
	editor.edit(function(e) {
		e.replace(range, txt);
	});
});

nova.commands.register("serbea.convertSerbeaToErb", (editor) => {
	if (editor.selectedText.match(/^\s*$/)) {
		editor.selectAll();
	}
	var range = editor.selectedRange;
	var txt = editor.selectedText;
	txt = txt
		.replace(/\{%@(.*?)%\}/gs, "<%= render$1%>")
		.replace(/\{\{(.*?)\}\}/gs, "<%=$1%>")
		.replace(/\{%(.*?)%\}/gs, "<%$1%>");
	editor.edit(function(e) {
		e.replace(range, txt);
	});
});

