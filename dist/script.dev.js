"use strict";

console.log('in'); // $(function(){
//     var viewModel = function(){
//         this.showDropDown = ko.observable(false);
//     }
//     ko.applyBindings(new viewModel());
// })

$(function () {
  var viewModel = {
    listItemOne: ko.observableArray(['Available for all non-refundable fares.', 'Cancel and refund up to 24 hours prior to departure.', 'Add to reservations up to 1 day after booking.', 'Refund online, with no claims or forms.']),
    listItemTwo: ko.observableArray(['Get a full travel refund, even on a non-refundable fare.', 'Cancel for any reason, up to 24 hours prior to departure.', 'Option available at time of booking or within 24 hours online.', 'Get your refund online. No claim or form required.', 'Additional details in <a href="#" aria-label="Open" tabindex="0">Terms & Conditions</a>'])
  };
  ko.applyBindings(viewModel);
});