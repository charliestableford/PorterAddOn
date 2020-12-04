"use strict";

// terms and conditions
$(function () {
  var viewModel = new function ViewModel() {
    //false onload
    this.shouldShow = ko.observable(false);

    this.checkIfShow = function () {
      //is it visible
      return this.shouldShow();
    };
  }();
  ko.applyBindings(viewModel); //this feels redundant? could I do an if/ifnot in here instead?

  $('#toggle').on('click', function () {
    // if not showing then it will on toggle click
    viewModel.shouldShow(!viewModel.shouldShow());
  });
  $('#toggleTwo').on('click', function () {
    viewModel.shouldShow(!viewModel.shouldShow());
  });
});