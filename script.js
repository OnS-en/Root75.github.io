function changeEnglishThing(event){
    Name = event.currentTarget.value;
    if(this?.twoLetterBlank && Name.length == 2){
        Name = Name[0]+"　"+Name[1]
    }
    if(this.japanese == !isEnglish){
        this.object.innerHTML = Name;
        if(this.object.clientWidth>this.maxWidth){
            this.object.style.transform = `scale(${this.maxWidth/this.object.clientWidth*this.defaultScale},1)`
        }else{
            this.object.style.transform = `scale(${this.defaultScale},1)`
        }
    }
}

function changeThing(setting){
    Name = setting.name;
    if(setting?.twoLetterBlank && Name.length == 2){
        Name = Name[0]+"　"+Name[1]
    }
    setting.object.innerHTML = Name;
    if(setting.object.clientWidth>setting.maxWidth){
        setting.object.style.transform = `scale(${setting.maxWidth/setting.object.clientWidth*setting.defaultScale},1)`
    }else{
        setting.object.style.transform = `scale(${setting.defaultScale},1)`
    }
}

function changeSamething(event){
    Name = event.currentTarget.value;
    this.object.innerHTML = Name;
}

function changeReserved(event){
    reserved = event.target.value;
    maku_ReserveSettings.className=reserved;
    maku_Reserved.innerHTML = reserved_text[reserved][Number(isEnglish)];
}

function changeEnglish(event){
    isEnglish = !isEnglish;
    type = ["Japanese","English"];
    maku_EnglishSettings.className = type[Number(isEnglish)];
    maku_Reserved.innerHTML = reserved_text[reserved][Number(isEnglish)];
    if(isEnglish){
        changeThing({name:trainNameEnglish.value,object:maku_Name,maxWidth:130,defaultScale:0.82});
        changeThing({name:trainDestinationEnglish.value,object:maku_Destination,maxWidth:270,defaultScale:0.8});
        changeThing({name:trainTypeEnglish.value,object:maku_ltd,maxWidth:167,defaultScale:1});
    }else{
        changeThing({name:trainName.value,object:maku_Name,maxWidth:130,defaultScale:0.9});
        changeThing({name:trainDestination.value,object:maku_Destination,maxWidth:270,defaultScale:1});
        changeThing({name:trainType.value,object:maku_ltd,maxWidth:167,defaultScale:1});
    }
}

function changeGray(event){
    isExtra = !isExtra;
    type = ["red","gray"];
    maku_GraySettings.className = type[Number(isExtra)];
    trainName.disabled = isExtra;
    trainNameEnglish.disabled = isExtra;
    trainNumber.disabled = isExtra;
}

function setSample(event){
    trainType.value = sample_texts[this.number]["type"];
    trainTypeEnglish.value = sample_texts[this.number]["type-English"];
    trainName.value = sample_texts[this.number]["Name"];
    trainNameEnglish.value = sample_texts[this.number]["Name-English"];
    trainNumber.value = sample_texts[this.number]["Train-Number"];
    trainDestination.value = sample_texts[this.number]["Destination"];
    trainDestinationEnglish.value = sample_texts[this.number]["Destination-English"];
    trainCarNumber.value = sample_texts[this.number]["Car-Number"];
    trainReserved.checked = sample_texts[this.number]["reserved"]=="reserved";
    trainGray.checked = sample_texts[this.number]["class"]=="gray";
    trainEnglish.checked = false;
    isEnglish = false;
    type = ["red","gray"];
    isExtra = sample_texts[this.number]["class"]=="gray";
    maku_GraySettings.className = type[Number(isExtra)];
    trainName.disabled = isExtra;
    trainNameEnglish.disabled = isExtra;
    trainNumber.disabled = isExtra;
    changeThing({name:trainName.value,object:maku_Name,maxWidth:130,defaultScale:0.9});
    changeThing({name:trainDestination.value,object:maku_Destination,maxWidth:270,defaultScale:1,twoLetterBlank:true});
    changeThing({name:trainType.value,object:maku_ltd,maxWidth:167,defaultScale:1});
    maku_EnglishSettings.className = type[Number(isEnglish)];
    maku_Reserved.innerHTML = reserved_text[sample_texts[this.number]["reserved"]][Number(isEnglish)];
    maku_ReserveSettings.className=sample_texts[this.number]["reserved"];
}

