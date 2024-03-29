// APIs consumidas pela interface de usuário

export const servicos = [
    {
        id: 1,
        idServico: 1,
        imagem: 'https://amaprofissionais.s3.amazonaws.com/pro4.png',
        nome: 'Amélia Barros',
        profissao: 'Psicologia',
        estrelas: 4.9,
        titulo: 'Terapia Cognitiva',
        preco: 90,
        prazo: 'Semanal',
        descricao: 'A terapia cognitivo-comportamental, ou TCC, é uma abordagem psicoterapêutica que se concentra na identificação e modificação de padrões de pensamento e comportamento disfuncionais.',
        premium: true,
    },
    {
        id: 3,
        idServico: 2,
        imagem: 'https://amaprofissionais.s3.amazonaws.com/pro2.jpg',
        nome: 'Rita de Cássia Neves',
        profissao: 'Pediatria',
        estrelas: 4.2,
        titulo: 'Consulta Pediátrica',
        preco: 130,
        prazo: 'Única vez',
        descricao: 'Consulta Pediátrica para bebês do primeiro mês de vida aos 3 anos. Consulta de 45 minutos online ou presencial (a critério da mãe), com remarcação se for preciso.',
        premium: false,
    },
    {
        id: 2,
        idServico: 3,
        imagem: 'https://amaprofissionais.s3.amazonaws.com/lactarista.jpg',
        nome: 'Fernanda Dias',
        profissao: 'Lactarista',
        estrelas: 5,
        titulo: 'Instrução de amamentação',
        preco: 120,
        prazo: '15 dias',
        descricao: 'Serviço de amamentação com ênfase na "pega humanizada". Nossa lactarista está aqui para apoiar e orientar mães e bebês, garantindo que o processo de amamentação seja uma experiência orgânica e natural. Nosso objetivo é criar um ambiente acolhedor onde mães e bebês possam se conectar e nutrir um ao outro, promovendo a saúde e o bem-estar. Com o apoio de nossa equipe especializada, você pode esperar uma jornada de amamentação suave e gratificante.',
        premium: true,
    },
    {
        id: 4,
        idServico: 4,
        imagem: 'https://amafotos.s3.amazonaws.com/usuario3.jpg',
        nome: 'Elisangela Silva',
        profissao: 'Doula',
        estrelas: 4.6,
        titulo: 'Do parto a primeira amamentação',
        preco: 130,
        prazo: '15 dias',
        descricao: 'Acompanhamento de mães em puerpério com instruções para primeira amamentação. Ideal para mães de primeira viagem que se sentem inseguras na hora de amamentar. Começo o acompanhamento a partir do pós parto e o prazo pode ser extendido.',
        premium: true,
    },
    {
        id:5,
        idServico: 5,
        imagem: 'https://amaprofissionais.s3.amazonaws.com/pro1.jpg',
        nome: 'André Pereira',
        profissao: 'Enfermagem',
        estrelas: 4.1,
        titulo: 'Prevenção de danos a mama',
        preco: 120,
        prazo: '15 dias',
        descricao: 'Serviço especializado de prevenção e remediação de danos a mama decorrentes da amamentação. Enfermeiro obstetra com mais de 10 anos de experiência. Prevenção e profilaxia.',
        premium: false,
    },
    {
        id: 1,
        idServico: 6,
        imagem: 'https://amaprofissionais.s3.amazonaws.com/pro4.png',
        nome: 'Amélia Barros',
        profissao: 'Psicologia',
        estrelas: 4.9,
        titulo: 'Terapia Familiar',
        preco: 160,
        prazo: 'Semanal',
        descricao: 'A terapia cognitivo-comportamental, ou TCC, é uma abordagem psicoterapêutica que se concentra na identificação e modificação de padrões de pensamento e comportamento disfuncionais. É indicada para grupos familiares que estejam passando por mudanças e necessitam de orientação profissional, como a chegada de um novo ente, a perda de um, e os fins e inícios de ciclos.',
        premium: true,
    },
    
]

