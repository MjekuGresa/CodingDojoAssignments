function createGround(width, height){
    var result = [];
    for (var i = 0 ; i < width; i++) {
        result[i] = [];
        for (var j = 0; j < height; j++) {
            result[i][j] = parseInt(Math.random() * 2);
        }
    }
    return result;
}
// Create a new ground with width = 15 & height = 9
var ground = createGround(10, 10);
console.log(ground)