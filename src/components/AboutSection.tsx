import { Card, CardContent } from "./ui/card";
import { Recycle, Shield, Clock, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  const values = [
    {
      icon: Shield,
      title: "Экологическая безопасность",
      description: "Все процессы соответствуют международным экологическим стандартам"
    },
    {
      icon: Recycle,
      title: "Инновационные технологии",
      description: "Используем передовое оборудование для максимальной эффективности переработки"
    },
    {
      icon: Clock,
      title: "Оперативность",
      description: "Быстрая обработка заявок и своевременный вывоз отходов"
    },
    {
      icon: Target,
      title: "Индивидуальный подход",
      description: "Разрабатываем решения под специфические потребности каждого клиента"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            О компании ЭкоЦикл
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы — ведущая компания в области переработки отходов с 15-летним опытом работы. 
            Наша миссия — создать чистое будущее для следующих поколений.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Команда ЭкоЦикл"
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Наш опыт — ваша уверенность в результате
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              За годы работы мы переработали более 2 миллионов тонн отходов, помогли 
              сохранить природные ресурсы и снизить углеродный след наших клиентов.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Наша команда состоит из опытных специалистов, которые постоянно 
              совершенствуют процессы переработки и внедряют новые экотехнологии.
            </p>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Наша цель</h4>
              <p className="text-green-700">
                К 2030 году увеличить долю переработанных отходов до 90% 
                и стать углеродно-нейтральной компанией.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <value.icon className="h-12 w-12 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}