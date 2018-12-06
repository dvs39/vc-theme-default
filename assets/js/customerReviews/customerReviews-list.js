angular.module('storefront.customerReviews')
    .component('vcCustomerReviewsList', {
        templateUrl: 'themes/assets/js/customerReviews/customerReviews-list.tpl.liquid',
        bindings: {
            productId: '<'
        },
        controller: ['$scope', 'storefront.customerReviewsApi', function($scope, customerReviewsApi) {
            var $ctrl = this;

            $ctrl.initialize = function () {
                 customerReviewsApi.search({ productIds: [$ctrl.productId] }, function(response) {
                    $ctrl.reviewList = response;
                 });
            };

            $ctrl.$onInit = function () {
                $ctrl.initialize();
            };
        }]
    });
