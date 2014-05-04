/* global define, brackets */
define(function (require) {
	"use strict";
	
	var stringfunctions = require("string-functions");
	
	var Commands = brackets.getModule("command/Commands");
	var CommandManager = brackets.getModule("command/CommandManager");
	var Menus = brackets.getModule("command/Menus");



	var COMMAND_REMOVE_TABLE = 'stevemc.string-functions.removeTable';
	var COMMAND_REMOVE_WHITESPACE = 'stevemc.string-functions.removeWhiteSpace';
	var COMMAND_WHITESPACE_TOGGLE = 'denniskehrig.ShowWhitespace.toggle';
	var COMMAND_TAB2SPACE = 'tabtospace.tabtospace';
	var COMMAND_SPACE2TAB = 'tabtospace.spacetotab';



	//at some point will need to run checks to see if command exists
	CommandManager.register("Remove Whitespace", COMMAND_REMOVE_WHITESPACE, stringfunctions.removeWhiteSpace);
	CommandManager.register("Remove Table", COMMAND_REMOVE_TABLE, stringfunctions.removeTable);

	
	Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuDivider();
	Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuItem(COMMAND_WHITESPACE_TOGGLE);

	
	var editMenu = Menus.getMenu(Menus.AppMenuBar.EDIT_MENU);
	
	editMenu.removeMenuItem(Commands.EDIT_LINE_COMMENT);
	editMenu.removeMenuItem(Commands.EDIT_BLOCK_COMMENT);
	
	Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuItem(Commands.EDIT_LINE_COMMENT);
	Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuItem(Commands.EDIT_BLOCK_COMMENT);
	


	var newMenu = Menus.addMenu("Format", "formatMenu", Menus.BEFORE, Menus.AppMenuBar.NAVIGATE_MENU);
	var viewMenu = Menus.getMenu(Menus.AppMenuBar.VIEW_MENU);
	viewMenu.removeMenuItem(COMMAND_TAB2SPACE);
	viewMenu.removeMenuItem(COMMAND_SPACE2TAB);
	
	newMenu.addMenuItem(COMMAND_TAB2SPACE);
	newMenu.addMenuItem(COMMAND_SPACE2TAB);
	newMenu.addMenuItem(COMMAND_WHITESPACE_TOGGLE);

	

	newMenu.addMenuItem(Commands.EDIT_LINE_COMMENT);
	newMenu.addMenuItem(Commands.EDIT_BLOCK_COMMENT);
	
	newMenu.addMenuItem(COMMAND_REMOVE_WHITESPACE);
	newMenu.addMenuItem(COMMAND_REMOVE_TABLE);

	

});