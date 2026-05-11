export default function Home() {
  return (
    <main className="min-h-screen bg-[#07110d] text-[#f5f0e6]">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 rounded-full border border-[#7b1e2b]/50 px-4 py-2 text-sm text-[#c9b08a]">
          Hsinchu｜20:00 – 03:00
        </div>

        <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
          Ctrl + Wine
        </h1>

        <p className="mt-6 text-xl text-[#c9b08a] md:text-2xl">
          Reset your day. Debug your stress.
        </p>

        <p className="mt-4 max-w-xl text-sm leading-7 text-[#aaa096] md:text-base">
          A late-night wine space in Hsinchu for engineers, creators, and tired souls.
          Wine. Chill. Repeat.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#events"
            className="rounded-full bg-[#7b1e2b] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#9a2636]"
          >
            查看活動
          </a>

          <a
            href="#contact"
            className="rounded-full border border-[#f5f0e6]/20 px-8 py-3 text-sm font-medium transition hover:bg-white/10"
          >
            聯絡 / 合作
          </a>
        </div>
      </section>

      <section id="events" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#7b1e2b]">
            活動
          </p>

          <h2 className="text-3xl font-semibold md:text-4xl">
            即將到來的夜晚活動
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "Wine Night｜紅白酒微醺夜",
              "Tech Talk｜工程師交流夜",
              "Private Event｜包場活動",
              "Collab Night｜品牌合作之夜",
              "Girls Night｜女生微醺夜",
              "Music Night｜音樂主題夜",
            ].map((event) => (
              <div
                key={event}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-xl font-medium">{event}</h3>
                <p className="mt-3 text-sm leading-6 text-[#aaa096]">
                  精心策劃的深夜聚會，享受美酒、交流與寧靜的氛圍。
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#7b1e2b]">
            合作
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            私人活動、場地租借及品牌合作皆歡迎。
          </h2>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://forms.gle/"
              target="_blank"
              className="rounded-full bg-[#f5f0e6] px-8 py-3 text-sm font-medium text-[#07110d]"
            >
              Google 表單!
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium"
            >
              Instagram
            </a>
          </div>

          <div className="mt-16 rounded-2xl border border-dashed border-white/15 p-6 text-sm text-[#aaa096]">
            {/* Google AdSense placeholder area */}
          </div>
        </div>
      </section>
    </main>
  );
}