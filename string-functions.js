/*global define, brackets*/

define(function (require, exports, module) {
	"use strict";

	var DocumentManager = brackets.getModule('document/DocumentManager');
	var EditorManager = brackets.getModule('editor/EditorManager');
	var NodeDomain = brackets.getModule("utils/NodeDomain");
	var ExtensionUtils = brackets.getModule("utils/ExtensionUtils");
	var cheerioDomain = new NodeDomain("stevemc.cheerio", ExtensionUtils.getModulePath(module, "node/CheerioDomain"));

	function removeTable() {
		var currentEditor = EditorManager.getCurrentFullEditor(),
			selectedText = currentEditor.getSelectedText(),
			selectedPos = currentEditor.getSelection(),
			doc = DocumentManager.getCurrentDocument(),
			start = selectedPos.start,
			end = selectedPos.end;

		cheerioDomain.exec('getCheerio', selectedText)
			.done(function (txt) {
				console.log("returned from cheerio");
				doc.replaceRange(txt, start, end);
			}).fail(function (err) {
				console.log(err);
			});
	}

	function removeWhiteSpace() {
		var currentEditor = EditorManager.getCurrentFullEditor(),
			selectedText = currentEditor.getSelectedText(),
			selectedPos = currentEditor.getSelection(),
			doc = DocumentManager.getCurrentDocument(),
			start = selectedPos.start,
			end = selectedPos.end,
			txt = "";
		txt = selectedText.replace(/\s/g, "");
		doc.replaceRange(txt, start, end);
	}


	exports.removeTable = removeTable;
	exports.removeWhiteSpace = removeWhiteSpace;

});