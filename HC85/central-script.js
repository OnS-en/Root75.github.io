function changeObjectInnerFromEvent(event){
    // object
    // ?autoBlank
    // maxWidth
    this.center ??= true;
    this.changeAlign ??= "left"
    value = event.currentTarget.value;
    this.virtialObject ??= this.object
    maxWidth = MaxWidths[this.maxWidth]
    if(this?.autoBlank){
        if(value.length==2){
            value = value[0] + "　　" + value[1]
        }else if(value.length==3){
            value = value[0] + " " + value[1] + " " + value[2]
        }
    }
    this.object.innerHTML = value;
    this.virtialObject.innerHTML = value;
    nowWidth = this.virtialObject.offsetWidth;
    console.log(nowWidth)
    if(nowWidth>maxWidth){
        this.object.style.textAlign = this.changeAlign;
        this.object.style.transform = `scale(${maxWidth/nowWidth*this.defaultScale},1)`;
    }else{
        this.object.style.transform = `scale(${this.defaultScale},1)`;
        this.object.style.textAlign = this.defaultAlign;
    }
    if(this.center){
        this.object.style.left = `${(730-maxWidth)/2}px`
    }
}

function middleLineChange(event){
    value = event.currentTarget.value;
    this.virtialObject ??= this.object
    this.object.innerHTML = value;
    this.virtialObject.innerHTML = value;
    maxWidth = MaxWidths[this.maxWidth]
    nowWidth =this.virtialObject.offsetWidth
    if(nowWidth>maxWidth){
        this.object.style.textAlign = "left";
        this.object.style.transform = `scale(${maxWidth/nowWidth*this.defaultScale},1)`;
    }else{
        this.object.style.transform = `scale(${this.defaultScale},1)`;
        this.object.style.textAlign = this.defaultAlign;
    }
    SignEkimeiMiddleLine.style.left = `${(730-Math.min(nowWidth+5,730))/2}px`
    SignEkimeiMiddleLine.style.width = `${Math.min(nowWidth+5,730)}px`
}

function changeColorBySelect(event){
    if(event.target.value != "custom"){
        this.colorInput.value = colorDict[event.target.value];
        this.changeLine.innerHTML = lineDict[event.target.value];
        this.changeInput.innerHTML = lineDict[event.target.value];
        changeColorByInput(colorDict[event.target.value],this.changeHex,this.changeNumber);
    }
}

function toggleSettings(event){
    this.disable ??= []
    flags[this.flag] = !flags[this.flag];
    /*
    for(content of this.disable){
        content.disabled = !flags[this.flag];
        if(content?.type == "checkbox"){
            content.checked = false;
            changeTable[4] = false
        }
    }*/
    for(content of changeClass[this.flag]){
        content.className = this.changeTable[Number(flags[this.flag])];
    }

    if(this.flag<2){
        kanawidth = [160,110,160,125];
        MaxWidths[this.flag*2+4] = kanawidth[Number(flags[this.flag])];
        MaxWidths[this.flag*2+5] = kanawidth[Number(flags[this.flag])+2];
        width = [380,200];
        MaxWidths[3] = width[Number(flags[0]||flags[1])];
        SignLocation.style.width = `${MaxWidths[3]}px`;
        nowWidth = SignLocationVirtial.offsetWidth;
        if(nowWidth>MaxWidths[3]){
            SignLocation.style.textAlign = "left";
            SignLocation.style.transform = `scale(${MaxWidths[3]/nowWidth},1)`;
        }else{
            SignLocation.style.textAlign = "center";
            SignLocation.style.transform = `scale(1,1)`;
        }
        SignLocation.style.left = `${(730-MaxWidths[3])/2}px`
    }else if(this.flag==2){
        logoName = ["JR_Central_logo.png","TKJ_logo.png"]
        document.getElementById("Logo").src = logoName[Number(flags[this.flag])];
    }else if(this.flag==3){
        flags[4] = false;
        useNumber2.disabled = !flags[3];
        console.log(flags[3])
        useNumber2.checked = false;
    }
}

