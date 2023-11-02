/////display() function/////
function display(val){

    document.getElementById('input').value += val

    return val

}

// ////solve
function solve(){

  let x = document.getElementById('input').value

  let y = eval(x);

  document.getElementById('input').value = y

  return y

}

// //////clear screen
function clearScreen(){

  document.getElementById('input').value = ''

}
