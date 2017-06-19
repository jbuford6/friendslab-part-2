var friends = ["Bill Gates", "Lil Wayne", "Kobe Bryant", "Jesus", "Taylor Swift"];

document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById('myBtn');
    button.addEventListener("click", function singSong() {
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i] + ":");
            var friend = friends[i];
            var board = document.createElement('div');
            board.className = 'friend';
            var names = document.createElement("h3");
            var text = document.createTextNode(friend);
            names.appendChild(text);
            board.appendChild(names);
            document.body.appendChild(board);
            button.appendChild(board);
            for (var j = 99; j > 0; j--) {
                if (j > 2) {
                    var lyrics = (j + " lines of code in the file, " + j + " lines of code; " + (friend) + " strikes one out, clears it all out, " + ([j] - 1) + " lines of code in the file.");
                    console.log(j + " lines of code in the file, " + j + " lines of code; " + (friend) + " strikes one out, clears it all out, " + ([j] - 1) + " lines of code in the file.");
                    var para = document.createElement("p");
                    var song = document.createTextNode(lyrics);
                    para.appendChild(song);
                    board.appendChild(para);
                } else if (j === 2) {
                    console.log(j + " lines of code in the file, " + j + " lines of code; " + (friend) + " strikes one out, clears it all out,  " + ([j] - 1) + " line of code in the file.");
                } else {
                    console.log(j + " line of code in the file, line of code; " + (friend) + " strikes one out, clears it all out, no more lines of code in the file.");

                }
            }
        }
    });
});









