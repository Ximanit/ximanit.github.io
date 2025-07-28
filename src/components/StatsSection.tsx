import { Card, CardContent } from "./ui/card";
import { TrendingUp, Leaf, Users, Award } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: "2M+",
      label: "Тонн отходов переработано",
      description: "За все время работы компании",
      color: "text-blue-600"
    },
    {
      icon: Leaf,
      value: "85%",
      label: "Доля вторичной переработки",
      description: "От общего объема принимаемых отходов",
      color: "text-green-600"
    },
    {
      icon: Users,
      value: "500+",
      label: "Довольных клиентов",
      description: "Частных лиц и предприятий",
      color: "text-purple-600"
    },
    {
      icon: Award,
      value: "15",
      label: "Лет успешной работы",
      description: "Опыт и профессионализм",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Наши достижения в цифрах
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Результаты нашей работы говорят сами за себя. 
            Мы гордимся тем, что делаем мир чище каждый день.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-green-100 text-sm">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Environmental impact */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Экологический эффект
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">1,200</div>
              <div className="text-green-100">Тонн CO₂ предотвращено</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">350,000</div>
              <div className="text-green-100">Деревьев сохранено</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-green-100">Клиентов рекомендуют нас</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}