import { Recycle, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Recycle className="h-8 w-8 text-green-400" />
              <span className="text-xl font-semibold text-white">ЭкоЦикл</span>
            </div>
            <p className="text-gray-400 mb-4">
              Ведущая компания в области переработки отходов. 
              Создаем чистое будущее для следующих поколений.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Бытовые отходы</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Промышленные отходы</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Электронные отходы</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Опасные отходы</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Автомобильные отходы</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Компания</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">О нас</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Наша команда</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Сертификаты</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Вакансии</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Новости</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-400">г. Москва, ул. Промышленная, д. 15, стр. 2</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-400">+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-400">info@ekocikl.ru</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p>&copy; 2024 ЭкоЦикл. Все права защищены.</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              Условия использования
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              Карта сайта
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}