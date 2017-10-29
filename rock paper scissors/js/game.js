
var userChoice,computerChoice;
var countuser = 0, countcomputer = 0;
function rock(){
    userChoice="rock";
    input();
};
function paper(){
    userChoice="paper";
    input();
};
function scissors(){
    userChoice="scissors";
    input();
};
var input = function(){
    computerChoice = Math.random();
    if (computerChoice < 0.34) {
	    computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
	    computerChoice = "paper";
    } else {
	    computerChoice = "scissors";
    } console.log("Computer: " + computerChoice);
    var result = compare(userChoice, computerChoice);
    alert(result);
    alert("Score: User="+ countuser + " Computer= " + countcomputer);
};
var compare = function(c1, c2){
    if(c1===c2){
        return "The result is a tie! Select again";
        
    }
    else if(c1 === "rock"){
        if(c2 === "scissors"){
            countuser++;
            return "You Win! Computer got "+ c2;
        }
        else{
            countcomputer++;
            return "You loose! Computer got "+ c2;
        }
    }
    else if(c1 === "paper"){
        if(c2 === "rock"){
            countuser++;
            return "You Win! Computer got "+ c2;
        }
        else{
            countcomputer++;
            return "You loose! Computer got "+ c2;
        }
    }
    else if(c1 === "scissors"){
        if(c2 === "rock"){
            countcomputer++;
            return "You loose! Computer got "+ c2;
        }
        else{
            countuser++;
            return "You Win! Computer got "+ c2;
        }
    }
};

                window.onscroll = function() {myFunction()};
                function myFunction() {
                    var navbar = document.getElementById("myNavbar");
                    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                        navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-white";
                    } else {
                        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", "");
                    }
                };

                function toggleFunction() {
                    var x = document.getElementById("navDemo");
                    if (x.className.indexOf("w3-show") == -1) {
                        x.className += " w3-show";
                    } else {
                        x.className = x.className.replace(" w3-show", "");
                    }
                };