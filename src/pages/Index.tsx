import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      title: "Классический бокс",
      description: "Техника, сила, выносливость. Тренировки для всех уровней подготовки.",
      icon: "Zap",
      price: "от 2000₽/месяц"
    },
    {
      title: "Тайский бокс",
      description: "Искусство восьми конечностей. Работа руками, ногами, локтями и коленями.",
      icon: "Target",
      price: "от 2500₽/месяц"
    },
    {
      title: "Персональные тренировки",
      description: "Индивидуальный подход. Персональный тренер поможет достичь целей быстрее.",
      icon: "User",
      price: "от 3000₽/занятие"
    },
  ];

  const schedule = [
    { time: "07:00 - 08:30", type: "Утренняя группа", level: "Все уровни", trainer: "Алексей М." },
    { time: "18:00 - 19:30", type: "Классический бокс", level: "Начинающие", trainer: "Дмитрий К." },
    { time: "19:30 - 21:00", type: "Тайский бокс", level: "Продвинутые", trainer: "Сергей Р." },
    { time: "21:00 - 22:30", type: "Спарринги", level: "Опытные", trainer: "Михаил Л." },
  ];

  const programs = [
    {
      level: "Новичок",
      description: "Изучение базовой техники, развитие координации, общая физическая подготовка",
      duration: "2-3 месяца",
      intensity: "Низкая"
    },
    {
      level: "Любитель",
      description: "Отработка комбинаций, работа на лапах, легкие спарринги",
      duration: "6-12 месяцев",
      intensity: "Средняя"
    },
    {
      level: "Профи",
      description: "Интенсивные тренировки, тяжелые спарринги, подготовка к соревнованиям",
      duration: "Постоянно",
      intensity: "Высокая"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={32} className="text-boxing-red" />
              <h1 className="text-2xl font-oswald font-bold text-boxing-white">FIGHT CLUB</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-boxing-red transition-colors">Главная</a>
              <a href="#services" className="hover:text-boxing-red transition-colors">Услуги</a>
              <a href="#schedule" className="hover:text-boxing-red transition-colors">Расписание</a>
              <a href="#rental" className="hover:text-boxing-red transition-colors">Аренда</a>
              <a href="#gallery" className="hover:text-boxing-red transition-colors">Галерея</a>
              <a href="#contacts" className="hover:text-boxing-red transition-colors">Контакты</a>
            </div>
            <Button className="bg-boxing-red hover:bg-red-700 text-white">
              Записаться
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/img/64b8f310-8fbd-47db-8f67-1bd1864dfadb.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 text-center space-y-6 max-w-4xl px-4">
          <h1 className="text-6xl md:text-8xl font-oswald font-bold text-boxing-white leading-tight">
            СТАНЬ
            <span className="block text-boxing-red">СИЛЬНЕЕ</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Профессиональный боксерский зал для настоящих бойцов. 
            Тренировки, спарринги, аренда зала.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-boxing-red hover:bg-red-700 text-white text-lg px-8 py-4">
              <Icon name="Play" size={20} className="mr-2" />
              Начать тренировки
            </Button>
            <Button size="lg" variant="outline" className="border-boxing-white text-boxing-white hover:bg-boxing-white hover:text-boxing-black text-lg px-8 py-4">
              <Icon name="Calendar" size={20} className="mr-2" />
              Посмотреть расписание
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-boxing-gray">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-boxing-white">
              УСЛУГИ ЗАЛА
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Полный спектр услуг для развития боевых навыков
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-boxing-red transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-boxing-red rounded-full flex items-center justify-center">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-oswald text-boxing-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-400">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-boxing-red mb-4">{service.price}</div>
                  <Button className="w-full bg-boxing-red hover:bg-red-700 text-white">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-boxing-white">
              ПРОГРАММЫ ТРЕНИРОВОК
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              От новичка до профессионала - программа для каждого уровня
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-oswald text-boxing-white">{program.level}</CardTitle>
                    <Badge variant={program.intensity === 'Высокая' ? 'destructive' : program.intensity === 'Средняя' ? 'default' : 'secondary'}>
                      {program.intensity}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-400">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Длительность:</span>
                      <span className="text-boxing-red font-semibold">{program.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-boxing-gray">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-boxing-white">
              РАСПИСАНИЕ
            </h2>
            <p className="text-gray-400 text-lg">
              Ежедневные тренировки для всех уровней подготовки
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-oswald text-boxing-white text-center">
                  Понедельник - Пятница
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {schedule.map((session, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-secondary rounded-lg border border-border">
                      <div className="flex items-center space-x-4">
                        <div className="text-boxing-red font-bold text-lg">{session.time}</div>
                        <div>
                          <div className="font-semibold text-boxing-white">{session.type}</div>
                          <div className="text-sm text-gray-400">{session.trainer}</div>
                        </div>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0 border-boxing-red text-boxing-red">
                        {session.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rental Section */}
      <section id="rental" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-oswald font-bold text-boxing-white mb-6">
                АРЕНДА ЗАЛА
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Профессиональное оборудование и просторное помещение для ваших тренировок. 
                Идеально для персональных занятий, групповых тренировок или проведения мероприятий.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <Icon name="Clock" size={24} className="text-boxing-red" />
                  <div>
                    <div className="font-semibold text-boxing-white">Почасовая аренда</div>
                    <div className="text-gray-400">1500₽/час</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Calendar" size={24} className="text-boxing-red" />
                  <div>
                    <div className="font-semibold text-boxing-white">Полный день</div>
                    <div className="text-gray-400">10000₽/день</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Users" size={24} className="text-boxing-red" />
                  <div>
                    <div className="font-semibold text-boxing-white">Групповые занятия</div>
                    <div className="text-gray-400">До 20 человек</div>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="bg-boxing-red hover:bg-red-700 text-white">
                <Icon name="Phone" size={20} className="mr-2" />
                Забронировать
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="/img/a779b202-9b7b-41c3-a31e-762a8e36baac.jpg" 
                alt="Боксерское оборудование" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-boxing-red/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-boxing-gray">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-boxing-white">
              ГАЛЕРЕЯ
            </h2>
            <p className="text-gray-400 text-lg">
              Атмосфера настоящего боксерского зала
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="/img/64b8f310-8fbd-47db-8f67-1bd1864dfadb.jpg" 
                alt="Боксерский ринг" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Профессиональный ринг</span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="/img/f3d9909c-4fc5-428a-b97a-1cff2db73015.jpg" 
                alt="Тренировка" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Тренировочный процесс</span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg md:col-span-2 lg:col-span-1">
              <img 
                src="/img/a779b202-9b7b-41c3-a31e-762a8e36baac.jpg" 
                alt="Оборудование" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Профессиональное оборудование</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-boxing-white">
              КОНТАКТЫ
            </h2>
            <p className="text-gray-400 text-lg">
              Приходите на первую бесплатную тренировку
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Icon name="MapPin" size={24} className="text-boxing-red mt-1" />
                <div>
                  <h3 className="font-semibold text-boxing-white mb-2">Адрес зала</h3>
                  <p className="text-gray-400">
                    г. Москва, ул. Боксерская, 15<br />
                    Метро "Спортивная", 2 минуты пешком
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Icon name="Phone" size={24} className="text-boxing-red mt-1" />
                <div>
                  <h3 className="font-semibold text-boxing-white mb-2">Телефон</h3>
                  <p className="text-gray-400">
                    +7 (495) 123-45-67<br />
                    +7 (916) 987-65-43
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Icon name="Clock" size={24} className="text-boxing-red mt-1" />
                <div>
                  <h3 className="font-semibold text-boxing-white mb-2">Режим работы</h3>
                  <p className="text-gray-400">
                    Пн-Пт: 07:00 - 23:00<br />
                    Сб-Вс: 09:00 - 21:00
                  </p>
                </div>
              </div>
            </div>
            
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-oswald text-boxing-white">Записаться на тренировку</CardTitle>
                <CardDescription className="text-gray-400">
                  Первое занятие - бесплатно!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button size="lg" className="w-full bg-boxing-red hover:bg-red-700 text-white">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить сейчас
                </Button>
                <Button size="lg" variant="outline" className="w-full border-boxing-red text-boxing-red hover:bg-boxing-red hover:text-white">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в Telegram
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-boxing-gray">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Zap" size={24} className="text-boxing-red" />
              <span className="font-oswald font-bold text-boxing-white">FIGHT CLUB</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Fight Club. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}