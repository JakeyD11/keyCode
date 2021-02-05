document.addEventListener("keydown", function (event) {
    let keyEvent = document.getElementById("keyEvent");
    keyEvent.textContent = `${event.which}`;
    let key = document.getElementById("eventKey");
    key.textContent = `${event.key}`;
    let code = document.getElementById("eventCode");
    code.textContent = `${event.code}`;
    let which = document.getElementById("eventWhich");
    which.textContent = `${event.which}`;
    
    
})