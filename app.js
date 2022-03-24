var arr = [
    {'type': 'A', 'name': 'lee', 'age': 20},
    {'type': 'A', 'name': 'kim', 'age': 30},
    {'type': 'A', 'name': 'song', 'age': 40},
    {'type': 'A', 'name': 'park', 'age': 50},

    {'type': 'B', 'name': 'lee', 'age': 33},
    {'type': 'B', 'name': 'hong', 'age': 18},
    {'type': 'B', 'name': 'kim', 'age': 43},
    {'type': 'B', 'name': 'kim', 'age': 26},

    {'type': 'C', 'name': 'lee', 'age': 24},
    {'type': 'C', 'name': 'kwon', 'age': 16},
    {'type': 'C', 'name': 'park', 'age': 47},
    {'type': 'C', 'name': 'kim', 'age': 38},
]

var groupByType = function(arr, key='type') {
    var map = new Map();
    arr.forEach(function(item) {
        var val = item[key];
        var collection = map.get(val);
        if (!collection) {
            map.set(val, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
};

var result = groupByType(arr);

console.log(result.get('A'));