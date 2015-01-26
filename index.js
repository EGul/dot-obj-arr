
module.exports = function(obj, path) {

  path = path.split('.');

  while(path.length) {

    var current = path.shift();

    if (current[0] == '[' && current[current.length - 1] == ']') {
      current = current.slice(1, current.length - 1);
    }

    obj = obj[current];

  }

  return obj;
}
