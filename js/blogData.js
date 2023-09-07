let blogData = [
    {
        no: 0,
        link: 'https://picsum.photos/id/128/600/400',
        title: '探索咖啡產地',
        type: '新豆資訊',
        time: ' 2023/08/15',
        txt: '這次我們深入挖掘哥倫比亞的咖啡產區，探索這片風土優越的土地如何為我們帶來獨特風味的咖啡。哥倫比亞是世界上最重要的咖啡生產國之一，擁有多樣的產地，每個地方都有其獨特的風味特點。從山區小農場到巴西豆的魅力，讓我們一同揭開這個咖啡的故事。'
    },
    {
        no: 1,
        link: 'https://picsum.photos/id/468/600/400',
        title: '手沖咖啡的藝術',
        type: '專欄分享',
        time: '2023/08/22',
        txt: ' 手沖咖啡沖泡是一門藝術。在這篇專欄中，我們將深入探討手沖咖啡的技巧和心得，分享如何用不同的沖泡方法提升風味。咖啡愛好者們，不要錯過這份精彩的內容！無論您是新手還是有經驗的咖啡沖泡者，這裡都有一些寶貴的技巧等待著您。'
    },
    {
        no: 2,
        link: 'https://picsum.photos/id/82/600/400',
        title: '奇妙的耶加雪菲',
        type: '新豆資訊',
        time: '2023/09/05',
        txt: '今天，我們談論的是來自埃塞俄比亞的珍珠，耶加雪菲。這種咖啡豆有著極致的花果香氣和獨特風味，成為咖啡界的瑰寶。耶加雪菲的故事充滿了歷史和傳奇，它是一種真正令人驚艷的咖啡。讓我們深入了解這個令人驚艷的產地，以及它所帶來的獨特風味。'
    },
    {
        no: 3,
        link: 'https://picsum.photos/id/931/600/400',
        title: '咖啡與健康',
        type: '專欄分享',
        time: ' 2023/09/12',
        txt: '咖啡不僅僅是一種美味的飲品，它還有許多健康益處。在這個專欄中，我們將討論咖啡與健康之間的關聯，包括咖啡對心臟健康和大腦功能的影響。此外，我們還將分享一些有趣的研究結果，闡述為什麼咖啡可以成為您生活的一部分，帶來健康和活力。'
    },
    {
        no: 4,
        link: 'https://picsum.photos/id/481/600/400',
        title: '印尼風味探索',
        type: '新豆資訊',
        time: '2023/09/25',
        txt: '這次我們將帶您深入印尼的咖啡世界，發現這個國家獨特的風味。印尼的咖啡以其濃郁的身體和令人難忘的風味而著稱，成為咖啡愛好者的最愛。我們將探討一些特色的咖啡品種，以及印尼獨特的咖啡製作方法。讓我們一同品味這個咖啡寶地。'
    },
    {
        no: 5,
        link: 'https://picsum.photos/id/145/600/400',
        title: '咖啡與心情',
        type: '專欄分享',
        time: '2023/10/08',
        txt: '咖啡不僅連接我們與風味的世界，還連接我們與情感的世界。在這個專欄中，我們將深入探討咖啡與心情之間的連結，以及咖啡如何影響我們的情感和情緒。我們將分享一些關於咖啡和幸福、放鬆以及社交的故事，以及如何將咖啡融入您的生活，為每一天帶來更多的愉悅。'
    },
    {
        no: 6,
        link: 'https://picsum.photos/id/87/600/400',
        title: '風味之旅-中南美洲',
        type: '新豆資訊',
        time: '2023/10/15',
        txt: ' 讓我們一同啟程，展開風味之旅，穿越中南美洲的咖啡產地。我們將深入探索哥斯大黎加的平衡風味、巴拿馬的獨特風味，以及更多令人驚艷的口感。中南美洲是咖啡的寶庫，每個國家都有其獨特的咖啡特點，讓我們一同品味這個多元的咖啡世界。'
    },
    {
        no: 7,
        link: 'https://picsum.photos/id/719/600/400',
        title: '咖啡藝術的魅力',
        type: '專欄分享',
        time: '2023/10/08',
        txt: ' 咖啡藝術是一種靈魂的表達方式。在這個專欄中，我們將深入探討咖啡藝術的魅力，包括拉花技巧、咖啡杯的設計，以及咖啡藝術如何融入我們的生活，為每一杯帶來更多的藝術感。我們將分享一些令人驚嘆的咖啡藝術品，以及如何自己動手創造獨一無二的咖啡藝術品。讓咖啡成為您的藝術之旅的一部分。'
    },
    {
        no: 8,
        link: 'https://picsum.photos/id/490/600/400',
        title: '非洲之旅',
        type: '新豆資訊',
        time: '2023/11/05',
        txt: '讓我們帶您展開一場非洲之旅，探索這片土地上令人嘆為觀止的咖啡多樣性。從埃塞俄比亞的耶加雪菲到肯尼亞的特色風味，非洲咖啡讓人無法抗拒。我們將深入瞭解每個國家的咖啡背後的故事，並分享一些獨特的咖啡品種，帶您遠足到非洲的咖啡樹叢中。'
    },
    {
        no: 9,
        link: 'https://picsum.photos/id/241/600/400',
        title: '咖啡與社區',
        type: '專欄分享',
        time: '2023/10/08',
        txt: '咖啡不僅連接我們與風味的世界，還連接我們與社區。在這個專欄中，我們將討論咖啡如何成為社區的一部分，並分享一些社區中的咖啡故事。我們將深入瞭解一些社區咖啡館的背後故事，以及咖啡如何在社區中建立聯繫，為每個人帶來歡樂和激勵。一杯咖啡，一個社區的溫暖。'
    },
    {
        no: 10,
        link: 'https://picsum.photos/id/128/600/400',
        title: '探索咖啡產地',
        type: '新豆資訊',
        time: ' 2023/08/15',
        txt: '這次我們深入挖掘哥倫比亞的咖啡產區，探索這片風土優越的土地如何為我們帶來獨特風味的咖啡。哥倫比亞是世界上最重要的咖啡生產國之一，擁有多樣的產地，每個地方都有其獨特的風味特點。從山區小農場到巴西豆的魅力，讓我們一同揭開這個咖啡的故事。'
    },
    {
        no: 11,
        link: 'https://picsum.photos/id/468/600/400',
        title: '手沖咖啡的藝術',
        type: '專欄分享',
        time: '2023/08/22',
        txt: ' 手沖咖啡沖泡是一門藝術。在這篇專欄中，我們將深入探討手沖咖啡的技巧和心得，分享如何用不同的沖泡方法提升風味。咖啡愛好者們，不要錯過這份精彩的內容！無論您是新手還是有經驗的咖啡沖泡者，這裡都有一些寶貴的技巧等待著您。'
    }
]



