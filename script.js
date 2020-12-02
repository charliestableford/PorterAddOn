$ (function(){
    var myViewModel = function(){
        this.showMessage = ko.observable(true);
    }
    ko.applyBindings(new myViewModel());
})