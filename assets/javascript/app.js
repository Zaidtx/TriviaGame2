$('#button').on('click', function () {
    game.start();

});


const questions = [{
    question: "What is the official nickname of texas?",
    answers: ["The Loan Stat State", "Water Winter Wonderland", "The Golden State"],
    correctAnswer: "The Loan Stat State"
}, {
    question: "The working title of the TV series Dallas was what?",
    answers: ["Dallas", "Houston", "San Antonio"],
    correctAnswer: "Houston"
}, {
    question: "Texas is the second-largest of the 50 U.S. states with only what state being larger",
    answers: ["california", "Nevada", "Alaska"],
    correctAnswer: "Alaska"
}, {
    question: "Which state borders Texas to the north?",
    answers: ["New Mexico", "Oklahoma", "lousiana"],
    correctAnswer: "Oklahoma"
}, {
    question: "What is the Texas state fruit?",
    answers: ["Red grapefruit", "Apple", "grape"],
    correctAnswer: "Red grapefruit"
}, {
    question: "Which Texas city is the fourth-largest city in the United States?",
    answers: ["New York", "Houston", "Dallas"],
    correctAnswer: "Houston"
}, {
    question: "What city is the second largest in the texsa?",
    answers: ["El Paso", "San Antonio", "Auston"],
    correctAnswer: "Auston"
}];


//

let game = {
    correct: 0,
    incorrect: 0,
    counter: 10,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter<=0){
            console.log("time is up");
            game.done();
        }
    },

    start: function () {

        timer = setInterval(game.countdown, 1000)
        $('#subremover').prepend('<h2>Time Remaining: <span id="counter">100</span> Seconds</h2>');
        $('#button').remove();
        for (let i=0;i<questions.length; i++) {
            $("#subremover").append('<h2>' + questions[i].question + "</h2>");
            //subloop
            for (let j=0;j<questions[i].answers.length;j++) {
                $("#subremover").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }

        }

    },

    done: function(){
        $.each($("input[name='question-0']:checked"),function() {
            if ($(this).val()==questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function() {
            if ($(this).val()==questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function() {
            if ($(this).val()==questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function() {
            if ($(this).val()==questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function() {
            if ($(this).val()==questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function() {
            if ($(this).val()==questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function() {
            if ($(this).val()==questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        // showing the results

        this.result();

    },

    result: function(){
        clearInterval(timer);
        $('#subremover h2').remove();

        $('#subremover').html("<h2> Done!</h2>");
        $('#subremover').append("<h3>Correct Answers: "+this.correct+"</h3>");
        $('#subremover').append("<h3>Wrong Answers:"+this.incorrect+"</h3>");
        $('#subremover').append("<h3>Unanswered question: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }


}



