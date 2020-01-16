$('#button').on('click',function(){
    $('#button').remove();
    for(let i=0;i<questions.length;i++){
        $("#subremover").append('<h2>' +questions[i].question+"</h2>");
        //subloop
        for(let j=0;j<questions[i].answers.length;j++){
            $("#subremover").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
        }

    }

});


const questions = [{
    question:"What is the official nickname of texas?",
    answers:["The Loan Stat State" ,"Water Winter Wonderland","The Golden State"],
    correctAnswer:"The Loan Stat State"   
},{
    question:"The working title of the TV series Dallas was what?",
    answers:["Dallas","Houston", "San Antonio"],
    correctAnswer:"Houston"   
},{
    question:"Texas is the second-largest of the 50 U.S. states with only what state being larger",
    answers:["california" ,"Nevada","Alaska"],
    correctAnswer:"Alaska"   
},{
    question:"Which state borders Texas to the north?",
    answers:["New Mexico" ,"Oklahoma","lousiana"],
    correctAnswer:"Oklahoma"   
},{
    question:"What is the Texas state fruit?",
    answers:["Red grapefruit","Apple","grape"],
    correctAnswer:"Red grapefruit"   
},{
    question:"Which Texas city is the fourth-largest city in the United States?",
    answers:["New York","Houston","Dallas"],
    correctAnswer:"Houston"   
},{
    question:"What city is the second largest in the texsa?",
    answers:["El Paso" ,"San Antonio","Auston"],
    correctAnswer:"Auston"   
}];






