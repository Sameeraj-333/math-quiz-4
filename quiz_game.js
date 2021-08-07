player_1_score = 0;
player_2_score = 0;


player_1_name = localStorage.getItem('player1_name');
document.getElementById("player1_name").innerHTML = player_1_name + ": ";
player_2_name = localStorage.getItem('player2_name')
document.getElementById("player2_name").innerHTML = player_2_name + ": ";
document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;
document.getElementById("player_question").innerHTML = player_1_name;
document.getElementById("player_answer").innerHTML =   player_2_name;
function send(){
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;
    answer = parseInt(num1) * parseInt(num2);
    document.getElementById("output").innerHTML = "<h1>" + "Q:" + "</h1>" + "<h1>" + num1 + "</h1>"  + "<h1>" + " X " + "</h1> " + "<h1>" + num2 + "</h1>"+ "<br>" + "<h3>Answer: "  + "<input type='number' id='input_check_box'>" + "</input>" + "<button class='btn btn-success' onClick='check()'>" + "<h3>" + "Submit" + "</h3>" + "</button>";
    document.getElementById("number1").innerHTML = "";
    document.getElementById("number2").innerHTML = "";

}
question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == answer){
        if(answer_turn == "player1")
        {
            player_1_score += 1
            document.getElementById("player1_score").innerHTML = player_1_score;

        }else{
            player_2_score += 1
            document.getElementById("player2_score").innerHTML = player_2_score;

        }
    }
    if(question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = player_2_name;
    
    }else{
      question_turn = "player1"
      document.getElementById("player_question").innerHTML = player_1_name;

    }
     if(answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = player_2_name;
    
    }else{
      question_turn = "player1"
      document.getElementById("player_answer").innerHTML = player_1_name;
      
    }

    document.getElementById("input_check_box").innerHTML = ""
}