///blog

let article = document.querySelector('article');
let div_1 = document.createElement('div');
div_1.classList.add('d-flex');
div_1.classList.add('wrap');
div_1.classList.add('f-center');
div_1.classList.add('align-center');
for (const d of blogData) {
    let div_2 = document.createElement('div');
    div_2.classList.add('box');
    div_2.classList.add('grid-12');
    div_2.classList.add('grid-m-3');
    div_2.value = d.no;
    let img = document.createElement('img');
    img.setAttribute('src', d.link);
    let hr=document.createElement('hr');
    let p_1 = document.createElement('p');
    p_1.textContent = d.type;
    let title = document.createElement('h3');
    title.textContent = d.title;
    let p_2 = document.createElement('p');
    p_2.textContent = d.time;
    div_2.appendChild(img);
    div_2.appendChild(hr);
    div_2.appendChild(p_1);
    div_2.appendChild(title);
    div_2.appendChild(p_2);
    div_1.appendChild(div_2)
    article.appendChild(div_1)
}

let aside = document.querySelector('aside');
let box = document.querySelectorAll('.box');
for (const b of box) {
    b.addEventListener('click', function () {
        let btn_1 = parseInt(b.value);
        aside.style.display='block';
        aside.style.opacity='1';
        aside.innerHTML = `
        <div class="d-flex f-center wrap">
            <div class="grid-5">
                <img src="${blogData[btn_1].link}" alt="">
            </div>
            <div class="grid-7">
                <blockquote>${blogData[btn_1].time}<br>${blogData[btn_1].type}</blockquote>
                <h3>${blogData[btn_1].title}</h3>
                <span>${blogData[btn_1].txt}</span>
            </div>
        </div>`;
        let pic_1 = document.querySelector('.grid-5');
        pic_1.style.backgroundImage=`url(${blogData[btn_1].link})`;

                    
    })
}
aside.addEventListener('click',function () {
    this.style.display='none';
    this.style.opacity='0';
})

