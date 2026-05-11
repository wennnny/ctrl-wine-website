
'use client';

import { useEffect } from "react";

const wines = [
    {
        category: "Wine by the Glass｜單杯價格",
        items: [
            {
                name: "當日紅酒精選 Daily Red Wine",
                cost: 350,
                desc: "看我們老闆今天心情如何",
            },
            {
                name: "當日白酒精選 Daily White Wine",
                cost: 350,
                desc: "看我們老闆今天想開哪一隻",
            },
            {
                name: "啤酒 Beer",
                cost: 250,
                desc: "最初經典生啤酒，偶爾會有特別款",
            },
        ],
    },
    {
        category: "RED WINE｜紅酒",
        items: [
            {
                name: "澳洲 雅倫布酒莊 Y系列梅洛紅酒",
                cost: 1300,
                desc: "清新深色漿果香、水果糖、黑巧克力與乾果氣息。酒體圓潤，單寧柔順，是經典易飲的梅洛紅酒。",
            },
            {
                name: "西班牙 阿莫酒莊 蚱蜢紅酒",
                cost: 1800,
                desc: "李子、黑醋栗、覆盆子與地中海香料香氣，口感清爽，類似薄酒萊新酒風格。",
            },
            {
                name: "德國 馬丁堅石酒莊 瑪那 淡紅酒",
                cost: 2000,
                desc: "清爽型-櫻桃、草莓、紅石榴與蔓越莓香氣，酸度明亮，帶橙花、紫羅蘭與草本氣息。適飲溫度 10–13°C。",
            },
            {
                name: "西班牙 葡滌酒莊 小海村莊級紅酒",
                cost: 2000,
                desc: "濃郁型-草莓、優格、花香與地中海香料交織，酸度明亮，單寧細緻，尾韻悠長。",
            },
            {
                name: "西班牙 葡滌酒莊 班吉亞村莊級 火山紅酒",
                cost: 2200,
                desc: "帶火山岩土壤氣息，接續紅莓果與櫻桃香。酒體細緻，近似勃艮第黑皮諾。",
            },
        ],
    },
    {
        category: "WHITE / ORANGE WINE｜白酒・橘酒",
        items: [
            {
                name: "西班牙 薩拉多酒莊 海灣之星白酒",
                cost: 1800,
                desc: "Albariño 典型清新果香，酸度充滿活力，帶桃類香氣與清脆海灣感。",
            },
            {
                name: "西班牙 巴巴狄優雪莉酒莊 檉柳樹有機橘酒",
                cost: 2200,
                desc: "果香、香草、白花與香料堅果氣息，單寧清晰，結構感佳，帶柔和礦物風味。",
            },
            {
                name: "義大利 坎貝拉酒莊「幸運」白酒",
                cost: 2200,
                desc: "杏桃、紅蘋果、洋甘菊與淡淡香草氣息，口感清新易飲，帶微微礦物鹹感。",
            },
            {
                name: "義大利 托斯卡尼 小鴨橘酒",
                cost: 2400,
                desc: "中等酸度、明顯礦物質與溫和橡木氣味。帶花香、柑橘、杏子與甘草尾韻。",
            },
        ],
    },
    {
        category: "SPARKLING｜氣泡酒",
        items: [
            {
                name: "義大利 TOSO Moscato 微甜氣泡酒",
                cost: 1100,
                desc: "100% Moscato，香氣愉悅、酒精濃度溫和，適合搭配甜點、水果與酥皮點心。",
            },
            {
                name: "西班牙 阿莫酒莊 小螳螂自然氣泡酒",
                cost: 1980,
                desc: "輕淡鹹感、柑橘水果、白花香與燧石氣息。耐飲開胃，帶接骨木花與蜂蜜檸檬香。",
            },
        ],
    },
];

function price(cost: number) {
    return `NT$${(cost).toLocaleString()}`;
}

export default function MenuPage() {
    useEffect(() => {
        // Google Analytics
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-SSN3YP74FQ';
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-SSN3YP74FQ');
    `;
        document.head.appendChild(script2);
    }, []);
    return (
        <main className="min-h-screen bg-[#06110d] px-6 py-10 text-[#f5f0e6]">
            <section className="mx-auto max-w-6xl">
                <div className="mb-12 flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#9a2b39]">
                            Ctrl + Wine
                        </p>
                        <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
                            Wine Menu
                        </h1>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#aaa096] md:text-base">
                            精選自然酒單｜所有酒款皆以售價呈現。自然酒不經過濾，若有沉澱物屬正常現象。
                        </p>
                    </div>

                    <div className="rounded-2xl border border-[#9a2b39]/40 bg-white/[0.03] px-6 py-4 text-sm text-[#c8bfae]">
                        20:00 – 03:00｜Hsinchu
                    </div>
                </div>

                <div className="grid gap-8">
                    {wines.map((section) => (
                        <section
                            key={section.category}
                            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8"
                        >
                            <h2 className="mb-6 border-b border-white/10 pb-4 text-2xl font-semibold tracking-wide md:text-3xl">
                                {section.category}
                            </h2>

                            <div className="grid gap-6">
                                {section.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="grid gap-3 border-b border-white/5 pb-6 last:border-b-0 last:pb-0 md:grid-cols-[1fr_auto]"
                                    >
                                        <div>
                                            <h3 className="text-lg font-medium text-[#fff8ea]">
                                                {item.name}
                                            </h3>
                                            <p className="mt-2 text-sm leading-7 text-[#aaa096]">
                                                {item.desc}
                                            </p>
                                        </div>

                                        <div className="text-left text-xl font-semibold text-[#e7d3a1] md:text-right">
                                            {price(item.cost)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                <div className="mt-12 rounded-[2rem] border border-[#9a2b39]/40 bg-[#9a2b39]/10 p-6 text-center">
                    <p className="text-lg font-medium">Wine. Chill. Repeat.</p>
                    <p className="mt-2 text-sm text-[#aaa096]">
                        包場、活動合作、酒單搭配與品牌合作歡迎私訊洽詢。
                    </p>
                </div>
            </section>
        </main>
    );
}

