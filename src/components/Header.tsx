import { Button } from "./ui/button";
import { Recycle, Phone, Mail } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Recycle className="h-8 w-8 text-green-600" />
            <span className="text-xl font-semibold text-gray-900">ЭкоЦикл</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">О нас</a>
            <a href="#services" className="text-gray-600 hover:text-green-600 transition-colors">Услуги</a>
            <a href="#process" className="text-gray-600 hover:text-green-600 transition-colors">Процесс</a>
            <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Контакты</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>+7 (495) 123-45-67</span>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}