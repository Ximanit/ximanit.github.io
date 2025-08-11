import {
	TrendingUp,
	Leaf,
	Users,
	Award,
	Truck,
	ScanLine,
	Recycle,
	Package,
	CheckCircle,
	Phone,
} from 'lucide-react';

export const stats = [
	{
		icon: TrendingUp,
		value: '2M+',
		label: 'Тонн отходов переработано',
		description: 'За все время работы компании',
		color: 'text-blue-600',
	},
	{
		icon: Leaf,
		value: '85%',
		label: 'Доля вторичной переработки',
		description: 'От общего объема принимаемых отходов',
		color: 'text-green-600',
	},
	{
		icon: Users,
		value: '500+',
		label: 'Довольных клиентов',
		description: 'Частных лиц и предприятий',
		color: 'text-purple-600',
	},
	{
		icon: Award,
		value: '15',
		label: 'Лет успешной работы',
		description: 'Опыт и профессионализм',
		color: 'text-orange-600',
	},
];

export const steps = [
	{
		icon: Phone,
		number: '01',
		title: 'Заявка',
		description:
			'Оставьте заявку по телефону или через сайт. Наш специалист проконсультирует вас и рассчитает стоимость.',
	},
	{
		icon: Truck,
		number: '02',
		title: 'Вывоз',
		description:
			'Наши специалисты приедут в удобное для вас время и заберут отходы с соблюдением всех требований безопасности.',
	},
	{
		icon: ScanLine,
		number: '03',
		title: 'Сортировка',
		description:
			'Отходы проходят детальную сортировку на нашем производстве с использованием современного оборудования.',
	},
	{
		icon: Recycle,
		number: '04',
		title: 'Переработка',
		description:
			'Применяем экологически безопасные технологии переработки для получения вторичного сырья.',
	},
	{
		icon: Package,
		number: '05',
		title: 'Готовая продукция',
		description:
			'Переработанные материалы поставляются производителям для создания новой продукции.',
	},
	{
		icon: CheckCircle,
		number: '06',
		title: 'Отчётность',
		description:
			'Предоставляем полный пакет документов и сертификатов об утилизации отходов.',
	},
];
