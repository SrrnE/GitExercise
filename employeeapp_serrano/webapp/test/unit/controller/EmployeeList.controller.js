/*global QUnit*/

sap.ui.define([
	"sapipstraining/employeeapp_serrano/controller/EmployeeList.controller"
], function (Controller) {
	"use strict";

	QUnit.module("EmployeeList Controller");

	QUnit.test("I should test the EmployeeList controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
