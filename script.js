console.log('in')

// $(function(){
//     var viewModel = function(){
//         this.showDropDown = ko.observable(false);
//     }
//     ko.applyBindings(new viewModel());
// })

//lists
$(function(){
    var viewModel1 = {
    listItemOne: ko.observableArray(['Available for all non-refundable fares.', 'Cancel and refund up to 24 hours prior to departure.', 'Add to reservations up to 1 day after booking.', 'Refund online, with no claims or forms.']), 
    listItemTwo: ko.observableArray(['Get a full travel refund, even on a non-refundable fare.','Cancel for any reason, up to 24 hours prior to departure.','Option available at time of booking or within 24 hours online.','Get your refund online. No claim or form required.', 'Additional details in <a href="#" aria-label="Open" tabindex="0">Terms & Conditions</a>'])
    }
    
ko.applyBindings(viewModel1);
// ko.cleanNode($element[0]);
});

// terms and conditions
$(function(){
var viewModel2 = new function ViewModel() {
    //false onload
    this.shouldShow = ko.observable(false);
    
    this.checkIfShow = function() {
        //is it visible
      return this.shouldShow();
    };
  };
  ko.applyBindings(viewModel2);
  //this feels redundant? could I do an if/ifnot in here instead?
  $('#toggle').on('click', function() {
    // if not showing then it will on toggle click
    viewModel2.shouldShow(!viewModel2.shouldShow());
  });
  $('#toggleTwo').on('click', function() {
    viewModel2.shouldShow(!viewModel2.shouldShow());
  });
})


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