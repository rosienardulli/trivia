$(document).ready(function () {
    //global variables
    //question data
var questionCorrect = 0

    let questions = [{
        "question": "What is Leslie Knope's favorite food?",
        "answers": ["Waffles", "Pizza", "Lasagna", "Tacos"],
        "correctAnswer": "Waffles",
        "giphyURL": "https://media.giphy.com/media/4uptwrHUKxdMk/giphy.gif"
    },
    {
        "question": "What famous rapper is Donna Meagle's cousin?",
        "answers": ["Eminem ", "Ginuwine", "50 Cent ", "Lil Wayne "],
        "correctAnswer": "Ginuwine",
        "giphyURL": "https://media.giphy.com/media/4k1mWMX6cLXUY/giphy.gif"
    },
    {
        "question": "What is the most current name of Andy Dwyer's band?",
        "answers": ["Mouse Rat", "Radwagon", "Teddy Bear Suicide", "Punch Face Champions"],
        "correctAnswer": "Mouse Rat",
        "giphyURL": "https://media.giphy.com/media/mdzZtP7RigNsQ/giphy.gif"
    },
    {
        "question": "What holiday does Donna Meagle and Tom Havorford celebrate together?",
        "answers": ["Ditch Day", "Rescue A Pet Day", "Pie Day", "Treat Yo Self Day"],
        "correctAnswer": "Treat Yo Self Day",
        "giphyURL": "https://media.giphy.com/media/i1hiQy3uVZ0KQ/giphy.gif"
    },
    {
        "question": "What game did Ben Wyatt create?",
        "answers": ["Entertainment 720", "Circle of Calzones", "Cones of Dunshire", "Winds of Tremorrah"],
        "correctAnswer": "Cones of Dunshire",
        "giphyURL": "https://media.giphy.com/media/eoVGQv4vFiwog/giphy.gif"
    },
    {
        "question": "What is Chris Traeger's resting heartbeat?",
        "answers": ["23 beats per minute", "35 beats per minute", "46 beats per minute", "53 beats per minute"],
        "correctAnswer": "23 beats per minute",
        "giphyURL": "https://media.giphy.com/media/bnHtrRJa11aq4/giphy.gif"
    },
    {
        "question": "What is the name of Andy and April's dog?",
        "answers": ["Calzone", "Jack", "Champion", "Good Boy"],
        "correctAnswer": "Champion",
        "giphyURL": "https://media.giphy.com/media/eb14vgeBEB5YI/giphy.gif"
    },
    {
        "question": "At what event's corn maze does Pawnee's beloved horse, Lil Sebastian, get lost?",
        "answers": ["Fall Fun Weekend", "Autumn Celebration", "Harvest Festival", "Apple Picking Parade"],
        "correctAnswer": "Harvest Festival",
        "giphyURL": "https://media.giphy.com/media/o3kP4PPzHnzHO/giphy.gif"
    },
    {
        "question": "What is the name of Andy Dwyer's law enforcemnt alter ego?",
        "answers": ["Burt Macklan", "Greg Pikitis", "Andy Snakehole", "JJ Dino"],
        "correctAnswer": "Burt Macklan",
        "giphyURL": "https://media.giphy.com/media/poflc2xRUl2De/giphy.gif"
    },
    {
        "question": "Who did Leslie Knope run against for City Council?",
        "answers": ["Jean-Ralphio Saperstein", "Bobby Newport", "Bill Dexhart", "Ethel Beavers"],
        "correctAnswer": "Bobby Newport",
        "giphyURL": "https://media.giphy.com/media/qiB6QdiEoPJ9S/giphy.gif"
    }];

//figuring out gif to answers
    $(document).on('click', '.answers', function(){
      var choiceData = $(this).attr('choice-data')
      var answerData = $(this).attr('answer-data')
      var userChose = $(this).attr('user-chose')
      var giphyURLFromHTML = $(this).attr('giphy-url')

        if (choiceData == answerData){
          $('#giphy-container').html(`<img src="${giphyURLFromHTML}">`)
          questionCorrect++
        } else {
            // wrong image
        }
    })
    $(document).ready(function() {
        setTimeout(function() {
            $("#giphy-container").fadeOut(1500);
        },3000);
    });


    //functions
        //add timer
        function startTimer(duration, display) {
            var timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10)
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }

            $('.js-start').on('click', function(){
            var twoMinutes = 60 * 2,
                display = document.querySelector('#time');
            startTimer(twoMinutes, display);
        });

//function to start game
    function startGame() {
        //populate questions div
        for (var i = 0; i < questions.length; i++) {
            $('.js-questions').append('<p class = "mainquestions">' + questions[i].question + '</p>');
            //loop through answers
            for (var j = 0; j < questions[i].answers.length; j++) {
                $('.js-questions').append(`<span class="answers" choice-data="${questions[i].answers[j]}" answer-data="${questions[i].correctAnswer}" user-chose="false" giphy-url="${questions[i].giphyURL}">${questions[i].answers[j]}</span>`);
            }
            $('.js-questions').append('<br><hr>');
        }
    };
    //stop game
    function stopGame() {
        $('input:checked').each(function () {
            //if value = correct question answer add 1 to score
            let answerChecked = $(this).val();
            if (answerChecked === questions[$(this).attr('name')].correctAnswer) {
                console.log('correct');
            } else {
                console.log('wrong');
            }
        });
    }
    //giphy and score when game over
    //events
    //click start button will start the game
    $('.js-start').on('click', function () {
        //execute instructions
        startGame();
    });
    //click stop button will stop the game
    $('.js-stop').on('click', function () {
        //execute instructions
        stopGame();
    });
    //click stop button to see score
    //timer runs out to end game and show score
});