sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sapips.training.mockservice.controller.MockService", {

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