export const conteudos = [
    {
        id:1,
        idConteudo: 1,
        nome: 'Amélia Barros',
        profissao: 'Psicologia',
        tipo: 'Workshop',
        titulo: 'Autoestima pós-parto',
        descricao: 'Descubra o poder da autoestima pós-parto! Nosso curso é um mergulho no autocuidado, ajudando mães a cultivar amor próprio, confiança e resiliência. Juntas, construímos um caminho para o bem-estar emocional pós-maternidade. ',
        estrelas: 4.7,
        tempo: 1,
        imagemCapa: "https://atitudeenegocios.com/wp-content/uploads/2022/07/Como-elevar-a-autoestima.jpg",
        preco: 5.99
    },
    {
        id: 2,
        idConteudo: 2,
        nome: 'Fernanda Dias',
        profissao: 'Lactarista',
        tipo: 'Curso',
        titulo: 'Guia sobre amamentação',
        descricao: 'Devo amamentar de quanto em quanto tempo? Como saber se o bebê está saciado? O que não deve ser feito? Aprenda tudo sobre amamentação comigo, Fernanda Dias, lactarista e nutróloga infantil.',
        estrelas: 5,
        tempo: 1,
        imagemCapa: "https://www.lancastergeneralhealth.org/-/media/images/lancaster%20general/images/healthhub/motherhood/lgh_healthhub_motherhood_gettyimages1227213336_early_days_of_motherhood_1200x600.ashx?mw=1200&mh=600",
        preco: 22
    },
    {
        id:1,
        idConteudo: 3,
        nome: 'Amélia Barros',
        profissao: 'Psicologia',
        tipo: 'Curso',
        titulo: 'Preparando uma educação não-violenta',
        descricao: 'Nos dias de hoje, uma educação não violenta é essencial para a construção de um indivíduo rico em virtudes e mentalmente saudável. Apesar disso, muitas famílias enfrentam desafios para por em prática os hábitos de uma educação não violenta. Nesse curso abordaremos de forma prática e acessível para todos atitudes que fazem a diferença',
        estrelas: 4.7,
        tempo: 1,
        imagemCapa: "https://www.fantasyorchestra.org/wp-content/uploads/sites/12/2014/06/20140712_124552-crop-1200-x-675.jpg",
        preco: 17.75
    },
    {
        id:4,
        idConteudo: 4,
        nome: 'Elisangela Silva',
        profissao: 'Doula',
        tipo: 'Curso',
        titulo: 'Mitos e Verdades sobre a amamentação',
        descricao: 'Amamentar é complicado não é? Ainda mais quando tantos tabus e informações falsas são vinculadas a esse comportamento tão natural e bonito. Muito se fala sobre parto humanizado, mas e amamentação humanizada? Vem descobrir os mitos e verdades de amamentar',
        estrelas: 4.5,
        tempo: 1.7,
        imagemCapa: "https://qgfeminista.org/wp-content/uploads/2021/12/imagem-site-1200-x-675-px.jpg",
        preco: 4.89
    },
]

export const bancos = [
    {
        id: 1,
        nome: 'Instituto de Medicina Integral Prof. Fernando Figueira - IMIP',
        cnpj: '10.988.301/0001-29',
        abertura: '00:00',
        encerramento: '00:00',
        dias: 'Todos os dias',
        iframe: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15801.354286024334!2d-34.8902756!3d-8.0669066!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18c8cd1e98ff%3A0x5c52ca864be68c1!2sIMIP%20Instituto%20de%20Medicina%20Integral%20Professor%20Fernando%20Figueira!5e0!3m2!1spt-BR!2sbr!4v1701292464399!5m2!1spt-BR!2sbr',
        endereco: 'Rua dos Coelhos, 300 - Boa Vista',
        telefone: '21224719',
        caminho: 'https://imip.org.br/contatos/',
    },
    {
        id: 2,
        nome: 'Banco de Leite Humano Dra. Sônia Bechara do Hospital Agamenon Magalhães',
        cnpj: '10.572.048/0003-90',
        abertura: '087:00',
        encerramento: '23:55',
        dias: 'Semanalmente',
        iframe: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15802.78177353405!2d-34.9071292!3d-8.0303039!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab196df0556ee3%3A0xfaa667e690de602b!2sHospital%20Agamenon%20Magalh%C3%A3es!5e0!3m2!1spt-BR!2sbr!4v1701292730402!5m2!1spt-BR!2sbr',
        endereco: 'Estrada do Arraial, 2.723 - Casa Amarela',
        telefone: '31841690',
        caminho: 'https://portal.saude.pe.gov.br/unidades-de-saude-e-servicos/secretaria-executiva-de-atencao-saude/hospital-agamenon-magalhaes',
    },
    {
        id: 3,
        nome: 'Banco de Leite Humano Enfermeira Tereza Cristina de Andrade do Hospital Barão de Lucena',
        cnpj: '09.794.975/0223-44',
        abertura: '07:00',
        encerramento: '19:00',
        dias: 'Todos os dias',
        iframe: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15802.463387199648!2d-34.9389858!3d-8.0384821!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab197ae1c6744d%3A0x39856672e4d5f062!2sHospital%20Bar%C3%A3o%20de%20Lucena!5e0!3m2!1spt-BR!2sbr!4v1701293915318!5m2!1spt-BR!2sbr',
        endereco: 'Avenida Caxangá, 3.860 - Iputinga',
        telefone: '31846552',
        caminho: 'https://portal.saude.pe.gov.br/unidades-de-saude-e-servicos/secretaria-executiva-de-atencao-saude/hospital-barao-de-lucena',
    },
    {
        id: 4,
        nome: 'Banco de Leite Humano do CISAM/UPE',
        cnpj: '09.794.975/0223-44',
        abertura: '07:00',
        encerramento: '17:00',
        dias: 'Todos os dias',
        iframe: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15802.490561990982!2d-34.888243!3d-8.0377844!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18f58c75ebe1%3A0x18062e2f3e1f50e7!2sCISAM%20-%20UPE%20-%20Unidade%20Hospitalar!5e0!3m2!1spt-BR!2sbr!4v1701294198812!5m2!1spt-BR!2sbr',
        endereco: 'Avenida Visconde de Mamanguape S/N - Encruzilhada',
        telefone: '331827720',
        caminho: 'https://www.upe.br/noticias/banco-de-leite-humano-do-cisam-upe-preparado-para-receber-doa%C3%A7%C3%B5es.html',
    },
    {
        id: 5,
        nome: 'Banco de Leite Humano do Hospital das Clínicas de Pernambuco',
        cnpj: '24134488000299',
        abertura: '07:00',
        encerramento: '19:00',
        dias: 'Segunda às Sextas',
        iframe: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15802.114463996068!2d-34.9463152!3d-8.0474352!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab19648ca22b57%3A0xf02ec862dfd94c10!2sHospital%20das%20Cl%C3%ADnicas%20UFPE!5e0!3m2!1spt-BR!2sbr!4v1701294686217!5m2!1spt-BR!2sbr',
        endereco: 'Avenida Professor Moraes Rego, 1.235 Cidade Universitária',
        telefone: '21263831',
        caminho: 'https://www.gov.br/ebserh/pt-br/hospitais-universitarios/regiao-nordeste/hc-ufpe',
    },
    {
        id: 6,
        nome: 'Banco de Leite do Hospital da Mulher do Recife Dra. Mercês Pontes Cunha',
        cnpj: '24134488000299',
        abertura: '07:00',
        encerramento: '19:00',
        dias: 'Todos os dias',
        iframe: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15801.214700860388!2d-34.9411233!3d-8.0704769!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1ead4862deab%3A0xd444e3392d103548!2sHospital%20da%20Mulher%20do%20Recife%20(HMR)!5e0!3m2!1spt-BR!2sbr!4v1701294734268!5m2!1spt-BR!2sbr',
        endereco: 'Rodovia BR - 101 SUL, 485 - Curado',
        telefone: '20110100',
        caminho: 'https://www2.recife.pe.gov.br/pagina/hospital-da-mulher-do-recife-dra-merces-pontes-cunha',
    },
]

