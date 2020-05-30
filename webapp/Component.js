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
			var listModel =  new sap.ui.model.json.JSONModel();
			var calendarModel =  new sap.ui.model.json.JSONModel();
			listModel.setData(products);	 
			calendarModel.setData({
				startDate: new Date("2020", "10", "13", "8", "0"),
				people: [
					{
						pic: "https://github.com/SAP/openui5/blob/master/src/sap.ui.documentation/test/sap/ui/documentation/sdk/images/John_Miller.png",
						name: "John Miller",
						role: "team member",
						appointments: [
							{
								start: new Date("2020", "10", "13", "08", "00"),
								end: new Date("2020", "10", "13", "09", "00"),
								title: "Team sync",
								info: "Canteen",
								type: "Type07",
								pic: "sap-icon://family-care"
							},
							{
								start: new Date("2020", "10", "13", "09", "0"),
								end: new Date("2020", "10", "13", "11", "0"),
								title: "Morning Sync",
								info: "I call you",
								type: "Type01",
								pic: "sap-icon://call"
							},
							{
								start: new Date("2020", "10", "13", "10", "00"),
								end: new Date("2020", "10", "13", "12", "00"),
								title: "Sync Bill",
								info: "Online",
								type: "Type03"
							},
							{
								start: new Date("2020", "10", "13", "10", "00"),
								end: new Date("2020", "10", "13", "13", "00"),
								title: "Check Flights",
								info: "no room",
								type: "Type09",
								pic: "sap-icon://flight"
							},
							{
								start: new Date("2020", "10", "13", "13", "00"),
								end: new Date("2020", "10", "13", "14", "00"),
								title: "Lunch",
								info: "canteen",
								type: "Type05",
								pic: "sap-icon://private"
							},
							{
								start: new Date("2020", "10", "13", "18", "00"),
								end: new Date("2020", "10", "13", "20", "00"),
								title: "Discussion of the plan",
								info: "Online meeting",
								type: "Type04"
							},
							{
								start: new Date("2020", "10", "14", "03", "00"),
								end: new Date("2020", "10", "14", "23", "00"),
								title: "Deadline",
								type: "Type05"
							},
							{
								start: new Date("2020", "10", "14", "09", "00"),
								end: new Date("2020", "10", "14", "14", "00"),
								title: "Blocker",
								info: "room 6",
								type: "Type08"
							},
							{
								start: new Date("2020", "10", "17", "09", "00"),
								end: new Date("2020", "10", "17", "18", "00"),
								title: "Boss Birthday",
								type: "Type02"
							},
							{
								start: new Date("2020", "10", "24", "09", "00"),
								end: new Date("2020", "10", "24", "18", "00"),
								title: "Urgent Planning",
								type: "Type08"
							},
							{
								start: new Date("2020", "10", "20", "01", "00"),
								end: new Date("2020", "10", "20", "23", "00"),
								title: "Planning",
								type: "Type09"
							}
						]
					},
					{
						pic: "test-resources/sap/ui/documentation/sdk/images/Donna_Moore.jpg",
						name: "Donna Moore",
						role: "team member",
						appointments: [
							{
								start: new Date("2020", "10", "13", "08", "00"),
								end: new Date("2020", "10", "13", "09", "26"),
								title: "Team sync",
								info: "Canteen",
								type: "Type07",
								pic: "sap-icon://family-care"
							},
							{
								start: new Date("2020", "10", "13", "10", "00"),
								end: new Date("2020", "10", "13", "12", "00"),
								title: "Sync John",
								info: "Online",
								type: "Type03"
							},
							{
								start: new Date("2020", "10", "13", "11", "00"),
								end: new Date("2020", "10", "13", "12", "00"),
								title: "Prep for planning",
								info: "room 5",
								type: "Type01",
								pic: "sap-icon://family-care"
							},
							{
								start: new Date("2020", "10", "13", "18", "00"),
								end: new Date("2020", "10", "13", "20", "00"),
								title: "Check Flights",
								info: "no room",
								type: "Type09",
								pic: "sap-icon://flight"
							},
							{
								start: new Date("2020", "10", "13", "18", "00"),
								end: new Date("2020", "10", "13", "20", "00"),
								title: "Discussion of the plan",
								info: "Online meeting",
								type: "Type04"
							},
							{
								start: new Date("2020", "10", "20", "01", "00"),
								end: new Date("2020", "10", "20", "23", "00"),
								title: "Planning",
								type: "Type09"
							},
							{
								start: new Date("2018", "2", "20", "01", "00"),
								end: new Date("2018", "2", "20", "23", "00"),
								title: "Off",
								type: "Type08"
							}
						]
					}
				]
			});
			this.setModel(calendarModel,"calendarModel");
			this.setModel(listModel ,"listModel");
		}
	});
});