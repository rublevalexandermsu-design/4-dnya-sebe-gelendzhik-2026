import { useEffect, useState, type ReactNode } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  Compass,
  Download,
  Flower2,
  HeartHandshake,
  MapPinned,
  Menu,
  MoonStar,
  Sparkles,
  SunMedium,
  Waves,
  X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;
const brochureUrl = `${import.meta.env.BASE_URL}retreat-brochure.pdf`;
const venueUrl = 'https://share.google/StyCWoI4zwdjdBf3K';
const bookingUrl = 'https://wa.me/79181405439';
const heroSeaUrl = asset('stitch/hero-sea.jpg');
const locationHouseUrl = asset('stitch/house.jpg');
const locationBeachUrl = asset('stitch/beach.jpg');
const locationInteriorUrl = asset('stitch/interior.jpg');
const retreatHeroPortraitUrl = asset('tatiana-gallery-1.jpg');
const tatianaPortraitUrl = asset('tatiana-hero.jpg');
const forestBgUrl = asset('stitch/forest.jpg');
const audienceBgUrl = heroSeaUrl;
const distinctivesBgUrl = forestBgUrl;
const resultsBgUrl = heroSeaUrl;
const tatianaBgUrl = heroSeaUrl;

const stats = [
  { value: '4', label: 'дня мягкой работы' },
  { value: '3–4', label: 'часа в день' },
  { value: '12–16', label: 'участниц в группе' },
  { value: '60 000 ₽', label: 'стоимость тура' },
];

const whoFor = [
  {
    title: 'Устала от перегрузки',
    text: 'Если внутри слишком много обязанностей, шума и напряжения, здесь можно наконец выдохнуть и вернуть себе ритм.',
    icon: MoonStar,
  },
  {
    title: 'Хочет понять себя глубже',
    text: 'Работа помогает заметить, что именно вызывает реакции, усталость, раздражение или потерю энергии.',
    icon: Compass,
  },
  {
    title: 'Ищет внутреннюю опору',
    text: 'Формат помогает собрать внимание, снизить внутренний хаос и почувствовать стабильность без давления.',
    icon: HeartHandshake,
  },
  {
    title: 'Хочет не просто отдохнуть',
    text: 'Это не туристическая поездка и не интенсив ради интенсивности, а отдых, который действительно восстанавливает.',
    icon: Waves,
  },
];

const distinctives = [
  {
    title: 'Без насилия над собой',
    text: 'Никаких резких техник, обещаний мгновенной трансформации и лишнего драматизма.',
    icon: Sparkles,
  },
  {
    title: 'Через состояние и внимание',
    text: 'Мы работаем с тем, как человек чувствует себя, что замечает и как возвращает ясность.',
    icon: CircleDot,
  },
  {
    title: 'Психология + тело + проживание',
    text: 'Глубина появляется через сочетание разговора, мягких практик и внимательного телесного присутствия.',
    icon: Flower2,
  },
  {
    title: 'Отдых как часть процесса',
    text: 'Море, воздух, дом у моря и спокойный ритм становятся частью самой психологии восстановления.',
    icon: SunMedium,
  },
];

const days = [
  {
    day: 'День 1',
    title: 'Остановка и возвращение к себе',
    goal: 'Сбавить скорость, выйти из режима автоматизма и начать слышать себя.',
    result: 'Человек перестаёт жить на инерции и впервые за долгое время чувствует, что с ним происходит.',
  },
  {
    day: 'День 2',
    title: 'Эмоции и внутреннее состояние',
    goal: 'Научиться понимать свои реакции, усталость, раздражение и скрытое напряжение.',
    result: 'Появляется контроль через понимание, а не через усилие и подавление.',
  },
  {
    day: 'День 3',
    title: 'Внутренняя опора и ясность',
    goal: 'Убрать шум, который мешает видеть себя и свой путь.',
    result: 'Возникает спокойное ощущение: я понимаю, что со мной происходит, и могу на это опереться.',
  },
  {
    day: 'День 4',
    title: 'Собирание себя и направление',
    goal: 'Собрать опыт, увидеть главные выводы и перевести их в действие.',
    result: 'Участницы уезжают не воодушевлённые на час, а собранные и спокойные.',
  },
];
const willHappen = [
  'Понимание своих эмоций и реакций',
  'Мягкая работа с усталостью и выгоранием',
  'Снижение внутреннего напряжения',
  'Восстановление энергии и ресурса',
  'Возвращение ясности мышления',
];

