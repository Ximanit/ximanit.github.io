import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare 
} from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Адрес",
      content: "г. Москва, ул. Промышленная, д. 15, стр. 2",
      additional: "Офис и производственная база"
    },
    {
      icon: Phone,
      title: "Телефон",
      content: "+7 (495) 123-45-67",
      additional: "Круглосуточная поддержка"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@ekocikl.ru",
      additional: "Ответим в течение часа"
    },
    {
      icon: Clock,
      title: "Режим работы",
      content: "Пн-Пт: 8:00 - 20:00",
      additional: "Сб-Вс: 9:00 - 18:00"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готовы обсудить ваши потребности в переработке отходов? 
            Наши эксперты всегда готовы помочь и предоставить бесплатную консультацию.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-900 mb-1">{info.content}</p>
                        <p className="text-sm text-gray-600">{info.additional}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick contact buttons */}
            <div className="mt-8 space-y-4">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <Phone className="mr-2 h-4 w-4" />
                Позвонить сейчас
              </Button>
              <Button variant="outline" className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-green-600" />
                  Оставить заявку
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Имя *
                    </label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Компания
                    </label>
                    <Input id="company" placeholder="Название компании" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Интересующая услуга
                  </label>
                  <select 
                    id="service" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Выберите услугу</option>
                    <option value="household">Бытовые отходы</option>
                    <option value="industrial">Промышленные отходы</option>
                    <option value="electronic">Электронные отходы</option>
                    <option value="hazardous">Опасные отходы</option>
                    <option value="automotive">Автомобильные отходы</option>
                    <option value="bulky">Крупногабаритные отходы</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите подробнее о ваших потребностях..."
                    rows={4}
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    Я согласен на обработку персональных данных и получение 
                    коммерческих предложений *
                  </label>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                  Отправить заявку
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * Мы свяжемся с вами в течение 30 минут в рабочее время
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}