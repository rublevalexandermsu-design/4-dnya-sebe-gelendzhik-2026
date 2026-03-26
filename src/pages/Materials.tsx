import { BookOpenText, FileText, PenTool, ScrollText } from 'lucide-react';

const materials = [
  {
    icon: FileText,
    title: 'Рабочие тетради',
    text: 'Практические PDF-сборники, помогающие закрепить темы модулей через вопросы, упражнения и самоанализ.',
  },
  {
    icon: PenTool,
    title: 'Практики и чек-листы',
    text: 'Небольшие инструменты для самостоятельной работы: опоры, дневники наблюдений, трекеры и сценарии саморегуляции.',
  },
  {
    icon: ScrollText,
    title: 'Методические гайды',
    text: 'Структурированные инструкции по работе с тревогой, границами, конфликтами и эмоциональной устойчивостью.',
  },
];

export default function Materials() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto space-y-20">
      <div className="space-y-6 max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.25em] font-black text-primary">Материалы платформы</p>
        <h1 className="font-headline text-5xl md:text-7xl leading-[1.04]">
          Библиотека <span className="italic text-primary">прикладных</span> опор для жизни
        </h1>
        <p className="text-on-surface-variant font-light text-lg md:text-xl leading-relaxed">
          Здесь собраны рабочие тетради, методички, чек-листы и практики, которые помогают переводить знания из лекций в устойчивые внутренние навыки.
        </p>
      </div>

      <section className="grid md:grid-cols-3 gap-8">
        {materials.map((item) => (
          <article key={item.title} className="glass-panel editorial-ring rounded-[2.25rem] p-8 md:p-10 space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <item.icon className="text-primary" size={28} />
            </div>
            <h2 className="font-headline text-3xl">{item.title}</h2>
            <p className="text-on-surface-variant font-light leading-relaxed text-lg">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
        <div className="glass-panel editorial-ring rounded-[2.5rem] p-8 md:p-12 section-tone">
          <p className="text-[10px] uppercase tracking-[0.25em] font-black text-primary">Редакционный принцип</p>
          <h2 className="font-headline text-4xl mt-4">Каждый материал должен ощущаться как лист из дорогого психологического издания</h2>
          <p className="text-on-surface-variant font-light text-lg leading-relaxed mt-6">
            Мы сохраняем тишину, воздух и мягкую многослойность. Никаких жёстких рамок и визуального шума — только ясная структура и уважение к внутреннему миру человека.
          </p>
        </div>

        <div className="glass-panel editorial-ring rounded-[2.5rem] p-8 md:p-10">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 mb-6">
            <BookOpenText className="text-primary" size={28} />
          </div>
          <h2 className="font-headline text-3xl">Что можно скачать сейчас</h2>
          <div className="mt-8 space-y-4">
            {[
              'Тетрадь «Внутренние опоры»',
              'Чек-лист эмоциональной гигиены',
              'Памятка «Границы и мягкое “нет”»',
              'Практика декомпрессии тревоги',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-sm text-on-surface-variant">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
