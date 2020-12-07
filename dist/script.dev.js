"use strict";

console.log('in');
$(function () {
  var viewModel1 = {
    value: ko.observable('details'),
    options: [{
      text: 'View details',
      value: 'View details'
    }, {
      text: 'More details',
      value: 'More details'
    }, {
      text: 'Even more details',
      value: 'Even more details'
    }]
  };
  $(function () {
    var viewModel2 = {
      listItemOne: ko.observableArray(['Available for all non-refundable fares.', 'Cancel and refund up to 24 hours prior to departure.', 'Add to reservations up to 1 day after booking.', 'Refund online, with no claims or forms.']),
      listItemTwo: ko.observableArray(['Get a full travel refund, even on a non-refundable fare.', 'Cancel for any reason, up to 24 hours prior to departure.', 'Option available at time of booking or within 24 hours online.', 'Get your refund online. No claim or form required.', ''])
    };
  });
  $(function () {
    var viewModel3 = new function ViewModel() {
      //false onload
      this.shouldShow = ko.observable(false);

      this.checkIfShow = function () {
        //is it visible
        return this.shouldShow();
      };
    }();
    ko.applyBindings(viewModel3, document.getElementById('viewModel3')); //this feels redundant? could I do an if/ifnot in here instead?

    $('#toggle').on('click', function () {
      // if not showing then it will on toggle click
      viewModel3.shouldShow(!viewModel3.shouldShow());
    });
    $('#toggleTwo').on('click', function () {
      viewModel3.shouldShow(!viewModel3.shouldShow());
    });
  });
  ko.applyBindings(viewModel1, viewmodel2, viewModel3);
}); //lists
// $(function(){
//     var viewModel2 = {
//     listItemOne: ko.observableArray(['Available for all non-refundable fares.', 'Cancel and refund up to 24 hours prior to departure.', 'Add to reservations up to 1 day after booking.', 'Refund online, with no claims or forms.']), 
//     listItemTwo: ko.observableArray(['Get a full travel refund, even on a non-refundable fare.','Cancel for any reason, up to 24 hours prior to departure.','Option available at time of booking or within 24 hours online.','Get your refund online. No claim or form required.', ''])
//     }
// ko.applyBindings(viewModel2, document.getElementById('viewModel2'));
// });
// terms and conditions
// $(function(){
// var viewModel3 = new function ViewModel() {
//     //false onload
//     this.shouldShow = ko.observable(false);
//     this.checkIfShow = function() {
//         //is it visible
//       return this.shouldShow();
//     };
//   };
//   ko.applyBindings(viewModel3, document.getElementById('viewModel3'));
//   //this feels redundant? could I do an if/ifnot in here instead?
//   $('#toggle').on('click', function() {
//     // if not showing then it will on toggle click
//     viewModel3.shouldShow(!viewModel3.shouldShow());
//   });
//   $('#toggleTwo').on('click', function() {
//     viewModel3.shouldShow(!viewModel3.shouldShow());
//   });
// })
//buttons
// $(function(){
//     var viewModel = {
//         flexOne: function(formElement){
//         }, 
//         flexTwo: function(formElement){
//         }, 
//         flexThree: function(formElement){
//         }, 
//     }
//     ko.applyBindings(viewModel);
// })