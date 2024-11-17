const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MongoAdapter = require('@bot-whatsapp/database/mongo')

const MONGO_DB_URI = 'mongodb+srv://escoladetecnologiaonline:uFjsAi6e6n6AWrii@cluster0.hson3.mongodb.net/escoladetecnologiaonline?retryWrites=true&w=majority'
const MONGO_DB_NAME = 'escoladetecnologiaonline'

const flowCurso1 = addKeyword(['1']).addAnswer([
    'Aqui estão as informações sobre o Curso Cypecad:',
    'Domine o Cálculo Estrutural com o Curso Cypecad Online!',
    'Aprenda o Método VQS e transforme sua carreira na engenharia civil. Descubra como calculistas faturam de R$30k a R$150k/mês com projetos de alta qualidade e segurança.',
    '🚀 Garanta sua vaga agora! Matrículas encerrando em breve!',
    'Benefícios do curso:',
    '✅ Enfrentar qualquer cálculo estrutural e faturando de R$30.000 a R$150.000 ou mais com projetos de edifícios, sobrados, casas de acordo com a NBR6118 através do nosso método único VQS, indo além de ser Piloto de Software.',
    '✅ Calcular, Detalhando, Projetando e Analisando projetos completos de concreto armado.',
    '✅ UP na sua Carreira, e obtendo os melhores empregos, salários e negócios.',
    '✅ Fazer Detalhamento de Vigas, Pilares, Lajes, Fundações.',
    '✅ Fazer Cálculo de Fundações Conforme (NBR6122).',
    '✅ Fazer os Carregamentos conforme normas (NBR 6120), barras (NBR 7480), ventos (NBR 6123), ações e combinações.',
    'Preço: 12x R$ 34,90 ou R$ 349,00 à vista.',
    '👉 Acesse e compre já!',
    'Link de compra: https://sun.eduzz.com/wcs7e6ps',
    'Digite *menu* para voltar ao menu principal.'
])

const flowCurso2 = addKeyword(['2']).addAnswer([
    'Aqui estão as informações sobre o Curso Cype 3D Metálicas - Cálculo de Estruturas Metálicas de Galpões:',
    'Domine o Cype 3D Metálicas em VideoAulas Passo a Passo e Seja um Especialista em Cálculo Estrutural de Galpões Metálicos! Magno Moreira, Engenheiro de Elite, Revela o Método VQS para fazer Projetos de Estruturas Metálicas com mais Velocidade, Qualidade e Segurança.',
    '🚀 Garanta sua vaga agora! Matrículas encerrando em breve!',
    'Benefícios do curso:',
    '✅ Criar Projetos de galpão metálico com o software Cype 3D Metálicas 3D e faturar muito com seus projetos!',
    '✅ Enfrentar qualquer cálculo estrutural de galpões metálicos, mezaninos, telhados de acordo com as Técnicas (NBR6118 (Concreto Armado), Fundações (NBR6122), Carregamentos de Acordo com as Normas: ABNT NBR 8800:2008, ABNT NBR 14762:2010, AISI (Brasil), Eurocódigo 4, ABNT NBR 7190, ABNT NBR 6123, ABNT NBR 15421:2006, ABNT NBR-8681/84, NBR6118).',
    '✅ Aprender a fazer projeto de cálculo de estruturas metálicas através do nosso método único VQS.',
    '✅ Calcular, Modelar, Projetar e Analisar um projeto completo de estruturas metálicas como galpões, mezaninos, telhados.',
    '✅ Dar um UP na sua Carreira e obter os melhores empregos e negócios na área de cálculo de estruturas metálicas.',
    '✅ Realizar o cálculo, dimensionamento e verificação de estruturas, aço laminado, aço composto.',
    '✅ Fazer os Carregamentos conforme normas (NBR 6120), barras (NBR 7480), ventos (NBR 6123), ações e combinações.',
    'Preço: 12x R$ 34,90 ou R$ 349,00 à vista.',
    '👉 Acesse e compre já!',
    'Link de compra: https://sun.eduzz.com/7czxg5un',
    'Digite *menu* para voltar ao menu principal.'
])

