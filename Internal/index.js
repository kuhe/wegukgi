var Namespace = {};
Namespace.topics = {
    cat : 'main',
    'Software Engineering' : {
        'The Computer' : {

        },
        'Algorithms' : {
            'Time Complexity' : '',
            'Space Complexity' : '',
            'Sorting' : '',
            'Insertion' : '',
            'Find' : '',
            'Garbage Collection' : ''
        },
        'Data Structures' : {

        },
        'Patterns' : {
            'Active Record' : '',
            'Service Locator' : '',
            'Data Mapper' : '',
            'Caching' : '',
            'Modularity' : {
                'Separation of Concerns' : '',
                'Single Responsibility Principle' : ''
            },
            'Singleton' : '',
            'Decorator' : '',
            '(web) Front Controller' : '',
            'REST Service' : '',
            'Events' : '',
            'Asynchronicity' : '',
            'Model View Controller' : '',
            'Dependency Injection' : '',
            'Test Driven' : ''
        },
        'Object Orientation' : {
            'Access Modifiers' : '',
            'Inheritance' : '',
            'Interface' : '',
            'Abstract' : '',
            'Static' : '',
            'Collections' : '',
            'Polymorphism' : ''
        }
    },
    'Software Languages' : {
        'PHP' : {
            'Zend Framework 1': '',
            'Zend Framework 2': '',
            'Doctrine (ORM)': ''
        },
        'JavaScript' : {
            'MooTools': '',
            'jQuery' : '',
            'AngularJS' : '',
            'Node.js' : ''
        },
        'Python' : {
            'Tornado' : ''
        },
        'C#' : '',
        'Java' : '',
        'Ruby' : '',
        'SQL' : '',
        'HTML/CSS' : ''
    },
    'Software Tools' : {
        'Package Managers/VCS' : {
            'Git' : {
                'Git Flow' : ''
            },
            'Subversion' : '',
            'Mercurial': '',
            'Node Package Manager': '',
            'Composer' : ''
        },
        'Test Automation' : {
            'Protractor' : '',
            'Jasmine' : '',
            'TeamCity' : '',
            'PHPUnit' : '',
            'MSTest' : ''
        },
        'Frontend Build Automation' : {
            'Gulp' : '',
            'Grunt' : ''
        },
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
        'Code Review' : '',
        'Standardization' : ''
    }
    //'Other' : {
    //    'Sports' : {
    //        'Table Tennis' : '',
    //        'Fencing' : '',
    //        'Baseball' : ''
    //    },
    //    'Histories' : {
    //        'Roman' : '',
    //        'Napoleonic' : '',
    //        'Second World War' : ''
    //    }
    //}
};

// Namespace.topics['Languages']['PHP']['Design Patterns'] = Namespace.topics['Computer Science']['Design Patterns'];
Namespace.IndexService = {
    metadata : ['cat', 'depth'],
    addNavigationData : function(reference, name, depth) {
        if (typeof depth == 'undefined') depth = 0;
        reference.cat = name;
        reference.depth = depth;
        for (var key in reference) {if(reference.hasOwnProperty(key)){
            if (typeof reference[key] == 'object') {
                Namespace.IndexService.addNavigationData(reference[key], reference.cat+'.'+key, depth + 1);
            }
        }}
    }
};

Namespace.IndexController = function($scope) { (function() {
    window.s = this;
    this.self = this;
    this.topics = Namespace.topics;
    Namespace.IndexService.addNavigationData(this.topics, 'main');
    this.metadata = Namespace.IndexService.metadata;
    var pointers = this.pointers = [this.topics];
    this.navigate = function(parent, child) {
        if (typeof child == 'object') {
            pointers[child.depth] = child;
            while (pointers.length > 1 + child.depth) pointers.pop();
        }
    };
}).bind($scope)()};
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