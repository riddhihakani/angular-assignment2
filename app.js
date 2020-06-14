(function(){

angular.module('ShoppingList',[])
.controller('toBuyController',toBuyController)
.controller('alreadyBoughtController',alreadyBoughtController)
.service('ManagingItemsService',ManagingItemsService);


toBuyController.$inject = ['ManagingItemsService'];
function toBuyController(ManagingItemsService){
var toBuyItems = this;
toBuyItems.toBuyList = ManagingItemsService.getItems();



};

alreadyBoughtController.$inject = ['ManagingItemsService'];
function alreadyBoughtController(ManagingItemsService){

};


function ManagingItemsService(){

    var service = this;
    
    var toBuyList = [
        {
            name : "cookies",
            quantity : 5,
        },
        {
            name : "Maggie",
            quantity : 3,
        },
        {
            name : "Chocopie",
            quantity : 2,
        }
    ];

    service.getItems = function(){
           return toBuyList;
    }
    
};


})();