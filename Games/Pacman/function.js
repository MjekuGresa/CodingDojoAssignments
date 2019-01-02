window.onload = function(){
    var world = [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,3,1,1,1,1,1,2,1,1,1,1,4,1,1,1,1,1,2],
        [2,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,2,1,3,2,2,2,2,2,1,2,2,2,2,1,2],
        [2,1,1,1,1,4,2,1,1,1,1,1,1,2,1,2,1,1,1,1,2],
        [2,1,1,1,3,1,2,1,1,1,1,3,1,2,1,2,1,1,1,1,2],
        [2,1,1,2,2,2,2,1,1,1,1,1,1,2,2,2,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,3,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ] 
    
    var score = 0;
    var pacman_lives = 3;
    var pacman = {
        x: 1,
        y: 1
    };
    
    function display_world(){
        var output = " ";

        for(var i=0; i<world.length;i++){
            output += "\n<div class='row'>\n";
            for(var j=0; j<world[i].length; j++){
                if(world[i][j] == 2)
                    output += "<div class='brick'></div>";
                else if(world[i][j] == 1)
                    output += "<div class='coin'></div>";
                else if(world[i][j] == 0)
                    output += "<div class='empty'></div>";
                else if(world[i][j] == 3)
                    output += "<div class='cherry'></div>";
                else if(world[i][j] == 4)
                    output += "<div class='ghost'></div>";
            }
            output += "\n</div>";
        } 
        //console.log(output)
        document.getElementById("world").innerHTML = output;          
    }

    function display_pacman(){
        document.getElementById('pacman').style.left = pacman.x * 20 + 'px';
        document.getElementById('pacman').style.top = pacman.y*20 + 'px';
    }
    function display_score_lives(){
        document.getElementById('score').innerHTML = score;
        document.getElementById('lives').innerHTML = pacman_lives;
    }
    
    display_world();
    display_pacman();
    display_score_lives();

    document.onkeydown = function(e){
        if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2){ //left
            pacman.x --;
        }
        else if(e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2) {//right
            pacman.x ++;
        }
        else if(e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2) {//up
            pacman.y --;
        }
        else if(e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2) {//down
            pacman.y ++;
        }           

        if(world[pacman.y][pacman.x] == 1){
            world[pacman.y][pacman.x] = 0;
            score += 10;
        }
        else if(world[pacman.y][pacman.x] == 3){
            world[pacman.y][pacman.x] = 0;
            score += 50;
        }
        else if(world[pacman.y][pacman.x] == 4){
            pacman_lives --;
            if(pacman_lives == 0){
                alert('Game Over! \nGame will be restared.')
                location.reload();
            }
        }
        display_pacman();
        display_world();
        display_score_lives();
    }
    
}