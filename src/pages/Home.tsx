import { motion } from 'motion/react';
import { Brain, Play, BookOpen, PenTool, ArrowRight, Calendar, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-gradient z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1920" 
            alt="Tatiana Munn" 
            className="absolute right-0 top-0 h-full w-full md:w-[55%] object-cover object-center portrait-warmth opacity-60 md:opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,_rgba(242,202,80,0.08)_0%,_transparent_60%)]"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 w-full grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 border border-primary/30 bg-primary/5 text-primary rounded-full text-[10px] uppercase tracking-[0.25em] font-bold">
                Авторская образовательная платформа
              </span>
              <h1 className="font-headline text-5xl md:text-7xl leading-[1.05] text-on-surface">
                Платформа эмоционального <span className="italic text-primary">интеллекта</span> Татьяны Мунн
              </h1>
              <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl font-light leading-relaxed">
                Единое пространство для глубокого психологического роста: авторские программы, библиотека видео-лекций и прикладные материалы для жизни.
              </p>
            </div>

            <div className="flex flex-wrap gap-5">
              <Link to="/catalog" className="bg-primary text-on-primary px-10 py-5 rounded-full font-body text-sm font-bold premium-glow hover:scale-[1.03] active:scale-95 transition-all duration-300">
                Начать обучение
              </Link>
              <Link to="/catalog" className="backdrop-blur-md bg-white/5 border border-white/10 text-on-surface px-10 py-5 rounded-full font-body text-sm font-bold hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                Открыть каталог
              </Link>
            </div>

            <div className="pt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/5">
              {[
                { val: '15+', label: 'программ' },
                { val: '120+', label: 'лекций' },
                { val: '300+', label: 'материалов' },
                { val: '5000+', label: 'студентов' },
              ].map((stat, i) => (
                <div key={i} className="space-y-1 group cursor-default">
                  <p className="font-headline text-3xl text-primary group-hover:scale-110 transition-transform origin-left">{stat.val}</p>
                  <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-32">
        <div className="mb-20 space-y-4">
          <h2 className="font-headline text-4xl text-on-surface">Возможности платформы</h2>
          <div className="h-0.5 w-20 bg-primary/60"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 group relative glass-panel rounded-3xl overflow-hidden p-8 md:p-12 flex flex-col justify-end min-h-[420px] hover:border-primary/20 transition-all duration-500">
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800" 
                alt="Courses" 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                <Brain className="text-primary" size={32} />
              </div>
              <h3 className="font-headline text-3xl">Фундаментальные курсы</h3>
              <p className="text-on-surface-variant max-w-md font-light text-lg">Системное обучение от базы до продвинутых инструментов эмоциональной регуляции.</p>
              <Link to="/catalog" className="inline-flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-[0.2em] pt-4 group-hover:gap-5 transition-all">
                Смотреть программы <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 glass-panel rounded-3xl p-8 md:p-12 flex flex-col justify-between hover:border-primary/20 transition-all duration-500">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                <Play className="text-primary" size={32} />
              </div>
              <h3 className="font-headline text-3xl">Медиа-библиотека</h3>
              <p className="text-on-surface-variant font-light text-lg">Сотни часов эксклюзивного видеоконтента, доступного в любой точке мира.</p>
            </div>
            <div className="flex items-center justify-between pt-8 border-t border-white/5">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-background ${i === 3 ? 'bg-primary flex items-center justify-center text-[10px] text-on-primary font-bold' : 'bg-surface-variant'}`}>
                    {i === 3 ? '+120' : ''}
                  </div>
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-widest text-primary font-bold px-3 py-1 bg-primary/10 rounded-full">Обновлено вчера</span>
            </div>
          </div>

          <div className="md:col-span-5 glass-panel rounded-3xl p-8 md:p-12 flex flex-col justify-between hover:border-primary/20 transition-all duration-500">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                <BookOpen className="text-primary" size={32} />
              </div>
              <h3 className="font-headline text-3xl">Книжный клуб</h3>
              <p className="text-on-surface-variant font-light text-lg">Совместные разборы литературы по психологии и EQ с кураторами и экспертами.</p>
            </div>
            <button className="text-primary text-xs uppercase tracking-[0.2em] font-bold text-left hover:opacity-70 transition-opacity border-b border-primary/20 pb-1 w-fit">Вступить в клуб</button>
          </div>

          <div className="md:col-span-7 glass-panel rounded-3xl overflow-hidden p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center hover:border-primary/20 transition-all duration-500">
            <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden bg-primary/5 flex items-center justify-center border border-primary/10 group transition-colors">
              <PenTool className="text-primary opacity-80 group-hover:scale-110 transition-transform" size={64} />
            </div>
            <div className="flex-1 space-y-6">
              <h3 className="font-headline text-3xl">Практики и Гайды</h3>
              <p className="text-on-surface-variant font-light text-lg">Рабочие тетради, чек-листы и упражнения для самостоятельного внедрения навыков.</p>
              <button className="bg-primary/10 text-primary border border-primary/20 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all">Каталог материалов</button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Lectures Preview */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-32 bg-surface-variant/20 rounded-[2rem] md:rounded-[4rem]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <h2 className="font-headline text-4xl text-on-surface">Видео-лекции</h2>
            <p className="text-on-surface-variant font-light max-w-md text-lg">Короткие и содержательные уроки на актуальные темы современной психологии.</p>
          </div>
          <a href="#" className="text-primary text-xs font-bold uppercase tracking-widest border-b-2 border-primary/20 pb-1 hover:border-primary transition-all">Смотреть все лекции</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: 'Анатомия тревоги: как вернуть контроль', time: '45 минут • Глубокий разбор', tag: 'Премиум', img: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600' },
            { title: 'Эмоциональный интеллект в карьере', time: '20 минут • Экспресс-урок', tag: 'Открыто', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600' },
            { title: 'Границы личности: искусство говорить «нет»', time: '60 минут • Мастер-класс', tag: 'Премиум', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600' },
          ].map((lecture, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
                <img src={lecture.img} alt={lecture.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100" referrerPolicy="no-referrer" />
                <div className={`absolute top-4 left-4 px-4 py-1.5 ${lecture.tag === 'Премиум' ? 'bg-primary text-on-primary' : 'bg-white/10 backdrop-blur-md text-white border border-white/20'} text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl`}>
                  {lecture.tag}
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <Play className="text-white fill-white" size={32} />
                  </div>
                </div>
              </div>
              <h4 className="font-headline text-2xl mb-3 group-hover:text-primary transition-colors leading-tight">{lecture.title}</h4>
              <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">{lecture.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Access Formats */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-40">
        <div className="text-center mb-24 space-y-6">
          <h2 className="font-headline text-5xl">Форматы доступа</h2>
          <p className="text-on-surface-variant font-light text-xl max-w-2xl mx-auto">Выберите подходящий путь развития вместе с нами</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
          <div className="p-10 glass-panel rounded-3xl space-y-8 hover:border-white/20 transition-all flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-headline text-2xl text-primary/80">Бесплатно</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">Доступ к открытой библиотеке, вводным урокам и рассылке с практическими советами.</p>
            </div>
            <button className="w-full py-4 rounded-full border border-primary/40 text-primary text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-on-primary transition-all">Попробовать</button>
          </div>

          <div className="p-12 glass-panel border-primary/30 rounded-[2.5rem] space-y-8 relative shadow-2xl scale-105 z-10 flex flex-col justify-between bg-surface-variant/40">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary text-on-primary text-[10px] font-black uppercase tracking-[0.25em] rounded-full shadow-xl">Популярно</div>
            <div className="space-y-6 pt-4">
              <h3 className="font-headline text-3xl text-primary">Обучение</h3>
              <p className="text-on-surface-variant font-light leading-relaxed text-lg">Полный доступ ко всем программам, лекциям и закрытому комьюнити с поддержкой кураторов.</p>
            </div>
            <button className="w-full py-5 rounded-full bg-primary text-on-primary text-xs font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">Выбрать тариф</button>
          </div>

          <div className="p-10 glass-panel rounded-3xl space-y-8 hover:border-white/20 transition-all flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-headline text-2xl text-primary/80">Корпоративно</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">Специальные решения для команд и компаний: развитие EQ сотрудников для роста бизнеса.</p>
            </div>
            <button className="w-full py-4 rounded-full border border-primary/40 text-primary text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-on-primary transition-all">Узнать больше</button>
          </div>
        </div>
      </section>

      {/* Lectures & Events */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-32 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 bg-primary/10 rounded-full w-fit">Ближайшие события</span>
              <h2 className="font-headline text-5xl text-on-surface leading-tight">Лекции и события</h2>
              <p className="text-on-surface-variant font-light text-xl leading-relaxed">Татьяна регулярно проводит живые выступления, открытые вебинары и оффлайн-встречи по всему миру.</p>
            </div>

            <div className="space-y-8">
              {[
                { date: '24', month: 'Мая', title: 'Психология в эпоху ИИ', type: 'Открытая лекция • Онлайн' },
                { date: '12', month: 'Июня', title: 'EQ Summit 2024', type: 'Keynote Speaker • Алматы' },
              ].map((event, i) => (
                <div key={i} className="group flex gap-8 pb-8 border-b border-white/10 hover:border-primary/40 transition-colors cursor-default">
                  <div className="text-center min-w-[70px]">
                    <p className="font-headline text-4xl text-primary group-hover:scale-110 transition-transform">{event.date}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{event.month}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-headline text-2xl group-hover:text-primary transition-colors">{event.title}</h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-70">{event.type}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="text-primary text-xs font-black uppercase tracking-[0.2em] flex items-center gap-3 group">
              Весь календарь <ArrowRight className="group-hover:translate-x-3 transition-transform" size={18} />
            </button>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" 
                alt="Tatiana Mun Public Talk" 
                className="w-full h-full object-cover portrait-warmth group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expert Quote Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-48 border-t border-white/5 bg-[radial-gradient(circle_at_center,_rgba(242,202,80,0.03)_0%,_transparent_70%)]">
        <div className="relative">
          <Quote className="absolute -top-32 -left-12 text-primary opacity-[0.03] italic" size={240} />
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
            <h2 className="font-headline text-4xl md:text-6xl italic leading-[1.2] text-on-surface">
              Эмоциональный интеллект — это не просто умение сопереживать, это высшая форма личной стратегии и свободы.
            </h2>
            <div className="space-y-3">
              <p className="font-headline text-3xl text-primary tracking-tight">— Татьяна Мунн</p>
              <p className="font-body text-[10px] font-black uppercase tracking-[0.4em] text-on-surface-variant opacity-60">Основатель платформы, эксперт EQ</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
