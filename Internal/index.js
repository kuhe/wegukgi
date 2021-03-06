var Namespace = {};
Namespace.topics = {
    cat : 'main',
    '  Software Engineering' : {
        desc : 'The creation of software to avenge one\'s parents.',
        'Mathematics' : {
            'desc' : 'Rutgers \'09. With rigor, my friends.',
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
            desc : 'Traditional folk music from the land of Algoria, played briskly in the key of C major',
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
            'Compiler Optimizations' : 'You could say that I trust you implicitly.',
            'Prim\'s Tree' : 'Annexation of the weakest neighboring countries one at a time',
            'Kruskal\'s Tree' : 'MST via union find',
            'Kadane\'s Subarray': 'Max ending here and max so far',
            'Binary Search': 'Available as a consequence of an ordering',
            '' : ''
        },
        'Data and its Structures' : {
            desc: '',
            'Memory' : 'RAM, that is. Holds your stuff! Becomes amnesic when you power off.',
            'Pointer' : 'A memory address held up by a lamppost',
            'Reference' : 'A constant pointer with automatic dereferencing, I think',
            'Object' : 'Tuna of the dirt. Ubiquitous, nutritious, and satisfying.',
            'Linked List' : 'A thing and a pointer/reference to another thing -Jason',
            'Unlinked List' : 'Well... Uh...',
            'Array' : {
                'desc' : 'A battery of cannon placed in series.',
                'C++' : 'Some kind of mythical engine for vectors that I\'ve never seen directly. Actually just a pointer and an optimistic outlook ' +
                        'that the contiguous memory addresses are your buddies. ' +
                        'Friendly segfault indicates when you\'ve just gone too far.',
                'PHP' : 'Swiss army hammer of collection types.',
                'Python' : 'Is Pepsi okay?',
                'C#' : 'An actual array, so you\'re probably looking for an arraylist.',
                'JavaScript' : 'Where arrays and functions can have secret string keys because they\'re all objects, which are all dictionaries.'
            },
            'ArrayList' : {
                'desc' : 'A list implemented with arrays. Or... is it an array implemented with lists!? No, of course not. It\'s the former.'
            },
            'Hash Table' : {
                'desc' : 'The basis of cache keying, and the world economy.',
                'C++' : 'eh... oh, a map!',
                'PHP' : 'See "array" or "hammer"',
                'Python' : 'Dictionaries',
                'C#' : 'An actual hash table, so you\'re probably looking for a dictionary.',
                'JavaScript' : 'Any and every object, including arrays & functions.'
            },
            'Stack' : 'Last on, first off. Also stack memory: faster access than the heap, exemplified by functional scope. You\'re in' +
                        'a function within a function, Leo!',
            'Queue' : '(British) First come first serve.',
            'Graph' : 'A visual diagram describing the massive loss of revenue suffered due to your programming errors.',
            'Tree' : {
                'desc' : 'A graph with a root and no circular paths.',
                'Heap' : 'Ordered along any path. Also heap memory: when you just dump your stuff in a pile but remember where' +
                        'everything is.',
                'Binary Search Tree' : 'Left is the opposite of right.',
                'Rotation': 'Dmitry Medvedev becomes President of Russia.'
            }
        },
        'Patterns & Principles' : {
            'desc' : 'Lay bare your biases and make ready to defend them.',
            'Snake Oil' : 'Design patterns',
            'Active Record' : 'It practically writes itself!',
            'Service Locator' : 'Inedible. I prefer the taste of DI.',
            'Data Mapper' : 'Responsible nemesis to the brash joy of ActiveRecord',
            'Caching' : 'Making a lot of money. Invalidation queues. Warm/Cool.',
            'Modularity' : {
                'Separation of Concerns' : 'The fire in the attic will not affect the temperature of the fire in the living room.',
                'Single Responsibility Principle' : 'You had, one job.'
            },
            'Functional' : {
                'desc' : 'Square wagon wheels',
                'Closure' : 'Entrapment of primitives and references of upper scope variables accessed by the function.',
                Map : 'One size fits all. Lazy way to do a for loop.',
                'Reduce/Fold' : '36-car pileup.',
                Filter : 'A bouncer for collections.',
                'Convolute/Zip' : 'Make things harder to understand.'
            },
            'Liskov substitution' : 'Children should be able to replace their parents after 20 years of hard schooling.',
            'Singleton' : 'The same turtle all the way down.',
            'Decorator' : 'Kinda like a wrapper. Modifies functions.',
            'Encapsulation' : 'You can\'t always get what you want. Directly, anyway.',
            '(web) Front Controller' : 'Run, application, run.',
            'REST Service' : 'Why PUT when you can PATCH?',
            'Asynchronicity' : 'Doing things synchronously, the hard way.',
            'Model View Controller' : 'And 3 million service factories',
            'Dependency Injection' : 'I need a thing that can do ...',
            'Test' : 'Who tests the testers?',
            'Bitwise XOR' : '^_^ flipping burgers for a living',
            'Recursion' : {
                'desc': 'Best pals with stack overflow',
                'Recursion': {
                    'Recursion': {
                        'Recursion': ''
                    }
                }
            }
        },
        'Object Orientation' : {
            'desc' : 'The organizing of concepts into classes whose names end with FactoryFactory',
            'Access Modifiers' : 'Default: public/nonexistent in many languages, package in Java, private in C++',
            'Inheritance' : 'The parent class is still alive afterward.',
            'Interface' : 'Contains your hopes and dreams of your software program',
            'Abstract' : 'Like communism, cannot be directly instantiated',
            'Static' : 'A possibly dynamic -_- field, but refers to class rather than instance properties/methods. Also the wonderful late static binding keyword in PHP',
            'Collections' : 'When you get behind on those credit lines',
            'Polymorphism' : 'Sheep, penguins, and turtles. Overloading, generics, and accepting of parametric subtypes.'
        }
    },
    '  Software Languages' : {
        'C++' : {
            'desc' : 'As a web developer, why did I even try to learn this? It\'s a lovable and punishing language.',
            'GCC C++11' : 'Thank you for "auto"'
        },
        'PHP' : {
            'desc' : 'It got better!',
            'Zend Framework 1': 'My first (2nd) MVC :D',
            'Zend Framework 2': 'Livin\' the easy life'
        },
        'JavaScript' : {
            'desc' : 'Now in one billion flavors',
            'MooTools': 'Kinda dead, but still great!',
            'jQuery' : 'Callback hell aside, JS made accessible to everyone',
            'AngularJS' : 'RAD SPA, really like the binding and model',
            'Node.js' : 'Build your JavaScript in your own home! Also the handy npm.',
            'Backbone' : 'Erm... not too familiar. Not a fan of central event buses I sometimes see with backbone. '

        },
        'Python' : {
            'desc' : 'Generators, list comprehensions and Multi-threa--- I mean processing',
            'Tornado' : 'It\'s kinda like node.'
        },
        'C#' : {
            desc: 'Cee Plus Plus Plus Plus',
            '.NET' : 'All said a really nice bundle of tools. Damn your method capitalization though.'
        },
        'Java' : {
            desc : 'A language written mostly in XML.',
            'Spring' : 'I know nothing about this.',
            'Maven' : 'I know nothing about this.',
            'Scala' : 'I know nothing about this.'
        },
        'Ruby' : {
            desc : '学んでいたときにの先生が日本人だったことが不思議じゃーーないよね。',
            'Rails' : 'Back in 2010 I could barely get this working in Ubuntu after 15 hours. Haven\'t touched it much since.'
        },
        'SQL' : 'HEY JUDE, SELECT FROM JOIN, ON GROUP BY HAVING, ORDER LIMIT. ' +
            'DEALLOCATE, IF REPLICATE MODIFY, THEN PREPARE DISCONNECT COMMIT CONTINUE',
        'HTML/CSS' : 'Pretty sensible stuff right up to wacky z-index stacking, browser differences, and IE8'
    },
    '  Software Tools' : {
        'Package Managers/VCS' : {
            'Git' : {
                'desc' : 'rite of passage: being trapped in merge resolution and never seen again, detached head state',
                'Git Flow' : 'good naming conventions hotfix/feature and observations about release cycles'
            },
            'Subversion' : 'rite of passage: merge failing in strange ways, creating six thousand tree conflicts',
            'Mercurial': 'rite of passage: accidentally creating a new history',
            'Node Package Manager': 'install gulp',
            'Composer' : 'the autoloader generation is good'
        },
        'Test Automation' : {
            desc: 'Who tests the testers?',
            'Protractor' : 'for AngularJS',
            'Jasmine' : 'to be and not to be',
            'TeamCity' : 'Better your CPU time than mine',
            'PHPUnit' : 'with PHPStorm integration, life is easy',
            'MSTest' : 'Yay'
        },
        'Frontend Build Automation' : {
            desc: 'Everything\'s gonna be all right.',
            'Gulp' : 'I prefer LESS and not using strict JS to be honest',
            'Grunt' : 'Obsolesced by gulp in my workflow, unfortunately'
        },
        'Cloud' : 'namely AWS. Haven\'t really looked into Azure or AppEngine yet'
    },
    ' Development Environment' : {
        'Cygwin' : 'Linuxify your Windows a bit.',
        'JetBrains' : 'Heroes of our cause. The recent CLion is also a great boon.',
        'Microsoft' : 'Windows/VS/SQLSRV/IIS Now the good guys again.',
        'Ubuntu' : 'Easily download any software you want as long as you want the version from 6 years ago. Also a good lesson in terminal.',
        'Apple' : 'I\'m terrible with all their devices/UI, but they look shiny. At least there\'s a terminal.'
    },
    ' Project Management' : {
        desc: 'Cat-herding has a proud tradition of futility',
        'Agile' : 'Animal Farm',
        'Team' : 'Mr. Baseball',
        'Code Review' : 'I noticed you have a variable named giraffe and a class named SeldonPlan',
        'Standardization' : 'My way or the highway, and for good reason'
    },
    'Other' : {
        'Sports' : {
            desc: 'I gave it all I could, coach, an 80% effort.',
            'Table Tennis' : 'Classically trained.',
            'Fencing' : 'Use your knees while you still can.',
            'Baseball' : 'このシーズンで、終わってしまうかもしれない'
        },
        'Histories' : {
            desc: 'The study of eagles. Dulce et decorum est...',
            '    Roman' : 'Eagles',
            '   Napoleonic' : 'Vive! l\'Em! p\'reur! More eagles',
            '  Second World War' : 'Evil eagles',
            ' Cold War': 'F-15 Strike Eagles',
            'Modern Era': 'Door-kickers. No eagles anymore except America...'
        }
    }
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
            console.log(parent, child);
            if (parent.cat.slice(-9) == 'Recursion') {
                pointers.push(parent);
            } else {
                pointers[child.depth] = child;
                while (pointers.length > 1 + child.depth) pointers.pop();
            }
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