function changeColorPassby(event){
    changeColorByInput(event.currentTarget.value,this.changeHex,this.changeNumber)
}

function changeColorByInput(colorHex,changeHex,changeNumber){
    changeHex.innerHTML = `${colorHex}`;
    changeNumber.style.backgroundColor = colorHex;
}

let inputCenterHiragana = document.getElementById("Center-Hiragana");
let inputCenterKanji = document.getElementById("Center-Kanji");
let inputLeftHiragana1 = document.getElementById("Left-Hiragana-1");
let inputRightHiragana1 = document.getElementById("Right-Hiragana-1");
let inputLeftHiragana2 = document.getElementById("Left-Hiragana-2");
let inputRightHiragana2 = document.getElementById("Right-Hiragana-2");
let inputCenterEnglish = document.getElementById("Center-English");
let inputLeftEnglish1 = document.getElementById("Left-English-1");
let inputRightEnglish1 = document.getElementById("Right-English-1");
let inputLeftEnglish2 = document.getElementById("Left-English-2");
let inputRightEnglish2 = document.getElementById("Right-English-2");
let inputLineLetter1 = document.getElementById("Line-Letter1");
let inputLineLetter2 = document.getElementById("Line-Letter2");
let inputLineNumber1 = document.getElementById("Line-Number1");
let inputLineNumber2 = document.getElementById("Line-Number2");
let inputLineColor1 = document.getElementById("Line-Color1");
let inputLineColor2 = document.getElementById("Line-Color2");
let inputDefaultColor1 = document.getElementById("default-colors1");
let inputDefaultColor2 = document.getElementById("default-colors2");
let inputLocation = document.getElementById("Station-Location");
let useLeftSecond = document.getElementById("Left-Use");
let useRightSecond = document.getElementById("Right-Use");
let useNumber1 = document.getElementById("Number1-use");
let useNumber2 = document.getElementById("Number2-use");
let useJohoku = document.getElementById("Jouhoku-use");
let saveButton = document.getElementById("save_as_file");
let hiddenLink = document.getElementById("save_link");
// ^^^inputs^^^

let SignEkimeiKana = document.getElementById("Ekimei-Kana");
let SignEkimeiKanaVirtial = document.getElementById("Ekimei-Kana-virtial");
let SignEkimeiKanji = document.getElementById("Ekimei-Kanji");
let SignEkimeiKanjiVirtial = document.getElementById("Ekimei-Kanji-virtial");
let SignEkimeiLine = document.getElementById("Ekimei-Line");
let SignEkimeiJouhokuLine = document.getElementById("Jouhoku-Line");
let SignEkimeiMiddleLine = document.getElementById("Middle-Line");
let SignEkimeiEnglish = document.getElementById("Ekimei-English");
let SignEkimeiEnglishVertial = document.getElementById("Ekimei-English-virtial");
let SignLocation = document.getElementById("Eki-Location");
let SignLocationVirtial = document.getElementById("Eki-Location-virtial");
let SignBeforeEkiKana = document.getElementById("Before-Eki");
let SignBeforeEkiEnglish = document.getElementById("Before-Eki-English");
let SignBeforeEkiKana2 = document.getElementById("Before-Eki-2nd");
let SignBeforeEkiEnglish2 = document.getElementById("Before-Eki-English-2nd");
let SignAfterEkiKana = document.getElementById("After-Eki");
let SignAfterEkiEnglish = document.getElementById("After-Eki-English");
let SignAfterEkiKana2 = document.getElementById("After-Eki-2nd");
let SignAfterEkiEnglish2 = document.getElementById("After-Eki-English-2nd");
let SignNumberingBackground1 = document.getElementById("Numbering");
let SignNumberingBackground2 = document.getElementById("Numbering2");
let SignNumberingLetter1 = document.getElementsByClassName("Line-Letter")[0];
let SignNumberingLetter2 = document.getElementsByClassName("Line-Letter")[1];
let SignNumberingNumber1 = document.getElementsByClassName("Line-Number")[0];
let SignNumberingNumber2 = document.getElementsByClassName("Line-Number")[1];
// ^^^Signs^^^

