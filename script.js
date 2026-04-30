// ============================================
// Рекламное Агентство «РА» — каталог услуг
// ============================================

const WA_PHONE = '77777963333'; // +7 7777 96-33-33

// Адрес офиса для построения маршрута
const ADDRESS_TEXT = 'Усть-Каменогорск, ул. Казахстан 71, ТД Passage';
const ROUTE_GOOGLE = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(ADDRESS_TEXT);
const ROUTE_YANDEX = 'https://yandex.kz/maps/?text=' + encodeURIComponent(ADDRESS_TEXT) + '&mode=routes&rtt=auto';
const ROUTE_2GIS = 'https://2gis.kz/oskemen/search/' + encodeURIComponent('Казахстан 71');

const CATEGORIES = {
  print:     { label: 'Печать' },
  outdoor:   { label: 'Наружная реклама' },
  design:    { label: 'Дизайн и креатив' },
  materials: { label: 'Материалы и резка' },
  decor:     { label: 'Оформление' },
  service:   { label: 'Сервис и ремонт' },
  digital:   { label: 'Digital и SMM' },
};

// Картинки — Unsplash (бесплатны для коммерческого использования, без атрибуции).
// Если хочется заменить на свою — впишите в img прямой URL.
const U = (id) => `https://images.unsplash.com/photo-${id}?w=600&h=400&fit=crop&auto=format&q=75`;

