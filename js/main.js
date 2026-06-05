console.log("=================================");
console.log("🚀 VYNARA INITIALIZED");
console.log("🤖 VIN-AI ONLINE");
console.log("=================================");

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeVynara();
    }
);

function initializeVynara(){

    showStartupMessage();

    console.log(
        "VYNARA Loaded Successfully"
    );
}

function showStartupMessage(){

    setTimeout(() => {

        const status =
        document.querySelector(
            ".status"
        );

        if(status){

            status.innerHTML =
            "● VIN-AI ONLINE";
        }

    },1000);
}