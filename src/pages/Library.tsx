import { motion } from 'motion/react';
import { Play, Lock, Headphones, Sparkles } from 'lucide-react';

const videos = [
  {
    title: 'Анатомия тревоги: как вернуть контроль',
    meta: '45 минут • Премиум-лекция',
    badge: 'Премиум',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Эмоциональный интеллект в карьере',
    meta: '20 минут • Открытый урок',
    badge: 'Открыто',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Границы личности и сила отказа',
    meta: '60 минут • Мастер-класс',
    badge: 'Премиум',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Library() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto space-y-20">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-end">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.25em]">
            <Sparkles size={14} />
            Медиа-библиотека
          </span>
          <h1 className="font-headline text-5xl md:text-7xl leading-[1.04]">
            Видео, аудио и <span className="italic text-primary">живые разборы</span> в одном пространстве
          </h1>
          <p className="max-w-2xl text-on-surface-variant font-light text-lg md:text-xl leading-relaxed">
            Библиотека платформы объединяет открытые лекции, премиальные видеокурсы, практики и аудиосессии, к которым можно возвращаться в собственном ритме.
          </p>
        </div>
        <div className="glass-panel editorial-ring rounded-[2rem] p-8 md:p-10 section-tone">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="font-headline text-4xl text-primary">120+</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-black text-on-surface-variant">лекций</p>
            </div>
            <div>
              <p className="font-headline text-4xl text-primary">36</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-black text-on-surface-variant">аудио-практик</p>
            </div>
          </div>
        </div>
      </div>

      <section className="grid md:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <motion.article
            key={video.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="group"
          >
            <div className="glass-panel editorial-ring rounded-[2rem] overflow-hidden h-full">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.image}
                  alt={video.title}
                  className="h-full w-full object-cover brightness-90 transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute top-5 left-5 rounded-full px-4 py-1.5 bg-background/60 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                  {video.badge}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                    <Play className="fill-white text-white" size={26} />
                  </div>
                </div>
              </div>
              <div className="space-y-4 p-7">
                <h3 className="font-headline text-2xl leading-tight group-hover:text-primary transition-colors">{video.title}</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] font-black text-on-surface-variant">{video.meta}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
        <div className="glass-panel editorial-ring rounded-[2.5rem] p-8 md:p-10 section-tone space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
            <Headphones className="text-primary" size={28} />
          </div>
          <h2 className="font-headline text-4xl">Аудио-практики для опоры</h2>
          <p className="text-on-surface-variant font-light leading-relaxed text-lg">
            Короткие аудиосессии для дыхания, стабилизации, работы с тревогой и возвращения к телесной ясности.
          </p>
        </div>

        <div className="glass-panel editorial-ring rounded-[2.5rem] p-8 md:p-10">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">Премиум-доступ</p>
              <h2 className="font-headline text-3xl">Закрытые архивы и интенсивы</h2>
            </div>
            <Lock className="text-primary/70" />
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {[
              'Разборы сложных эмоциональных сценариев',
              'Видеоархивы закрытых потоков',
              'Интервью с приглашёнными экспертами',
              'Аудиобиблиотека для самостоятельной практики',
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white/5 px-5 py-4 text-sm text-on-surface-variant border border-white/5">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
