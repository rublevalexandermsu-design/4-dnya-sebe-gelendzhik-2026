import { motion } from 'motion/react';
import { Play, CheckCircle, Clock, ChevronRight, Bookmark, FileText, Send, StickyNote, MoreVertical, Lock } from 'lucide-react';
import { useState } from 'react';

export default function Lesson() {
  const [activeModule, setActiveModule] = useState(2);

  const program = [
    { id: 1, title: 'Модуль 1: Основы', lessons: ['1.1 Введение', '1.2 Что такое EQ?'] },
    { id: 2, title: 'Модуль 2: Эмоции', lessons: ['2.1 Природа подавления эмоций', '2.2 Практика проживания гнева'], active: true },
    { id: 3, title: 'Модуль 3: Отношения', lessons: ['3.1 Границы', '3.2 Конфликты'], locked: true },
  ];

  return (
    <div className="pt-24 min-h-screen bg-background flex flex-col lg:flex-row">
      {/* Sidebar - Course Program */}
      <aside className="w-full lg:w-80 bg-surface/30 border-r border-white/5 p-8 overflow-y-auto">
        <div className="mb-12">
          <h2 className="font-headline text-xl text-primary italic mb-2">Программа курса</h2>
          <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">12 модулей • 48 уроков</p>
        </div>

        <div className="space-y-6">
          {program.map((mod) => (
            <div key={mod.id} className="space-y-4">
              <button 
                className={`w-full flex items-center justify-between text-left group ${mod.active ? 'text-on-surface' : 'text-on-surface-variant'}`}
                onClick={() => !mod.locked && setActiveModule(mod.id)}
              >
                <span className="text-[10px] font-black uppercase tracking-widest">{mod.title}</span>
                {mod.locked ? <Lock size={14} className="opacity-40" /> : <ChevronRight size={14} className={`transition-transform ${activeModule === mod.id ? 'rotate-90' : ''}`} />}
              </button>
              
              {activeModule === mod.id && !mod.locked && (
                <div className="space-y-3 pl-4 border-l border-primary/20">
                  {mod.lessons.map((lesson, i) => (
                    <div key={i} className={`flex items-center gap-3 text-xs cursor-pointer hover:text-primary transition-colors ${i === 0 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
                      {i === 0 ? <CheckCircle size={14} /> : <div className="w-3.5 h-3.5 rounded-full border border-white/20" />}
                      <span>{lesson}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" alt="Tatiana" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold">Татьяна Мунн</p>
            <p className="text-[9px] uppercase tracking-widest text-on-surface-variant">Ваш наставник</p>
          </div>
        </div>
        <button className="w-full mt-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
          Задать вопрос
        </button>
      </aside>

      {/* Main Content - Lesson Player & Details */}
      <main className="flex-1 p-6 md:p-12 space-y-12 overflow-y-auto">
        {/* Video Player Placeholder */}
        <div className="relative aspect-video rounded-3xl overflow-hidden glass-panel shadow-2xl group">
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" alt="Lesson Thumbnail" className="w-full h-full object-cover brightness-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 rounded-full bg-primary text-on-primary flex items-center justify-center premium-glow hover:scale-110 transition-transform">
              <Play size={40} className="fill-on-primary ml-1" />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center justify-between text-white text-xs font-bold uppercase tracking-widest">
              <span>14:52 / 48:00</span>
              <div className="flex-1 mx-8 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-[30%] bg-primary" />
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Lesson Info */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">Урок 2.1</span>
                <span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">48 минут</span>
              </div>
              <h1 className="font-headline text-4xl md:text-5xl leading-tight">Природа подавления эмоций и телесные блоки</h1>
              <p className="text-on-surface-variant font-light text-lg leading-relaxed">В этом уроке мы разберем, как непрожитые эмоции оседают в теле в виде мышечных панцирей. Татьяна поделится практическими техниками декомпрессии стресса и покажет, как восстановить контакт с подавленными чувствами.</p>
            </div>

            <div className="glass-panel rounded-3xl p-8 md:p-10 space-y-8">
              <h3 className="font-headline text-2xl italic text-primary">Ключевые тезисы урока</h3>
              <div className="space-y-6">
                {[
                  { num: '01.', text: 'Гнев как ресурс: почему мы боимся своей силы и как направить её в созидание.' },
                  { num: '02.', text: 'Механизм замещения: почему мы едим, когда на самом деле хотим плакать.' },
                  { num: '03.', text: 'Три точки разрядки: упражнения для снятия зажимов в челюсти и плечах.' },
                ].map((thesis, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <span className="font-headline text-2xl text-primary/40 group-hover:text-primary transition-colors">{thesis.num}</span>
                    <p className="text-on-surface-variant font-light leading-relaxed">{thesis.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="font-headline text-2xl">Рекомендуемые лекции</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: 'Эмоциональный интеллект в кризисе', time: '24:35', type: 'Мастер-класс • 2024', img: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=400' },
                  { title: 'Тень как источник творческой энергии', time: '16:48', type: 'Лекция • 2023', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400' },
                ].map((rec, i) => (
                  <div key={i} className="group cursor-pointer space-y-4">
                    <div className="relative aspect-video rounded-2xl overflow-hidden">
                      <img src={rec.img} alt={rec.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[10px] font-bold text-white">{rec.time}</div>
                    </div>
                    <h4 className="font-headline text-xl group-hover:text-primary transition-colors">{rec.title}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">{rec.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Materials, Homework, Notes */}
          <div className="lg:col-span-4 space-y-8">
            {/* Progress Card */}
            <div className="glass-panel rounded-3xl p-8 space-y-6">
              <div className="flex justify-between items-center">
                <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Прогресс курса</p>
                <span className="font-headline text-2xl text-primary">65%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[65%] bg-primary shadow-[0_0_10px_rgba(242,202,80,0.5)]" />
              </div>
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">workspace_premium</span>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary">Следующая цель:</p>
                  <p className="text-xs font-bold">Сертификат</p>
                </div>
              </div>
            </div>

            {/* Materials */}
            <div className="glass-panel rounded-3xl p-8 space-y-6">
              <h3 className="font-headline text-xl">Материалы</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between group hover:border-primary/30 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <FileText className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold">Рабочая тетрадь</p>
                      <p className="text-[9px] uppercase tracking-widest text-on-surface-variant">PDF • 1.5 MB</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">download</span>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between group hover:border-primary/30 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Play className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold">Аудио-практика</p>
                      <p className="text-[9px] uppercase tracking-widest text-on-surface-variant">MP3 • 12 MB</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">play_circle</span>
                </div>
              </div>
            </div>

            {/* Homework */}
            <div className="glass-panel rounded-3xl p-8 space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="font-headline text-xl">Домашнее задание</h3>
                <span className="px-2 py-1 bg-white/5 text-[9px] font-bold uppercase tracking-widest rounded-lg">Ожидает</span>
              </div>
              <p className="text-sm text-on-surface-variant font-light leading-relaxed">Опишите ваши ощущения в теле после выполнения практики из видео. Удалось ли обнаружить блоки?</p>
              <div className="space-y-4">
                <textarea 
                  placeholder="Ваш рефлексивный ответ..."
                  className="w-full h-32 bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:border-primary/40 focus:ring-0 transition-all resize-none"
                />
                <button className="w-full py-4 rounded-full border border-primary/40 text-[10px] font-black uppercase tracking-widest text-primary hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-3">
                  Отправить ответ <Send size={14} />
                </button>
              </div>
            </div>

            {/* Notes */}
            <div className="glass-panel rounded-3xl p-8 space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="font-headline text-xl">Мои заметки</h3>
                <StickyNote size={18} className="text-primary" />
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5 space-y-2">
                <p className="text-[9px] uppercase tracking-widest text-on-surface-variant font-bold">14:52 • 22.03</p>
                <p className="text-xs font-light leading-relaxed">«Телесная челюсть — это всегда про невысказанное, про подавленное право сказать "нет"».</p>
              </div>
              <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:opacity-70 transition-opacity">Смотреть все записи</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

