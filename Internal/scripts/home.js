/*
    I fear a few of the goats may have been lost to wolves.
    We may not see the winter through, my friends. But it has been an honor and a privilege.
*/
Namespace.home = angular.module('Home', ['controllers']);
Namespace.cacheKey = Math.floor(Math.random()*1500);
//angular.module('directives', [])
//    .directive('name', ClassName);
angular.module('controllers', [])
    .controller('IndexController', Namespace.IndexController);