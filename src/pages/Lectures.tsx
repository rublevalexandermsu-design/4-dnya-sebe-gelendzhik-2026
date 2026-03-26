import { CalendarDays, MapPin, Mic2, Video } from 'lucide-react';

const events = [
  { date: '24 мая', title: 'Психология в эпоху ИИ', type: 'Открытая лекция', place: 'Онлайн' },
  { date: '12 июня', title: 'EQ Summit 2024', type: 'Keynote', place: 'Алматы' },
  { date: '05 июля', title: 'Границы и лидерство', type: 'Корпоративный воркшоп', place: 'Москва' },
];

export default function Lectures() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto space-y-20">
      <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 items-end">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-primary">
            <Mic2 size={14} />
            Лекции и события
          </div>
          <h1 className="font-headline text-5xl md:text-7xl leading-[1.04]">
            Живые <span className="italic text-primary">встречи</span>, публичные лекции и корпоративные форматы
          </h1>
          <p className="text-on-surface-variant font-light text-lg md:text-xl leading-relaxed max-w-3xl">
            Татьяна Мунн выступает в онлайн- и офлайн-форматах: от открытых встреч до индивидуально адаптированных программ для команд и руководителей.
          </p>
        </div>
        <div className="glass-panel editorial-ring rounded-[2rem] p-8 md:p-10 section-tone">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="font-headline text-4xl text-primary">120+</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-black text-on-surface-variant">лекций</p>
            </div>
            <div>
              <p className="font-headline text-4xl text-primary">18</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-black text-on-surface-variant">городов</p>
            </div>
          </div>
        </div>
      </div>

      <section className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
        <div className="glass-panel editorial-ring rounded-[2.5rem] p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8 text-primary">
            <CalendarDays size={18} />
            <span className="text-[10px] font-black uppercase tracking-[0.25em]">Календарь</span>
          </div>
          <div className="space-y-5">
            {events.map((event) => (
              <article key={event.title} className="rounded-[1.5rem] bg-white/5 px-5 py-5 border border-white/5">
                <p className="text-[10px] uppercase tracking-[0.2em] font-black text-primary">{event.date}</p>
                <h3 className="font-headline text-2xl mt-2">{event.title}</h3>
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-on-surface-variant">
                  <span className="inline-flex items-center gap-2"><Video size={14} /> {event.type}</span>
                  <span className="inline-flex items-center gap-2"><MapPin size={14} /> {event.place}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="glass-panel editorial-ring rounded-[2.5rem] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200"
            alt="Татьяна Мунн на выступлении"
            className="h-full w-full object-cover portrait-warmth"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>
    </div>
  );
}
