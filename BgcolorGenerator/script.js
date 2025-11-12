const color_inputs = document.querySelectorAll(".colors input");
const color_display = document.querySelector(".gradient-box");
const color_direction = document.querySelector(".select-box select");
const color_text = document.querySelector("textarea");
const color_refresh = document.querySelector(".refresh");
const color_copy = document.querySelector(".copy");

const rancolor = () => {
const anycolor = Math.floor(Math.random() * 0xffffff).toString(16)
return `#${anycolor}`;
}

const generatecolor = (israndom) => {
if(israndom){
    // for checking purpose
// console.log(rancolor());

// call 2 time that's why use function
// otherwise only use "anycolor"
color_inputs[0].value = rancolor();
color_inputs[1].value = rancolor();

}

    // select color values by color panels
    const gradient = `linear-gradient(${color_direction.value}, ${color_inputs[0].value}, ${color_inputs[1].value})`;
    // console.log(gradient);
    // rather for console
    //  give to main display
    color_display.style.background = gradient;
    color_text.value = `background ${gradient}`;
}

const color_code = () =>{
    navigator.clipboard.writeText(color_text.value);
    color_copy.innerText = "Copied";
    setTimeout( () => color_copy.innerText = "Copy",3000);
}

color_inputs.forEach(input => {
    // fun call for input color
input.addEventListener("input",() =>generatecolor(false));
});


color_direction.addEventListener("change",() =>generatecolor(false));
color_refresh.addEventListener("click",() =>generatecolor(true));
color_copy.addEventListener("click", color_code);
