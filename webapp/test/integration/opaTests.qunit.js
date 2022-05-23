/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ztest_dg_1/ztest_dg/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});