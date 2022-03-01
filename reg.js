document.querySelector(".button").onclick = function(){
  let name = document.querySelector('.name').value;
  let password = document.querySelector('.password').value;
  let confirm = document.querySelector('.confr').value;
  if(password == ''){
    alert("Field cannot be empty");
  }
   if(password != confirm){
    alert("Password didnt match");
    return false;
  }

  if (name == ''){
    setErrorFor(name, 'Name cannot be blank');
  }

  if(password.length <= 6){
    alert("Password should be longer than 6 characters");
  }

  }