let isUseLeftSecond = false;
let isUseRightSecond = false;
let isJohokuLine = false;
let isUseNumberingOne = true;
let isUseNumberingTwo = false;
// ^^^Bools^^^

let ClassUseLeftStation = document.getElementById("Left-Station");
let ClassUseLeftSetting = document.getElementById("left-2");
let ClassUseRightStation = document.getElementById("Right-Station");
let ClassUseRightSetting = document.getElementById("right-2");
let ClassUseAnyNumbering = document.getElementById("Numbering-Count");
let ClassUseJohoku = SignEkimeiLine

let flags = [isUseLeftSecond,isUseRightSecond,isJohokuLine,isUseNumberingOne,isUseNumberingTwo]
let changeClass = [[ClassUseLeftStation,ClassUseLeftSetting],[ClassUseRightStation,ClassUseRightSetting]
,[ClassUseJohoku],[ClassUseAnyNumbering],[ClassUseAnyNumbering]]

let MaxWidths = [520,500,730,340,160,160,160,160]
let colorDict = {
    "tokaido": "#f47920",
    "gotemba": "#477543",
    "minobu": "#773C97",
    "iida": "#6fa3d7",
    "taketoyo": "#8c5a38",
    "chuo": "#327198",
    "takayama": "#9e1813",
    "taita": "#c8ba45",
    "kansai": "#16b68f"
}
let lineDict = {
    "tokaido": "CA",
    "gotemba": "CB",
    "minobu": "CC",
    "iida": "CD",
    "taketoyo": "CE",
    "chuo": "CF",
    "takayama": "CG",
    "taita": "CI",
    "kansai": "CJ"
}