const flowCurso3 = addKeyword(['3']).addAnswer([
    'Aqui estão as informações sobre a Escola de Inteligência Artificial e Cursos de Inteligência Artificial:',
    'Transforme sua carreira com inteligência artificial, eleve sua produtividade e valor profissional. Destaque-se no competitivo mercado impulsionado pela IA - sua jornada para o sucesso começa aqui!',
    '🚀 Garanta sua vaga agora! Matrículas encerrando em breve!',
    'Cursos oferecidos:',
    '1️⃣ Curso de Engenharia de Prompts - Desbloqueie o Poder do ChatGPT:',
    '✅ Domine a arte de criar prompts eficazes e maximize o uso de ferramentas de IA como o ChatGPT.',
    '✅ Transforme sua carreira e destaque-se no mercado de trabalho.',
    '✅ Aumente sua produtividade e desenvolva habilidades valiosas na era da IA.',
    '👉 Acesse e matricule-se já!',
    'https://escolabusiness.kpages.online/curso-chatgpt-engenharia-de-prompt',

    '2️⃣ Curso de SEO com Inteligência Artificial - Alcance o Topo e Lucre com SEO:',
    '✅ Chegue ao topo das buscas e transforme sua expertise em lucro.',
    '✅ Aprenda as táticas mais avançadas de SEO aplicando-as em tempo real.',
    '✅ Utilize ferramentas de IA para otimizar seus resultados e alavancar seus projetos.',
    '👉 Acesse e matricule-se já!',
    'https://hotmart.com/pt-br/marketplace/produtos/curso-seo-com-inteligencia-artificial/D86196016N',

    '3️⃣ Curso AI Art Digital - Uma Jornada Para o Futuro:',
    '✅ Explore as tendências mais recentes em arte digital com IA.',
    '✅ Aprenda com exemplos práticos e desenvolva projetos criativos.',
    '✅ Destaque-se no mercado com habilidades únicas em arte digital e IA.',
    '👉 Acesse e matricule-se já!',
    'https://hotmart.com/pt-br/marketplace/produtos/cursoaiartdigital/D80071527D',

    '4️⃣ Curso Marketing Digital com Inteligência Artificial:',
    '✅ Domine o marketing digital com o uso de IA e crie campanhas de alta performance.',
    '✅ Aprenda técnicas que transformam resultados e elevam suas estratégias.',
    '✅ Conheça métodos para alcançar campanhas milionárias e eficientes.',
    '👉 Acesse e matricule-se já!',
    'https://escoladetecnologia.com/curso-marketing-digital-com-inteligencia-artificial/',

    '5️⃣ Curso Como Fazer Vídeos Com Inteligência Artificial:',
    '✅ Domine a criação de vídeos usando IA para produzir conteúdos virais e profissionais.',
    '✅ Ferramentas, técnicas e estratégias para vídeos de alto impacto.',
    '✅ Torne-se um especialista em vídeos com inteligência artificial.',
    '👉 Acesse e matricule-se já!',
    'https://www.udemy.com/course/curso-como-fazer-videos-com-inteligencia-artificial-ia/?referralCode=3A962448117E6CD8CA98',

    'Digite *menu* para voltar ao menu principal.'
])



const flowCurso4 = addKeyword(['4']).addAnswer([
    'Aqui estão as informações sobre os cursos disponíveis:',
    
    '1️⃣ Curso de Python com Inteligência Artificial - Do Básico ao Avançado + Projetos Práticos:',
    '✅ Domine Python do zero ao avançado e aprenda a aplicar Inteligência Artificial.',
    '✅ Desenvolva habilidades práticas com projetos reais e avançados.',
    '✅ Transforme sua carreira com conhecimentos valiosos em IA e Python.',
    '👉 Acesse e matricule-se já!',
    'https://escoladetecnologia.com/curso-python-com-inteligencia-artificial/',
    
    '2️⃣ Curso de Análise de Dados e Inteligência Artificial e Machine Learning com Inteligência Artificial:',
    '✅ Aprenda a dominar Análise de Dados com Python e SQL.',
    '✅ Crie visualizações impactantes e dashboards interativos para decisões mais rápidas.',
    '✅ Utilize ferramentas como Google Data para contar histórias e comunicar insights de forma clara.',
    '✅ Ideal para quem busca uma vantagem competitiva no mercado de tecnologia.',
    '👉 Acesse e matricule-se já!',
    'https://escoladetecnologia.com/curso-analise-de-dados/',
    
    '3️⃣ Curso de JavaScript com IA + Projetos - Curso Completo:',
    '✅ Aprimore suas habilidades em JavaScript e crie projetos reais valorizados pelo mercado.',
    '✅ Prepare-se para enfrentar os desafios da programação com projetos práticos e reais.',
    '👉 Acesse e matricule-se já!',
    'https://hotmart.com/pt-br/marketplace/produtos/curso-de-javascript-online-na-pratica-completo/I86485376R',
    
    '4️⃣ Curso de HTML5 e CSS3 com IA - Inicie sua Carreira no Desenvolvimento Web:',
    '✅ Aprenda a criar sites responsivos com HTML5, CSS3 e IA.',
    '✅ Receba orientação de um instrutor altamente avaliado com vasta experiência em TI.',
    '✅ Perfeito para quem quer iniciar sua carreira em desenvolvimento web.',
    '👉 Acesse e matricule-se já!',
    'https://www.udemy.com/course/curso-html-css-online/?referralCode=97C76DB967278F2E8C26',
    
    'Digite *menu* para voltar ao menu principal.'
])

