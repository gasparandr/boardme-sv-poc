

const guides = [
    {
        id: "boardme-guide-1",
        text: "asdasdsadasdsa",
        color: "red",
        x: 100,
        y: 140
    },
    {
        id: "boardme-guide-2",
        text: "Be amazed!",
        color: "deepskyblue",
        x: 400,
        y: 140
    },
    {
        id: "boardme-guide-3",
        text: "Good day sir",
        color: "#FF43C3",
        x: 700,
        y: 140
    }
];


const listenerArea = 50;


let activeGuide = 0;




let UID = {
    _current: 0,
    getNew: function(){
        this._current++;
        return this._current;
    }
};



HTMLElement.prototype.pseudoStyle = function(element,prop,value){
    let _this = this;
    let _sheetId = "pseudoStyles";
    let _head = document.head || document.getElementsByTagName('head')[0];
    let _sheet = document.getElementById(_sheetId) || document.createElement('style');
    _sheet.id = _sheetId;
    let className = "pseudoStyle" + UID.getNew();

    _this.className +=  " "+className;

    _sheet.innerHTML += " ."+className+":"+element+"{"+prop+":"+value+"}";
    _head.appendChild(_sheet);
    return this;
};



function createToolTip(guide) {
    let tip = document.createElement( "div" );

    tip.id = guide.id;

    tip.innerText               = guide.text;

    tip.style.position          = "absolute";
    tip.style.background        = "yellowgreen";
    tip.style.borderRadius      = ".4em";
    tip.style.width             = "170px";
    tip.style.height            = "100px";
    tip.style.top               = guide.y + "px";
    tip.style.left              = guide.x + "px";
    tip.style.color             = "white";
    tip.style.textAlign         = "center";
    tip.style.lineHeight        = "75px";
    tip.style.fontSize          = "15px";
    tip.style.fontWeight        = "bold";
    tip.style.boxShadow         = "0px 11px 41px -12px rgba(0,0,0,0.55)";
    tip.style.background        = `${ guide.color } url('http://localhost:4000/public/images/emoticon.png') no-repeat center 50px`;
    tip.style.backgroundSize    = "35px";
    tip.style.cursor            = "pointer";


    tip.pseudoStyle( "after", "content", "''" );
    tip.pseudoStyle( "after", "position", "absolute" );
    tip.pseudoStyle( "after", "top", "0" );
    tip.pseudoStyle( "after", "left", "50%" );
    tip.pseudoStyle( "after", "width", "0" );
    tip.pseudoStyle( "after", "height", "0" );
    tip.pseudoStyle( "after", "border", "20px solid transparent" );
    tip.pseudoStyle( "after", "border-bottom-color", guide.color );
    tip.pseudoStyle( "after", "border-top", "0" );
    tip.pseudoStyle( "after", "border-left", "0" );
    tip.pseudoStyle( "after", "margin-left", "-55px" );
    tip.pseudoStyle( "after", "margin-top", "-20px" );

    return tip;
}



function renderGuide() {

    if ( activeGuide >= guides.length ) return;

    const guide = guides[ activeGuide ];

    const toolTip = createToolTip( guide );

    document.body.appendChild( toolTip );
}


renderGuide();



document.addEventListener( "click", (e) => {

    if ( activeGuide >= guides.length ) {
        const guide = document.getElementById( guides[ activeGuide - 1 ].id );

        if ( guide ) {
            guide.parentNode.removeChild( guide );
        } else {
            return;
        }
    }


    const x = e.clientX;
    const y = e.clientY;

    const guideX = guides[ activeGuide ].x;
    const guideY = guides[ activeGuide ].y;

    const guide = document.getElementById( guides[ activeGuide ].id );

    const boundingXMIN = guideX - listenerArea;
    const boundingXMAX = guideX + guide.offsetWidth + listenerArea;
    const boundingYMIN = guideY - listenerArea;
    const boundingYMAX = guideY + guide.offsetHeight + listenerArea;

    if ( x >= boundingXMIN && x <= boundingXMAX &&
         y >= boundingYMIN && y <= boundingYMAX ) {
        console.log( "HIT REGISTERED!!!!!" );

        guide.parentNode.removeChild( guide );

        activeGuide++;
        renderGuide();
    }
});