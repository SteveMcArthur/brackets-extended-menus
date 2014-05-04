/*global require */

(function () {
    "use strict";
    
    var fs = require("fs");
    
    /**
     * Recursively and synchronously deletes the given folder or file.
     * @param {string} text html text containing the table markup
     *    recursively.
     */
    function _getCheerio(text) {
		var cheerio = require('cheerio');
		var $ = cheerio.load(text);
		var items = $('td');
		console.log("returning items: "+items.length);
		var txt = "";
		items.each(function(index,value){
			txt += $(value).text().replace(/\r\n/g, "").replace(/\n/g, "") + "|";
		});
		return txt;
    }
    
    /**
     * Initializes the domain with its commands.
     * @param {domainManager} domainmanager The DomainManager for the server
     */
    function init(domainManager) {
        if (!domainManager.hasDomain("stevemc.cheerio")) {
            domainManager.registerDomain("stevemc.cheerio", {major: 0, minor: 1});
        }
        domainManager.registerCommand(
            "cheerio",
            "getCheerio",
            _getCheerio,
            false,
            "Gets Cheerio object",
            [{
				name: "text",
				type: "string",
				desc: "html string"
			}],
            [{
				name: "tdlist", // return values
				type: "object",
				description: "list of td values"
			}]
        );
    }
    
    exports.init = init;
 
}());
