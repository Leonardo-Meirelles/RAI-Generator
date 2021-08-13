let aerodrome = document.getElementById('aerodrome');
let registration = document.getElementById('registration');

function upper (tag, input) {
  
    tag.addEventListener(input ,() => {
        tag.value = tag.value.toUpperCase();  
        
    })

};

upper(aerodrome,'input')
upper(registration,'input')



