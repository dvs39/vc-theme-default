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