inputCenterHiragana.addEventListener("input",{object:SignEkimeiKana,virtialObject:SignEkimeiKanaVirtial,autoBlank:true,defaultScale:1,maxWidth:0,defaultAlign:"center",handleEvent:changeObjectInnerFromEvent});
inputCenterKanji.addEventListener("input",{object:SignEkimeiKanji,virtialObject:SignEkimeiKanjiVirtial,autoBlank:true,defaultScale:1,maxWidth:1,defaultAlign:"center",handleEvent:changeObjectInnerFromEvent});
inputCenterEnglish.addEventListener("input",{object:SignEkimeiEnglish,virtialObject:SignEkimeiEnglishVertial,autoBlank:false,defaultScale:1,maxWidth:2,defaultAlign:"center",handleEvent:middleLineChange});
inputLocation.addEventListener("input",{object:SignLocation,virtialObject:SignLocationVirtial,autoBlank:false,defaultScale:1,maxWidth:3,defaultAlign:"center",handleEvent:changeObjectInnerFromEvent});
inputLeftHiragana1.addEventListener("input",{object:SignBeforeEkiKana,autoBlank:true,defaultScale:1,maxWidth:4,center:false,defaultAlign:"left",handleEvent:changeObjectInnerFromEvent});
inputLeftEnglish1.addEventListener("input",{object:SignBeforeEkiEnglish,autoBlank:true,defaultScale:1,maxWidth:5,center:false,defaultAlign:"left",handleEvent:changeObjectInnerFromEvent});
inputLeftHiragana2.addEventListener("input",{object:SignBeforeEkiKana2,autoBlank:true,defaultScale:1,maxWidth:4,center:false,defaultAlign:"left",handleEvent:changeObjectInnerFromEvent});
inputLeftEnglish2.addEventListener("input",{object:SignBeforeEkiEnglish2,autoBlank:true,defaultScale:1,maxWidth:5,center:false,defaultAlign:"left",handleEvent:changeObjectInnerFromEvent});
inputRightHiragana1.addEventListener("input",{object:SignAfterEkiKana,autoBlank:true,defaultScale:1,maxWidth:6,center:false,defaultAlign:"left",changeAlign:"right",handleEvent:changeObjectInnerFromEvent});
inputRightEnglish1.addEventListener("input",{object:SignAfterEkiEnglish,autoBlank:true,defaultScale:1,maxWidth:7,center:false,defaultAlign:"left",changeAlign:"right",handleEvent:changeObjectInnerFromEvent});
inputRightHiragana2.addEventListener("input",{object:SignAfterEkiKana2,autoBlank:true,defaultScale:1,maxWidth:6,center:false,defaultAlign:"left",changeAlign:"right",handleEvent:changeObjectInnerFromEvent});
inputRightEnglish2.addEventListener("input",{object:SignAfterEkiEnglish2,autoBlank:true,defaultScale:1,maxWidth:7,center:false,defaultAlign:"left",changeAlign:"right",handleEvent:changeObjectInnerFromEvent});
inputLineLetter1.addEventListener("input",{object:SignNumberingLetter1,autoBlank:false,defaultScale:1,maxWidth:999,center:false,defaultAlign:"center",handleEvent:changeObjectInnerFromEvent})
inputLineLetter2.addEventListener("input",{object:SignNumberingLetter2,autoBlank:false,defaultScale:1,maxWidth:999,center:false,defaultAlign:"center",handleEvent:changeObjectInnerFromEvent})
inputLineNumber1.addEventListener("input",{object:SignNumberingNumber1,autoBlank:false,defaultScale:1,maxWidth:999,center:false,defaultAlign:"center",handleEvent:changeObjectInnerFromEvent})
inputLineNumber2.addEventListener("input",{object:SignNumberingNumber2,autoBlank:false,defaultScale:1,maxWidth:999,center:false,defaultAlign:"center",handleEvent:changeObjectInnerFromEvent})
useLeftSecond.addEventListener("input",{flag:0,changeTable:["One","Two"],handleEvent:toggleSettings});
useRightSecond.addEventListener("input",{flag:1,changeTable:["One","Two"],handleEvent:toggleSettings});
useJohoku.addEventListener("input",{flag:2,changeTable:["central","Johoku"],handleEvent:toggleSettings});
useNumber1.addEventListener("input",{flag:3,changeTable:["Zero","One"],disable:
    document.getElementsByClassName("settitngs-numbering")[1].children,handleEvent:toggleSettings});
useNumber2.addEventListener("input",{flag:4,changeTable:["One","Two"],disable:
    document.getElementsByClassName("settitngs-numbering")[1].children,handleEvent:toggleSettings});
inputDefaultColor1.addEventListener("input",{colorInput:inputLineColor1,changeHex:document.getElementById("Color-Hex1"),changeNumber:SignNumberingBackground1,changeLine:SignNumberingLetter1,changeInput:inputLineLetter1,handleEvent:changeColorBySelect});
inputLineColor1.addEventListener("input",{changeHex:document.getElementById("Color-Hex1"),changeNumber:SignNumberingBackground1,handleEvent:changeColorPassby})
inputDefaultColor2.addEventListener("input",{colorInput:inputLineColor2,changeHex:document.getElementById("Color-Hex2"),changeNumber:SignNumberingBackground2,changeLine:SignNumberingLetter2,changeInput:inputLineLetter2,handleEvent:changeColorBySelect});
inputLineColor2.addEventListener("input",{changeHex:document.getElementById("Color-Hex2"),changeNumber:SignNumberingBackground2,handleEvent:changeColorPassby})
saveButton.addEventListener("click",()=>{
    html2canvas(document.getElementById("Sign")).then(canvas=>{
        hiddenLink.setAttribute("href",canvas.toDataURL());
        hiddenLink.setAttribute("download",`${inputCenterKanji.value}駅JR東海風駅名標.png`);
        hiddenLink.click();
    })
})