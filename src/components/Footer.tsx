import { Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background py-20 px-6 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
        <div className="space-y-8">
          <div className="font-headline text-3xl text-primary tracking-tight">Татьяна Мунн</div>
          <p className="text-sm text-on-surface-variant leading-relaxed font-light">
            Пространство для осознанного роста и психологической устойчивости. Платформа эмоционального развития.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
              <Globe size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
              <Users size={18} />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Обучение</h4>
          <nav className="flex flex-col gap-4">
            <Link to="/catalog" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">Все программы</Link>
            <Link to="/lectures" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">Вебинары</Link>
            <Link to="/library" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">Библиотека видео</Link>
          </nav>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Платформа</h4>
          <nav className="flex flex-col gap-4">
            <Link to="/about" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">О Татьяне Мунн</Link>
            <a href="#contacts" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">Контакты</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">Публичная оферта</a>
          </nav>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Поддержка</h4>
          <nav className="flex flex-col gap-4">
            <a href="#contacts" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">Служба заботы</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">Частые вопросы</a>
            <Link to="/dashboard" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">Личный кабинет</Link>
          </nav>
        </div>
      </div>

      <div id="contacts" className="max-w-7xl mx-auto pt-16 mt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface-variant/40">© 2024 Татьяна Мунн. Все права защищены.</p>
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-primary/30">Designed for intellectual depth</span>
      </div>
    </footer>
  );
}
