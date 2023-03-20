sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("zbtp.day5exercise1serrano.controller.Home", {
            onInit: function () {

            },
            onPressSendBtn: function(){
                var oView = this.getView();
			    var sName = oView.byId("NameInput").getValue();
                var sStreet = oView.byId("StreetInput").getValue();
                var sAge = oView.byId("AgeInput").getValue();
                var sTech = oView.byId("TechInput").getSelectedKey();

                MessageToast.show("Your name is " + sName + ", your street is " + sStreet + ", your age is " + sAge + ", your Tech is " + sTech);

            }
        });
    });