export const bancosAlimentos = [
    {
        id: 1,
        nome: 'Banco de Alimento',
        instituicao: 'SESC',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvPzYDxTJ_StWB8721y6cmhN2vwTvfRfhVvH8So5SyF_D8aimDRiTFNgkV84fsXZdLeo&usqp=CAU',
        valor: 5,
        caminho: 'https://cieloecommerce.cielo.com.br/checkoutui/#/change-payment-type?id=0b358837-3a8f-4a89-8d92-cceea350756a'
    },
    {
        id: 2,
        nome: 'Banco de Alimento',
        instituicao: 'SESC',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvPzYDxTJ_StWB8721y6cmhN2vwTvfRfhVvH8So5SyF_D8aimDRiTFNgkV84fsXZdLeo&usqp=CAU',
        valor: 25,
        caminho: 'https://cieloecommerce.cielo.com.br/checkoutui/#/change-payment-type?id=2a7c09b9-c313-4a61-99e5-53062f251d29'
    },
    {
        id: 3,
        nome: 'Banco de Alimento',
        instituicao: 'SESC',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvPzYDxTJ_StWB8721y6cmhN2vwTvfRfhVvH8So5SyF_D8aimDRiTFNgkV84fsXZdLeo&usqp=CAU',
        valor: 50,
        caminho: 'https://cieloecommerce.cielo.com.br/checkoutui/#/change-payment-type?id=f1633385-1561-452a-b780-1012aa4dabd6'
    },
    {
        id: 4,
        nome: 'Banco de Alimento',
        instituicao: 'SESC',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvPzYDxTJ_StWB8721y6cmhN2vwTvfRfhVvH8So5SyF_D8aimDRiTFNgkV84fsXZdLeo&usqp=CAU',
        valor: 100,
        caminho: 'https://cieloecommerce.cielo.com.br/checkoutui/#/change-payment-type?id=a089d478-f7eb-46b3-a09d-1b58508c422e'
    },
    {
        id: 5,
        nome: 'Banco de Alimento',
        instituicao: 'SESC',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvPzYDxTJ_StWB8721y6cmhN2vwTvfRfhVvH8So5SyF_D8aimDRiTFNgkV84fsXZdLeo&usqp=CAU',
        valor: 250,
        caminho: 'https://cieloecommerce.cielo.com.br/checkoutui/#/change-payment-type?id=f9f89b8b-a7bf-48a6-8e58-9bb054476b74'
    },
]