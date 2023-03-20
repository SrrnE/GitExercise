sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, formatter) {
        "use strict";

        return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {
            
            formatter: formatter,
           
            onInit: function () {
                //Get the View
                var oView = this.getView();

                //Get i18n Model from Component
                var oi18n = this.getOwnerComponent().getModel("i18n");

                //Bind i18n to View
                oView.setModel(oi18n, "i18n");

                //Instantiate JSONModel
                var oAddressModel = new JSONModel();

                //Define Data
                var oAddress = {
                    "EID": "enjy.serrano",
                    "enabled": true,
                    "Address": {
                        "Street":"Street St.",
                        "City":"City A ",
                        "Zip":2023,
                        "Country":"Philippines"
                    },
                    "SalesAmount" :100,
                    "CurrencyCode" :"PHP"
                 };

                //Set the Data to Model
                oAddressModel.setData(oAddress);

                //Get the View
                var oView = this.getView();

                //Bind the Model to the View
                oView.setModel(oAddressModel);
            },
            onSelectProduct: function(oEvent){
                //Get the Control (list)
                var oList = oEvent.getSource();

                //Get the selected item
                var oSelItem = oList.getSelectedItem();

                //Get the context binding path
                var sSelItemPath = oSelItem.getBindingContextPath();

                //Bind line selected item to the control (Simpleform in Panel4)
                this.getView().byId("idProductDetails").bindElement({
                    path: sSelItemPath,
                    model: "ProductsModel"
                })
            }     
        });
    });
