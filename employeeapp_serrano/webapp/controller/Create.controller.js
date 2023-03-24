sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("sapips.training.employeeappserrano.controller.Create", {
        onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("Create").attachPatternMatched(this._onObjectMatched, this);
        }
      });
    }
  );
