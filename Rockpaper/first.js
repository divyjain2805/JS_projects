const container = document.querySelector(".container"),
result_user = document.querySelector(".result_user img"),
result_comp = document.querySelector(".result_comp img"),
result = document.querySelector(".result"),
options_img = document.querySelectorAll(".options_img")

options_img.forEach((image,index) => {
    image.addEventListener("click", (e)=>{
        image.classList.add("active");
    

    options_img.forEach((image2,index2) => {
        index !== index2 && image2.classList.remove("active");

    });
     
    let imgsrc = image.querySelector("img").src;
    result_user.src = imgsrc
    // console.log(e.target)

    let randon_no = Math.floor(Math.random()*3);

    let cpu_imgs = ["./rock.png","./paper.png","./scissors.png"]

    result_comp.src = cpu_imgs[randon_no];

    let compValue = ["R","P","S"][randon_no];
    let userValue = ["R","P","S"][index];

    let outcomes = {
        RR: "Draw",
        PP: "Draw",
        SS: "Draw",
        RP: "Computer",
        PR: "User",
        PS: "Computer",
        SP: "User",
        SR: "Computer",
        RS: "User"

    };

    let outcome = outcomes[userValue + compValue]; 
    
    result.textContent = userValue === compValue ? "Draw" : `${outcome} "won"`;
    
});
});