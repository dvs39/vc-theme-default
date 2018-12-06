var moduleName = "storefront.customerReviews";

if (storefrontAppDependencies != undefined) {
    storefrontAppDependencies.push(moduleName);
}

angular.module(moduleName, ['ngResource']);

angular.module('storefront.customerReviews')
    .component('vcCustomerReviewsList', {
        templateUrl: 'themes/assets/js/customerReviews/customerReviews-list.tpl.liquid',
        bindings: {
            productId: '<'
        },
        controller: ['$scope', 'storefront.customerReviewsApi', function($scope, customerReviewsApi) {
            var $ctrl = this;
            $ctrl.state = 'notLoaded';

            $ctrl.initialize = function () {
                 customerReviewsApi.search({ productIds: [$ctrl.productId] }, function(response) {
                    $ctrl.reviewList = response;//.filter(e => e.isActive);
                 });
            };

            $ctrl.$onInit = function () {
                $ctrl.state = 'loaded';
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