const sample_texts = [
    {"type":"特急","type-English":"Ltd.Exp","Name":"ひだ","Name-English":"Hida","Train-Number":"3","Destination":"富山","Destination-English":"Toyama","Car-Number":"10","reserved":"reserved","class":"red"},
    {"type":"特急","type-English":"Ltd.Exp","Name":"南紀","Name-English":"Nanki","Train-Number":"5","Destination":"紀伊勝浦","Destination-English":"Kii-Katsuura","Car-Number":"1","reserved":"non-reserved","class":"red"},
    {"type":"特急","type-English":"Ltd.Exp","Name":"鈴鹿グランプリ","Name-English":"Suzuka Grand Prix","Train-Number":"1","Destination":"鈴鹿サーキット稲生","Destination-English":"Suzuka Circuit Ino","Car-Number":"2","reserved":"reserved","class":"red"},
    {"type":"臨時","type-English":"Extra","Name":"","Name-English":"","Train-Number":"","Destination":"熊野市","Destination-English":"Kumanoshi","Car-Number":"4","reserved":"non-reserved","class":"gray"}
]

const reserved_text = {"reserved":["指定席","Reserved"],"non-reserved":["自由席","Non-Reserved"]};

let maku_ltd = document.getElementById("Exp_shubetsu");
let maku_Name = document.getElementById("Exp_name");
let max_NameWidth = 130;
let maku_TrainNumber = document.getElementById("Exp_count");
let maku_Destination = document.getElementById("ikisaki");
let maku_CarNumber = document.getElementById("gousha");
let maku_Reserved = document.getElementById("reserved");
let maku_ReserveSettings = document.getElementById("room");
let maku_EnglishSettings = document.getElementById("Maku_box");
let maku_GraySettings = document.getElementById("Maku_shubetsu")

let trainType = document.getElementById("Type");
let trainTypeEnglish = document.getElementById("Type-English")
let trainName = document.getElementById("Name");
let trainNameEnglish = document.getElementById("Name-English");
let trainNumber = document.getElementById("Train-Number");
let trainDestination = document.getElementById("Destination");
let trainDestinationEnglish = document.getElementById("Destination-English");
let trainCarNumber = document.getElementById("Car-Number");
let trainReserved = document.getElementById("IsReserved");
let trainEnglish = document.getElementById("IsEnglish");
let trainGray = document.getElementById("IsExtra");
let saveButton = document.getElementById("save_as_file")
let hiddenLink = document.getElementById("save_link");
let isEnglish = false;
let isExtra = false;
let reserved = "reserved";
let sample_buttons = [];
for(let i=0;i<4;i++){
    sample_buttons.push(document.getElementById("sample"+String(i+1)));
    sample_buttons[i].addEventListener("click",{number:i,handleEvent:setSample});
}

trainType.addEventListener("input",{object:maku_ltd,japanese:true,maxWidth:167,defaultScale:1,handleEvent:changeEnglishThing});
trainTypeEnglish.addEventListener("input",{object:maku_ltd,japanese:false,maxWidth:167,defaultScale:1,handleEvent:changeEnglishThing});
trainName.addEventListener("input",{object:maku_Name,japanese:true,maxWidth:130,defaultScale:0.9,handleEvent:changeEnglishThing});
trainNameEnglish.addEventListener("input",{object:maku_Name,japanese:false,maxWidth:130,defaultScale:0.82,handleEvent:changeEnglishThing});
trainDestination.addEventListener("input",{object:maku_Destination,japanese:true,maxWidth:270,twoLetterBlank:true,defaultScale:1,handleEvent:changeEnglishThing});
trainDestinationEnglish.addEventListener("input",{object:maku_Destination,japanese:false,maxWidth:270,twoLetterBlank:false,defaultScale:0.8,handleEvent:changeEnglishThing});
trainReserved.addEventListener("input",changeReserved)
trainNumber.addEventListener("input",{object:maku_TrainNumber,handleEvent:changeSamething})
trainCarNumber.addEventListener("input",{object:maku_CarNumber,handleEvent:changeSamething})
trainEnglish.addEventListener("input",changeEnglish)
trainGray.addEventListener("input",changeGray)
saveButton.addEventListener("click",()=>{
    html2canvas(document.getElementById("Maku_soto"),{backgroundColor: null}).then(canvas=>{
        hiddenLink.setAttribute("href",canvas.toDataURL());
        hiddenLink.setAttribute("download",`${trainType.value}${trainName.value} ${trainDestination.value}行 HC85風側面幕.png`);
        hiddenLink.click();
    })
})