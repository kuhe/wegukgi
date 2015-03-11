var Namespace = {};
Namespace.topics = {
    cat : 'main',
    'Software Engineering' : {
        'Mathematics' : {
            'desc' : 'Rutgers \'09. About 20 pounds ago. With rigor, my friends.',
            '=' : 'Is not to be used for assignment or in place of the word \'is\' in a sentence.',
            'Real Analysis' : 'Puts the capital M in STEM. Core competency like CS data structures.',
            'Complex Analysis' : 'I think I had dreamt the whole ordeal.',
            'Graph Theory' : 'We did it here first.',
            'Logic' : 'For every if only then, there exists an or not.',
            'Set Theory' : 'Cardinality and out of memory exceptions.',
            'Economics' : {
                'desc' : 'Money velocity: how fast your wallet flies.',
                'Game Theory' : 'Rationality has a different meaning here. No, this is not game design.'
            }
        },
        'Algorithms' : {
            'Time Complexity' : 'Equivalent to how much computing power needed when that is a constant.',
            'Space Complexity' : 'Memory storage needs.',
            'Recurrence Relation' : 'Defines a series of values with one equation.',
            'Merge Sort' : 'Classic divide and conquer.',
            'Bogosort' : 'The optimal sorting method.',
            'Quicksort' : 'Pivot harder!',
            'Karger\'s Min Cut' : 'Worst steak you can order. Probabilistic, lots of contractions.',
            'Dijkstra\'s Pathfinder' : 'Always gets lost and always finds its way. BFS tentative distance via summation.',
            'Tarjan\'s Strong Connections' : 'Won\'t help you get into office. DFS that looks for circles.',
            'Garbage Collection' : 'Vital cornerstone of modern civilization and high level languages.',
            'Compiler Optimizations' : 'You could say that I trust you implicitly.'
        },
        'Data and its Structures' : {
            'Memory' : 'RAM, that is. Holds your stuff! Becomes amnesic when you power off.',
            'Pointer' : 'A reference to a memory location.',
            'Object' : 'Tuna of the dirt. Ubiquitous, nutritious, and satisfying.',
            'Linked List' : 'A thing and a pointer',
            'Array' : {
                'PHP' : 'Swiss army hammer of collection types.',
                'Python' : 'Is Pepsi okay?',
                'C#' : 'An actual array, so you\'re probably looking for a list.',
                'JavaScript' : 'Where arrays and functions can have secret string keys because they\'re all objects.'
            },
            'Hash Table' : {
                'desc' : 'The basis of cache keying, and the world economy.',
                'PHP' : 'See "array"',
                'Python' : 'Dictionaries',
                'C#' : 'An actual hash table, so you\'re probably looking for a dictionary.',
                'JavaScript' : 'Any and every object, including arrays & functions.'
            },
            'Stack' : 'Last on, first off.',
            'Queue' : 'Invented by the British, like most things. First come first serve.',
            'Tree' : {
                'desc' : 'A graph with a root and no circular paths.',
                'Heap' : 'Ordered along any path.',
                'Binary Search Tree' : 'Left is the opposite of right.'
            }
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
            'Test' : ''
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
            'Zend Framework 2': ''
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
    metadata : ['cat', 'depth', 'desc'],
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
    var giraffe = this.self = window.s = this;
    this.topics = Namespace.topics;
    Namespace.IndexService.addNavigationData(this.topics, 'main');
    this.metadata = Namespace.IndexService.metadata;
    var pointers = this.pointers = [this.topics];
    this.typeOf = function(thing) {
        return typeof thing;
    };
    this.navigate = function(parent, child) {
        giraffe.comment = '';
        if (typeof child == 'string') {
            pointers[parent.depth] = parent;
            giraffe.comment = child;
            while (pointers.length > 1 + parent.depth) pointers.pop();
        }
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