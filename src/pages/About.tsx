import { Award, BookOpen, Sparkles, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto space-y-24">
      <section className="grid lg:grid-cols-[0.92fr_1.08fr] gap-10 items-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-[2.5rem] bg-primary/10 blur-[90px] opacity-35" />
          <div className="relative overflow-hidden rounded-[2.5rem] glass-panel editorial-ring">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
              alt="Татьяна Мунн"
              className="h-full w-full object-cover portrait-warmth"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-[10px] uppercase tracking-[0.25em] font-black text-primary">О Татьяне Мунн</p>
          <h1 className="font-headline text-5xl md:text-7xl leading-[1.04]">
            Экспертная платформа, собранная вокруг <span className="italic text-primary">глубины</span>, а не шума
          </h1>
          <p className="text-on-surface-variant font-light text-lg md:text-xl leading-relaxed">
            Татьяна Мунн соединяет психологическую точность, телесную чувствительность и уважение к человеческому опыту. Платформа создаётся как пространство спокойного, зрелого и прикладного роста.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Users, title: '5000+', text: 'студентов и участников программ' },
          { icon: BookOpen, title: '300+', text: 'материалов и рабочих практик' },
          { icon: Award, title: '120+', text: 'публичных лекций и выступлений' },
          { icon: Sparkles, title: '15+', text: 'авторских образовательных форматов' },
        ].map((item) => (
          <article key={item.title} className="glass-panel editorial-ring rounded-[2rem] p-8 space-y-4">
            <item.icon className="text-primary" size={24} />
            <h2 className="font-headline text-3xl text-primary">{item.title}</h2>
            <p className="text-on-surface-variant font-light leading-relaxed">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="glass-panel editorial-ring rounded-[2.5rem] p-8 md:p-12 section-tone">
        <h2 className="font-headline text-4xl md:text-5xl max-w-4xl leading-tight">
          Эта платформа строится как редакционный психологический мир: без визуальной агрессии, без перегруженности и без “коробочного” ощущения.
        </h2>
        <p className="mt-8 max-w-3xl text-on-surface-variant font-light text-lg leading-relaxed">
          Мы сохраняем тишину, пространство и асимметрию. Каждый экран должен ощущаться как тщательно сверстанная глава дорогого издания о внутреннем развитии и эмоциональной свободе.
        </p>
      </section>
    </div>
  );
}
