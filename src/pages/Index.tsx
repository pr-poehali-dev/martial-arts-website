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
      <header className="border-b border-border backdrop-blur-md bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={32} className="text-boxing-blue animate-pulse" />
              <h1 className="text-2xl font-oswald font-bold text-white">FIGHT CLUB</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-boxing-blue transition-all duration-300 hover:scale-110 relative group">
                Главная
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-boxing-blue transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a href="#services" className="hover:text-boxing-orange transition-all duration-300 hover:scale-110 relative group">
                Услуги
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-boxing-orange transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a href="#schedule" className="hover:text-boxing-green transition-all duration-300 hover:scale-110 relative group">
                Расписание
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-boxing-green transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a href="#rental" className="hover:text-boxing-purple transition-all duration-300 hover:scale-110 relative group">
                Аренда
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-boxing-purple transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a href="#gallery" className="hover:text-boxing-yellow transition-all duration-300 hover:scale-110 relative group">
                Галерея
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-boxing-yellow transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a href="#contacts" className="hover:text-boxing-pink transition-all duration-300 hover:scale-110 relative group">
                Контакты
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-boxing-pink transition-all duration-300 group-hover:w-full"></div>
              </a>
            </div>
            <Button className="bg-gradient-to-r from-boxing-blue to-boxing-purple hover:from-boxing-purple hover:to-boxing-blue text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
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
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-boxing-blue rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-boxing-orange rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-boxing-green rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-boxing-purple rounded-full animate-ping"></div>
        </div>
        
        <div className="relative z-10 text-center space-y-6 max-w-4xl px-4">
          <h1 className="text-6xl md:text-8xl font-oswald font-bold text-white leading-tight animate-fade-in">
            СТАНЬ
            <span className="block bg-gradient-to-r from-boxing-orange via-boxing-blue to-boxing-green bg-clip-text text-transparent animate-pulse">
              СИЛЬНЕЕ
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto animate-fade-in">
            Профессиональный боксерский зал для настоящих бойцов. 
            Тренировки, спарринги, аренда зала.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-boxing-orange to-boxing-blue hover:from-boxing-blue hover:to-boxing-green text-white text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <Icon name="Play" size={20} className="mr-2" />
              Начать тренировки
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-boxing-green text-white hover:bg-boxing-green hover:text-white text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <Icon name="Calendar" size={20} className="mr-2" />
              Посмотреть расписание
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'}}>
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-boxing-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-boxing-orange rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-boxing-green rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold bg-gradient-to-r from-boxing-blue to-boxing-purple bg-clip-text text-transparent">
              УСЛУГИ ЗАЛА
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Полный спектр услуг для развития боевых навыков
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card/90 backdrop-blur-sm border-2 border-transparent hover:border-boxing-blue transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-boxing-blue/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-boxing-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="text-center relative z-10">
                  <div className={`mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                    index === 0 ? 'bg-gradient-to-r from-boxing-orange to-boxing-blue' :
                    index === 1 ? 'bg-gradient-to-r from-boxing-green to-boxing-purple' :
                    'bg-gradient-to-r from-boxing-pink to-boxing-yellow'
                  } group-hover:animate-pulse group-hover:scale-110`}>
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-oswald text-white group-hover:text-boxing-blue transition-colors duration-300">{service.title}</CardTitle>
                  <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <div className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    index === 0 ? 'text-boxing-orange group-hover:text-boxing-blue' :
                    index === 1 ? 'text-boxing-green group-hover:text-boxing-purple' :
                    'text-boxing-pink group-hover:text-boxing-yellow'
                  }`}>{service.price}</div>
                  <Button className={`w-full text-white transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                    index === 0 ? 'bg-gradient-to-r from-boxing-orange to-boxing-blue hover:from-boxing-blue hover:to-boxing-orange' :
                    index === 1 ? 'bg-gradient-to-r from-boxing-green to-boxing-purple hover:from-boxing-purple hover:to-boxing-green' :
                    'bg-gradient-to-r from-boxing-pink to-boxing-yellow hover:from-boxing-yellow hover:to-boxing-pink'
                  }`}>
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-28 h-28 bg-boxing-green rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-20 w-36 h-36 bg-boxing-purple rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold bg-gradient-to-r from-boxing-green to-boxing-blue bg-clip-text text-transparent">
              ПРОГРАММЫ ТРЕНИРОВОК
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              От новичка до профессионала - программа для каждого уровня
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="bg-card/90 backdrop-blur-sm border-border hover:border-boxing-green/50 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-oswald text-white group-hover:text-boxing-green transition-colors duration-300">{program.level}</CardTitle>
                    <Badge variant={program.intensity === 'Высокая' ? 'destructive' : program.intensity === 'Средняя' ? 'default' : 'secondary'} 
                           className="transition-all duration-300 group-hover:scale-110">
                      {program.intensity}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Длительность:</span>
                      <span className={`font-semibold transition-colors duration-300 ${
                        index === 0 ? 'text-boxing-green group-hover:text-boxing-blue' :
                        index === 1 ? 'text-boxing-blue group-hover:text-boxing-purple' :
                        'text-boxing-orange group-hover:text-boxing-pink'
                      }`}>{program.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 relative" style={{background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'}}>
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold bg-gradient-to-r from-boxing-yellow to-boxing-orange bg-clip-text text-transparent">
              РАСПИСАНИЕ
            </h2>
            <p className="text-gray-400 text-lg">
              Ежедневные тренировки для всех уровней подготовки
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/90 backdrop-blur-sm border-border shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-oswald text-white text-center">
                  Понедельник - Пятница
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {schedule.map((session, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-secondary/80 backdrop-blur-sm rounded-lg border border-border hover:border-boxing-blue/50 transition-all duration-300 group hover:scale-102">
                      <div className="flex items-center space-x-4">
                        <div className={`font-bold text-lg transition-colors duration-300 ${
                          index % 4 === 0 ? 'text-boxing-blue' :
                          index % 4 === 1 ? 'text-boxing-orange' :
                          index % 4 === 2 ? 'text-boxing-green' :
                          'text-boxing-purple'
                        }`}>{session.time}</div>
                        <div>
                          <div className="font-semibold text-white group-hover:text-boxing-blue transition-colors duration-300">{session.type}</div>
                          <div className="text-sm text-gray-400">{session.trainer}</div>
                        </div>
                      </div>
                      <Badge variant="outline" className={`mt-2 md:mt-0 transition-all duration-300 ${
                        index % 4 === 0 ? 'border-boxing-blue text-boxing-blue' :
                        index % 4 === 1 ? 'border-boxing-orange text-boxing-orange' :
                        index % 4 === 2 ? 'border-boxing-green text-boxing-green' :
                        'border-boxing-purple text-boxing-purple'
                      }`}>
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
      <section id="rental" className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-oswald font-bold bg-gradient-to-r from-boxing-purple to-boxing-pink bg-clip-text text-transparent mb-6">
                АРЕНДА ЗАЛА
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Профессиональное оборудование и просторное помещение для ваших тренировок. 
                Идеально для персональных занятий, групповых тренировок или проведения мероприятий.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                  <Icon name="Clock" size={24} className="text-boxing-blue group-hover:text-boxing-purple transition-colors duration-300" />
                  <div>
                    <div className="font-semibold text-white">Почасовая аренда</div>
                    <div className="text-gray-400">1500₽/час</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                  <Icon name="Calendar" size={24} className="text-boxing-green group-hover:text-boxing-yellow transition-colors duration-300" />
                  <div>
                    <div className="font-semibold text-white">Полный день</div>
                    <div className="text-gray-400">10000₽/день</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                  <Icon name="Users" size={24} className="text-boxing-orange group-hover:text-boxing-pink transition-colors duration-300" />
                  <div>
                    <div className="font-semibold text-white">Групповые занятия</div>
                    <div className="text-gray-400">До 20 человек</div>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="bg-gradient-to-r from-boxing-purple to-boxing-pink hover:from-boxing-pink hover:to-boxing-purple text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Icon name="Phone" size={20} className="mr-2" />
                Забронировать
              </Button>
            </div>
            
            <div className="relative group">
              <img 
                src="/img/a779b202-9b7b-41c3-a31e-762a8e36baac.jpg" 
                alt="Боксерское оборудование" 
                className="rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-boxing-purple/20 to-boxing-pink/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 relative" style={{background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'}}>
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold bg-gradient-to-r from-boxing-pink to-boxing-yellow bg-clip-text text-transparent">
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
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-boxing-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <span className="text-white font-semibold text-lg p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Профессиональный ринг</span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="/img/f3d9909c-4fc5-428a-b97a-1cff2db73015.jpg" 
                alt="Тренировка" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-boxing-orange/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <span className="text-white font-semibold text-lg p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Тренировочный процесс</span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg md:col-span-2 lg:col-span-1">
              <img 
                src="/img/a779b202-9b7b-41c3-a31e-762a8e36baac.jpg" 
                alt="Оборудование" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-boxing-green/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <span className="text-white font-semibold text-lg p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Профессиональное оборудование</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold bg-gradient-to-r from-boxing-blue to-boxing-green bg-clip-text text-transparent">
              КОНТАКТЫ
            </h2>
            <p className="text-gray-400 text-lg">
              Приходите на первую бесплатную тренировку
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                <Icon name="MapPin" size={24} className="text-boxing-blue mt-1 group-hover:text-boxing-green transition-colors duration-300" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Адрес зала</h3>
                  <p className="text-gray-400">
                    г. Москва, ул. Боксерская, 15<br />
                    Метро "Спортивная", 2 минуты пешком
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                <Icon name="Phone" size={24} className="text-boxing-orange mt-1 group-hover:text-boxing-yellow transition-colors duration-300" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Телефон</h3>
                  <p className="text-gray-400">
                    +7 (495) 123-45-67<br />
                    +7 (916) 987-65-43
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                <Icon name="Clock" size={24} className="text-boxing-purple mt-1 group-hover:text-boxing-pink transition-colors duration-300" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Режим работы</h3>
                  <p className="text-gray-400">
                    Пн-Пт: 07:00 - 23:00<br />
                    Сб-Вс: 09:00 - 21:00
                  </p>
                </div>
              </div>
            </div>
            
            <Card className="bg-card/90 backdrop-blur-sm border-border hover:border-boxing-blue/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <CardTitle className="text-xl font-oswald text-white">Записаться на тренировку</CardTitle>
                <CardDescription className="text-gray-400">
                  Первое занятие - бесплатно!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button size="lg" className="w-full bg-gradient-to-r from-boxing-blue to-boxing-green hover:from-boxing-green hover:to-boxing-blue text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить сейчас
                </Button>
                <Button size="lg" variant="outline" className="w-full border-2 border-boxing-purple text-boxing-purple hover:bg-boxing-purple hover:text-white transform hover:scale-105 transition-all duration-300">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в Telegram
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 relative" style={{background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'}}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Zap" size={24} className="text-boxing-blue animate-pulse" />
              <span className="font-oswald font-bold text-white">FIGHT CLUB</span>
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