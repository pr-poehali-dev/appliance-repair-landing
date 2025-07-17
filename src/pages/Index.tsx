import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    appliance: '',
    description: ''
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen mesh-gradient overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 ultra-glassmorphism">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-dark-text">
            <span className="text-gradient-premium">Эвон</span>
            <span className="font-light">Сервис</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-dark-text hover:text-lime-primary transition-all duration-300 magnetic-hover">Услуги</a>
            <a href="#about" className="text-dark-text hover:text-lime-primary transition-all duration-300 magnetic-hover">О нас</a>
            <a href="#contact" className="text-dark-text hover:text-lime-primary transition-all duration-300 magnetic-hover">Контакты</a>
          </div>
          <button className="premium-button px-6 py-3 text-white font-medium">
            <Icon name="Phone" size={16} className="mr-2" />
            Вызвать мастера
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-lime-primary/10 rounded-full text-lime-primary font-medium text-sm mb-6">
                ✨ Премиум сервис в Эвон, Кверти
              </span>
            </div>
            
            <h1 className="hero-text text-dark-text mb-8">
              Когда техника<br />
              <span className="text-gradient-premium">забывает</span><br />
              <span className="text-gradient-premium">работать</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-dark-text-alt mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Мы возвращаем к жизни бытовую технику с той же элегантностью, 
              с которой создают произведения искусства
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="premium-button px-10 py-5 text-white text-lg font-medium">
                <Icon name="Wrench" size={24} className="mr-3" />
                Диагностика за 15 минут
              </button>
              <button className="gradient-border px-10 py-5 text-dark-text text-lg font-medium hover:scale-105 transition-transform duration-300">
                <Icon name="Play" size={24} className="mr-3" />
                Посмотреть работу
              </button>
            </div>
          </div>
          
          {/* 3D Floating Elements */}
          <div className="relative">
            <div className="floating-3d">
              <img 
                src="/img/5401fc66-6556-4a00-a24c-074ee9860039.jpg" 
                alt="Современная бытовая техника" 
                className="mx-auto max-w-4xl w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Floating UI Elements */}
            <div 
              className="absolute top-10 left-10 w-20 h-20 ultra-glassmorphism rounded-full flex items-center justify-center floating-3d"
              style={{
                transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
                animation: 'float3d 6s ease-in-out infinite'
              }}
            >
              <Icon name="Zap" size={32} className="text-lime-primary" />
            </div>
            
            <div 
              className="absolute top-20 right-20 w-16 h-16 ultra-glassmorphism rounded-2xl flex items-center justify-center floating-3d"
              style={{
                transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
                animation: 'float3d 8s ease-in-out infinite reverse'
              }}
            >
              <Icon name="Settings" size={24} className="text-lime-primary" />
            </div>
            
            <div 
              className="absolute bottom-10 left-1/4 w-12 h-12 ultra-glassmorphism rounded-xl flex items-center justify-center floating-3d"
              style={{
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                animation: 'float3d 10s ease-in-out infinite'
              }}
            >
              <Icon name="CheckCircle" size={20} className="text-lime-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark-text mb-16">
            Мы лечим <span className="text-gradient">любую болезнь</span> техники
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Zap",
                title: "Холодильники",
                description: "Не морозит? Шумит? Течёт? Мы знаем, как вернуть ему молодость.",
                color: "bg-gradient-to-br from-blue-50 to-blue-100"
              },
              {
                icon: "Droplets",
                title: "Стиральные машины",
                description: "Не отжимает, не сливает, вибрирует? Станет как новая.",
                color: "bg-gradient-to-br from-green-50 to-green-100"
              },
              {
                icon: "Utensils",
                title: "Посудомоечные машины",
                description: "Плохо моет, не сушит, странно пахнет? Всё исправим.",
                color: "bg-gradient-to-br from-purple-50 to-purple-100"
              },
              {
                icon: "Microwave",
                title: "Микроволновки",
                description: "Не греет, искрит, не крутится? Вернём аппетит к работе.",
                color: "bg-gradient-to-br from-orange-50 to-orange-100"
              },
              {
                icon: "Wind",
                title: "Кондиционеры",
                description: "Не охлаждает, капает, шумит? Подарим прохладу.",
                color: "bg-gradient-to-br from-cyan-50 to-cyan-100"
              },
              {
                icon: "Coffee",
                title: "Мелкая техника",
                description: "Кофемашины, блендеры, мультиварки — всё починим.",
                color: "bg-gradient-to-br from-amber-50 to-amber-100"
              }
            ].map((service, index) => (
              <Card key={index} className={`${service.color} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-lime-primary rounded-full flex items-center justify-center mb-6">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-text mb-4">{service.title}</h3>
                  <p className="text-dark-text-alt leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-lime-primary/10 to-lime-secondary/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-dark-text mb-8">
              Почему именно мы?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-lime-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Clock" size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dark-text mb-4">15 минут</h3>
                <p className="text-dark-text-alt">Время диагностики. Остальное — дело техники.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-lime-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Shield" size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dark-text mb-4">2 года</h3>
                <p className="text-dark-text-alt">Гарантия на все работы. Уверенность в качестве.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-lime-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Star" size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dark-text mb-4">15 лет</h3>
                <p className="text-dark-text-alt">Опыт работы. Каждая поломка — уже знакомая.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-dark-text mb-8">
              Расскажите о <span className="text-gradient">проблеме</span>
            </h2>
            <p className="text-center text-dark-text-alt mb-12 text-lg">
              Опишите, что случилось с техникой. Мы перезвоним в течение 5 минут 
              и приедем сегодня же.
            </p>
            
            <Card className="glassmorphism border-0 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-dark-text font-medium mb-2">Ваше имя</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Как к вам обращаться?"
                        className="border-lime-primary/30 focus:border-lime-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-dark-text font-medium mb-2">Телефон</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+7 (999) 123-45-67"
                        className="border-lime-primary/30 focus:border-lime-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-dark-text font-medium mb-2">Тип техники</label>
                    <Input
                      type="text"
                      name="appliance"
                      value={formData.appliance}
                      onChange={handleInputChange}
                      placeholder="Холодильник, стиральная машина, посудомойка..."
                      className="border-lime-primary/30 focus:border-lime-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-dark-text font-medium mb-2">Описание проблемы</label>
                    <Textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Расскажите подробнее, что случилось..."
                      rows={4}
                      className="border-lime-primary/30 focus:border-lime-primary"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-lime-primary hover:bg-lime-secondary text-white py-6 text-lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-dark-text text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-gradient">Эвон</span>Сервис
              </h3>
              <p className="text-gray-300">
                Премиальный ремонт бытовой техники в районе Эвон, Кверти.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@evonservice.ru
                </p>
                <p className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  г. Кверти, район Эвон
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-gray-300">
                <p>Пн-Пт: 8:00 - 22:00</p>
                <p>Сб-Вс: 9:00 - 20:00</p>
                <p className="text-lime-primary">Аварийный выезд: 24/7</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ЭвонСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;