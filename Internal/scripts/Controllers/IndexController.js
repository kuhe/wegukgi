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