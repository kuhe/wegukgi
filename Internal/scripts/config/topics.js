Namespace.topics = {
    cat : 'main',
    'Software Engineering' : {
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
            'Kruskal\'s Tree' : 'MST via union find'
        },
        'Data and its Structures' : {
            'Memory' : 'RAM, that is. Holds your stuff! Becomes amnesic when you power off.',
            'Pointer' : 'A memory address',
            'Reference' : 'A constant pointer with automatic dereferencing, I think',
            'Object' : 'Tuna of the dirt. Ubiquitous, nutritious, and satisfying.',
            'Linked List' : 'A thing and a pointer/reference to another thing',
            'Array' : {
                'C++' : 'Some kind of mythical engine for vectors that I\'ve never seen directly',
                'PHP' : 'Swiss army hammer of collection types.',
                'Python' : 'Is Pepsi okay?',
                'C#' : 'An actual array, so you\'re probably looking for a list.',
                'JavaScript' : 'Where arrays and functions can have secret string keys because they\'re all objects.'
            },
            'Hash Table' : {
                'desc' : 'The basis of cache keying, and the world economy.',
                'C++' : 'eh... oh, a map!',
                'PHP' : 'See "array" or "hammer"',
                'Python' : 'Dictionaries',
                'C#' : 'An actual hash table, so you\'re probably looking for a dictionary.',
                'JavaScript' : 'Any and every object, including arrays & functions.'
            },
            'Stack' : 'Last on, first off.',
            'Queue' : '(British) First come first serve.',
            'Tree' : {
                'desc' : 'A graph with a root and no circular paths.',
                'Heap' : 'Ordered along any path.',
                'Binary Search Tree' : 'Left is the opposite of right.'
            }
        },
        'Patterns & Principles' : {
            'Active Record' : 'It practically writes itself!',
            'Service Locator' : 'Inedible. I prefer the taste of DI.',
            'Data Mapper' : 'Responsible nemesis to the brash joy of ActiveRecord',
            'Caching' : 'Making a lot of money. Invalidation queues. Warm/Cool.',
            'Modularity' : {
                'Separation of Concerns' : 'The fire in the attic will not affect the temperature of the fire in the living room.',
                'Single Responsibility Principle' : 'You had, one job.'
            },
            'Liskov substitution' : 'Children should be able to replace their parents after 20 years of hard schooling.',
            'Singleton' : 'Only one turtle.',
            'Decorator' : 'Kinda like a wrapper. Modifies functions.',
            'Encapsulation' : 'You can\'t always get what you want.',
            '(web) Front Controller' : 'Run, application, run.',
            'REST Service' : 'Why PUT when you can PATCH',
            'Asynchronicity' : 'Doing things synchronously, the hard way.',
            'Model View Controller' : 'And 3 million service factories',
            'Dependency Injection' : 'I need a thing that can do ...',
            'Test' : 'Who tests the testers?',
            'Bitwise XOR' : '^_^ flipping bits for a living'
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
    'Software Languages' : {
        'C++' : {
            'desc' : 'As a web developer, why did I even try to learn this? It\'s a lovable and punishing language.',
            'GCC C++11' : 'Thank you for "auto"'
        },
        'PHP' : {
            'desc' : 'It gets better!',
            'Zend Framework 1': 'My first (2nd) MVC :D',
            'Zend Framework 2': 'Livin\' the easy life'
        },
        'JavaScript' : {
            'desc' : 'Now in one billion flavors',
            'MooTools': 'Kinda dead, but still great!',
            'jQuery' : 'Callback hell aside, JS made accessible to everyone',
            'AngularJS' : 'RAD SPA, really like the binding and model',
            'Node.js' : 'Mysterious asynch issues in my WebStorm interpreter...'
        },
        'Python' : {
            'desc' : 'List comprehensions and Multi-threa--- I mean processing',
            'Tornado' : 'It\'s kinda like node.'
        },
        'C#' : {
            '.NET' : 'All said a really nice bundle of tools. Damn your method capitalization though.'
        },
        'Java' : {
            'Spring' : 'I know nothing about this.',
            'Maven' : 'I know nothing about this.',
            'Scala' : 'I know nothing about this.'
        },
        'Ruby' : {
            'Rails' : 'Back in 2010 I could barely get this working in Ubuntu after 15 hours. Haven\'t touched it since.'
        },
        'SQL' : 'HEY JUDE, SELECT FROM JOIN, ON GROUP BY HAVING, ORDER LIMIT. ' +
            'DEALLOCATE, IF REPLICATE MODIFY, THEN PREPARE DISCONNECT COMMIT CONTINUE',
        'HTML/CSS' : 'Pretty sensible stuff right up to wacky z-index stacking, browser differences, and IE8'
    },
    'Software Tools' : {
        'Package Managers/VCS' : {
            'Git' : {
                'desc' : 'rite of passage: being trapped in merge resolution and never seen again',
                'Git Flow' : 'good naming conventions hotfix/feature and observations about release cycles'
            },
            'Subversion' : 'rite of passage: merge failing in strange ways',
            'Mercurial': 'rite of passage: accidentally creating a new history',
            'Node Package Manager': 'install gulp',
            'Composer' : 'the autoloader generation is good'
        },
        'Test Automation' : {
            'Protractor' : 'for AngularJS',
            'Jasmine' : 'to be and not to be',
            'TeamCity' : 'Better your CPU time than mine',
            'PHPUnit' : 'with PHPStorm integration, life is easy',
            'MSTest' : 'Yay'
        },
        'Frontend Build Automation' : {
            'Gulp' : 'I prefer LESS and not using strict JS to be honest',
            'Grunt' : 'Obsolesced by gulp in my workflow, unfortunately'
        },
        'Cloud' : 'namely AWS. Haven\'t really looked into Azure or AppEngine yet'
    },
    'Development Environment' : {
        'JetBrains' : 'Heroes of our cause',
        'Microsoft' : 'Not as bad as the rumors and jests of the open source world said',
        'Ubuntu' : 'Easily download any software you want as long as you want the version from 6 years ago. Also a good lesson in bash.'
    },
    'Project Management' : {
        'Agile' : 'Animal Farm',
        'Team' : 'Mr. Baseball',
        'Code Review' : 'I noticed you have a variable named Giraffe and a class named SeldonPlan',
        'Standardization' : 'My way or the highway, and for good reason'
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