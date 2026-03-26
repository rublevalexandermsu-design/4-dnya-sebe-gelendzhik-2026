import { motion } from 'motion/react';
import { Search, Filter, Play, Book, FileText, Lock, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Catalog() {
  const [activeFilter, setActiveFilter] = useState('Все');
  const filters = ['Все', 'Программы', 'Видео', 'Лекции', 'Практики', 'Материалы', 'Бесплатные', 'Платные'];

  const courses = [
    {
      id: 1,
      title: 'Архитектура внутренних опор',
      desc: 'Глубокое погружение в психологическую устойчивость и работу с самооценкой.',
      price: '15 500 ₽',
      tag: 'Программа',
      type: 'course',
      img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      title: 'Границы в цифровом мире',
      desc: 'Как не терять энергию в социальных сетях и научиться информационной гигиене.',
      price: 'Доступно',
      tag: 'Видео',
      type: 'video',
      img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 3,
      title: 'Чекап по границам',
      desc: 'Практическое руководство по выстраиванию личных границ в семье и на работе.',
      price: '1 200 ₽',
      tag: 'Материал',
      type: 'doc',
      img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 4,
      title: 'Вечерняя саморегуляция',
      desc: 'Короткие упражнения для снятия напряжения после рабочего дня.',
      price: '2 500 ₽',
      tag: 'Практика',
      type: 'video',
      img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 5,
      title: 'Тетрадь осознанности',
      desc: 'Сборник упражнений и рефлексивных практик для ежедневной работы над собой.',
      price: '1 900 ₽',
      tag: 'Материал',
      type: 'doc',
      img: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 6,
      title: 'Микро-медитации',
      desc: 'Быстрые практики для восстановления в настоящем моменте в течение дня.',
      price: 'Доступно',
      tag: 'Лекция',
      type: 'video',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="mb-16 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-4">
            <h1 className="font-headline text-5xl md:text-6xl">Каталог <span className="italic text-primary">программ</span> и материалов</h1>
            <p className="text-on-surface-variant font-light text-xl max-w-2xl">Программы, лекции, видео и материалы по эмоциональному интеллекту и саморегуляции от Татьяны Мунн.</p>
          </div>
          <div className="flex gap-12">
            <div className="text-center">
              <p className="font-headline text-4xl text-primary">15+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">программ</p>
            </div>
            <div className="text-center">
              <p className="font-headline text-4xl text-primary">120+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">лекций</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-8">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeFilter === filter ? 'bg-primary text-on-primary shadow-lg' : 'bg-white/5 text-on-surface-variant hover:bg-white/10'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <motion.div
            key={course.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel rounded-3xl overflow-hidden group hover:border-primary/30 transition-all duration-500"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100" referrerPolicy="no-referrer" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-background/60 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-widest text-primary">
                {course.tag}
              </div>
              {course.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="text-white fill-white" size={20} />
                  </div>
                </div>
              )}
            </div>
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-start gap-4">
                <h3 className="font-headline text-2xl group-hover:text-primary transition-colors leading-tight">{course.title}</h3>
                <span className="text-sm font-bold text-primary whitespace-nowrap">{course.price}</span>
              </div>
              <p className="text-on-surface-variant font-light text-sm line-clamp-2 leading-relaxed">{course.desc}</p>
              <div className="flex gap-3 pt-2">
                <Link to="/lesson" className="flex-1 py-3 rounded-full border border-primary/20 text-[10px] font-black uppercase tracking-widest text-on-surface hover:bg-primary/10 transition-all text-center">
                  Подробнее
                </Link>
                <button className="flex-1 py-3 rounded-full bg-primary text-on-primary text-[10px] font-black uppercase tracking-widest hover:premium-glow transition-all">
                  Вступить
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Item (Bottom Modal Style) */}
      <div className="mt-32 glass-panel rounded-[3rem] p-8 md:p-16 grid md:grid-cols-2 gap-16 items-center relative overflow-hidden">
        <div className="absolute top-8 right-8 text-on-surface-variant hover:text-on-surface cursor-pointer">
          <Lock size={24} />
        </div>
        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" alt="Psychosomatics" className="w-full h-full object-cover portrait-warmth" referrerPolicy="no-referrer" />
        </div>
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">Курс месяца</span>
              <span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">Старт: 15 октября</span>
            </div>
            <h2 className="font-headline text-5xl leading-tight">Психосоматика: Язык вашего тела</h2>
            <p className="text-on-surface-variant font-light text-lg leading-relaxed">Курс исследует глубокую связь между подавленными эмоциями и физическими проявлениями в теле. Мы объединим нейробиологию и классическую психологию, чтобы дать вам инструменты для исцеления через осознание.</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-primary">Для кого</p>
              <ul className="space-y-2 text-sm font-light text-on-surface-variant">
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-primary" /> Для тех, кто чувствует выгорание</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-primary" /> Специалистам помогающих профессий</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-primary" /> Ищущим гармонию души и тела</li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-primary">Программа (12 модулей)</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-xs font-medium">1. Основы психосоматики</span>
                  <Lock size={12} className="text-on-surface-variant" />
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-xs font-medium">2. Травма и мышечный панцирь</span>
                  <Lock size={12} className="text-on-surface-variant" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-white/10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Стоимость обучения</p>
              <p className="text-3xl font-headline text-primary">15 000 ₽</p>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-4 rounded-full border border-primary/20 text-xs font-bold uppercase tracking-widest hover:bg-primary/10">Рассрочка</button>
              <button className="px-10 py-4 rounded-full bg-primary text-on-primary text-xs font-black uppercase tracking-widest hover:premium-glow">Получить доступ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
