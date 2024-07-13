const display = document.getElementById("display");

function AddToDisplay(input) {
    display.value += input;
    console.log(display)
}

function AllClear(){
    display.value = ""
}

function Del(){
    display.value = display.value.slice(0,-1)
}

function Calculate(){
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Error Occured"
    }
}