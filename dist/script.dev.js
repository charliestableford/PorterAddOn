"use strict";

console.log('in'); // $(function(){
//     var viewModel = function(){
//         this.showDropDown = ko.observable(false);
//     }
//     ko.applyBindings(new viewModel());
// })

$(function () {
  var viewModel = function viewModel() {
    var self = this;
    self.listitems = ko.observableArray(['Available for all non-refundable fares.', 'Cancel and refund up to 24 hours prior to departure.', 'Add to reservations up to 1 day after booking.', 'Refund online, with no claims or forms.']);
  };

  ko.applyBindings(new viewModel());
});