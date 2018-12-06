var moduleName = "storefront.customerReviews";

if (storefrontAppDependencies != undefined) {
    storefrontAppDependencies.push(moduleName);
}

angular.module(moduleName, ['ngResource']);
