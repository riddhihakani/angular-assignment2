(function(){

angular.module('ShoppingList',[])
.controller('toBuyController',toBuyController)
.controller('alreadyBoughtController',alreadyBoughtController)
.service('ManagingItemsService',ManagingItemsService);


toBuyController.$inject = ['ManagingItemsService'];
function toBuyController(ManagingItemsService){
var toBuyItems = this;
toBuyItems.toBuyList = ManagingItemsService.getItems();

toBuyItems.buyItem = function(itemIndex){
    ManagingItemsService.buyItem(itemIndex);
};


};

alreadyBoughtController.$inject = ['ManagingItemsService'];
function alreadyBoughtController(ManagingItemsService){

    var alreadyBoughtItems = this;

    alreadyBoughtItems.boughtItems = ManagingItemsService.getBoughtItems();
};


function ManagingItemsService(){

    var service = this;

    var boughtItems = [];

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
        },
        {
            name : "Tomato Ketchup",
            quantity : 1,
        },
        {
            name : "Oreo Biscuit",
            quantity : 6,
        }
    ];

    service.getItems = function(){
           return toBuyList;
    };

    service.buyItem = function(itemIndex) {
        var item = toBuyList[itemIndex];

        boughtItems.push(item);
        toBuyList.splice(itemIndex, 1);
    };

    service.getBoughtItems = function(){
        return boughtItems;
    }
    
};


})();