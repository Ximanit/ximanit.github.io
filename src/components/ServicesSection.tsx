import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

import {
	Trash2,
	Battery,
	Smartphone,
	Car,
	Home,
	Building2,
	ArrowRight,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ServicesSection() {
	const services = [
		{
			icon: Home,
			title: 'Бытовые отходы',
			description:
				'Переработка органических и неорганических отходов от частных домохозяйств',
			features: ['Сортировка', 'Компостирование', 'Вторсырье'],
			image:
				'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
			popular: false,
		},
		{
			icon: Building2,
			title: 'Промышленные отходы',
			description:
				'Комплексная утилизация промышленных отходов различных классов опасности',
			features: ['Анализ состава', 'Безопасная утилизация', 'Сертификаты'],
			image:
				'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
			popular: true,
		},
		{
			icon: Smartphone,
			title: 'Электронные отходы',
			description:
				'Специализированная переработка электроники и бытовой техники',
			features: [
				'Извлечение металлов',
				'Безопасная утилизация',
				'Сертификат уничтожения',
			],
			image:
				'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
			popular: false,
		},
		{
			icon: Battery,
			title: 'Опасные отходы',
			description:
				'Утилизация батарей, химических веществ и других опасных материалов',
			features: [
				'Класс опасности 1-4',
				'Лицензированная утилизация',
				'Экологический мониторинг',
			],
			image:
				'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
			popular: false,
		},
		{
			icon: Car,
			title: 'Автомобильные отходы',
			description:
				'Переработка автомобильных шин, масел, аккумуляторов и металлолома',
			features: ['Шины', 'Масла', 'Аккумуляторы', 'Металлолом'],
			image:
				'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
			popular: false,
		},
		{
			icon: Trash2,
			title: 'Крупногабаритные отходы',
			description:
				'Вывоз и переработка мебели, строительного мусора и других КГО',
			features: ['Вывоз', 'Сортировка', 'Переработка', 'Утилизация'],
			image:
				'https://images.unsplash.com/photo-1586999768135-84d5906fa5d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
			popular: false,
		},
	];

	return (
		<section id="services" className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Предоставляем полный спектр услуг по переработке и утилизации
						отходов для частных лиц и предприятий любого масштаба.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<Card
							key={index}
							className="relative overflow-hidden hover:shadow-xl transition-shadow border-0">
							{service.popular && 'Популярно'}

							<div className="relative h-48 overflow-hidden">
								<ImageWithFallback
									src={service.image}
									alt={service.title}
									className="w-full h-full object-cover transition-transform hover:scale-105"
								/>
								<div className="absolute inset-0 bg-black bg-opacity-20"></div>
								<div className="absolute bottom-4 left-4">
									<service.icon className="h-8 w-8 text-white" />
								</div>
							</div>

							<CardHeader>
								<CardTitle className="flex items-center justify-between">
									{service.title}
								</CardTitle>
							</CardHeader>

							<CardContent className="pt-0">
								<p className="text-gray-600 mb-4">{service.description}</p>

								<div className="flex flex-wrap gap-2 mb-6">
									{service.features.map((feature, idx) => feature)}
								</div>

								<Button variant="outline" className="w-full group">
									Подробнее
									<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
								</Button>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="text-center mt-12">
					<Button size="lg" className="bg-green-600 hover:bg-green-700">
						Получить консультацию по услугам
					</Button>
				</div>
			</div>
		</section>
	);
}
