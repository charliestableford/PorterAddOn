"use strict";

$(function () {
  var myViewModel = function myViewModel() {
    this.showMessage = ko.observable(true);
  };

  ko.applyBindings(new myViewModel());
});