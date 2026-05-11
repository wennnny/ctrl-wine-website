
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';

const events = [
  {
    title: "Wine Night",
    tag: "紅白酒微醺夜",
    desc: "適合下班後放鬆、聊天、認識新朋友的夜晚。",
  },
  {
    title: "Tech Talk",
    tag: "工程師交流夜",
    desc: "為新竹科技人設計的微醺交流場域。",
  },
  {
    title: "Private Event",
    tag: "包場活動",
    desc: "生日、聚會、品牌活動、企業小型交流皆可洽詢。",
  },
  {
    title: "Collab Night",
    tag: "品牌合作夜",
    desc: "歡迎咖啡、甜點、選物、香氛與生活品牌合作。",
  },
];

export default function Home() {
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
    <main className="min-h-screen bg-[#06110d] text-[#f5f0e6]">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 text-center">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7b1e2b]/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl">

          {/* <Image
            src="/images/logo_white.jpg"
            alt="Ctrl + Wine Logo"
            width={120}
            height={120}
            className="mx-auto mb-6"
          /> */}

          <h1 className="text-6xl font-semibold tracking-tight md:text-8xl">
            Ctrl + Wine
          </h1>

          <p className="mt-6 text-2xl text-[#c8bfae] md:text-3xl">
            Reset your day. Debug your stress.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#aaa096]">
            A late-night wine space in Hsinchu for engineers, creators,
            founders, and tired souls. Wine. Chill. Repeat.
          </p>

          <div className="mx-auto mb-6 w-fit rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-[#c8bfae]">
            Hsinchu｜20:00 – 03:00
          </div>

          <div className="mt-8 rounded-2xl border border-[#9a2b39]/30 bg-white/[0.03] px-6 py-4 text-sm leading-7 text-[#c8bfae]">
            空間較小，建議來電或私訊預留位置。<br />
            Fixed Closed on Sunday｜每週日固定店休
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#events"
              className="rounded-full bg-[#7b1e2b] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#9a2636]"
            >
              探索活動 Explore Events
            </a>

            <a
              href="#collab"
              className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium transition hover:bg-white/10"
            >
              合作 Collaboration
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8f2532]">
              About
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              A quiet place to unwind after a long day.
            </h2>
          </div>

          <div className="text-base leading-8 text-[#aaa096]">
            <p>
              Ctrl + Wine 是一個結合科技感、微醺氛圍與深夜交流的空間。
              我們希望讓新竹的工程師、創作者、創業者與下班後需要 reset
              的人，有一個可以慢下來的地方。
            </p>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8f2532]">
            Events
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-3xl font-semibold md:text-5xl">
              Night Concepts
            </h2>
            <p className="max-w-md text-sm leading-7 text-[#aaa096]">
              未來將定期推出不同主題活動，累積品牌內容，也可以作為 SEO 與
              AdSense 的內容基礎。
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {events.map((event) => (
              <div
                key={event.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <p className="text-sm text-[#8f2532]">{event.tag}</p>
                <h3 className="mt-4 text-xl font-medium">{event.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#aaa096]">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section id="collab" className="px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-14">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8f2532]">
            合作 Collaboration
          </p>

          <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Private events, venue rental, and brand collaborations are welcome.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#aaa096]">
            如果你有包場、活動舉辦、品牌合作、選物合作、甜點合作或企業交流需求，
            都可以透過 Instagram 私訊我們~
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://www.threads.com/@ctrlwine.bar?igshid=NTc4MTIwNjQ2YQ=="
              target="_blank"
              className="rounded-full bg-[#f5f0e6] px-8 py-3 text-center text-sm font-medium text-[#06110d]"
            >
              Threads
            </a>

            <a
              href="https://www.instagram.com/ctrlwine.bar?igsh=MXZ5cGh5Ymc4OXN5Yg%3D%3D&utm_source=qr"
              target="_blank"
              className="rounded-full border border-white/20 px-8 py-3 text-center text-sm font-medium"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* AdSense Placeholder */}
      <section id="adsense" className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-dashed border-white/15 p-8 text-center text-sm text-[#aaa096]">
          {/* Google AdSense placeholder area｜未來通過申請後可放廣告碼 */}
        </div>
      </section>

      {/* Location */}
      <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.25078947574!2d121.01798307592018!3d24.78686454819748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468379c5662cd2d%3A0x796712f1671e8ca6!2z5L6G5p2v5ZKW5ZWh44CQ6Zec5paw6ZaA5biC44CR!5e0!3m2!1szh-TW!2stw!4v1778522578464!5m2!1szh-TW!2stw"
          width="30%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="mt-6">
        <a
          href="https://maps.app.goo.gl/YJzasoobc9z6gMbt5"
          target="_blank"
          className="rounded-full bg-[#7b1e2b] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#9a2636]"
        >
          Open in Google Maps
        </a>
      </div>

      {/* Contact */}
      <footer id="contact" className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 text-sm text-[#aaa096] md:flex-row">
          <p>© 2026 Ctrl + Wine. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="https://www.instagram.com/ctrlwine.bar?igsh=MXZ5cGh5Ymc4OXN5Yg%3D%3D&utm_source=qr" target="_blank">
              Instagram
            </a>
            <a href="https://www.threads.com/@ctrlwine.bar?igshid=NTc4MTIwNjQ2YQ==" target="_blank">
              Threads
            </a>
            {/* <a href="mailto:hello@ctrlwine.com">Email</a> */}
          </div>
        </div>
      </footer>
    </main>
  );
}