sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/Innovation/ui5Project/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("com.Innovation.ui5Project.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			var products = [
				{
				  "ProductName": "Pineapple",
				  "Quantity": 21,
				  "ExtendedPrice": 87.2000,
				  "ShipperName": "Fun Inc.",
				  "ShippedDate": "2015-04-01T00:00:00",
				  "Status": "A"
				},
				{
				  "ProductName": "Milk",
				  "Quantity": 4,
				  "ExtendedPrice": 9.99999,
				  "ShipperName": "ACME",
				  "ShippedDate": "2015-02-18T00:00:00",
				  "Status": "B"
				},
				{
				  "ProductName": "Canned Beans",
				  "Quantity": 3,
				  "ExtendedPrice": 6.85000,
				  "ShipperName": "ACME",
				  "ShippedDate": "2015-03-02T00:00:00",
				  "Status": "B"
				},
				{
				  "ProductName": "Salad",
				  "Quantity": 2,
				  "ExtendedPrice": 8.8000,
				  "ShipperName": "ACME",
				  "ShippedDate": "2015-04-12T00:00:00",
				  "Status": "C"
				},
				{
				  "ProductName": "Bread",
				  "Quantity": 1,
				  "ExtendedPrice": 2.71212,
				  "ShipperName": "Fun Inc.",
				  "ShippedDate": "2015-01-27T00:00:00",
				  "Status": "A"
				}
			  ];
			var oModel =  new sap.ui.model.json.JSONModel();
			oModel.setData(products);
			this.setModel(oModel ,"listModel");
		}
	});
});