const results = [
  'Снижение тревоги и перегрузки',
  'Понимание, почему вы реагируете именно так',
  'Контакт с телом и внутренним состоянием',
  'Больше ясности и собранности',
  'Ощущение направления и опоры',
  'Возвращение энергии и способности действовать',
];

const programVisuals = [
  {
    image: forestBgUrl,
    kicker: 'Утро • Заезд и настройка',
  },
  {
    image: forestBgUrl,
    kicker: 'Body flow • Внимание к телу',
  },
  {
    image: asset('stitch/house.jpg'),
    kicker: 'Тишина • Ясность и опора',
  },
  {
    image: asset('stitch/beach.jpg'),
    kicker: 'Море • Интеграция и выдох',
  },
];

const faqs = [
  {
    q: 'Что входит в стоимость?',
    a: 'Проживание, питание, все мероприятия, практики, групповые обсуждения и личные консультации. Перелёт не входит.',
  },
  {
    q: 'Для кого этот тур?',
    a: 'Для женщин 30–50 лет, которым нужен не только отдых, но и восстановление, глубина и психологическая ясность.',
  },
  {
    q: 'Насколько это интенсивно?',
    a: 'Формат мягкий: 3–4 часа в день. Это достаточно глубоко, но не перегружает и оставляет пространство для отдыха.',
  },
  {
    q: 'Можно ли получить программу в PDF?',
    a: 'Да, по кнопке в hero и в блоке цены можно скачать красивый PDF-проспект со всей программой и условиями.',
  },
  {
    q: 'Как забронировать место?',
    a: 'Нажмите «Забронировать в WhatsApp» или напишите Ирине напрямую: +7 918 140-54-39. Мы бережно подскажем следующие шаги.',
  },
];

