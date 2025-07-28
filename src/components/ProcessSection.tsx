import { Card, CardContent } from "./ui/card";
import { 
  Phone, 
  Truck, 
  ScanLine, 
  Recycle, 
  Package, 
  CheckCircle 
} from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Заявка",
      description: "Оставьте заявку по телефону или через сайт. Наш специалист проконсультирует вас и рассчитает стоимость."
    },
    {
      icon: Truck,
      number: "02", 
      title: "Вывоз",
      description: "Наши специалисты приедут в удобное для вас время и заберут отходы с соблюдением всех требований безопасности."
    },
    {
      icon: ScanLine,
      number: "03",
      title: "Сортировка",
      description: "Отходы проходят детальную сортировку на нашем производстве с использованием современного оборудования."
    },
    {
      icon: Recycle,
      number: "04",
      title: "Переработка",
      description: "Применяем экологически безопасные технологии переработки для получения вторичного сырья."
    },
    {
      icon: Package,
      number: "05",
      title: "Готовая продукция",
      description: "Переработанные материалы поставляются производителям для создания новой продукции."
    },
    {
      icon: CheckCircle,
      number: "06",
      title: "Отчётность",
      description: "Предоставляем полный пакет документов и сертификатов об утилизации отходов."
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Как мы работаем
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наш отлаженный процесс переработки отходов гарантирует максимальную 
            эффективность и соответствие экологическим стандартам.
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-green-200"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="relative border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-6 mt-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 bg-green-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Готовы начать сотрудничество?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня, и наши специалисты разработают 
            индивидуальное решение для ваших потребностей в переработке отходов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+74951234567" className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Phone className="mr-2 h-4 w-4" />
              Позвонить сейчас
            </a>
            <button className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
              Оставить заявку онлайн
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}