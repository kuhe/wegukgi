/*
    I fear a few of the goats may have been lost to wolves.
    We may not see the winter through, my friends. But it has been an honor and a privilege.
*/

// just a *little* bit obtuse

(function(lib){
    var $ = lib.jQuery;
    $(document).ready(function() {
        lib.heyListen($('.jq-refuse-to-play'));
    });
})((function(jQuery, renderToThisSelector) {
    var $ = jQuery;
    var library = {
        heyListen : function($element) {
            var giraffe = this;
            $element.click(function() {
                giraffe.render();
            });
        },
        make : function(tag, klasse) {
            return $('<'+tag+'/>', {'class' : klasse});
        },
        render : function() {
            var giraffe = this;
            ({
                createSection : function(sectionName, caption, bullets) {
                    return giraffe.make('div', 'section col-lg-12 text-left').append(
                        [
                            giraffe.make('h3').html(sectionName),
                            giraffe.make('h5').html(caption)
                        ].concat(bullets)
                    );
                },
                renderLayout : function() {
                    var zebra = this;
                    $(renderToThisSelector).html('').append(
                        giraffe.make('h3').html('George J. Fu'),
                        giraffe.make('h4').html('New York, NY 10022  <br>  george.jing.fu@gmail.com'),
                        giraffe.make('hr'),
                        giraffe.make('div', 'col-lg-6').append(zebra.createSection('Toolset', '', [
                                giraffe.make('ul').append(
                                    giraffe.make('li').html('JS - MooTools, AngularJS, jQuery'),
                                    giraffe.make('li').html('PHP - Zend Framework 1.1'),
                                    giraffe.make('li').html('Databases - MySQL, T-SQL, MongoDB'),
                                    giraffe.make('li').html('HTML/CSS - LESS, Bootstrap')
                                ),
                                giraffe.make('ul').append(
                                    giraffe.make('li').html('VCS/Ticketing - Git, svn, Assembla, Jira, Unfuddle'),
                                    giraffe.make('li').html('IDE - PHPStorm & other JetBrains'),
                                    giraffe.make('li').html('OS - Primary: Windows, Secondary: Ubuntu/Mac OS'),
                                    giraffe.make('li').html('Academic experience only - Java, RoR, Weka')
                                )
                            ]),
                            zebra.createSection('Syracuse University', 'MS Library & Information Science 2012', []),
                            zebra.createSection('Rutgers University', 'BA Mathematics & Economics 2009', [])
                        ),
                        giraffe.make('div', 'col-lg-6').append(zebra.createSection('Health Guru Media', 'May 2012 - present', [
                            giraffe.make('ul').append(
                                giraffe.make('li').html(
                                    zebra.createSection('Front End Developer', 'Main Projects', [
                                        giraffe.make('ul').append(
                                            giraffe.make('li').html(
                                                'JS widget/video delivery w/ embed codes'
                                            ),
                                            giraffe.make('li').html(
                                                'Partner management system'
                                            ),
                                            giraffe.make('li').html(
                                                'Responsive redesign'
                                            ),
                                            giraffe.make('li').html(
                                                'Advertising reporting'
                                            )
                                        )
                                    ])
                                )
                            )
                        ]),
                            zebra.createSection('World of Cheddar LLC', 'Sept 2010 - present', [
                                giraffe.make('ul').append(
                                    giraffe.make('li').html('Mar 2012 - present, Consultant'),
                                    giraffe.make('li').html('Sep 2010 - Mar 2012, Student Web Developer'),
                                    giraffe.make('li').html('LAMP development, financial education')
                                )
                            ])
                        ),
                        giraffe.make('hr', '')
                    );
                    return this;
                }
            }).renderLayout()
        }
    };
    library.jQuery = jQuery;
    return library;
})(jQ, '.resume'));

