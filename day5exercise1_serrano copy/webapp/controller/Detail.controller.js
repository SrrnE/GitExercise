sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("zbtp.day5exercise1serrano.controller.Detail", {
            onInit: function () {
                this.getRouter().getRoute("Detail").attachPatternMatched(this.onObjectMatched, this);
            },

            getRouter: function(){
                return sap.ui.core.UIComponent.getRouterFor(this);;
            }

        
        });
    });
