const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
}

function greeting(name){
    // const hasNameInObject = GUEST_LIST.hasOwnProperty(name);
    
    const country = GUEST_LIST[name];
    if (country){
        console.log(`Hi! I'm ${name} and I'm from ${country}.`)
    } else console.log("Hi! I'm a guest.");
}
greeting();
greeting("Randy");
