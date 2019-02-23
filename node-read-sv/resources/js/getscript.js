

const button = document.getElementById( "generate-script" );



button.addEventListener( "click", () => {
    let script = document.createElement( "p" );
    script .className = "script";
    script.innerText = `<script src="http://localhost:4000/public/js/boardme.js"></script>`;

    button.style.display = "none";

    document.body.appendChild( script );

    let instructions = document.createElement( "p" );
    instructions.className = "instructions";
    instructions.innerText = "Paste the script as the last line in your HTML body element!";

    document.body.appendChild( instructions );


    let triggers = document.createElement( "button" );
    triggers.className = "action-button";
    triggers.innerText = "SHOW TRIGGERS";
    document.body.appendChild( triggers );


    triggers.addEventListener( "click", () => {
        document.body.appendChild( createTrigger( "boardme-guide-1" ) );
        document.body.appendChild( createTrigger( "boardme-guide-2" ) );
        document.body.appendChild( createTrigger( "boardme-guide-3" ) );
        document.body.appendChild( createTrigger( "boardme-guide-4" ) );

        let instructions = document.createElement( "p" );
        instructions.className = "instructions";
        instructions.innerText = "Insert the guide triggers anywhere in your page to show the guides.";

        document.body.appendChild( instructions );

        triggers.parentNode.removeChild( triggers );
    });


});





function createTrigger(triggerId) {
    let trigger = document.createElement( "p" );
    trigger.className = "script";
    trigger.innerText = `<span id="${triggerId}"></span>`;
    return trigger;
}