function get_quiz(){
    var quiz_arr = ['2 X 2', '3 X 4', '7 X 3', '6 X 2', '8 X 9',
                '11 X 3', '13 X 4', '7 X 7', '12 X 5', '15 X 5'];
    var answer_arr = [4,12,21,12,72,33,42,49,60,75];
    
    var score=0;
    
    for(var i=0; i<quiz_arr.length; i++){
        var answer=prompt(quiz_arr[i],'');
        answer=parseInt(answer);
        if(answer==answer_arr[i]){
            score++;   
        }
    }
    return score;
}

function result(score){
    alert('당신의 점수는'+score*10+'점입니다');
}