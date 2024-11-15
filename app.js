// Configuração do ffmpeg
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

// Dependências do bot
const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot');
const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MongoAdapter = require('@bot-whatsapp/database/mongo');

// Conexão ao MongoDB Atlas
const MONGO_DB_URI = 'mongodb+srv://escoladetecnologiaonline:uFjsAi6e6n6AWrii@cluster0.hson3.mongodb.net/escoladetecnologiaonline?retryWrites=true&w=majority';
const MONGO_DB_NAME = 'escoladetecnologiaonline';

// Fluxos de resposta
const flowCurso1 = addKeyword(['1']).addAnswer([
    'Aqui estão as informações sobre o Curso Cypecad:',
    'Descrição do curso e benefícios...',
    'Preço: 12x R$ 34,90 ou R$ 349,00 à vista.',
    'Link de compra: https://sun.eduzz.com/wcs7e6ps',
    'Digite *menu* para voltar ao menu principal.'
]);

const flowCurso2 = addKeyword(['2']).addAnswer([
    'Aqui estão as informações sobre o Curso Cype 3D Metálicas:',
    'Descrição do curso e benefícios...',
    'Preço: 12x R$ 34,90 ou R$ 349,00 à vista.',
    'Link de compra: https://sun.eduzz.com/7czxg5un',
    'Digite *menu* para voltar ao menu principal.'
]);

const flowOutrasPerguntas = addKeyword(['3']).addAnswer([
    'Se você tiver outras dúvidas ou precisar de mais informações, por favor, digite sua pergunta abaixo e aguarde a resposta.',
    'Acesse o site para mais cursos: https://www.escoladetecnologia.com',
    'Digite *menu* para voltar ao menu principal.'
]);

const flowSuporte = addKeyword(['suporte', '4']).addAnswer([
    '🔧 Aqui está o e-mail para pedir suporte ao seu curso, envie detalhes da sua dúvida com os prints de tela:',
    'E-mail: escoladetecnologiaonline@gmail.com',
    'Digite *menu* para voltar ao menu principal.'
]);

// Fluxo principal com opções de cursos e suporte
const flowPrincipal = addKeyword(['menu', 'oi', 'ajuda', 'informação', 'curso'])
    .addAnswer('🙌 Olá! Sou o assistente virtual da Escola de Tecnologia.')
    .addAnswer([
        'Como posso ajudar hoje? Escolha uma das opções abaixo:',
        '1 - Mais Informação - Curso Cypecad',
        '2 - Curso Cype 3D Metálicas',
        '3 - Outras perguntas',
        '4 - Para Suporte ou Digite qualquer momento a palavra: *suporte* para pegar o email de suporte'
    ], null, null, [flowCurso1, flowCurso2, flowOutrasPerguntas, flowSuporte]);

// Função principal
const main = async () => {
    // Conexão com MongoDB usando MongoAdapter
    const adapterDB = new MongoAdapter({
        dbUri: MONGO_DB_URI,
        dbName: MONGO_DB_NAME,
    });

    const adapterFlow = createFlow([flowPrincipal]);
    const adapterProvider = createProvider(BaileysProvider);

    // Criando o bot com a conexão ao banco de dados MongoDB externo
    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    });

    // Inicializando o portal QR
    QRPortalWeb();
};

main();
