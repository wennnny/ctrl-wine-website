
'use client';

import { useEffect } from 'react';

export default function AboutPage() {
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
        <main className="min-h-screen bg-[#06110d] px-6 py-24 text-[#f5f0e6]">
            <section className="mx-auto max-w-5xl">
                <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9a2b39]">
                    About Ctrl + Wine
                </p>

                <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
                    Reset your day.
                    <br />
                    Debug your stress.
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-9 text-[#c8bfae]">
                    Ctrl + Wine 是一個位於新竹、為夜晚而生的微醺空間。
                    我們希望在忙碌的科技城市裡，創造一個可以暫停、交流、放鬆的地方。
                </p>

                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                        <h2 className="text-xl font-medium">Late Night</h2>
                        <p className="mt-4 text-sm leading-7 text-[#aaa096]">
                            20:00–03:00，為下班後還不想回家的人，保留一個安靜又有氛圍的深夜場域。
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                        <h2 className="text-xl font-medium">Wine & Chill</h2>
                        <p className="mt-4 text-sm leading-7 text-[#aaa096]">
                            以紅白酒、自然酒與輕鬆交流為核心，不過度喧鬧，只保留剛剛好的微醺。
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                        <h2 className="text-xl font-medium">Tech Community</h2>
                        <p className="mt-4 text-sm leading-7 text-[#aaa096]">
                            靈感來自新竹的科技日常，讓工程師、創作者與創業者能在夜晚重新連線。
                        </p>
                    </div>
                </div>

                <section className="mt-20 rounded-[2rem] border border-[#9a2b39]/40 bg-[#9a2b39]/10 p-8 md:p-12">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#c8bfae]">
                        Brand Concept
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                        A quiet bar for people who need to reboot.
                    </h2>

                    <p className="mt-6 max-w-3xl text-base leading-8 text-[#aaa096]">
                        「Ctrl」代表控制、重啟與切換狀態；「Wine」則是夜晚、放鬆與人與人之間的連結。
                        Ctrl + Wine 希望成為一個能讓人暫時離開工作模式，重新整理心情的地方。
                    </p>
                </section>

                <div className="mt-16 flex flex-col gap-4 sm:flex-row">
                    <a
                        href="/winemenu"
                        className="rounded-full bg-[#f5f0e6] px-8 py-3 text-center text-sm font-medium text-[#06110d]"
                    >
                        View Wine Menu
                    </a>

                    <a
                        href="/"
                        className="rounded-full border border-white/20 px-8 py-3 text-center text-sm font-medium"
                    >
                        Back Home
                    </a>
                </div>
            </section>
        </main>
    );
}