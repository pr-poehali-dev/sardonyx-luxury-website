import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white font-body">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="font-heading text-2xl font-bold text-primary">
              SARDONYX
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => setActiveSection('home')}
                className={`font-medium transition-colors ${
                  activeSection === 'home' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveSection('about')}
                className={`font-medium transition-colors ${
                  activeSection === 'about' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                О нас
              </button>
            </div>
            <Button variant="outline" className="hidden md:block border-primary text-primary hover:bg-primary hover:text-white">
              Связаться
            </Button>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </nav>
        </div>
      </header>

      {/* Home Section */}
      {activeSection === 'home' && (
        <>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(139,0,0,0.3)), url('img/f839a6d6-a59e-490d-aad7-6a43e0e5475e.jpg')`
              }}
            />
            <div className="relative z-10 text-center text-white px-6">
              <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                SARDONYX
              </h1>
              <p className="text-xl md:text-2xl mb-4 opacity-90 animate-fade-in">
                Элитные путешествия по Швейцарии
              </p>
              <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto animate-fade-in">
                Откройте для себя роскошь швейцарских Альп с персональным сервисом высочайшего уровня
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-burgundy-600 text-white px-8 py-4 text-lg animate-scale-in"
              >
                Планировать путешествие
              </Button>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 px-6">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
                  Наши услуги
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Каждая деталь продумана для создания незабываемого опыта
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-xl transition-shadow duration-300 hover-scale">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mb-6">
                      <Icon name="Mountain" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-4">Горнолыжные туры</h3>
                    <p className="text-gray-600">
                      Эксклюзивный доступ к лучшим склонам швейцарских курортов с персональными инструкторами
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-xl transition-shadow duration-300 hover-scale">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-crimson-100 rounded-full flex items-center justify-center mb-6">
                      <Icon name="Hotel" size={32} className="text-secondary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-4">Премиум размещение</h3>
                    <p className="text-gray-600">
                      Роскошные отели и частные шале с безупречным сервисом и панорамными видами
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-xl transition-shadow duration-300 hover-scale">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mb-6">
                      <Icon name="Car" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-4">VIP трансфер</h3>
                    <p className="text-gray-600">
                      Комфортные трансферы на премиальных автомобилях и вертолетах
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Destinations Section */}
          <section className="py-20 bg-gray-50 px-6">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
                  Направления
                </h2>
                <p className="text-xl text-gray-600">
                  Самые престижные курорты Швейцарии
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { name: 'Церматт', description: 'Легендарный курорт у подножия Маттерхорна' },
                  { name: 'Санкт-Мориц', description: 'Элитный курорт с богатой историей' },
                  { name: 'Вербье', description: 'Современный курорт с отличными склонами' },
                  { name: 'Гштаад', description: 'Изысканный альпийский курорт' },
                  { name: 'Кран-Монтана', description: 'Солнечное плато с прекрасными видами' },
                  { name: 'Давос', description: 'Высокогорный курорт мирового класса' }
                ].map((destination, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover-scale">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-lg font-semibold mb-2 text-primary">
                        {destination.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {destination.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary text-white px-6">
            <div className="container mx-auto text-center">
              <h2 className="font-heading text-4xl font-bold mb-6">
                Готовы к незабываемому путешествию?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Позвольте нам создать для вас идеальное швейцарское приключение
              </p>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </section>
        </>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <>
          {/* About Hero */}
          <section className="pt-32 pb-20 px-6">
            <div className="container mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-heading text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
                  О компании SARDONYX
                </h1>
                <p className="text-xl text-gray-600 mb-12 animate-fade-in">
                  Более 15 лет мы создаем исключительные путешествия по швейцарским Альпам
                </p>
              </div>
            </div>
          </section>

          {/* Company Story */}
          <section className="py-20 px-6">
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="font-heading text-3xl font-bold mb-6 text-gray-900">
                    Наша история
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    SARDONYX была основана в 2008 году группой энтузиастов, влюбленных в красоту 
                    швейцарских Альп. Мы начинали как небольшое семейное агентство и выросли в 
                    признанного лидера элитного туризма в Швейцарии.
                  </p>
                  <p className="text-lg text-gray-600 mb-8">
                    Наша миссия — предоставлять нашим клиентам не просто путешествия, а уникальные 
                    эмоциональные переживания, которые останутся в памяти на всю жизнь.
                  </p>
                  <div className="grid grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">500+</div>
                      <div className="text-sm text-gray-600">Довольных клиентов</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">15</div>
                      <div className="text-sm text-gray-600">Лет опыта</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">25</div>
                      <div className="text-sm text-gray-600">Направлений</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="img/81743178-ab90-43a9-83ea-071756077424.jpg"
                    alt="Luxury Swiss Resort"
                    className="rounded-lg shadow-xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-20 bg-gray-50 px-6">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
                  Наши ценности
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon name="Crown" size={32} className="text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-4">Эксклюзивность</h3>
                    <p className="text-gray-600">
                      Мы предлагаем уникальные возможности, недоступные обычным туристам
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon name="Heart" size={32} className="text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-4">Персональный подход</h3>
                    <p className="text-gray-600">
                      Каждое путешествие создается индивидуально под ваши предпочтения
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon name="Award" size={32} className="text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-4">Качество</h3>
                    <p className="text-gray-600">
                      Безупречное качество услуг на каждом этапе вашего путешествия
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Team */}
          <section className="py-20 px-6">
            <div className="container mx-auto">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
                  Наша команда
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                  Опытные профессионалы с глубоким знанием швейцарской культуры и традиций гостеприимства. 
                  Каждый член нашей команды — эксперт в своей области, готовый воплотить ваши мечты о 
                  совершенном отдыхе в реальность.
                </p>
                <Button size="lg" className="bg-primary hover:bg-burgundy-600">
                  <Icon name="Users" size={20} className="mr-2" />
                  Познакомиться с командой
                </Button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-heading text-2xl font-bold mb-4 text-primary">
                SARDONYX
              </div>
              <p className="text-gray-400 mb-4">
                Элитные путешествия по Швейцарии с 2008 года
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="p-2">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="p-2">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="p-2">
                  <Icon name="Mail" size={20} />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Горнолыжные туры</li>
                <li>Премиум размещение</li>
                <li>VIP трансфер</li>
                <li>Гастрономические туры</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Направления</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Церматт</li>
                <li>Санкт-Мориц</li>
                <li>Вербье</li>
                <li>Гштаад</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +41 44 123 45 67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@sardonyx.ch
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Zürich, Switzerland
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SARDONYX. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;