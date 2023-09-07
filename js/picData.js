//圖片文字滑動區域

let picData = [
    {
        no: '01',
        url: '/media/img/C01.png',
        title: '微批次',
        txt_1: '我們以微批次精選生豆為基礎，追求每個產區或莊園的獨特風味，確保每一杯都是獨一無二的咖啡體驗。'
    },
    {
        no: '02',
        url: '/media/img/C02.png',
        title: '瑕疵豆',
        txt_1: '堅持篩選優質生豆，瑕疵豆不在容忍之列。我們只為您提供最完美的咖啡，呈現最佳品質。'
    },
    {
        no: '03',
        url: '/media/img/C03.png',
        title: '現烘',
        txt_1: '我們根據訂單進行現場烘焙，讓每一杯咖啡都散發出新鮮烘焙的香氣，捕捉最佳風味。'

    },
    {
        no: '04',
        url: '/media/img/C04.png',
        title: '保存',
        txt_1: '嚴格控制咖啡保存方式，避免暴露於空氣，確保您收到的每包咖啡都保持完整風味，帶給您極致享受'
    }
];
let choiceImg = document.querySelector('#choiceImg');
let choiceBG = document.querySelector('#choiceBG');
let choiceH2 = document.querySelector('#choiceH2');
let choiceH3 = document.querySelector('#choiceH3');
let choiceP = document.querySelector('#choiceP');
let count = 0;
let choiceBtn_2 = document.querySelector('#choiceBtn_2');
choiceBtn_2.addEventListener('click', function () {
    count++;
    if (count >= picData.length) {
        count = 0
    }
    changeOn()
})
let choiceBtn_1 = document.querySelector('#choiceBtn_1');
choiceBtn_1.addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = picData.length - 1;
    }
    changeOn()
})

function changeOn() {
    choiceImg.src = picData[count].url;
    choiceH2.innerHTML = picData[count].no;
    choiceH3.innerHTML = picData[count].title;
    choiceP.innerHTML = picData[count].txt_1;
}
let time_1 = setInterval(function () {
    choiceBtn_2.click();
}, 2000);

choiceBG.addEventListener('mouseenter', function () {
    clearInterval(time_1);
})
choiceBG.addEventListener('mouseleave', function () {
    clearInterval(time_1);
    time_1 = setInterval(function () {
        choiceBtn_2.click();
    }, 2000);
})
