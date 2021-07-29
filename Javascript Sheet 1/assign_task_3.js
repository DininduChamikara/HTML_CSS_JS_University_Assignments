

function resp_func(){

    if((document.getElementById('tell_no').value.length)<10){                     
        const newLocal = 'response';
        document.getElementById('message').innerHTML="Please Provide valid number";
        document.getElementById('message').style.color = "brown";

    }else if((document.getElementById('tell_no').value.length) == 10 ){
        document.getElementById('message').innerHTML="Valid Number";
        document.getElementById('message').style.color = "green";
    }
    else{
        document.getElementById('message').innerHTML="Maximum Length should be 10";
        document.getElementById('message').style.color="red"; 
    }

    
}

