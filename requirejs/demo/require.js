
var requirejs,require,define;
(function(global, undefined){
  // 获取scripts
  var req,
  dataEnter,
  baseUrl,
  cfg = {},
  scripts = document.getElementsByTagName("script");

  eachElement(scripts, function(node, index) {
    if(node.getAttribute('data-enter')) {
      dataEnter = node.getAttribute('data-enter');
      var path = dataEnter.split('/');
      baseUrl = path.length > 1 ? './' + path.pop() : './';
      return true
    }
  })

  req = requirejs = function(deps, callback) {
    if(deps) {

      return;
    }


  }

  function newContent(name) {

  }

  req({})

  function eachElement(any, func) {
    if(any) {
      for(var i = 0; i < any.length; i++) {
        if(any[i] && func(any[i], i, any)){
          break
        }
      }
    }
  }

})(window, undefined)