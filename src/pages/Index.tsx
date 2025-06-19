
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, BookOpen, Target, CheckCircle, Star, ArrowUp, MessageCircle } from "lucide-react";

const Index = () => {
  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const benefits = [
    "Compreender os sinais emocionais do seu filho",
    "Desenvolver uma comunicação mais empática",
    "Criar um ambiente familiar mais harmonioso",
    "Aplicar técnicas de educação positiva no dia a dia",
    "Fortalecer o vínculo afetivo com seus filhos",
    "Transformar desafios em oportunidades de crescimento"
  ];

  const content = [
    "Como identificar as raízes emocionais por trás dos comportamentos",
    "Técnicas de comunicação não-violenta com crianças", 
    "O papel das emoções no desenvolvimento infantil",
    "Estratégias práticas da Educação Expressiva",
    "Como educar pelo sentir: metodologia exclusiva",
    "Ferramentas para criar conexões autênticas"
  ];

  const testimonials = [
    {
      name: "Marina Santos",
      text: "Aprendi a ver minha filha com outros olhos. Agora compreendo que seus comportamentos são formas de comunicar suas necessidades emocionais.",
      rating: 5
    },
    {
      name: "Carlos Oliveira", 
      text: "A metodologia da Amélia transformou nossa relação familiar. Conseguimos criar um ambiente mais harmonioso e cheio de amor.",
      rating: 5
    },
    {
      name: "Ana Paula",
      text: "Incrível como pequenas mudanças na forma de educar podem gerar resultados tão positivos. Recomendo para todos os pais!",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "Qual a duração do evento?",
      answer: "O evento tem duração de 3 horas, com intervalo incluído."
    },
    {
      question: "Preciso ter conhecimento prévio em psicologia?",
      answer: "Não! O conteúdo é apresentado de forma didática e acessível para todos os pais."
    },
    {
      question: "Haverá certificado de participação?",
      answer: "Sim, todos os participantes receberão certificado digital de participação."
    },
    {
      question: "O evento é presencial ou online?",
      answer: "O evento será realizado online, permitindo participação de qualquer lugar."
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0efee' }}>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold" style={{ color: '#082144' }}>
            Raízes Emocionais
          </div>
          <Button 
            className="text-white font-semibold hover:scale-105 transition-transform"
            style={{ backgroundColor: '#274375' }}
          >
            Garanta sua Vaga
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center relative bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(8, 33, 68, 0.7), rgba(68, 108, 173, 0.7)), url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop")'
        }}
      >
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Descubra as <span className="text-yellow-400">Raízes Emocionais</span> do Comportamento Infantil
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Transforme sua relação com seus filhos aprendendo como o comportamento deles reflete sua forma de educar. 
              Uma jornada única de autoconhecimento e conexão familiar.
            </p>
            <Button 
              size="lg" 
              className="text-white font-bold text-lg px-8 py-4 hover:scale-105 transition-transform shadow-xl"
              style={{ backgroundColor: '#274375' }}
            >
              Quero Participar Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre o Evento */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop" 
                alt="Mãe e filha conectadas emocionalmente"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full flex items-center justify-center shadow-xl"
                   style={{ backgroundColor: '#274375' }}>
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
            <div>
              <Badge className="mb-4 text-white" style={{ backgroundColor: '#446cad' }}>
                Evento Exclusivo
              </Badge>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#082144' }}>
                Um Encontro Transformador para Pais Conscientes
              </h2>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Este evento revolucionário vai revelar como os comportamentos dos seus filhos são reflexos diretos 
                da sua forma de educar, oferecendo ferramentas práticas para criar uma conexão mais profunda e saudável.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 mt-1" style={{ color: '#274375' }} />
                  <div>
                    <h4 className="font-semibold" style={{ color: '#082144' }}>Metodologia Exclusiva</h4>
                    <p className="text-gray-600">Baseada na Educação Expressiva - Educar pelo Sentir</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 mt-1" style={{ color: '#274375' }} />
                  <div>
                    <h4 className="font-semibold" style={{ color: '#082144' }}>Aplicação Prática</h4>
                    <p className="text-gray-600">Técnicas que você pode usar imediatamente no dia a dia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 mt-1" style={{ color: '#274375' }} />
                  <div>
                    <h4 className="font-semibold" style={{ color: '#082144' }}>Transformação Real</h4>
                    <p className="text-gray-600">Mudanças visíveis na dinâmica familiar desde o primeiro dia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#082144' }}>
              Venha aprender a ouvir com o coração!
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Após participar deste evento, você será capaz de transformar completamente sua relação familiar
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                       style={{ backgroundColor: '#446cad' }}>
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-medium" style={{ color: '#082144' }}>{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#082144' }}>
              O que você vai aprender
            </h2>
            <p className="text-xl text-gray-600">
              Conteúdo prático e transformador baseado em anos de experiência
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {content.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-md">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                     style={{ backgroundColor: '#274375' }}>
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <p className="font-medium" style={{ color: '#082144' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#082144' }}>
              O que os pais estão dizendo
            </h2>
            <p className="text-xl text-gray-600">
              Histórias reais de transformação familiar
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold" style={{ color: '#082144' }}>- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre a Palestrante */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#082144' }}>
                Conheça Amélia Cristina Skiba
              </h2>
              <p className="text-xl text-gray-600">
                Especialista em desenvolvimento infantil e criadora da metodologia Educação Expressiva
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop" 
                  alt="Amélia Cristina Skiba"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#082144' }}>
                    Uma jornada de 25 anos dedicada às crianças
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Amélia, 37 anos, mãe da pequena Anastácia de 4 anos, dedica sua vida ao mundo infantil. 
                    Com 25 anos de experiência com crianças e 15 anos como professora da rede municipal, 
                    ela é a mente por trás da Amélia Skiba Corporation.
                  </p>
                </div>
                <div className="grid gap-3">
                  <Badge className="w-fit text-white" style={{ backgroundColor: '#446cad' }}>
                    Mestre em Desenvolvimento Infantil
                  </Badge>
                  <Badge className="w-fit text-white" style={{ backgroundColor: '#446cad' }}>
                    Perita em Programação Neurolinguística
                  </Badge>
                  <Badge className="w-fit text-white" style={{ backgroundColor: '#446cad' }}>
                    Especialista em Neuropsicologia e Aprendizagem
                  </Badge>
                  <Badge className="w-fit text-white" style={{ backgroundColor: '#446cad' }}>
                    Terapeuta Multidimensional
                  </Badge>
                </div>
                <p className="text-gray-700 leading-relaxed font-medium">
                  "Minha missão é ensinar as pessoas a ouvir através do coração, 
                  transformando a educação em uma experiência de amor e conexão."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20" style={{ 
        background: 'linear-gradient(135deg, #446cad 0%, #082144 100%)' 
      }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Esta é uma Oportunidade Única!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Não perca a chance de transformar sua relação familiar e descobrir as raízes emocionais 
            que influenciam o comportamento dos seus filhos. Vagas limitadas!
          </p>
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-yellow-400 text-gray-900 font-bold text-xl px-12 py-6 hover:bg-yellow-300 transition-colors shadow-xl"
            >
              Garantir Minha Vaga Agora
            </Button>
            <p className="text-white/80">
              ⚡ Últimas vagas disponíveis - Inscreva-se hoje!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#082144' }}>
                Perguntas Frequentes
              </h2>
              <p className="text-xl text-gray-600">
                Tire suas dúvidas sobre o evento
              </p>
            </div>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <Card key={index} className="border shadow-md">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2" style={{ color: '#082144' }}>
                      {item.question}
                    </h4>
                    <p className="text-gray-700">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
              <Button 
                className="text-white font-semibold"
                style={{ backgroundColor: '#274375' }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: '#082144' }}>
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Raízes Emocionais
            </h3>
            <p className="text-white/80 mb-8">
              Transformando famílias através da educação emocional
            </p>
            <Button 
              onClick={scrollToHero}
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
            >
              <ArrowUp className="w-5 h-5 mr-2" />
              Voltar ao Topo
            </Button>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/60">
                © 2024 Amélia Skiba Corporation. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
