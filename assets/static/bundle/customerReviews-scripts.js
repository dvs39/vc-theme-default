'use strict'
angular.module('storefrontApp')
    .component('vcCustomerReviewsList', {
        templateUrl: 'themes/assets/js/customerReviews/customerReviews-list.tpl.liquid',
        bindings: {
            productId: '='
        },
        controller: ['$scope', 'customerReviewsApi', function($scope, customerReviewsApi) {
            this.state = 'notLoaded';

            this.initialize = function () {
                customerReviewsApi.search({ productIds: ["productId"] }).then(function(response) {
                    this.reviewList = response.data.results;
                });
            };

            this.onInit = function () {
                this.state = 'loaded';
                this.initialize();
            };
        }]
    });
angular.module('storefrontApp')
    .factory('storefront.customerReviewsApi', ['$resource', function ($resource) {
        return $resource('api/customerReviews', {}, {
            search: { method: 'POST', url: 'api/customerReviews/search' },
            update: { method: 'POST' }
        });
    }]);

//# sourceMappingURL=customerReviews-scripts.js.map
