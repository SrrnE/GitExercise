sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/library",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/library",
    "sap/m/Text",
    "sap/ui/Device",
    "sap/base/Log",
    "sap/ui/core/UIComponent",
    "sap/ui/core/ValueState",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel, coreLibrary, Dialog, Button, mobileLibrary, Text, Device, Log, UIComponent, ValueState) {
        "use strict";
         // shortcut for sap.m.ButtonType        
         var ButtonType = mobileLibrary.ButtonType;
         // shortcut for sap.m.DialogType        
         var DialogType = mobileLibrary.DialogType;
         // shortcut for sap.ui.core.ValueState        
         var ValueState = coreLibrary.ValueState;
        return Controller.extend("sapips.training.employeeappserrano.controller.EmployeeList", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                //var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                //oRouter.getRoute("Create").attachPatternMatched(this._onObjectMatched, this);
            },
            onPressAddBtn: function () {
                var oView = this.getView(),
                    oResourceBundle = oView.getModel("i18n").getResourceBundle();
                /* If Add button is pressed */
                this.fnNavigateToCreatePage();
            },
            onPressDeleteBtn: function () {
                var oTable = this.getView().byId("idEmployeesTable")
                var selectedItems = oTable.getSelectedItems();

                if (selectedItems.length > 1) {
                    this.onErrorMessageDialogPress();
                } else if (selectedItems.length < 1) {
                    this.onErrorMessageDialogPress();
                    employeeModel
                } else {
                    this.onConfirmDelete();
                    //var item = selectedItems[0].getBindingContext("EmpModel").getObject();
                    //MessageToast.show(item.FirstName);
                };
            },
            onConfirmDelete: function () {
                //create dialog if oApproveDialog is not found
                if (!this.oApproveDialog) {
                    this.oApproveDialog = new Dialog({
                        type: DialogType.Message,
                        title: "Confirm",
                        content: new Text({
                            text: "Do you want to delete?"
                        }),
                        beginButton: new Button({
                            type: ButtonType.Emphasized,
                            text: "Yes",
                            press: function () {
                                this.deleteDataFromMock();
                                this.oApproveDialog.close();
                            }.bind(this)
                        }),
                        endButton: new Button({
                            text: "Cancel",
                            press: function () {
                                MessageToast.show("Action canceled!");
                                this.oApproveDialog.close();
                            }.bind(this)
                        })
                    });
                }
                //Open Dialog
                this.oApproveDialog.open();
            },

            deleteDataFromMock: function () {

                //get selected row employee id form table
                var oTable = this.getView().byId("idEmployeesTable")
                var selectedItems = oTable.getSelectedItems();
                var item = selectedItems[0].getBindingContext("EmployeesModel").getObject();

                //get oDATA model
                var oDataModel = this.getOwnerComponent().getModel("EmployeesModel");
                oDataModel.remove("/Employee(EmployeeID='" + item.EmployeeID + "')", {
                    success: MessageToast.show("Successfully deleted item with Employee ID " + item.EmployeeID + ".")
                });

            },

            fnNavigateToCreatePage: function () {
                var oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("Create");
            },
            onItemPress: function (oEvent) {
                var oPath = oEvent.getSource().getBindingContext("EmployeesModel").getPath();
                var EmployeeID = oPath.split("/").slice(-1).pop();
                this.oRouter.navTo("Detail", {
                    EmployeeID: EmployeeID
                });
            },
        });
    });
        