function SectionHeading({
  eyebrow,
  title,
  text,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  centered?: boolean;
}) {
  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} space-y-4`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-accent-blue/18 bg-accent-blue/8 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.28em] text-accent-blue">
        {eyebrow}
      </span>
      <h2 className="font-headline text-3xl leading-[1.05] text-on-surface md:text-5xl">{title}</h2>
      <p className="text-base font-light leading-relaxed text-on-surface-variant md:text-lg">{text}</p>
    </div>
  );
}

function GlassCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`glass-panel editorial-ring relative overflow-hidden rounded-[1.75rem] ${className}`}>{children}</div>;
}

function JourneyMapArt() {
  return (
    <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,#0d2a44_0%,#10243a_40%,#14384f_72%,#183246_100%)]">
      <svg viewBox="0 0 900 1180" className="absolute inset-0 h-full w-full opacity-80">
        <defs>
          <radialGradient id="seaGlow" cx="50%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#7ec8e3" stopOpacity="0.36" />
            <stop offset="55%" stopColor="#7ec8e3" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#7ec8e3" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="route" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f2ca50" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#d8f1ff" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="ocean" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7ec8e3" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#59a6c9" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <rect width="900" height="1180" fill="url(#seaGlow)" />
        <circle cx="740" cy="120" r="90" fill="#f2ca50" fillOpacity="0.08" />
        <circle cx="150" cy="1020" r="130" fill="#7ec8e3" fillOpacity="0.09" />
        <path d="M40 250 C160 180, 300 210, 400 170 C520 122, 670 92, 860 130" stroke="url(#ocean)" strokeWidth="2.2" fill="none" opacity="0.85" />
        <path d="M20 330 C170 280, 300 310, 420 250 C560 180, 730 200, 900 170" stroke="url(#ocean)" strokeWidth="1.4" fill="none" opacity="0.62" />
        <path d="M30 430 C150 390, 320 430, 450 380 C580 332, 710 345, 870 300" stroke="url(#ocean)" strokeWidth="1.2" fill="none" opacity="0.5" />
        <path d="M85 730 C180 650, 290 668, 385 604 C465 550, 575 530, 690 560 C782 584, 838 630, 875 690" stroke="url(#route)" strokeWidth="2.4" fill="none" strokeDasharray="10 12" opacity="0.9" />
        <path d="M80 870 C175 798, 300 782, 408 730 C492 690, 612 675, 742 705 C812 722, 860 760, 888 796" stroke="#dff4ff" strokeWidth="1.3" fill="none" opacity="0.45" />
        <g fill="#f2ca50">
          <circle cx="160" cy="740" r="10" />
          <circle cx="375" cy="655" r="8" />
          <circle cx="605" cy="610" r="9" />
          <circle cx="770" cy="690" r="8" />
        </g>
        <g stroke="#7ec8e3" strokeWidth="1" opacity="0.42" fill="none">
          <path d="M100 480 L250 470 L400 500 L560 490 L730 510" />
          <path d="M110 520 L260 530 L430 555 L610 545 L790 570" />
          <path d="M130 560 L295 590 L470 600 L650 590 L820 620" />
        </g>
      </svg>

      <div className="relative z-10 flex min-h-[31rem] flex-col justify-between p-6 md:min-h-[42rem] md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="max-w-[17rem] rounded-2xl border border-white/10 bg-white/58 px-4 py-3 backdrop-blur-xl">
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-accent-blue">Геленджик у моря</p>
            <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
              Дом, в котором море, воздух и тишина становятся частью работы.
            </p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/58 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant backdrop-blur-xl">
            маршрут к состоянию
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {[
            ['Утро', 'мягкий свет и дыхание'],
            ['Море', 'спокойный ритм и восстановление'],
            ['Тишина', 'внимание и ясность'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-background/68 px-4 py-3 backdrop-blur-xl">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-accent-blue">{title}</p>
              <p className="mt-1 text-sm font-semibold text-on-surface">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SeaMoodCard({
  title,
  text,
  icon: Icon,
  tint = 'from-[#7ec8e3]/40 to-[#f2ca50]/10',
}: {
  title: string;
  text: string;
  icon: LucideIcon;
  tint?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(22,39,53,0.82),rgba(12,20,27,0.92))] p-5">
      <div className={`absolute inset-0 bg-gradient-to-br ${tint} opacity-45`} />
      <div className="relative z-10 flex h-full flex-col justify-between gap-6">
        <div className="flex items-start justify-between gap-3">
          <div className="rounded-2xl border border-accent-blue/12 bg-accent-blue/8 p-3 text-accent-blue">
            <Icon size={18} />
          </div>
          <div className="h-14 w-24 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_68%)]" />
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-accent-blue">{title}</p>
          <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{text}</p>
        </div>
      </div>
    </div>
  );
}

function WaveOverlay({ className = '' }: { className?: string }) {
  return <div aria-hidden="true" className={`wave-overlay ${className}`}></div>;
}

export default function RetreatLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { label: 'Место', href: '#place' },
    { label: 'Для кого', href: '#audience' },
    { label: 'Программа', href: '#program' },
    { label: 'Результат', href: '#results' },
    { label: 'Татьяна', href: '#tatiana' },
    { label: 'Цена', href: '#price' },
  ];

  useEffect(() => {
    const updateScroll = () => {
      const doc = document.documentElement;
      const maxScroll = Math.max(doc.scrollHeight - window.innerHeight, 1);
      setScrollProgress(Math.min(window.scrollY / maxScroll, 1));
    };

    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, []);

  const orbLeft = 6 + scrollProgress * 78;
  const orbTop = 8 + Math.sin(scrollProgress * Math.PI) * 28;
  const orbScale = 1 - scrollProgress * 0.24;
  const orbCore = scrollProgress < 0.52 ? '#f6d47a' : '#edf3ff';
  const orbGlow = scrollProgress < 0.52 ? 'rgba(242,202,80,0.42)' : 'rgba(215,228,255,0.24)';
  const orbHalo = scrollProgress < 0.52 ? 'rgba(255,186,112,0.26)' : 'rgba(134,168,224,0.16)';
  const orbReflection = scrollProgress < 0.52 ? 'rgba(242,202,80,0.24)' : 'rgba(210,224,255,0.14)';
  const moonMaskOpacity = Math.max(0, (scrollProgress - 0.48) / 0.52);
  const starOpacity = Math.max(0, (scrollProgress - 0.62) / 0.38) * 0.55;

  return (
    <div id="top" className="min-h-screen retreat-page overflow-x-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div
          className="absolute transition-[transform,left,top] duration-300"
          style={{
            left: `${orbLeft}%`,
            top: `${orbTop}%`,
            transform: `translate(-50%, -50%) scale(${orbScale})`,
          }}
        >
          <div
            className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{ background: orbGlow, opacity: 0.95 }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-[11rem] w-[11rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl"
            style={{
              background: `radial-gradient(circle, ${orbHalo} 0%, rgba(255,255,255,0) 72%)`,
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-[8.8rem] w-[8.8rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[2px]"
            style={{
              background: `radial-gradient(circle at 40% 34%, rgba(255,252,241,0.98) 0%, ${orbCore} 28%, ${orbHalo} 74%, rgba(255,255,255,0) 100%)`,
              boxShadow: `0 0 48px 10px ${orbGlow}`,
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-[2.2rem] w-[2.2rem] -translate-x-[120%] -translate-y-[135%] rounded-full blur-sm"
            style={{ background: 'rgba(255,255,245,0.64)' }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-[8.8rem] w-[8.8rem] -translate-y-1/2 rounded-full"
            style={{
              transform: 'translate(-14%, -50%)',
              background: 'rgba(9, 14, 20, 0.88)',
              opacity: moonMaskOpacity,
            }}
          />
          <div
            className="absolute left-1/2 top-[calc(50%+4.4rem)] h-8 w-48 -translate-x-1/2 rounded-full blur-2xl"
            style={{
              background: `linear-gradient(90deg, rgba(255,255,255,0) 0%, ${orbReflection} 50%, rgba(255,255,255,0) 100%)`,
              opacity: 0.9,
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(255,255,255,0.26) 0 1px, transparent 1.5px 100%)',
              backgroundSize: '56px 56px',
              opacity: starOpacity,
              filter: 'blur(0.2px)',
            }}
          />
        </div>
      </div>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/52 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="font-headline text-xl italic tracking-tight text-primary md:text-2xl">
            Татьяна Мунн
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] font-bold uppercase tracking-[0.24em] text-on-surface-variant transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <a
              href={brochureUrl}
              download="gelendzhik-retreat-brochure.pdf"
              className="hidden rounded-full border border-white/10 bg-white/62 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant transition-all hover:border-primary/30 hover:text-on-surface sm:inline-flex"
            >
              PDF
            </a>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] text-on-primary premium-glow transition-all hover:scale-[1.03]"
            >
              Забронировать
            </a>
            <button
              type="button"
              className="rounded-full border border-white/10 bg-white/62 p-2 text-on-surface lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Открыть меню"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/5 bg-surface/96 px-5 py-5 backdrop-blur-xl lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-bold uppercase tracking-[0.18em] text-on-surface-variant transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={brochureUrl}
                download="gelendzhik-retreat-brochure.pdf"
                className="inline-flex w-fit rounded-full bg-primary px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-on-primary"
              >
                Скачать PDF
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10 pt-24 md:pt-28">
        <section className="relative overflow-hidden pb-16 pt-8 md:pb-24 md:pt-14">
          <img
            src={heroSeaUrl}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-72"
          />
          <WaveOverlay className="absolute inset-0 -z-10 opacity-88" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_28%,rgba(255,244,212,0.22),transparent_22%),radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.18),transparent_26%),radial-gradient(circle_at_82%_14%,rgba(166,197,219,0.14),transparent_24%)]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(247,250,251,0.18)_42%,rgba(235,242,245,0.24)_100%)]" />

          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-12 lg:items-center">
            <div className="space-y-8 lg:col-span-6">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-accent-blue/18 bg-accent-blue/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-accent-blue">
                    Геленджик • 15–18 июня 2026
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/44 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant">
                    Место силы у моря
                  </span>
                </div>

                <h1 className="max-w-3xl font-headline text-5xl leading-[0.96] text-on-surface md:text-7xl">
                  4 дня себе
                </h1>
                <p className="max-w-2xl text-xl leading-relaxed text-on-surface-variant md:text-2xl">
                  Перезагрузка состояния, восстановление, ясность, внутренняя устойчивость. Глубокая, но мягкая психологическая работа, встроенная в отдых у моря.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/44 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-on-surface-variant">
                  4 дня
                </span>
                <span className="rounded-full border border-white/10 bg-white/44 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-on-surface-variant">
                  3–4 часа в день
                </span>
                <span className="rounded-full border border-white/10 bg-white/44 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-on-surface-variant">
                  Живая группа
                </span>
                <span className="rounded-full border border-white/10 bg-white/44 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-on-surface-variant">
                  Всё включено
                </span>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-on-primary premium-glow transition-all hover:scale-[1.02]"
                >
                  Забронировать в WhatsApp <ArrowRight size={16} />
                </a>
                <a
                  href={brochureUrl}
                  download="gelendzhik-retreat-brochure.pdf"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/56 px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-on-surface transition-all hover:border-primary/30 hover:bg-white/70"
                >
                  <Download size={16} /> Скачать PDF
                </a>
                <a
                  href={venueUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/56 px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-on-surface-variant transition-all hover:border-primary/20 hover:text-on-surface"
                >
                  <MapPinned size={16} /> Место проведения
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                  <GlassCard key={stat.label} className="p-5">
                    <p className="font-headline text-2xl text-primary md:text-3xl">{stat.value}</p>
                    <p className="mt-2 text-[10px] font-black uppercase tracking-[0.22em] text-on-surface-variant">
                      {stat.label}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </div>

            <div className="relative lg:col-span-6">
              <div className="absolute -left-8 top-8 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(242,202,80,0.22)_0%,transparent_70%)] blur-3xl" />
              <div className="absolute -right-6 bottom-8 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(102,169,203,0.22)_0%,transparent_70%)] blur-3xl" />

              <GlassCard className="relative overflow-hidden p-0">
                <img
                  src={retreatHeroPortraitUrl}
                  alt="Татьяна Мунн"
                  className="h-[34rem] w-full object-cover object-center md:h-[44rem]"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(242,202,80,0.06),transparent_28%),linear-gradient(180deg,rgba(16,18,22,0.00)_0%,rgba(16,18,22,0.10)_48%,rgba(16,18,22,0.34)_100%)]" />

                <div className="absolute left-5 top-5 max-w-[15rem] rounded-full border border-accent-blue/16 bg-white/58 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-accent-blue backdrop-blur-xl">
                  ведущая • тишина • глубина
                </div>

                <div className="absolute bottom-5 left-5 right-5 grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/58 p-5 backdrop-blur-xl">
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-accent-blue">Татьяна Мунн</p>
                    <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                      Психолог МГУ, эксперт по эмоциональному интеллекту и восстановлению внутреннего состояния.
                    </p>
                  </div>
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/58 p-5 backdrop-blur-xl">
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-accent-blue">Формат</p>
                    <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                      4 дня, 3–4 часа в день, живая группа, практики, обсуждения, личные инсайты.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <GlassCard className="p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-on-surface-variant">Утро</p>
                  <p className="mt-2 text-sm font-semibold text-on-surface">Светлое начало дня и спокойная ясность</p>
                </GlassCard>
                <GlassCard className="p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-on-surface-variant">Море</p>
                  <p className="mt-2 text-sm font-semibold text-on-surface">Фон, который поддерживает восстановление</p>
                </GlassCard>
                <GlassCard className="p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-on-surface-variant">Тишина</p>
                  <p className="mt-2 text-sm font-semibold text-on-surface">Пространство, где легче слышать себя</p>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>
        <section id="place" className="section-tone relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <img
              src={locationBeachUrl}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover opacity-72"
            />
            <WaveOverlay className="absolute inset-0 opacity-84" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(246,249,250,0.16)_34%,rgba(233,240,243,0.22)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(255,238,198,0.18),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(153,208,230,0.10),transparent_22%)]" />
          </div>
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="Место силы"
              title="Геленджик, недалеко от моря, в доме с очень особой атмосферой"
              text="Это не просто локация для размещения. Это пространство, где мягкий ритм, приятные хозяева и близость к морю создают ту самую среду, в которой восстановление происходит легче и глубже."
            />

            <div className="mt-12 grid gap-8 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-5">
                <GlassCard className="p-8 md:p-10">
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-accent-blue">Почему это место работает</p>
                  <ul className="mt-6 space-y-4">
                    {[
                      'Море и воздух задают спокойный, восстанавливающий темп.',
                      'Дом и хозяева создают редкое ощущение бережного гостеприимства.',
                      'Пространство поддерживает тишину, глубину и мягкую трансформацию.',
                    ].map((item) => (
                      <li key={item} className="flex gap-3 text-base leading-relaxed text-on-surface-variant">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-accent-blue" size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-accent-blue/12 bg-accent-blue/10 p-3 text-accent-blue">
                      <MapPinned size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-on-surface">Открыть место на карте</p>
                      <p className="mt-1 text-sm leading-relaxed text-on-surface-variant">
                        Если хочется заранее почувствовать точку силы, можно открыть ссылку и посмотреть расположение.
                      </p>
                      <a
                        href={venueUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-accent-blue"
                      >
                        Открыть ссылку <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div className="grid gap-4 lg:col-span-7 md:grid-cols-2">
                <GlassCard className="relative min-h-[20rem] overflow-hidden p-0 md:col-span-2">
                  <img src={locationHouseUrl} alt="Дом у моря" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,rgba(239,245,248,0.18)_100%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-accent-blue">Атмосфера</p>
                    <h3 className="mt-2 max-w-2xl font-headline text-3xl text-on-surface md:text-4xl">
                      Утренний свет, тихий ритм, свободное дыхание
                    </h3>
                  </div>
                </GlassCard>

                <GlassCard className="min-h-[15rem] overflow-hidden p-0">
                  <img src={locationBeachUrl} alt="Пляж у моря" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,rgba(240,246,248,0.14)_100%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-accent-blue">Ритм</p>
                    <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">Тихое место у воды, где легко замедлиться и услышать себя.</p>
                  </div>
                </GlassCard>

                <GlassCard className="min-h-[15rem] overflow-hidden p-0">
                  <img src={locationInteriorUrl} alt="Пространство для практик" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,rgba(240,246,248,0.14)_100%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-accent-blue">Практики</p>
                    <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">Дом, который помогает не спешить, а собираться мягко и глубоко.</p>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        <section id="audience" className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <img src={audienceBgUrl} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-62" />
            <WaveOverlay className="absolute inset-0 opacity-74" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(243,248,249,0.18)_42%,rgba(232,240,243,0.24)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(242,202,80,0.06),transparent_18%),radial-gradient(circle_at_82%_18%,rgba(153,208,230,0.10),transparent_22%)]" />
          </div>
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="Для кого"
              title="Для женщин, которые хотят не просто отдохнуть, а восстановиться"
              text="Программа собрана для участниц 30–50 лет, которым близки забота о себе, психологическое здоровье, личностный рост и бережный способ вернуть ресурс."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {whoFor.map((item) => (
                <GlassCard key={item.title} className="p-6 md:p-7">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-accent-blue/12 bg-accent-blue/10 p-3 text-accent-blue">
                      <item.icon size={18} />
                    </div>
                    <h3 className="font-headline text-xl text-on-surface">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">{item.text}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section className="section-tone relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <img src={distinctivesBgUrl} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-56" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(242,247,248,0.20)_42%,rgba(232,240,243,0.30)_100%)]" />
          </div>
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="Что отличает программу"
              title="Мягкая глубина без давления и искусственной трансформации"
              text="Мы не перегружаем и не ломаем привычный ритм. Работа строится на внимании, состоянии, телесном проживании и честном психологическом контакте."
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-4">
              {distinctives.map((item) => (
                <GlassCard key={item.title} className="p-6 md:p-7">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-accent-blue/12 bg-accent-blue/10 p-3 text-accent-blue">
                      <item.icon size={18} />
                    </div>
                    <h3 className="font-headline text-xl text-on-surface">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">{item.text}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section id="program" className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <img
              src={heroSeaUrl}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover opacity-60"
            />
            <WaveOverlay className="absolute inset-0 opacity-82" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(242,247,248,0.22)_42%,rgba(229,238,242,0.36)_100%)]" />
          </div>
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="Программа по дням"
              title="Четыре дня, которые мягко ведут от замедления к ясности"
              text="Каждый день — это отдельный шаг: остановка, понимание эмоций, внутренняя опора и собирание себя в спокойное направление."
            />

            <div className="mt-12 grid gap-5 xl:grid-cols-4">
              {days.map((day, index) => (
                <div
                  key={day.day}
                  className="group relative min-h-[27rem] overflow-hidden rounded-[1.65rem] border border-white/8 shadow-[0_30px_80px_rgba(0,0,0,0.24)]"
                >
                  <img
                    src={programVisuals[index].image}
                    alt={day.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(241,246,248,0.10)_28%,rgba(221,232,238,0.24)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(242,202,80,0.08),transparent_22%)]" />
                  <div className="relative z-10 flex h-full flex-col justify-between p-5 md:p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-headline italic text-accent-blue/70 md:text-3xl">
                        0{index + 1}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-[0.22em] text-accent-blue/80">
                        {programVisuals[index].kicker}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.26em] text-on-surface-variant/80">
                          {day.day}
                        </p>
                        <h3 className="mt-3 font-headline text-3xl italic leading-tight text-on-surface">
                          {day.title}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        <div className="rounded-2xl border border-white/8 bg-white/34 p-4 backdrop-blur-md">
                          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-accent-blue">Цель</p>
                          <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{day.goal}</p>
                        </div>
                        <div className="rounded-2xl border border-primary/12 bg-white/42 p-4 backdrop-blur-md">
                          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-accent-blue">Результат</p>
                          <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{day.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-5 lg:grid-cols-5">
              <GlassCard className="p-6 lg:col-span-2">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-accent-blue">Что будет каждый день</p>
                <ul className="mt-5 space-y-3">
                  {willHappen.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-on-surface-variant">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-accent-blue" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              <GlassCard className="p-6 lg:col-span-3">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-accent-blue">Формат</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    'Живая групповая работа',
                    'Мягкие практики',
                    'Обсуждения и инсайты',
                    'Личные консультации',
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/6 bg-white/46 p-4 text-sm text-on-surface-variant">
                      {item}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        <section id="results" className="section-tone relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <img src={heroSeaUrl} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-62" />
            <WaveOverlay className="absolute inset-0 opacity-80" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(242,247,248,0.20)_34%,rgba(231,239,243,0.30)_100%)]" />
          </div>
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <SectionHeading
                  eyebrow="Результат"
                  title="Что уносят участницы после этих четырёх дней"
                  text="Это не про внешний эффект. Это про более спокойное состояние, лучшее понимание себя и ощущение, что внутри снова есть опора."
                />
              </div>
              <div className="lg:col-span-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  {results.map((item) => (
                    <GlassCard key={item} className="p-5">
                      <div className="flex items-start gap-3">
                        <BadgeCheck className="mt-0.5 text-accent-blue" size={18} />
                        <p className="text-sm leading-relaxed text-on-surface-variant">{item}</p>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tatiana" className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <img src={tatianaBgUrl} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-50" />
            <WaveOverlay className="absolute inset-0 opacity-68" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(241,247,249,0.20)_40%,rgba(229,238,242,0.30)_100%)]" />
          </div>
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="Ведущая"
              title="Татьяна Мунн — дипломированный психолог МГУ и эксперт по состоянию"
              text="Работает с тем, что действительно влияет на жизнь человека: внутренним состоянием, уровнем энергии, ясностью мышления и способностью понимать себя."
            />

            <div className="mt-12 grid gap-8 lg:grid-cols-12">
              <div className="space-y-4 lg:col-span-5">
                <GlassCard className="relative overflow-hidden p-0">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,rgba(239,245,248,0.16)_78%,rgba(224,234,239,0.28)_100%)]" />
                  <img
                    src={tatianaPortraitUrl}
                    alt="Татьяна Мунн"
                    className="h-[28rem] w-full object-cover object-center portrait-warmth md:h-[38rem]"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(242,202,80,0.10),transparent_26%),linear-gradient(180deg,rgba(13,18,24,0.03)_0%,rgba(13,18,24,0.44)_74%,rgba(13,18,24,0.72)_100%)]" />
                  <div className="absolute left-5 top-5 rounded-full border border-accent-blue/16 bg-white/58 px-4 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-accent-blue backdrop-blur-xl">
                    Ведущая ретрита
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="max-w-md space-y-3">
                      <p className="text-[10px] font-black uppercase tracking-[0.24em] text-accent-blue">Татьяна Мунн</p>
                      <h3 className="font-headline text-3xl text-on-surface md:text-4xl">Дипломированный психолог МГУ</h3>
                      <p className="text-sm leading-relaxed text-on-surface-variant md:text-base">
                        Эксперт по эмоциональному интеллекту, состоянию, ясности мышления и мягкому восстановлению ресурса.
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-accent-blue/12 bg-accent-blue/10 p-3 text-accent-blue">
                      <BadgeCheck size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-on-surface">Профессиональная экспертиза и авторская методика</p>
                      <p className="mt-1 text-sm leading-relaxed text-on-surface-variant">
                        Ведущая опирается на глубокую психологию, телесное внимание и работу со состоянием.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div className="lg:col-span-7">
                <GlassCard className="h-full p-7 md:p-10">
                  <div className="grid gap-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/6 bg-white/4 p-5">
                        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-accent-blue">Подход</p>
                        <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                          Без давления, без театральности, с уважением к внутренней реальности человека.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/6 bg-white/4 p-5">
                        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-accent-blue">Фокус</p>
                        <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                          Состояние, эмоции, ясность, энергия, внутренний ресурс и ощущение опоры.
                        </p>
                      </div>
                    </div>

                    <p className="text-base leading-relaxed text-on-surface-variant md:text-lg">
                      Татьяна Мунн создаёт пространство, где можно не только говорить о чувствах, но и по-настоящему возвращать контакт с собой. Это мягкая экспертная работа, которая помогает выйти из перегрузки и снова увидеть направление.
                    </p>

                    <div className="grid gap-4 md:grid-cols-3">
                      {[
                        'Дипломированный психолог МГУ',
                        'Эксперт по эмоциональному интеллекту',
                        'Работа с состоянием и энергией',
                      ].map((item) => (
                        <div key={item} className="rounded-2xl border border-primary/12 bg-primary/12 p-4 text-sm text-on-surface-variant">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>
        <section id="price" className="section-tone relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <img src={locationHouseUrl} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-56" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(242,247,248,0.22)_38%,rgba(231,239,243,0.30)_100%)]" />
          </div>
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
              <div className="lg:col-span-5">
                <SectionHeading
                  eyebrow="Цена и условия"
                  title="Лучшее предложение на четыре дня мягкой психологической перезагрузки"
                  text="В стоимость включено почти всё: проживание, питание, все практики, встречи и консультации. Перелёт не включён."
                />
              </div>
              <div className="lg:col-span-7">
                <GlassCard className="h-full p-7 md:p-10">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.28em] text-accent-blue">
                      Всё включено
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-on-surface-variant">
                      Ранний набор ограничен
                    </span>
                  </div>

                  <div className="mt-7 flex flex-wrap items-end gap-4">
                    <p className="text-2xl font-light text-on-surface-variant line-through">100 000 ₽</p>
                    <p className="font-headline text-6xl text-primary md:text-7xl">60 000 ₽</p>
                  </div>

                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-lg">
                    Это включает проживание, питание, все мероприятия, тренинги, практики, обсуждения и личные консультации с Татьяной Мунн. Прилёт и дорога оплачиваются отдельно.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {[
                      'Проживание в доме у моря',
                      'Питание и организация',
                      'Все групповые практики и обсуждения',
                      'Личные консультации и сопровождение',
                    ].map((item) => (
                      <div key={item} className="rounded-2xl border border-white/6 bg-white/46 p-4 text-sm text-on-surface-variant">
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-on-primary premium-glow transition-all hover:scale-[1.02]"
                    >
                      Забронировать в WhatsApp <ArrowRight size={16} />
                    </a>
                    <a
                      href={brochureUrl}
                      download="gelendzhik-retreat-brochure.pdf"
                      className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-on-surface transition-all hover:border-primary/30"
                    >
                      <Download size={16} /> Скачать PDF
                    </a>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <img src={locationBeachUrl} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-58" />
            <WaveOverlay className="absolute inset-0 opacity-78" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(242,247,248,0.18)_44%,rgba(232,240,243,0.28)_100%)]" />
          </div>
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="FAQ"
              title="Ответы на важные вопросы"
              text="Собрали коротко и по делу всё, что обычно уточняют перед бронированием."
              centered
            />

            <div className="mt-12 grid gap-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="group glass-panel editorial-ring rounded-[1.5rem] p-5 md:p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                    <span className="font-semibold text-on-surface md:text-lg">{faq.q}</span>
                    <ChevronDown className="shrink-0 text-primary transition-transform group-open:rotate-180" size={20} />
                  </summary>
                  <p className="mt-4 max-w-4xl text-sm leading-relaxed text-on-surface-variant md:text-base">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-tone py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <GlassCard className="relative overflow-hidden p-8 md:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(242,202,80,0.12),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(116,157,190,0.15),transparent_28%)]" />
              <div className="relative grid gap-8 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7">
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-accent-blue">Геленджик • 15–18 июня 2026</p>
                  <h2 className="mt-4 max-w-2xl font-headline text-4xl leading-tight text-on-surface md:text-6xl">
                    4 дня себе — чтобы вернуться к себе спокойнее, яснее и сильнее
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-lg">
                    Если хочется не просто отдохнуть, а действительно восстановить состояние, это очень бережный способ сделать это в красивом месте рядом с морем.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-on-primary premium-glow transition-all hover:scale-[1.02]"
                    >
                      Забронировать в WhatsApp <ArrowRight size={16} />
                    </a>
                    <a
                      href={brochureUrl}
                      download="gelendzhik-retreat-brochure.pdf"
                      className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-on-surface transition-all hover:border-primary/30"
                    >
                      <Download size={16} /> Скачать PDF
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>
      </main>

      <footer id="contacts" className="border-t border-white/5 bg-background py-12 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <div className="font-headline text-2xl italic text-primary">Татьяна Мунн</div>
            <p className="max-w-xl text-sm leading-relaxed text-on-surface-variant">
              Ретрит 4 дня себе в Геленджике. Мягкая психологическая работа, восстановление, ясность и тихая внутренняя опора.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-on-surface-variant">
            <a href={brochureUrl} download="gelendzhik-retreat-brochure.pdf" className="font-bold text-primary">
              Скачать PDF-проспект
            </a>
            <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-[0.28em]">
              <span>Геленджик</span>
              <span>15–18 июня 2026</span>
              <span>Группа 12–16 женщин</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