const SERVICES = [
  // ===== САМЫЕ ЧАСТЫЕ — ВВЕРХУ =====
  {
    cat: 'print',
    title: 'Печать А4 ч/б',
    desc: 'Быстрая чёрно-белая печать на лазерном принтере. Договоры, отчёты, рефераты, ТЗ, пакеты документов. Готово за 5–10 минут.',
    tags: ['А4', 'ч/б', 'лазер'],
    price: 'от 10 ₸ / лист',
    img: 'https://images.unsplash.com/photo-1645776104983-0611bc32aeaa?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // стопка офисной бумаги (бесплатное фото)
  },
  {
    cat: 'print',
    title: 'Печать А4 цветная',
    desc: 'Цветная печать А4 на струйном или лазерном принтере. Фото, презентации, маркетинг, портфолио. Качественная цветопередача.',
    tags: ['А4', 'цветная'],
    price: 'от 50 ₸ / лист',
    img: 'https://images.unsplash.com/photo-1710857679450-ecd7945dd4bd?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // цветная печать
  },
  {
    cat: 'print',
    title: 'Визитки',
    desc: 'Печать визиток на плотной бумаге или картоне. Простой и сложный дизайн, односторонние и двусторонние, ламинация. Готовы в день обращения.',
    tags: ['100/300 г/м²', '720/1440 dpi', 'ламинация'],
    price: 'от 25 ₸ / шт',
    img: 'https://images.unsplash.com/photo-1769893464274-ef3af10359f9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // визитки
  },
  {
    cat: 'print',
    title: 'Листовки и флаеры',
    desc: 'Тиражная печать листовок и флаеров А5 / А4 / А6 на мелованной или офсетной бумаге. Идеально для промо-акций.',
    tags: ['А4', 'А5', 'А6', 'тираж'],
    price: 'от 75 ₸ / шт',
    img: 'https://images.unsplash.com/photo-1712736051179-1d77e1180eef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // печатный станок
  },
  {
    cat: 'service',
    title: 'Заправка картриджей',
    desc: 'Заправка чёрных и цветных картриджей, тонеров для лазерных принтеров, замена чипа, ремонт корпуса, замена магнитного и фото-вала, чистка, антиутечка.',
    tags: ['все модели', 'гарантия'],
    price: 'от 1 500 ₸',
    img: 'https://images.unsplash.com/photo-1706895040634-62055892cbbb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // картридж
  },
  {
    cat: 'print',
    title: 'Полиграфическая продукция',
    desc: 'Буклеты, ценники, этикетки, календари, открытки, бланки, журналы, наклейки на авто, кружки, майки, магниты, коллажи, цифровые портреты, фамильные гербы и древо.',
    tags: ['буклеты', 'каталоги', 'календари'],
    price: 'от 25 ₸ / шт',
    img: 'https://images.unsplash.com/photo-1715154470884-1c2be0b0129f?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // полиграфия
  },
  {
    cat: 'print',
    title: 'Копировальные услуги до А0',
    desc: 'Эффективное копирование документов, чертежей и изображений в разных форматах — от А4 до А0. Чёрно-белая и цветная.',
    tags: ['А4', 'А3', 'А1', 'А0'],
    price: 'от 10 ₸ / лист',
    img: U('1538141884430-9a826ecce0f0'), // копир / офис (исправлена опечатка в URL)
  },
  {
    cat: 'print',
    title: 'Ризограф',
    desc: 'Печать листовок, бланков, рекламных буклетов, ведомостей, этикеток, методичек и брошюр на ризографе. Самый дешёвый способ для тиражей от 500.',
    tags: ['ризограф', 'тираж', 'оптом'],
    price: 'от 10 ₸ / лист',
    img: 'https://images.unsplash.com/photo-1769893715447-8f12c382e49c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // печатные листы (замена Premium)
  },
  {
    cat: 'service',
    title: 'Ремонт принтеров',
    desc: 'Сервис струйных и лазерных принтеров: диагностика, замена ролика захвата, снятие ошибки, устранение замятия, ремонт системы подачи, замена головки/печки.',
    tags: ['струйные', 'лазерные'],
    price: 'от 2 400 ₸',
    img: U('1612815154858-60aa4c59eaa6'), // ремонт техники
  },

  // ===== БАННЕРЫ И ШИРОКОФОРМАТНАЯ =====
  {
    cat: 'outdoor',
    title: 'Баннеры и билборды',
    desc: 'Видимость с больших расстояний, устойчивость к погоде, простой монтаж. Привлекают внимание потенциальных клиентов и продвигают продукт.',
    tags: ['билборд', 'баннер', 'фасад'],
    img: 'https://images.unsplash.com/photo-1513757378314-e46255f6ed16?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // билборд
  },
  {
    cat: 'print',
    title: 'Широкоформатная печать',
    desc: 'Нанесение изображений в высоком разрешении на основу большого формата: баннер, плёнка, винил. Разрешение 720–1440 dpi. Подходит для уличного размещения.',
    tags: ['баннер', 'винил', 'плёнка'],
    price: 'от 1 750 ₸ / м²',
    img: 'https://images.unsplash.com/photo-1563718724830-7337a0ac4de0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // широкий формат
  },
  {
    cat: 'print',
    title: 'Баннерная печать',
    desc: 'Баннеры для рекламы, маркетинга, мероприятий, выставок и торговых сетей. Привлекают внимание и информируют аудиторию.',
    tags: ['до 40 м²', '720 dpi'],
    price: 'от 1 250 ₸ / м²',
    img: 'https://images.unsplash.com/photo-1746357704841-149c83f3e6ce?q=80&w=1155&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // вывеска / баннер
  },
  {
    cat: 'print',
    title: 'Интерьерная печать',
    desc: 'Печать высокого качества для оформления интерьеров — фотообои, постеры, картины, оформление стен и витрин.',
    tags: ['1440 dpi', 'фотокачество'],
    price: 'от 2 750 ₸ / м²',
    img: U('1518998053901-5348d3961a04'), // постеры на стене
  },

  // ===== ДИЗАЙН =====
  {
    cat: 'design',
    title: 'Разработка дизайна',
    desc: 'Креативные и узнаваемые решения для рекламы и продвижения: концепции, эскизы, макеты под печать и digital.',
    tags: ['макет', 'концепция'],
    price: 'от 3 000 ₸',
    img: U('1626785774573-4b799315345d'), // дизайнер за работой
  },
  {
    cat: 'design',
    title: 'Разработка логотипа',
    desc: 'Создание уникальной айдентики бренда: логотип, фирменные цвета и шрифты, базовые носители.',
    tags: ['логотип', 'айдентика'],
    price: 'от 5 000 ₸',
    img: U('1611532736597-de2d4265fba3'), // брендинг / логотипы
  },

  // ===== ВИНИЛ И РЕЗКА =====
  {
    cat: 'materials',
    title: 'Винил (самоклейка)',
    desc: 'Самоклеящаяся плёнка из винила или пластика — для оклейки витрин, авто, мебели, стен. Не горит, морозостойкая.',
    tags: ['глянец', 'мат', '280–400 г'],
    price: 'от 1 500 ₸',
    img: U('1493238792000-8113da705763'), // авто (виниловая оклейка)
  },
  {
    cat: 'materials',
    title: 'Плоттерная резка / цветная плёнка',
    desc: 'Точная резка форм и изображений на плёнке, виниле, самоклейке, трафаретах. Идеально для наклеек, букв, логотипов и декора.',
    tags: ['самоклейка', 'трафарет'],
    price: 'от 1 500 ₸ / м²',
    img: 'https://images.unsplash.com/photo-1769512585429-df338954cd8c?q=80&w=671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // плоттер / резка
  },

  // ===== СВЕТОВАЯ И ОБЪЁМНАЯ РЕКЛАМА =====
  {
    cat: 'outdoor',
    title: 'Световая реклама — лайтбокс',
    desc: 'Лайтбоксы привлекают внимание прохожих и водителей в любое время суток. Реклама ярко выделяется на фасаде, выдерживает перепады температур и влажности.',
    tags: ['короб', 'LED', 'без ограничений по форме'],
    img: 'https://images.unsplash.com/photo-1563691067913-71b101e003d0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // неоновая вывеска
  },
  {
    cat: 'outdoor',
    title: 'Объёмные буквы',
    desc: 'Псевдообъёмные, объём без подсветки, внутренняя и внешняя подсветка, круглые диоды через отверстия. Заметный элемент фасада днём и ночью.',
    tags: ['ПВХ', 'акрил', 'LED'],
    price: 'от 1,5 ₸ / см²',
    img: 'https://images.unsplash.com/photo-1764611706839-dff9a66639ef?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // объёмные буквы
  },
  {
    cat: 'outdoor',
    title: 'Вывески (световые и несветовые)',
    desc: 'Сборка вывесок, штендеров, табличек разной сложности — от простых баннеров до светодиодных коробов больших размеров.',
    tags: ['до 1 м²', '1–3 м²', 'более 3 м²'],
    price: 'от 10 000 ₸',
    img: 'https://images.unsplash.com/photo-1609597542355-dcbd71875af1?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // вывеска у магазина
  },
  {
    cat: 'outdoor',
    title: 'Светодиодная вывеска (расчёт)',
    desc: 'Объёмные световые буквы с внутренней светодиодной подсветкой: акрил 3,5 мм, ПВХ 3–8 мм, светодиодные матрицы, блоки питания 220→12 V.',
    tags: ['LED', 'индивидуальный расчёт'],
    price: 'от 12 000 ₸ / см²',
    img: 'https://images.unsplash.com/photo-1670533971687-3fd9713a3213?q=80&w=976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // LED светящаяся
  },
  {
    cat: 'outdoor',
    title: 'LED-панель «бегущая строка»',
    desc: 'Светодиодная бегущая строка для фасада, входной группы или интерьера. Настройка контента, обновление сообщений.',
    tags: ['LED', 'А4', 'настройка'],
    price: 'от 30 000 ₸',
    img: 'https://images.unsplash.com/photo-1617479582376-ba5f0a1e96cd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // led экран
  },
  {
    cat: 'outdoor',
    title: 'Монтаж конструкций',
    desc: 'Монтаж по чертежам и проектам производства работ — поклейка винила, монтаж лайтбоксов, объёмных букв, металлоконструкций, сценических комплексов.',
    tags: ['простой/высокий'],
    price: 'от 1 000 ₸ / м²',
    img: U('1504917595217-d4dc5ebe6122'), // строительный монтаж
  },

  // ===== ПЕРЕПЛЁТЫ И ХОЛСТЫ =====
  {
    cat: 'print',
    title: 'Изготовление переплётов',
    desc: 'Переплёт книг, дипломов, отчётов, методичек: твёрдый и мягкий, пружина, термопереплёт.',
    tags: ['пружина', 'термо', 'твёрдый'],
    img: U('1532012197267-da84d127e765'), // книги / переплёт
  },
  {
    cat: 'materials',
    title: 'Холсты на подрамниках',
    desc: 'Готовые холсты от 20×20 до 150×200 см. Удобство, готовность к работе, стабильность, прочность, эстетичный внешний вид.',
    tags: ['20×20 — 150×200'],
    price: 'от 550 ₸',
    img: U('1513519245088-0e12902e5a38'), // холст
  },

  // ===== ОФОРМЛЕНИЕ =====
  {
    cat: 'decor',
    title: 'Оформление автотранспорта',
    desc: 'Брендирование, реклама, оклейка авто, корпоративы, маркировка служебных машин, защита внешнего вида, оклейка защитной плёнкой.',
    tags: ['оклейка', 'брендинг'],
    price: 'от 2 000 ₸',
    img: U('1583121274602-3e2820c69888'), // оклейка авто
  },
  {
    cat: 'decor',
    title: 'Оформление торговых помещений',
    desc: 'Привлекательное и функциональное оформление магазинов и бутиков: торговая площадь, склад, бутик, трибуна, спортивные мероприятия.',
    tags: ['ритейл', 'HoReCa'],
    price: 'от 3 000 ₸ / м²',
    img: U('1604719312566-8912e9227c6a'), // магазин
  },
  {
    cat: 'decor',
    title: 'Оформление детских площадок',
    desc: 'Оформление детских площадок: игровые элементы, безопасность, дизайн, монтаж конструкций для развлечений детей.',
    tags: ['детские площадки', 'безопасность'],
    price: 'от 5 000 ₸',
    img: 'https://images.unsplash.com/photo-1767943211959-e30579f0bc4a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // детская площадка
  },
  {
    cat: 'decor',
    title: 'Изготовление элементов интерьера',
    desc: 'Дизайн-проекты и изготовление декоративных элементов: панно, объёмные буквы, логотипы для офисов, ресепшен, переговорные.',
    tags: ['офис', 'ресепшн'],
    img: U('1497366216548-37526070297c'), // офис
  },
  {
    cat: 'decor',
    title: 'Световое оформление',
    desc: 'Подсветка вывесок, фасадов, входных групп и интерьеров: контурная LED, неон, объёмные световые элементы.',
    tags: ['LED', 'неон'],
    img: U('1514525253161-7a46d19cd819'), // неон
  },
  {
    cat: 'decor',
    title: 'Сборка лайтбоксов, штендеров, табличек',
    desc: 'Создание визуального инструмента, который привлекает внимание и повышает узнаваемость бренда. Гибкость в дизайне, разные размеры.',
    tags: ['до 2 м²', '2–5 м²', '5+ м²'],
    price: 'от 2 000 ₸',
    img: U('1572021335469-31706a17aaef'), // изготовление вывесок
  },
  {
    cat: 'outdoor',
    title: 'Промышленные стенды',
    desc: 'Информационные стенды: охрана труда, пожарная безопасность, средства индивидуальной защиты, спецодежда, доска почёта.',
    tags: ['ОТ', 'ПБ', 'СИЗ'],
    img: 'https://images.unsplash.com/photo-1775326824139-152a891f837f?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // производство
  },
  {
    cat: 'outdoor',
    title: 'Планы эвакуации',
    desc: 'Составление и печать планов эвакуации согласно ГОСТ — для офисов, школ, ТРЦ, производств и общественных зданий.',
    tags: ['ГОСТ', 'фотолюминесцент'],
    price: 'от 500 ₸',
    img: 'https://images.unsplash.com/photo-1551897922-6a919947ae24?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // знак / эвакуация
  },

  // ===== МАТЕРИАЛЫ =====
  {
    cat: 'materials',
    title: 'Картриджи и расходные материалы',
    desc: 'Картриджи в наличии: D 101 S, CE 310/311A/312A/313A/319, SCX-D4200A, CF-293A, CB-435, БЦФ 233A, Q 2612A, MAK CE 310A, 92A и многие другие.',
    tags: ['HP', 'Samsung', 'Canon'],
    img: 'https://images.unsplash.com/photo-1551971868-1bc03829fd98?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    cat: 'materials',
    title: 'Материалы для производства рекламы',
    desc: 'Чернила, фотобумага глянцевая/матовая, бумага «Снегурочка», ПВХ 3–5 мм, акрил, винил глянец/мат, перфовинил, бэклит, флаговая ткань.',
    tags: ['опт', 'розница'],
    price: 'от 170 ₸',
    img: 'https://images.unsplash.com/photo-1739009479186-c68c6b2e4764?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // краски
  },
  {
    cat: 'materials',
    title: 'Рулонные материалы',
    desc: 'Баннер 300 г/м, винил 200 г/м, флаговая ткань, золотой винил, винил на водной основе. Долговечность и стойкость к внешней среде.',
    tags: ['бухта', 'оптом'],
    price: 'от 30 000 ₸ / бухта',
    img: 'https://images.unsplash.com/photo-1570882676925-4d3fac25f94f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // склад / рулоны
  },
  {
    cat: 'materials',
    title: 'Лазерная резка и гравировка',
    desc: 'Резка пластика, оргстекла, акрила, фанеры, металла. Гравировка по дереву, металлу и пластику с высокой детализацией.',
    tags: ['оргстекло', 'фанера', 'металл'],
    price: 'от 30 ₸ / см²',
    img: 'https://images.unsplash.com/photo-1615378809998-afc205e73bad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // лазер
  },
  {
    cat: 'materials',
    title: 'Фрезерная резка',
    desc: 'Фигурная резка ПВХ, акрила, алюкобонда и дерева до 7 мм. Изготовление букв, табличек, элементов фасада.',
    tags: ['ПВХ', 'акрил', 'дерево'],
    price: 'от 200 ₸ / м',
    img: 'https://images.unsplash.com/photo-1772207896656-4210003d65ee?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // фрезер
  },

  // ===== ОДЕЖДА И СУВЕНИРКА =====
  {
    cat: 'print',
    title: 'Принт на одежду',
    desc: 'Цифровая, трафаретная и блочная печать на ткани: футболки, толстовки, фартуки, спецодежда, штаны, носки, кеды.',
    tags: ['DTF', 'сублимация'],
    img: U('1521572163474-6864f9cf17ab'), // футболки
  },
  {
    cat: 'print',
    title: 'Шелкография',
    desc: 'Печать оригинальных уникальных рекламных материалов методом шелкографии — стойкие краски, сочные цвета, любые материалы.',
    tags: ['эксклюзив'],
    img: 'https://images.unsplash.com/photo-1660692694114-9459092dd49f?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // шелкография
  },
  {
    cat: 'print',
    title: 'Тампопечать',
    desc: 'Печать на сувенирной продукции и сложных формах: ручки, флешки, посуда, бутылки, корпусные предметы.',
    tags: ['сувенирка', 'мелкие тиражи'],
    img: 'https://images.unsplash.com/photo-1760726744003-e82b5c1e32be?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // ручки / сувениры
  },

  // ===== ОФСЕТ И ТИПОГРАФИЯ — БОЛЬШИЕ ТИРАЖИ =====
  {
    cat: 'print',
    title: 'Офсетная печать',
    desc: 'Высокое качество, чёткие детали и насыщенные цвета при больших тиражах. Буклеты, листовки, журналы, упаковка.',
    tags: ['тираж от 500', '4×0 / 4×4'],
    price: 'от 30 ₸ / лист',
    img: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // газеты / типография
  },
  {
    cat: 'print',
    title: 'Офсетная печать (плотность 170)',
    desc: 'Экономичная печать больших тиражей. Универсальна для разных типов бумаги — от глянцевых журналов до текстурированных брошюр.',
    tags: ['плотность 170'],
    price: 'от 26,5 ₸ / лист',
    img: 'https://images.unsplash.com/photo-1729944950511-e9c71556cfd4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // станок
  },
  {
    cat: 'print',
    title: 'Типография',
    desc: 'Полный цикл типографских услуг: визитки, баннеры, плакаты, листовки, буклеты, сертификаты, меню, каталоги, ценники, этикетки.',
    tags: ['простой/сложный дизайн'],
    price: 'от 3 000 ₸',
    img: 'https://plus.unsplash.com/premium_photo-1682145459096-2f7f9aca3ba2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // типография
  },
  {
    cat: 'print',
    title: 'Штампы и печати для открыток',
    desc: 'Изготовление штампов и печатей для открыток, приглашений, сертификатов. Кастомные дизайны, высокое качество.',
    tags: ['штампы', 'печати', 'открытки'],
    price: 'от 2 000 ₸',
    img: 'https://images.unsplash.com/photo-1767025946047-ab3a761ecf4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // штампы
  },

  // ===== ДИЗАЙН — ПРОДОЛЖЕНИЕ =====
  {
    cat: 'design',
    title: 'Дизайн упаковки',
    desc: 'Разработка упаковки для продуктов: коробки, пакеты, этикетки, наклейки, корпоративный мерч.',
    tags: ['dieline', 'mockup'],
    price: 'от 5 000 ₸',
    img: U('1607344645866-009c320b63e0'), // упаковка
  },
  {
    cat: 'design',
    title: 'Дизайн меню',
    desc: 'Меню для кафе, ресторанов и баров — печатное и QR. Собираем стиль, фотографии, верстаем.',
    tags: ['HoReCa', 'QR'],
    price: 'от 10 000 ₸',
    img: U('1414235077428-338989a2e8c0'), // меню в кафе
  },
  {
    cat: 'design',
    title: 'Веб-дизайн',
    desc: 'Дизайн сайтов и лендингов, отрисовка макетов под разработчиков, адаптивы.',
    tags: ['Figma', 'UX/UI'],
    price: 'от 10 000 ₸',
    img: U('1559028012-481c04fa702d'), // макет в Figma
  },
  {
    cat: 'design',
    title: 'Дизайн Instagram',
    desc: 'Шаблоны постов, сторис, обложки highlights, оформление шапки и аватара под фирменный стиль.',
    tags: ['SMM', 'шаблоны'],
    price: 'от 10 000 ₸',
    img: U('1611162617213-7d7a39e9b1d7'), // телефон / Instagram
  },
  {
    cat: 'design',
    title: 'Векторные иллюстрации',
    desc: 'Иллюстрации для упаковки, печати, веба и соцсетей. Любая стилистика и сложность.',
    tags: ['вектор', 'illustrator'],
    price: 'от 10 000 ₸',
    img: 'https://images.unsplash.com/photo-1657584905470-ac4ef76ee2b4?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // иллюстрация
  },
  {
    cat: 'design',
    title: 'Оформление презентаций',
    desc: 'Презентации для бизнеса, инвесторов и тендеров. Чёткая структура, инфографика, фирменный стиль.',
    tags: ['PPT', 'Keynote'],
    price: 'от 5 000 ₸',
    img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // презентация
  },
  {
    cat: 'design',
    title: '3D-моделирование и визуализация',
    desc: '3D-модели объектов, упаковки, интерьеров, рекламных конструкций. Рендеры для презентаций и согласований.',
    tags: ['3D', 'рендер'],
    price: 'от 7 200 ₸',
    img: 'https://images.unsplash.com/photo-1647320293733-92affa4fa39c?q=80&w=1214&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // 3D / геометрия
  },
  {
    cat: 'design',
    title: 'Motion design',
    desc: 'Создание анимации, которая делает визуализацию данных увлекательной: интернет, медиа, ТВ, кино, мобильные приложения, игры.',
    tags: ['анимация', 'VFX'],
    price: 'от 20 000 ₸',
    img: 'https://images.unsplash.com/photo-1676238560626-45d35b63b38f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // монтажная студия
  },

  // ===== ОФОРМЛЕНИЕ — РЕДКОЕ =====

  {
    cat: 'decor',
    title: 'Оформление выставок и мероприятий',
    desc: 'Растяжки, стенды, баннеры, навигация, презентационные зоны для выставок, конференций и корпоративов.',
    tags: ['ивент', 'pop-up'],
    img: U('1540575467063-178a50c2df87'), // конференция
  },

  // ===== DIGITAL =====
  {
    cat: 'digital',
    title: 'SMM-продвижение',
    desc: 'Ведение Instagram, TikTok, YouTube, Pinterest, Discord. Контент-план, съёмка, посты, сторис, привлечение аудитории, рост лояльности и продаж.',
    tags: ['Instagram', 'TikTok', 'YouTube'],
    img: U('1611605698335-8b1569810432'), // соцсети / телефон
  },
  {
    cat: 'digital',
    title: 'Мобилограф / фото и видео',
    desc: 'Креативное фото и видео на iPhone и зеркальную камеру. Съёмка для соцсетей, портфолио, фотосессии беременных, в студии, групповые. Видеомонтаж.',
    tags: ['моб. съёмка', 'видеомонтаж'],
    price: 'от 7 000 ₸ / час',
    img: U('1502920917128-1aa500764cbd'), // фотограф
  },
  {
    cat: 'digital',
    title: 'Целевая и контекстная реклама',
    desc: 'Использование данных о поведении и предпочтениях для персонализированной рекламы. Размещение в контексте тем и страниц.',
    tags: ['Google Ads', 'Яндекс'],
    img: U('1551434678-e076c223a692'), // реклама / ноутбук
  },
  {
    cat: 'digital',
    title: 'Таргетированная реклама',
    desc: 'Продвижение через Facebook, Instagram, TikTok с настройкой по интересам, гео, возрасту и поведению.',
    tags: ['Meta', 'TikTok Ads'],
    img: U('1611926653458-09294b3142bf'), // таргет / телефон
  },
  {
    cat: 'digital',
    title: 'Email-маркетинг',
    desc: 'Рассылки рекламных материалов и новостей. Эффективны для удержания клиентов и привлечения новых.',
    tags: ['рассылка', 'CRM'],
    img: U('1526628953301-3e589a6a8b74'), // email
  },
  {
    cat: 'digital',
    title: 'Influencer-маркетинг',
    desc: 'Сотрудничество с лидерами мнений для продвижения продуктов или услуг. Повышение доверия и охвата.',
    tags: ['блогеры', 'инфлюенсеры'],
    img: U('1492691527719-9d1e07e534b4'), // блогер
  },
  {
    cat: 'digital',
    title: 'Промо-акции и скидки',
    desc: 'Разработка и проведение акций, спецпредложений, конкурсов. Стимулируют покупки и привлекают новых клиентов.',
    tags: ['акции', 'конкурсы'],
    img: U('1607082348824-0a96f2a4b9da'), // sale / акции
  },
  {
    cat: 'digital',
    title: 'Аналитика и оптимизация',
    desc: 'Использование аналитических инструментов для отслеживания эффективности кампаний и повышения рентабельности инвестиций.',
    tags: ['GA4', 'дашборды'],
    img: U('1551288049-bebda4e38f71'), // дашборды
  },

  // ===== РЕДКОЕ — В САМОМ КОНЦЕ =====
  {
    cat: 'service',
    title: 'Аренда электроинструмента',
    desc: 'Прокат шуруповёртов, перфораторов, болгарок, лобзиков, дрелей, циркулярок, сабельных пил DeWalt, Bosch, Milwaukee, Ryobi.',
    tags: ['прокат', 'инструмент'],
    img: U('1581244277943-fe4a9c777189'), // инструмент
  },
  {
    cat: 'service',
    title: 'Скупка б/у электроники',
    desc: 'Старые телефоны, компьютеры, телевизоры, бытовая техника, фотоаппараты — оценка и выкуп на месте.',
    tags: ['скупка', 'обмен'],
    img: U('1496181133206-80ce9b88a853'), // старые телефоны
  },
 
];
// ============================================
// Render service cards
// ============================================
function waLink(serviceTitle) {
  const text = `Здравствуйте! Меня интересует услуга: ${serviceTitle}. Подскажите по стоимости и срокам.`;
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
}

