$("#answer, #answer1, #answer2, #answer3, #answer4").hide()

$("#question").click(() => {
    $("#answer").fadeToggle();
});

$("#question1").click(() => {
    $("#answer1").fadeToggle();
});


$("#question2").click(() => {
    $("#answer2").fadeToggle();
});

$("#question3").click(() => {
    $("#answer3").fadeToggle();
});

$("#question4").click(() => {
    $("#answer4").fadeToggle();
});