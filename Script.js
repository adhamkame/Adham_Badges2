const codes = {
    "code1": "Badge1.html",
    "code2": "Badge2.html",
    "code3": "Badge3.html",
    "code4": "Badge4.html",
    "code5": "Badge5.html",
    "code6": "Badge6.html",
    "code7": "Badge7.html",
    "code8": "Badge8.html",
    "code9": "Badge9.html",
};

function checkCode() {
    const input = document.getElementById('Input_Doma').value;
    
    if(codes[input]) {
        window.open(codes[input], '_blank');  
    } else {
        alert('Please enter the correct code');
    }
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        checkCode();
    }
}


















