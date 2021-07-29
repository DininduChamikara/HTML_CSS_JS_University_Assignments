function btn_func(){
    if(document.getElementById('btn').textContent == 'ON'){
        document.getElementById('bulb_img').src="bulb_on.jpg";
        document.getElementById('btn').textContent = "OFF";
    }
    else{
        document.getElementById('bulb_img').src="bulb_off.jpg";
        document.getElementById('btn').textContent = "ON";
    }
    
}