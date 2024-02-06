/*global QUnit*/

sap.ui.define([
	"launchpad/launchpad/controller/launchpad.controller"
], function (Controller) {
	"use strict";

	QUnit.module("launchpad Controller");

	QUnit.test("I should test the launchpad controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
