/*
    I fear a few of the goats may have been lost to wolves.
    We may not see the winter through, my friends. But it has been an honor and a privilege.
*/
var home = angular.module('Home', ['controllers']);

cacheKey = Math.floor(Math.random()*1500);

//angular.module('directives', [])
//    .directive('name', ClassName);

IndexController = function($scope) { (function() {
    this.topics = {
        cat : 'main',
        'Computer Science' : {
            'Algorithms' : {
                'Sorting' : ''
            },
            'Data Structures' : {
                'Caching' : ''
            }
        },
        'Languages' : {
            'PHP' : '',
            'JS' : '',
            'Python' : '',
            'C#' : '',
            'Java' : '',
            'Ruby' : '',
            'SQL' : '',
            'HTML/CSS' : ''
        },
        'Software Development' : {
            'VCS' : '',
            'Test Automation' : '',
            'Frontend Build Automation' : '',
            'Cloud' : ''
        },
        'Development Environment' : {
            'JetBrains' : '',
            'Microsoft' : '',
            'Unix' : ''
        },
        'Project Management' : {
            'Agile' : '',
            'Team' : '',
            'Code Review' : ''
        }
    };

    this.pointers = [this.topics];
    this.self = this;

}).bind($scope)()};

angular.module('controllers', [])
    .controller('IndexController', IndexController);