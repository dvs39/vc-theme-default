var moduleName = "storefront.customerReviews";

if (storefrontAppDependencies != undefined) {
    storefrontAppDependencies.push(moduleName);
}

angular.module(moduleName, ['ngResource', 'angular-rating-icons']);

angular.module('storefront.customerReviews')
    .component('vcCustomerReviewsList', {
        templateUrl: 'themes/assets/js/customerReviews/customerReviews-list.tpl.liquid',
        bindings: {
            productId: '<'
        },
        controller: ['$scope', 'storefront.customerReviewsApi', function($scope, customerReviewsApi) {
            var $ctrl = this;

            $ctrl.initialize = function () {
                 customerReviewsApi.search({ productIds: [$ctrl.productId], take: 10 }, function(response) {
                    $ctrl.reviewList = response;
                 });
            };

            $ctrl.$onInit = function () {
                $ctrl.initialize();
            };
        }]
    });

angular.module('storefront.customerReviews')
    .factory('storefront.customerReviewsApi', ['$resource', function ($resource) {
        return $resource('storefrontapi/customerReview', {}, {
            search: { method: 'POST', url: 'storefrontapi/customerReview/search', isArray: true },
            update: { method: 'POST' }
        });
    }]);

//# sourceMappingURL=customerReviews-scripts.js.map
