angular.module('storefront.customerReviews')
    .factory('storefront.customerReviewsApi', ['$resource', function ($resource) {
        return $resource('storefrontapi/customerReview', {}, {
            search: { method: 'POST', url: 'storefrontapi/customerReview/search', isArray: true },
            update: { method: 'POST' }
        });
    }]);
