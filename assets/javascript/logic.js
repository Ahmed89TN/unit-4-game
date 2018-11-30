$(document).ready(function () {

    var randomN = Math.floor(Math.random() * 102 + 19);


    $('#randy').text(randomN);


    var num1 = Math.floor(Math.random() * 12 + 1);
    var num2 = Math.floor(Math.random() * 12 + 1);
    var num3 = Math.floor(Math.random() * 12 + 1);
    var num4 = Math.floor(Math.random() * 12 + 1);

    console.log("green: " + num1);
    console.log("blue: " + num2);
    console.log("purple: " + num3);
    console.log("red: " + num4);




    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

    $("#wins").text("Wins : " + wins);
    $("#losses").text("Losses : " + losses);
    $("#total").text(playerTotal);

    function reset() {
        playerTotal = 0;
        $("#scoreboard").text(playerTotal);
        randomN = Math.floor(Math.random() * 101 + 19);
        $("#randy").text(randomN);

        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);

        
    };

   
    function win() {
        wins++;
        $("#wins").text("Wins : " + wins);
        reset();
        alert("Yeah !! Good job !! ");
    }

    function lose() {
        losses++;
        $("#losses").text("Losses : " + losses);
        reset();
        alert(" Try Again !!");
    }

   
    $("#green").on("click", function () {

        playerTotal += num1;

        $("#total").text(playerTotal);

        if (playerTotal === randomN) {

            win();

        }
        else if (playerTotal >= randomN) {

            lose();

        }
    });

   
    $("#blue").on("click", function () {

        playerTotal += num2;

        $("#total").text(playerTotal);

        if (playerTotal === randomN) {

            win();

        }
        else if (playerTotal >= randomN) {

            lose();

        }
    });

    
    $("#purple").on("click", function () {

        playerTotal += num3;

        $("#total").text(playerTotal);

        if (playerTotal === randomN) {

            win();

        }
        else if (playerTotal >= randomN) {

            lose();

        }
    });
    
    var purple = $("#red").on("click", function () {

        playerTotal += num4;

        $("#total").text(playerTotal);

        if (playerTotal === randomN) {

            win();

        }
        else if (playerTotal >= randomN) {

            lose();

        }
    });

})
