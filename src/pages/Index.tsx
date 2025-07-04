import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, BookOpen, Target, CheckCircle, Star, ArrowUp, MessageCircle, Ticket, Brain, Shield, Lightbulb, Compass, Zap, CircleArrowUp, CalendarMinus2 } from "lucide-react";

const Index = () => {
  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const benefits = [
    {
      title: "Compreender os sinais emocionais do seu filho",
      description: "Aprenda a identificar e interpretar as necessidades emocionais por trás dos comportamentos",
      icon: Brain
    },
    {
      title: "Desenvolver uma comunicação mais empática",
      description: "Técnicas práticas para uma comunicação mais profunda e conectada",
      icon: Heart
    },
    {
      title: "Criar um ambiente familiar mais harmonioso",
      description: "Transforme sua casa em um espaço de amor, segurança e crescimento",
      icon: Shield
    },
    {
      title: "Aplicar técnicas de educação positiva no dia a dia",
      description: "Ferramentas práticas que você pode usar imediatamente",
      icon: Lightbulb
    },
    {
      title: "Fortalecer o vínculo afetivo com seus filhos",
      description: "Construa conexões mais profundas e duradouras",
      icon: Users
    },
    {
      title: "Transformar desafios em oportunidades de crescimento",
      description: "Veja os obstáculos como chances de evolução familiar",
      icon: Compass
    }
  ];

  const content = [
    "Vai aprender o que está por trás do comportamento dos teus filhos ",
    "Vai aprender a prevenir problemas futuros",
    "Vai aprender a como construir uma mente de sucesso",
    "Vai aprender a ensinar com mais assertividade",
    "Vai mergulhar no planeta das emoções e aprender a proteger as suas emoções e a ser um guia emocional para eles",
    "Vai se aproximar da sua criança interior e do mundo infantil com amor e ternura",
    "Vai começar a compreender atitudes dos teus filhos e de outras pessoas que você no momento não entende",
    "Vai começar a compreender as forças do inconsciente no poder de decisão",
    "Vai furar a bolha e começar a enxergar a vida com mais sensibilidade",
    "Vai se aproximar de Deus"
  ];

  const testimonials = [
    {
      name: "Luciane Dias",
      text: "Eu sou Luciane, depois de estar passando por momentos difíceis dentro da minha família, Deus me presenteou com essa pessoa maravilhosa a Amélia. O que tenho a dizer sobre as mentorias com a Amélia foi que nos primeiros encontros tive medo de me abrir, mas um encontro após o outro fui vendo a realidade da minha vida, A METODOLOGIA QUE ELA UTILIZA FOI PRIMORDIAL PARA COMPREENDER O MEU MUNDO E O DA MINHA FILHA, o qual estava com grandes problemas de relacionamento, recebi conselhos e críticas construtivas para compreender melhor minhas ações e comecei a compreender porque a minha filha se comportava daquele jeito. Hoje, agradeço a Amélia, ELA MUDOU A MINHA VIDA, CLAREOU MEUS PENSAMENTOS E ME AJUDOU A TER MAIS ENTENDIMENTO COM MEUS FAMILIARES. Estou mais feliz, aumentei a minha fé, porque o método da Amélia busca desenvolver várias áreas da vida, até achar a raiz do problema mais latente, estou a cada dia melhor, gratidão, gratidão Amélia por seu apoio e seu conhecimento.",
      rating: 5
    },
    {
      name: "Queli Oliver", 
      text: "Oi, meu nome é Queli e sou professora, HOJE ESTOU AQUI PARA FALAR COMO A METODOLOGIA DA AMÉLIA, MUDOU MINHA FORMA DE VIVER E DE DAR AULAS. Sempre fui muito dedicada a tudo que fazia, mas sentia algo que não conseguia entender ou ver, eram como grandes amarras que me impediam de ir além, de soltar, de criar, de ser eu de verdade. Em casa não sabia como atender meu filho que é autista, e minhas aulas não era plenas, não conseguia acessar toda a potencialidade dos alunos, tinha dificuldade de entender os diversos comportamentos e fazer com que a minha turma tivesse um melhor aproveitamento. FOI ENTÃO QUE TIVE O PRIVILÉGIO DE TER ACESSO A METODOLOGIA DA AMÉLIA, ONDE PUDE APRENDER A ME EXPRESSAR A ENTENDER QUE CADA TIPO DE COMPORTAMENTO TAMBÉM É UMA FORMA DE SE EXPRESSAR, TAMBÉM PUDE AJUDAR MEU FILHO QUE TINHA CRISES, COM TODAS AS TÉCNICAS QUE APRENDI NA METODOLOGIA. Minhas aulas começam a ter mais resultados porque eu comecei a entender porque me sentia presa e comecei a liberar, equilibrar, curar o que precisava. Comecei a conhecer melhor meu filho e ajudar as professoras na escola. Tudo começou a ficar melhor.",
      rating: 5
    },
    {
      name: "Ana Caroline Ribeiro",
      text: "Minha experiência nesse dia de imersão com a Amélia foi incrível, me chamo Anna e foi um misto de sentimentos, dores, angustias, gratidão, fé e após um alivio muito grande. TIVE A OPORTUNIDADE DE ME CONECTAR COM A SUA FILOSOFIA DE VIDA, A SUA METODOLOGIA QUE VAI MUITO ALÉM DO QUE OS OLHOS PODEM VER, MAS ATINGE O INVISÍVEL, AQUILO QUE O CORAÇÃO SENTE, MAS NÃO COMPREENDE. Considero como uma grande vitória ter conseguido olhar para mim, olhar para minha criança, reconhecer minhas qualidades e olhar com carinho para tudo o que passei e que de alguma forma podem estar bloqueado muitas coisas na minha vida ou me fazendo repetir padrões. Sei que ainda tenho muito o que trabalhar para me libertar totalmente, mas pude melhorar meu autoconhecimento com todas as práticas que realizei e a partir disso seguir com mais clareza de quem eu sou e como posso ser uma pessoa melhor e mais produtiva, pois percebi que relaxei e algumas questões voltaram, alguns medos e a ansiedade também. APROVEITO PARA RECOMENDAR PARA TODOS QUE DESEJAM CRESCER E EVOLUIR COMO PESSOA A FAZER A IMERSÃO, POIS COM CERTEZA VAI TRANSFORMAR A SUA VIDA. Agradeço muito Amélia por essa oportunidade, e vou continuar buscando a minha cura, a minha essência, o meu propósito de vida. Gratidão! ",
      rating: 5
    },
    {
      name: "Juliana Sherer",
      text: "Nossos caminhos como pais, no entanto, não são simples, e nem sempre será fácil — cada criança, cada família carrega desafios únicos, que por vezes me fizeram temer julgamentos como mãe ou ter que passar por cima de grandes barreiras. Mas foi justamente aí que Amélia apareceu, com seu olhar sensível e humano, fazendo exatamente o oposto do que eu temia: acolheu. Quando eu temia por críticas, Amélia estendeu a mão. Acolheu com respeito, escuta e confiança. É bonito ver o quanto minha filha se inspira nela. A professora Amélia a ajudou a enxergar o mundo por outras lentes, a encarar os próprios desafios com coragem e a perceber valor em cada pequeno avanço. Em muitos momentos, percebo que minha filha carrega, em sua fala e postura, traços da generosidade e da visão de mundo que aprendeu com sua professora. Testemunhei não apenas o profissionalismo da Amélia, mas sua enorme capacidade de ver além. Sua abordagem respeitosa, fundamentada por uma sólida formação e um coração generoso, fez toda a diferença para minha filha — e para nossa família. E talvez o mais bonito seja perceber que, além de professora dedicada, Amélia também é mãe. Alguém que compreende com profundidade o valor do cuidado, da escuta e da responsabilidade de formar pessoas. Amélia não tem somente uma metodologia transformadora, ela ensina coragem, disciplina, autoestima. Estimula o crescimento, o esforço, o florescer de cada um. Mostra que cada passo — mesmo os mais trêmulos — tem valor. Hoje, o que sinto é uma imensa gratidão por esse reencontro da vida, por tudo que Amélia representa para minha filha — e para mim. Que sorte reencontrar alguém tão transformador.",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "Preciso ter conhecimento prévio em psicologia?",
      answer: "Não! O conteúdo é apresentado de forma didática e acessível para todos."
    },
    {
      question: "O evento é presencial ou online?",
      answer: "O evento será realizado presencialmente, em Florianópolis, no dia 23/08."
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0efee' }}>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="bg-[url(/img-uploads/logoToHero.png)] ..." style={{backgroundSize: 'cover', width: '210px', height: '70px', backgroundPosition: 'center'}}/>
          <div className="lg:text-2xl text-1xl font-bold" style={{ color: '#fff' }}/>
          <Button 
            className="text-white font-semibold hover:scale-105 transition-transform px-8 py-6 rounded-full"
            style={{ backgroundColor: '#c39f12', border: '1px solid #fff' }}
            onClick={() => window.location.href = 'https://sun.eduzz.com/D0RA8P5J9Y'}
          >
            Garantir vaga agora
            <Ticket className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center relative bg-cover"
        style={{ 
          paddingTop: '60px',
          backgroundImage: 'linear-gradient(rgb(8 33 68 / 48%), rgba(68, 108, 173, 0.05)), url("/img-uploads/heroBackground.png")'
        }}
      >
        <div className="container mx-auto px-6 lg:pt-20 pb-20 pt-40">
          <div className="max-w-2xl">
            <Badge className="mb-4 text-white" style={{ backgroundColor: 'transparent', gap: '5px', border: '1px solid #fff' }}>
              GARANTA SEU INGRESSO NO <b>LOTE 1</b>
            </Badge>
            <h1 className=" lg:text-6xl text-4xl font-bold text-white mb-6 leading-tight">
              Descubra como criar Filhos Emocionalmente Fortes e Destinados ao Sucesso
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Você vai sair com o passo a passo para evitar que seus filhos cresçam inseguros, ansiosos, viciados e despreparados para a vida real
            </p>
            <Button 
              size="lg" 
              className="text-white font-bold text-lg px-10 py-8 hover:scale-105 transition-transform shadow-xl rounded-full"
              style={{ backgroundColor: '#c39f12', border: '1px solid #fff' }}
              onClick={() => window.location.href = 'https://sun.eduzz.com/D0RA8P5J9Y'}
            >
              Garantir vaga agora
              <Ticket className="w-6 h-6 ml-3" />
            </Button>

            <div className="flex" style={{alignItems: 'center', gap: '12px', marginTop: '24px'}}>
              <div style={{border: '1px solid white', borderRadius: '10px', height: 'fit-content', width: 'fit-content', padding: '15px'}}>
                <CalendarMinus2 style={{color: 'white'}}/>
              </div>
              <div>
                <p style={{color: 'white'}}>EVENTO PRESENCIAL | SÁBADO</p>
                <p style={{color: '#a5a5a5', fontSize: 14}}>23 DE AGOSTO, 9H</p>
                <p style={{color: '#a5a5a5', fontWeight: 'bold'}}>FLORIANÓPOLIS - SC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <video height="420" controls className="mx-auto rounded-xl shadow-lg">
                <source src="/img-uploads/video.mp4" type="video/mp4" />
                Seu navegador não suporta vídeo HTML5.
              </video>
              <div className="absolute -bottom-6 -right-0 w-24 h-24 rounded-full flex items-center justify-center shadow-xl" style={{ backgroundColor: '#274375', marginRight: '-25px' }}>
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
            <div>
              <Badge className="mb-4 text-white" style={{ backgroundColor: '#446cad' }}>
                Evento Exclusivo
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-start" style={{ color: '#082144' }}>
                Sinta como será a Experiência da Imersão Pais Conscientes, Filhos Inabaláveis
              </h2>
              <p className="text-lg text-start text-gray-700 max-w-3xl mx-auto mb-8"> Mais do que um evento, essa imersão é um convite para enxergar além das dificuldades visíveis da educação e mergulhar nas emoções que moldam o desenvolvimento infantil. Aqui, você vai sentir na prática como o educar pelo sentir transforma vidas — começando pela sua. Permita-se viver uma experiência única, profunda e transformadora. </p>
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

      {/* Sobre a Palestrante */}
      <section className="py-20" style={{background: 'white'}}>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
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
                  src="/img-uploads/amelia_e_filha.jpg" 
                  alt="Amélia Cristina Skiba"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    Há 25 anos trabalho na educação infantil e ao longo desses anos, vim percebendo enormes dificuldades de aprendizado das crianças, grandiosos problemas de relacionamento entre as famílias, estou vendo muitos professores adoecerem,  resultando em uma educação colapsada, professores desistindo, crianças frustradas, rebeldes e famílias arrasadas.
                    <br/>
                    <b>E quem é o culpado?</b>
                    <br/>
                    De uns anos para cá, esse assunto virou a minha cabeça e nesse momento é o que me move para poder mostrar o que está além do obvio, aquilo que ninguém está vendo, mas está sentindo. Preciso te contar qual a fórmula para fazer a mente do seu filho ser de um campeão e como as emoções podem influenciar no sucesso dele positivamente ou negativamente.  
E diante disso eu juntei todo o conhecimento da minha formação acadêmica, com as minhas formações terapêuticas e desenvolvi minha metodologia: A Educação Expressiva - O Educar pelo Sentir e foi para aliviar essas dores invisíveis que a IMERSÃO PAIS CONSCIENTES, FILHOS INABALAVEIS foi tão almejada e agora toma forma na sua 1ª Edição.
                  </p>
                </div>
                <div className="grid gap-3">
                  <Badge className="w-fit text-white" style={{ backgroundColor: '#082144' }}>
                    Mestre em Desenvolvimento Infantil
                  </Badge>
                  <Badge className="w-fit text-white" style={{ backgroundColor: '#274375' }}>
                    Perita em Programação Neurolinguística
                  </Badge>
                  <Badge className="w-fit text-white" style={{ backgroundColor: '#446cad' }}>
                    Especialista em Neuropsicologia e Aprendizagem
                  </Badge>
                  <Badge className="w-fit text-white" style={{ backgroundColor: '#274375' }}>
                    Terapeuta Multidimensional
                  </Badge>
                  <Badge className="w-fit text-white" style={{ backgroundColor: '#082144' }}>
                    Especialista em Gestão das Emoções
                  </Badge>
                  <Badge className="w-fit text-white" style={{ backgroundColor: '#274375' }}>
                    Especialista em Meditação Científica
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-20">
        <div className="container mx-auto px-6" style={{justifyItems: 'center'}}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#082144' }}>
              O que você vai viver nesse dia
            </h2>
            <p>Se você tem filhos de até 7 anos e está sentindo algo diferente, mas não consegue compreender racionalmente o que está acontecendo, essa imersão é para você.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {content.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-6 rounded-xl bg-gray-50 shadow-md">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                     style={{ backgroundColor: '#274375' }}>
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <p className="font-medium" style={{ color: '#082144' }}>{item}</p>
              </div>
            ))}
          </div>
          <Button 
              size="lg" 
              className="text-white font-bold text-lg px-10 py-8 hover:scale-105 transition-transform shadow-xl rounded-full"
              style={{ backgroundColor: '#c39f12', marginTop: '42px' }}
              onClick={() => window.location.href = 'https://sun.eduzz.com/D0RA8P5J9Y'}
            >
              Garantir vaga agora
              <Ticket className="w-6 h-6 ml-3" />
            </Button>
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
              Muitas famílias já foram impactadas pela metodologia Educação Expressiva - Educar pelo Sentir, você pode ser a próxima, confira a baixo alguns depoimentos
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="grid border-0 shadow-lg">
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

      <section className="py-20" style={{ backgroundColor: '#f0efee' }}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Texto primeiro no mobile */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <h2
                className="text-4xl font-bold mb-8 leading-relaxed"
                style={{ color: '#082144' }}
              >
                Vamos juntos aprender a blindar a mente das crianças e a proteger as emoções, ouvindo pelo coração.
              </h2>
            </div>

            {/* Imagem depois no mobile */}
            <div className="relative order-2 lg:order-1">
              <div
                className="bg-[url(/img-uploads/ameliaPhoto2.jpg)] rounded-2xl shadow-2xl w-full object-cover"
                style={{
                  backgroundSize: 'cover',
                  height: '600px',
                  backgroundPosition: 'center',
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* CTA Final - com informações do ticket */}
      <section className="py-20" style={{ 
        background: 'linear-gradient(135deg, #446cad 0%, #082144 100%)' 
      }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Investimento
          </h2>
          
          {/* Informações dos lotes */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Lote 1 - Disponível */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1">
                  LOTE 1 - DISPONÍVEL
                </Badge>
                <div className="space-y-4 text-white/90 text-lg pt-4">
                  <p className="text-2xl font-semibold">23 de agosto (sábado)</p>
                  <p className="font-semibold">Evento Presencial</p>
                  <div className="text-4xl font-bold text-yellow-400 mt-6">
                    R$ 67,00
                  </div>
                  <p className="text-yellow-400 font-bold text-sm">
                    Corra! Temos somente 20 vagas restantes!
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-yellow-400 text-gray-900 font-bold text-xl px-8 py-4 hover:bg-yellow-300 transition-colors shadow-xl w-full mt-6"
                    onClick={() => window.location.href = 'https://sun.eduzz.com/D0RA8P5J9Y'}
                  >
                    Garantir Minha Vaga
                    <Ticket className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Lote 2 - Esgotado/Informativo */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 relative opacity-75">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white px-4 py-1">
                  LOTE 2 - PRÓXIMO
                </Badge>
                <div className="space-y-4 text-white/70 text-lg pt-4">
                  <p className="text-2xl font-semibold">23 de agosto (sábado)</p>
                  <p className="font-semibold">Evento Presencial</p>
                  <div className="text-4xl font-bold text-gray-400 mt-6">
                    R$ 97,00
                  </div>
                  <p className="text-gray-400 font-bold text-sm">
                    Próximo lote disponível em breve
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-gray-600 text-gray-300 font-bold text-xl px-8 py-4 cursor-not-allowed w-full mt-6"
                    disabled
                  >
                    Próximo Lote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-6"
        style={{
          background: 'linear-gradient(135deg, #446cad 0%, #082144 100%)'
        }}
      >
        <div className="w-full">
          <div className="flex flex-col items-center justify-center px-6 space-y-4 lg:space-y-0">
            <p className="text-white/60 lg:left-[1.5rem] text-center lg:absolute md:relative">
              © 2025 Além do óbvio | Todos os direitos reservados.
            </p>
            <p className="text-white/30 text-xs text-center">
              Desenvolvido by Somma Marketing
            </p>
            <Button
              onClick={scrollToHero}
              className="lg:absolute lg:right-[1.5rem] md:relative bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <CircleArrowUp className="w-5 h-5" />
              Voltar ao início
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