// Запасная картинка — не требует сети (SVG в data URI с золотом и текстом).
function fallbackSvg(title) {
  const safe = String(title || '').replace(/[<>&]/g, '').slice(0, 40);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#0a0a0c'/>
        <stop offset='1' stop-color='#17171b'/>
      </linearGradient>
    </defs>
    <rect width='600' height='400' fill='url(#g)'/>
    <rect x='12' y='12' width='576' height='376' fill='none' stroke='#d4a017' stroke-width='2' rx='8'/>
    <text x='300' y='190' text-anchor='middle' font-family='Segoe UI, Arial, sans-serif' font-size='44' font-weight='800' fill='#f2c94c'>PA</text>
    <text x='300' y='240' text-anchor='middle' font-family='Segoe UI, Arial, sans-serif' font-size='18' fill='#e9e6df'>${safe}</text>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

const WA_SVG = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M20.5 3.5A11 11 0 0 0 3.6 17.3L2 22l4.8-1.6A11 11 0 1 0 20.5 3.5Zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.9 1 1-2.8-.2-.3A9 9 0 1 1 12 20.5Zm5-6.7c-.3-.1-1.6-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5 0-.2 0-.4 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.2.2 2 3.2 4.9 4.4.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.3-.1-.1-.3-.2-.6-.3Z"/></svg>';

function renderCards(list) {
  const grid = document.getElementById('grid');
  const empty = document.getElementById('empty');

  grid.innerHTML = list.map(s => `
    <article class="card" data-cat="${s.cat}">
      <div class="card-img">
        <img src="${s.img}" alt="${s.title}" loading="lazy"
             onerror="this.onerror=null;this.src='${fallbackSvg(s.title)}'">
      </div>
      <div class="card-body">
        <div class="card-cat">${CATEGORIES[s.cat]?.label || ''}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        ${s.tags ? `<div class="card-tags">${s.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>` : ''}
        ${s.price ? `<div class="card-price"><strong>${s.price}</strong></div>` : ''}
        <a class="wa-btn" href="${waLink(s.title)}" target="_blank" rel="noopener">
          ${WA_SVG}
          Написать в WhatsApp
        </a>
      </div>
    </article>
  `).join('');

  empty.hidden = list.length !== 0;
}

// ============================================
// Filters: category + search
// ============================================
let activeCat = 'all';
let activeQuery = '';

function applyFilters() {
  const q = activeQuery.trim().toLowerCase();
  const filtered = SERVICES.filter(s => {
    const catOk = activeCat === 'all' || s.cat === activeCat;
    if (!catOk) return false;
    if (!q) return true;
    const hay = (s.title + ' ' + s.desc + ' ' + (s.tags || []).join(' ')).toLowerCase();
    return hay.includes(q);
  });
  renderCards(filtered);
}

document.getElementById('chips').addEventListener('click', (e) => {
  const btn = e.target.closest('.chip');
  if (!btn) return;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  activeCat = btn.dataset.cat;
  applyFilters();
});

document.getElementById('search').addEventListener('input', (e) => {
  activeQuery = e.target.value;
  applyFilters();
});

// ============================================
// Price tabs
// ============================================
document.getElementById('price-tabs').addEventListener('click', (e) => {
  const btn = e.target.closest('.price-tab');
  if (!btn) return;
  const tab = btn.dataset.tab;
  document.querySelectorAll('.price-tab').forEach(t => t.classList.toggle('active', t === btn));
  document.querySelectorAll('.price-pane').forEach(p => p.classList.toggle('active', p.dataset.pane === tab));
});

// ============================================
// Route buttons (link out to maps)
// ============================================
document.querySelectorAll('[data-route="google"]').forEach(a => a.href = ROUTE_GOOGLE);
document.querySelectorAll('[data-route="yandex"]').forEach(a => a.href = ROUTE_YANDEX);
document.querySelectorAll('[data-route="2gis"]').forEach(a => a.href = ROUTE_2GIS);

// ============================================
// Footer year
// ============================================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================
// Initial render
// ============================================
applyFilters();