const flowCurso5 = addKeyword(['5']).addAnswer([
    'Aqui estão as informações sobre os Cursos de Negócios, Empreendedorismo, Investimentos:',
    
    '1️⃣ Curso Mente Milionária:',
    '✅ Liberte-se da dependência de empregos instáveis e alcance a liberdade financeira.',
    '✅ Aprenda a criar fontes de renda com autonomia e flexibilidade.',
    '✅ Conquiste sua independência financeira e não dependa da aposentadoria estatal.',
    '✅ Ganhe dinheiro no mundo digital e alavanca seu negócio online.',
    '👉 Acesse e matricule-se já!',
    'https://escoladetecnologia.com/curso-mente-milionaria/',
    
    '2️⃣ Curso Facebook ADS Online:',
    '✅ Crie anúncios eficazes no Facebook e Instagram que atingem milhões de pessoas.',
    '✅ Desenvolva campanhas de sucesso com orçamentos entre R$10 e R$30 por dia.',
    '✅ Aprenda estratégias práticas para maximizar seu retorno e gerar vendas.',
    '👉 Acesse e matricule-se já!',
    'https://escoladetecnologia.com/curso-facebook-ads-online/',
    
    '3️⃣ Curso Investidor Inteligente:',
    '✅ Descubra como montar uma carteira de investimentos global para alcançar a liberdade financeira.',
    '✅ Aprenda a diversificar seus investimentos em renda fixa, ações, fundos imobiliários, ETFs e criptomoedas.',
    '✅ Utilize ferramentas de Inteligência Artificial para otimizar seu portfólio e garantir segurança e retorno.',
    '👉 Acesse e matricule-se já!',
    'https://hotmart.com/pt-br/marketplace/produtos/curso-investidor-inteligente/Q60681837C',
    
    'Digite *menu* para voltar ao menu principal.'
])




const flowSuporte = addKeyword(['suporte', '6']).addAnswer([
    '🔧 Aqui está o e-mail para pedir suporte ao seu curso, envie detalhes da sua dúvida com os prints de tela:',
    'E-mail: escoladetecnologiaonline@gmail.com',
    'Digite *menu* para voltar ao menu principal.'
])

const flowOutrasPerguntas = addKeyword(['7']).addAnswer([
    'Se você tiver outras dúvidas ou precisar de mais informações, por favor, digite sua pergunta abaixo e aguarde a resposta.',
    'Acesse o site para mais informações sobre os cursos: https://www.escoladetecnologia.com',
    'Digite *menu* para voltar ao menu principal.'
])



const flowFallback = addKeyword(['']).addAnswer([
    'Desculpe, não entendi sua mensagem. Por favor, escolha uma das opções do menu ou digite *menu* para voltar ao início.'
])

const flowPrincipal = addKeyword([
    'menu', 'oi', 'Menu', 'Oi', 'ajuda', 'informação', 'curso', 'informacao', 'informações', 'quero informação', 'quero informações'
]).addAnswer('🙌 Olá! Sou o assistente virtual da Escola de Tecnologia.')
    .addAnswer([
        'Como posso ajudar hoje? Escolha uma das opções abaixo:',
        '1 - Digite 1 para Mais Informação sobre Curso Cypecad - Cálculo Estrutural Concreto Armado',
        '2 - Digite 2 para Informações osbre Curso Cype 3D Metálicas de Galpões Metálicos',
        '3 - Digite 3 para Informações sobre Cursos de Inteligência Artificial: Engenharia de Prompts, Art com IA, Vídeo com IA, Marketing Digital com IA',
        '4 - Digite 4 para Informações sobre Cursos de Programação e Análise de Dados',
        '5 - Digite 5 para Informações sobre Cursos de Negócios, Empreendendorismo e Investimentos',
        '6 - Digite 6 para Suporte ou Digite qualquer momento a palavra: *suporte* para pegar o email de suporte',
        '7 - Digite 7 para Outras dúvidas ou falar com atendimento humano'
    ], null, null, [flowCurso1, flowCurso2, flowCurso3, flowCurso4, flowCurso5, flowOutrasPerguntas, flowSuporte, flowFallback])

const main = async () => {
    const adapterDB = new MongoAdapter({
        dbUri: MONGO_DB_URI,
        dbName: MONGO_DB_NAME,
    })

    const adapterFlow = createFlow([flowPrincipal, flowCurso1, flowCurso2, flowCurso3, flowCurso4, flowCurso5, flowOutrasPerguntas, flowSuporte, flowFallback])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
