import { Input } from './ui/input';
import { Button } from './ui/button';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white/80 py-20 rtl" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-4xl font-thin uppercase tracking-[0.2em] text-white">
              onsko
            </h2>
            <p className="font-light text-sm leading-relaxed max-w-xs">
              علامة تجارية رائدة في مجال الموضة والجمال، نسعى لتقديم أفضل المنتجات التي تبرز جمالك الطبيعي.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white uppercase tracking-wider">
              روابط سريعة
            </h3>
            <ul className="space-y-3 font-light">
              <li><a href="#" className="hover:text-secondary transition-colors">عن المتجر</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">المدونة</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white uppercase tracking-wider">
              السياسات
            </h3>
            <ul className="space-y-3 font-light">
              <li><a href="#" className="hover:text-secondary transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">الشروط والأحكام</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">سياسة الاسترجاع</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white uppercase tracking-wider">
              النشرة البريدية
            </h3>
            <p className="font-light text-sm">
              اشتركي معنا للحصول على آخر العروض والأخبار
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="بريدك الإلكتروني" 
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-secondary rounded-none"
              />
              <Button className="bg-secondary text-black hover:bg-secondary/90 rounded-none">
                اشتراك
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm font-light">
          <p>© 2024 Onsko. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};
