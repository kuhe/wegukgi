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