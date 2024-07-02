const output = document.getElementById("output");

function includeButton(display){
  if(output.value === "0"){
    output.value = output.value.slice(1) + display
  }
  else{
    output.value += display
  }
}

function clearBtn(){
  output.value = "0";
}

function calculate(){
  try{
    output.value = eval(output.value)
  }
  catch(error){
    output.value = "Error"
    setTimeout(clearBtn, 2000)
  }
}

if(isNaN(output)){
  output.value = "0"
}
