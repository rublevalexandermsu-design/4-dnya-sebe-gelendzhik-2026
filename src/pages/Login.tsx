import { motion } from 'motion/react';
import { Mail, Lock, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Quote & Visual */}
      <div className="hidden md:flex md:w-1/2 bg-surface-variant relative items-center justify-center p-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=1200" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background"></div>
        </div>
        
        <div className="relative z-10 max-w-lg space-y-12">
          <Quote className="text-primary opacity-20" size={80} />
          <h2 className="font-headline text-5xl italic leading-tight text-on-surface">
            Осознанность — это не конечная точка, а способ путешествия.
          </h2>
          <div className="space-y-2">
            <p className="font-headline text-2xl text-primary">— Татьяна Мунн</p>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface-variant opacity-60">Платформа эмоционального интеллекта</p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-20 bg-background">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md space-y-12"
        >
          <div className="space-y-4">
            <Link to="/" className="font-headline italic text-3xl text-primary tracking-tight mb-8 block">Татьяна Мунн</Link>
            <h1 className="font-headline text-4xl">Вход в <span className="italic text-primary">кабинет</span></h1>
            <p className="text-on-surface-variant font-light">Продолжите ваше путешествие в мир эмоционального интеллекта.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant ml-4">Электронная почта</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
                <input 
                  type="email" 
                  placeholder="example@mail.com"
                  className="w-full bg-surface border border-white/10 rounded-full py-4 pl-14 pr-6 text-sm focus:border-primary/40 focus:ring-0 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Пароль</label>
                <button type="button" className="text-[9px] font-black uppercase tracking-widest text-primary hover:opacity-70 transition-opacity">Забыли пароль?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-surface border border-white/10 rounded-full py-4 pl-14 pr-6 text-sm focus:border-primary/40 focus:ring-0 transition-all"
                />
              </div>
            </div>

            <div className="pt-4">
              <Link to="/dashboard" className="w-full bg-primary text-on-primary py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:premium-glow transition-all flex items-center justify-center gap-3">
                Войти в систему <ArrowRight size={16} />
              </Link>
            </div>
          </form>

          <div className="pt-8 text-center space-y-6">
            <p className="text-xs text-on-surface-variant font-light">Нет аккаунта? <Link to="/catalog" className="text-primary font-bold border-b border-primary/20 pb-0.5">Выбрать программу</Link></p>
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/5"></div>
              <span className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant/40">или войти через</span>
              <div className="h-px flex-1 bg-white/5"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="py-4 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all">Google</button>
              <button className="py-4 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all">Telegram</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
