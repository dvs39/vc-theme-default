angular.module('storefrontApp')
    .factory('storefront.customerReviewsApi', ['$resource', function ($resource) {
        return $resource('api/customerReviews', {}, {
            search: { method: 'POST', url: 'api/customerReviews/search' },
            update: { method: 'POST' }
        });
    }]);
