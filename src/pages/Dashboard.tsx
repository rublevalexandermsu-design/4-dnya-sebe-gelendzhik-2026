import { motion } from 'motion/react';
import { Play, CheckCircle, Clock, Bookmark, Star, ArrowRight, Zap, Target, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="pt-32 pb-20 px-6 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header / Welcome */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">С возвращением, Анна</span>
            <span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">22 марта, 2024</span>
          </div>
          <h1 className="font-headline text-5xl md:text-6xl">Моё <span className="italic text-primary">обучение</span></h1>
        </div>
        <div className="flex gap-12">
          <div className="text-center">
            <p className="font-headline text-4xl text-primary">65%</p>
            <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">общий прогресс</p>
          </div>
          <div className="text-center">
            <p className="font-headline text-4xl text-primary">12</p>
            <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">уроков пройдено</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Left Column - Main Learning */}
        <div className="lg:col-span-8 space-y-12">
          {/* Active Module / Continue Learning */}
          <div className="glass-panel rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 group-hover:opacity-20 transition-opacity">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400" alt="Background" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Zap size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Активный модуль</span>
                </div>
                <h2 className="font-headline text-4xl leading-tight max-w-lg">Модуль 2: Эмоциональная регуляция и тело</h2>
                <p className="text-on-surface-variant font-light text-lg max-w-md">Вы остановились на уроке «Природа подавления эмоций». Осталось 24 минуты до завершения модуля.</p>
              </div>
              
              <div className="flex flex-wrap gap-6 items-center">
                <Link to="/lesson" className="bg-primary text-on-primary px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:premium-glow transition-all flex items-center gap-3">
                  Продолжить <Play size={14} fill="currentColor" />
                </Link>
                <div className="flex items-center gap-4">
                  <div className="w-40 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[45%] bg-primary" />
                  </div>
                  <span className="text-[10px] font-bold text-on-surface-variant">45% завершено</span>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Trajectory */}
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="font-headline text-3xl">Траектория обучения</h3>
              <button className="text-primary text-[10px] font-black uppercase tracking-widest border-b border-primary/20 pb-1">Весь план</button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Основы EQ', status: 'Завершено', icon: CheckCircle, color: 'text-emerald-400' },
                { title: 'Тело и Эмоции', status: 'В процессе', icon: Clock, color: 'text-primary' },
                { title: 'Отношения', status: 'Закрыто', icon: Star, color: 'text-on-surface-variant/40' },
              ].map((step, i) => (
                <div key={i} className="glass-panel rounded-3xl p-6 space-y-4 hover:border-white/20 transition-all cursor-pointer">
                  <step.icon className={step.color} size={24} />
                  <div>
                    <h4 className="font-bold text-sm mb-1">{step.title}</h4>
                    <p className="text-[9px] uppercase tracking-widest font-black text-on-surface-variant">{step.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Saved / Favorites */}
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="font-headline text-3xl">Сохраненные материалы</h3>
              <Bookmark className="text-primary" size={24} />
            </div>
            <div className="space-y-4">
              {[
                { title: 'Гайд по декомпрессии стресса', type: 'PDF • 12 страниц', date: 'Добавлено 12.03' },
                { title: 'Медитация «Внутренняя опора»', type: 'Аудио • 15 минут', date: 'Добавлено 08.03' },
              ].map((item, i) => (
                <div key={i} className="p-6 glass-panel rounded-2xl flex items-center justify-between group hover:border-primary/30 transition-all cursor-pointer">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Layout className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">{item.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] uppercase tracking-widest text-on-surface-variant/60 font-black">{item.date}</p>
                    <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all ml-auto mt-1" size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Stats & Recommendations */}
        <div className="lg:col-span-4 space-y-12">
          {/* Personal Recommendation */}
          <div className="glass-panel rounded-3xl p-8 space-y-8 bg-primary/5 border-primary/20">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="font-headline text-2xl">Персональная рекомендация</h3>
              <p className="text-sm text-on-surface-variant font-light leading-relaxed">На основе вашего прогресса в Модуле 2, мы рекомендуем посмотреть лекцию «Психосоматика зажимов» для более глубокого понимания темы.</p>
            </div>
            <button className="w-full py-4 rounded-full bg-primary text-on-primary text-[10px] font-black uppercase tracking-widest hover:premium-glow transition-all">Смотреть лекцию</button>
          </div>

          {/* Activity Stats */}
          <div className="glass-panel rounded-3xl p-8 space-y-8">
            <h3 className="font-headline text-2xl">Активность</h3>
            <div className="space-y-6">
              {[
                { label: 'Ударный режим', val: '5 дней', sub: 'Ваш рекорд: 12 дней' },
                { label: 'Время обучения', val: '14 часов', sub: 'На этой неделе' },
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{stat.label}</p>
                    <p className="font-headline text-2xl text-primary">{stat.val}</p>
                  </div>
                  <p className="text-[9px] uppercase tracking-widest text-on-surface-variant/60 font-black">{stat.sub}</p>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-primary/40" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="glass-panel rounded-3xl p-8 space-y-8">
            <h3 className="font-headline text-2xl">События</h3>
            <div className="space-y-6">
              <div className="flex gap-4 group cursor-pointer">
                <div className="text-center min-w-[40px]">
                  <p className="font-headline text-2xl text-primary">24</p>
                  <p className="text-[8px] font-black uppercase tracking-widest text-on-surface-variant">Мар</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold group-hover:text-primary transition-colors">Q&A Сессия с Татьяной</h4>
                  <p className="text-[9px] uppercase tracking-widest text-on-surface-variant">19:00 • Онлайн</p>
                </div>
              </div>
              <div className="flex gap-4 group cursor-pointer">
                <div className="text-center min-w-[40px]">
                  <p className="font-headline text-2xl text-primary">02</p>
                  <p className="text-[8px] font-black uppercase tracking-widest text-on-surface-variant">Апр</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold group-hover:text-primary transition-colors">Разбор книги «Тело помнит все»</h4>
                  <p className="text-[9px] uppercase tracking-widest text-on-surface-variant">18:30 • Книжный клуб</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
