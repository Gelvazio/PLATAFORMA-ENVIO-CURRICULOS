/**
 * Dados dos perfis exibidos como cards no index.html.
 * Método: TEMPLATE-ORIENTACAO-CLAUDE.pdf (5 etapas: PDF, projeto, análise, otimização, plano).
 * Para acrescentar uma pessoa (ex.: TAILA CELLARIUS, JESSICA MORATELLI), basta incluir outro
 * objeto em PERFIS com a mesma forma — o app.js não precisa mudar.
 */
const PERFIS = [
  {
    id: "gelvazio-camargo",
    nome: "GELVAZIO CAMARGO",
    iniciais: "GC",
    titulo:
      "Desenvolvedor Full Stack PHP | IA | Python | Java | Professor de Desenvolvimento de Sistemas",
    local: "Rio do Sul, Santa Catarina",
    fonte:
      "Análise feita a partir do PDF do perfil (curriculo_gelvazio_camargo.pdf). " +
      "As notas são estimativas; confirme no LinkedIn os itens que o PDF não mostra " +
      "(destaques, recomendações, banner, foto, atividade).",
    objetivo:
      "Premissa (ajuste se for outro): fortalecer o posicionamento como desenvolvedor " +
      "full stack e educador em tecnologia, atraindo recrutadores, vagas de docência e " +
      "projetos com IA aplicada ao desenvolvimento.",
    etiquetas: ["15+ anos em software", "PHP · Laravel · Python", "Professor SENAI/SC", "IA aplicada"],
    projeto: {
      nome: "LinkedIn 2026",
      descricao: "Análise, otimização e crescimento estratégico do meu LinkedIn.",
      instrucoes:
        "Este projeto é dedicado ao meu posicionamento profissional como desenvolvedor " +
        "full stack e educador em tecnologia. Utilize os arquivos e conversas deste projeto " +
        "para me ajudar a otimizar meu LinkedIn, identificar oportunidades, melhorar meu " +
        "posicionamento, ampliar minha rede e aumentar minhas chances de entrevistas.",
      materiais: [
        "Currículo atualizado (PDF do LinkedIn)",
        "Objetivo profissional",
        "Vagas de interesse (desenvolvimento e docência)",
        "Perfis de referência",
        "Conteúdos já publicados",
      ],
    },
    diagnostico: [
      {
        item: "Headline",
        nota: 7,
        achado:
          "Rica em palavras-chave, mas mistura 5 tecnologias e 2 papéis; falta um " +
          "resultado ou público claro.",
      },
      {
        item: "Sobre",
        nota: 6,
        achado:
          "Bom conteúdo, mas há erros de espaçamento (\"TecnologiaProfissional\", " +
          "\"Artificial.Tenho\"), bloco corrido e sem chamada para ação.",
      },
      {
        item: "Experiências",
        nota: 6,
        achado:
          "Atividades descritivas, sem números, sem resultado e sem tecnologias por cargo. " +
          "A sobreposição de datas pode confundir recrutadores.",
      },
      {
        item: "Competências",
        nota: 3,
        achado:
          "Só 3 competências no PDF (Desenvolvimento web, PHP, Laravel). Python, IA, Java, " +
          "APIs e Docência ficam fora da busca.",
      },
      {
        item: "Certificações",
        nota: 4,
        achado:
          "Cursos de Python/Django mais antigos; nada de IA. Falta certificação recente " +
          "e relevante para o objetivo.",
      },
      {
        item: "Autoridade",
        nota: 4,
        achado:
          "Sem publicações ou projetos visíveis no PDF, embora exista o site " +
          "gelvazio.github.io para usar como prova.",
      },
      {
        item: "Privacidade",
        nota: 3,
        achado:
          "Endereço residencial e celular aparecem no contato. Remover o endereço e " +
          "manter só e-mail e links.",
      },
    ],
    analise: {
      fortes: [
        "Mais de 15 anos de experiência e trajetória completa: suporte → QA → web → full stack.",
        "Combinação rara: desenvolvimento de sistemas + docência (Senac SC e SENAI/SC).",
        "Integrações de mercado: Questor, Tecnospeed NFS-e, Nexxera, Bradesco CNAB 240, Cielo.",
        "Experiência em gestão pública, ERP e qualidade de software (TestComplete).",
        "URL personalizada, site pessoal e inglês profissional.",
      ],
      fracos: [
        "Poucas competências cadastradas: o algoritmo e o recrutador não encontram o perfil.",
        "Experiências sem métricas nem impacto de negócio.",
        "Dois posicionamentos misturados (desenvolvedor e professor) sem um fio condutor.",
        "Dados pessoais expostos (endereço, celular).",
      ],
      gargalos: [
        "Busca de recrutadores: faltam Python, APIs REST, Laravel, IA e Docência nas competências.",
        "Conversão: o Sobre não termina com convite para conversar nem com contato.",
      ],
      erros: [
        "A headline lista tecnologias em vez de dizer o valor entregue.",
        "O cargo \"T2\" aparece sem contexto de porte ou setor da empresa.",
        "Texto do Sobre sem espaços após pontos, passando impressão de falta de revisão.",
      ],
      ocultas: [
        "Unir TI + educação: vagas de instrutor, tutor técnico, treinamentos corporativos e mentorias.",
        "IA aplicada ao desenvolvimento e ao ensino é um nicho em alta e ainda pouco ocupado.",
        "Modernização de sistemas legados é dor real de empresas da região.",
      ],
    },
    otimizacao: [
      {
        item: "Headline",
        problema: "Lista de siglas sem benefício; compete com milhares de perfis iguais.",
        impacto: "Menos cliques vindos de busca e de comentários.",
        versao:
          "Desenvolvedor Full Stack (PHP, Laravel, Python) | IA aplicada a software | " +
          "Professor de Desenvolvimento de Sistemas no SENAI/SC | Integrações e ERP",
        justificativa:
          "Cabe no limite de caracteres, mantém as palavras mais buscadas e expressa dois " +
          "públicos: empresas e instituições de ensino.",
      },
      {
        item: "Sobre",
        problema: "Bloco único, erros de espaçamento e sem convite à ação.",
        impacto: "Leitura cansativa; o recrutador desiste antes de ver as integrações.",
        versao:
          "Há mais de 15 anos transformo regras de negócio em software que funciona: ERPs, " +
          "gestão pública, conciliação bancária e aplicações web em PHP/Laravel e Python.\n\n" +
          "Também ensino: fui professor no Senac SC e hoje sou professor de Desenvolvimento " +
          "de Software no SENAI/SC, formando quem vai construir os próximos sistemas.\n\n" +
          "O que eu faço:\n" +
          "• Desenvolvimento full stack (PHP, Laravel, Python, Java, JavaScript)\n" +
          "• Integrações: Questor, Tecnospeed NFS-e, Nexxera, Bradesco CNAB 240, Cielo\n" +
          "• Automação de processos e modernização de sistemas legados\n" +
          "• IA aplicada ao desenvolvimento e ao ensino\n\n" +
          "Meus projetos: gelvazio.github.io\n" +
          "Vamos conversar? Me chame aqui ou por e-mail: [seu e-mail profissional]",
        justificativa:
          "Abre com resultado, separa em blocos fáceis de ler, usa as palavras-chave com " +
          "naturalidade e termina com chamada para ação.",
      },
      {
        item: "Experiências",
        problema: "Descrição de tarefas, sem números ou resultado.",
        impacto: "Não prova senioridade; dificulta a comparação com outros candidatos.",
        versao:
          "Modelo por cargo: [Verbo] + [o que fez] + [resultado com número].\n" +
          "Ex.: Integrei o sistema com Tecnospeed NFS-e e Bradesco CNAB 240, reduzindo [X]% " +
          "do tempo de conciliação bancária.\n" +
          "Ex.: Migrei [N] módulos legados para Laravel, diminuindo [X]% dos chamados de " +
          "suporte.\n" +
          "Tecnologias: PHP, Laravel, Python, banco de dados SQL, APIs REST.",
        justificativa:
          "Números tornam a entrega verificável. Preencha os [X] com dados reais; não " +
          "invente métricas.",
      },
      {
        item: "Posicionamento",
        problema: "Dois papéis competindo (desenvolvedor × professor).",
        impacto: "O perfil parece genérico para os dois públicos.",
        versao:
          "Fio condutor: \"Engenheiro de software que ensina\". A docência vira prova de " +
          "domínio técnico, e a prática em ERP e integrações vira exemplo de sala de aula.",
        justificativa: "Transforma a diferença em diferencial único.",
      },
      {
        item: "Palavras-chave",
        problema: "Apenas 3 competências cadastradas.",
        impacto: "O perfil some nas buscas de recrutadores.",
        versao:
          "Fixar no topo: PHP · Laravel · Python. Acrescentar: APIs REST, Java, Spring Boot, " +
          "JavaScript, HTML5, CSS3, SQL, Django, Integração de sistemas, ERP, Automação de " +
          "processos, Inteligência Artificial, Docência, POO, Git.",
        justificativa: "O LinkedIn aceita até 50 competências; use as que você realmente domina.",
      },
      {
        item: "Autoridade",
        problema: "Nada que comprove o conhecimento além do texto.",
        impacto: "Baixa confiança na primeira visita.",
        versao:
          "Seção Destaques com: site gelvazio.github.io, 1 projeto de IA, 1 material de aula " +
          "e 1 post fixado. Pedir 3 recomendações (ex-aluno, colega de equipe, gestor).",
        justificativa: "Prova social e material visível aumentam as respostas às mensagens.",
      },
    ],
    plano: {
      imediatas: [
        "Remover endereço residencial e celular do contato.",
        "Corrigir os erros de espaçamento do Sobre e colar a nova versão.",
        "Trocar a headline pela versão otimizada.",
        "Preencher competências até 20 (fixar PHP, Laravel, Python).",
      ],
      dias7: [
        "Reescrever as 3 últimas experiências com métricas reais.",
        "Ativar \"Aberto a oportunidades\" (recrutadores) com os cargos-alvo.",
        "Montar a seção Destaques (site pessoal + 1 projeto).",
        "Pedir 3 recomendações.",
      ],
      dias30: [
        "Semana 1: post sobre integração de sistemas (caso real, sem dados sensíveis).",
        "Semana 2: post sobre IA em sala de aula.",
        "Semana 3: carrossel \"PHP legado → Laravel: o que aprendi\".",
        "Semana 4: revisar métricas e repetir o que funcionou.",
      ],
      conteudo: [
        "Pilar 1 — Bastidores técnicos: integrações, CNAB, NFS-e, conciliação.",
        "Pilar 2 — Ensino: dicas de PHP, Python, lógica e carreira para iniciantes.",
        "Pilar 3 — IA aplicada: como usar IA para programar e planejar aulas.",
        "Frequência sugerida: 2 posts por semana + 5 comentários qualificados por dia.",
      ],
      networking: [
        "Conectar com 5 recrutadores de TI e 5 coordenadores de cursos por semana, com nota personalizada.",
        "Reativar ex-alunos e ex-colegas (Senac SC, IPM, IBS) com mensagem curta.",
        "Comentar posts de empresas de software da região.",
      ],
      metricas: [
        "Visualizações do perfil e aparições em pesquisas (semanal).",
        "Solicitações de conexão aceitas e mensagens recebidas.",
        "Impressões e comentários por post.",
        "Meta de 30 dias: dobrar as aparições em pesquisas e abrir 3 conversas com recrutadores.",
      ],
    },
    mensagens: [
      {
        titulo: "Convite a recrutador",
        texto:
          "Olá, [Nome]! Sou desenvolvedor full stack (PHP/Laravel/Python) com 15+ anos em " +
          "ERP e integrações financeiras e também professor de desenvolvimento no SENAI/SC. " +
          "Vi que você atua com vagas de TI e gostaria de me conectar. Abraço!",
      },
      {
        titulo: "Convite a coordenador de curso",
        texto:
          "Olá, [Nome]! Leciono Desenvolvimento de Software no SENAI/SC e já fui professor " +
          "no Senac SC. Gostaria de trocar experiências sobre ensino de programação e IA. " +
          "Podemos nos conectar?",
      },
    ],
    prompts: [
      {
        titulo: "Etapa 3 — Análise",
        texto:
          "Analise meu LinkedIn com profundidade. Considere três perspectivas: 1. Recrutador " +
          "2. Especialista em posicionamento profissional 3. Algoritmo do LinkedIn. Avalie: " +
          "headline → seção Sobre → experiências → palavras-chave → posicionamento → " +
          "diferenciais → autoridade percebida. Depois me entregue: pontos fortes → pontos " +
          "fracos → oportunidades de melhoria → erros que podem estar reduzindo minhas " +
          "oportunidades → nota geral para o perfil → recomendações prioritárias.",
      },
      {
        titulo: "Etapa 4 — Otimização",
        texto:
          "Com base na análise realizada, sugira melhorias para o meu LinkedIn. Quero " +
          "otimizar: headline → seção Sobre → experiências → posicionamento → palavras-chave " +
          "→ autoridade percebida. Para cada item: 1. Explique o problema encontrado. " +
          "2. Explique o impacto desse problema. 3. Sugira uma versão otimizada. " +
          "4. Justifique a recomendação.",
      },
      {
        titulo: "Etapa 5 — Plano de ação",
        texto:
          "Com base em toda a análise realizada até agora, crie um plano de ação para meu " +
          "LinkedIn. Meu objetivo é: [INSIRA SEU OBJETIVO]. Organize o plano em: " +
          "1. Prioridades imediatas 2. Ações para os próximos 7 dias 3. Ações para os " +
          "próximos 30 dias 4. Estratégias de conteúdo 5. Estratégias de networking " +
          "6. Métricas para acompanhar evolução. Priorize sempre as ações de maior impacto.",
      },
    ],
  },
  {
    id: "taila-cellarius",
    nome: "TAILA CELLARIUS",
    iniciais: "TC",
    titulo:
      "Jovem aprendiz em e-commerce (dados, sistemas e eventos) | Busca estágio ou nova vaga",
    local: "Rio do Sul, Santa Catarina",
    fonte:
      "Análise feita a partir do currículo (curriculo-taila-cellarius.pdf). Por ela ser menor " +
      "de idade, CPF, RG, endereço, telefones, e-mail, nascimento e nome da escola ficam FORA " +
      "desta página: use os campos [entre colchetes] na hora de montar o currículo final.",
    objetivo:
      "URGENTE: o contrato atual de jovem aprendiz termina em 07/11/2026. Meta: conseguir " +
      "entrevistas para estágio ou nova vaga de jovem aprendiz nas áreas administrativa, " +
      "atendimento, recepção/eventos ou marketing, antes do fim do contrato.",
    etiquetas: ["Jovem aprendiz", "Dados e sistemas", "Eventos", "Assistente administrativo 160h"],
    projeto: {
      nome: "Primeiro Emprego 2026",
      descricao: "Currículo, candidaturas e preparação para entrevistas da Taila.",
      instrucoes:
        "Este projeto é dedicado a me ajudar a conseguir estágio ou vaga de jovem aprendiz em " +
        "Rio do Sul. Utilize meu currículo e as vagas que eu colar aqui para adaptar o " +
        "currículo a cada vaga, escrever mensagens e me preparar para entrevistas. Nunca " +
        "peça nem escreva meu CPF, RG, endereço ou telefone.",
      materiais: [
        "Currículo atual (sem CPF e RG)",
        "Vagas de interesse (texto copiado do anúncio)",
        "Lista do que fiz no trabalho atual, com números quando houver",
        "Certificado do curso de Assistente Administrativo",
      ],
    },
    diagnostico: [
      {
        item: "Privacidade",
        nota: 2,
        achado:
          "O currículo traz CPF, RG, endereço completo, 3 telefones, data de nascimento e a " +
          "mãe como referência. Para menor de idade, isso não deve circular em grupos nem " +
          "em sites públicos.",
      },
      {
        item: "Objetivo",
        nota: 5,
        achado:
          "O objetivo está espalhado em Interesses e em Observações. Falta uma frase curta " +
          "no topo dizendo o que ela procura e o que oferece.",
      },
      {
        item: "Experiência",
        nota: 7,
        achado:
          "Ponto forte: mais de 1 ano de experiência real, rara para a idade. Mas só tem o " +
          "cargo; faltam o que ela faz no dia a dia e os resultados.",
      },
      {
        item: "Formação",
        nota: 5,
        achado:
          "Ensino médio \"cursando\" com ano de conclusão 2024 (inconsistente). Confirmar o " +
          "ano certo. O curso de Assistente Administrativo (160h) está bom.",
      },
      {
        item: "Competências",
        nota: 5,
        achado:
          "Word, Excel e e-mail aparecem numa frase de observação. Devem virar lista " +
          "visível, junto com atendimento, organização e e-commerce.",
      },
      {
        item: "Revisão e apresentação",
        nota: 4,
        achado:
          "Nome em letras minúsculas, \"Pretenção\", \"Solteiro\" (irrelevante) e pretensão " +
          "salarial de R$ 950, abaixo do salário atual.",
      },
    ],
    analise: {
      fortes: [
        "Experiência prática de jovem aprendiz em e-commerce desde 07/2025.",
        "Vivência em dados, sistemas e eventos: combina organização e atendimento.",
        "Curso de Assistente Administrativo (160h) já concluído.",
        "Noções de Word, Excel e e-mail, base exigida na maioria das vagas administrativas.",
        "Interesses claros e compatíveis (administrativo, recepção, eventos, marketing).",
      ],
      fracos: [
        "O currículo expõe dados pessoais demais para uma menor.",
        "A experiência é descrita só pelo nome do setor.",
        "Objetivo confuso e com erros de português.",
        "Mistura de áreas (administrativo, recepção, marketing) sem prioridade.",
      ],
      gargalos: [
        "Prazo: o contrato termina em 07/11/2026, restam poucas semanas.",
        "Quem lê o currículo em 10 segundos não encontra resultados da experiência.",
      ],
      erros: [
        "Pretensão salarial de R$ 950 menor que o salário atual: gera desvalorização.",
        "Contatos duplicados e telefone da mãe como \"comercial\".",
        "Informar CPF e RG antes de haver entrevista.",
      ],
      ocultas: [
        "Pedir efetivação ou indicação na própria empresa atual: já conhecem o trabalho dela.",
        "Pedir uma carta de recomendação do gestor, que vale mais que qualquer currículo.",
        "Eventos + dados serve para marketing e atendimento ao cliente.",
      ],
    },
    otimizacao: [
      {
        item: "Objetivo profissional",
        problema: "Objetivo espalhado e genérico.",
        impacto: "O recrutador não sabe rapidamente para qual vaga ela serve.",
        versao:
          "Jovem aprendiz com mais de 1 ano de experiência em e-commerce (dados, sistemas e " +
          "eventos), buscando estágio ou nova vaga de aprendiz nas áreas administrativa, " +
          "atendimento ou eventos, para aplicar organização, atenção aos detalhes e domínio " +
          "de Word, Excel e e-mail.",
        justificativa: "Diz quem é, o que oferece e o que busca em poucas linhas.",
      },
      {
        item: "Experiência",
        problema: "Só aparece o cargo \"Dados e Sistemas e Eventos\".",
        impacto: "Perde a chance de mostrar o valor do que já fez.",
        versao:
          "Jovem Aprendiz — Dados, Sistemas e Eventos | Magazord E-commerce | 07/2025 a 11/2026\n" +
          "• Organizei e atualizei dados no sistema da empresa [confirmar o que faz].\n" +
          "• Apoiei a organização de [N] eventos, cuidando de [lista, convites, material].\n" +
          "• Utilizo Word, Excel e e-mail no dia a dia para relatórios e comunicação.\n" +
          "• [Resultado ou elogio que ela puder comprovar].",
        justificativa:
          "Verbos de ação e números (preencha os [N] só com dados reais) provam a experiência.",
      },
      {
        item: "Competências",
        problema: "Ficam escondidas na observação final.",
        impacto: "Sistemas de triagem e recrutadores não encontram as palavras-chave.",
        versao:
          "Word · Excel · E-mail · Organização de dados · Organização de eventos · Atendimento " +
          "ao público · Noções de e-commerce · Comunicação · Pontualidade · Trabalho em equipe",
        justificativa: "Lista curta e visível, com as mesmas palavras dos anúncios de vaga.",
      },
      {
        item: "Dados pessoais",
        problema: "CPF, RG, endereço completo, 3 telefones e nascimento no currículo.",
        impacto: "Risco de golpe e de uso indevido de dados de menor de idade.",
        versao:
          "Taila Eduarda Koch Cellarius\nRio do Sul – SC | WhatsApp: [número dela] | " +
          "E-mail: [e-mail dela]\nReferências: fornecidas mediante solicitação.",
        justificativa:
          "Mantém só o necessário. CPF e RG são pedidos depois, na contratação, em canal oficial.",
      },
      {
        item: "Pretensão salarial",
        problema: "R$ 950,00, menor que o salário atual.",
        impacto: "Pode ser aceita como piso e limitar propostas melhores.",
        versao:
          "Remover do currículo. Se perguntarem: \"Conforme a política da empresa e o valor " +
          "da bolsa-auxílio ou do salário-hora de aprendiz\".",
        justificativa: "Aprendiz e estágio têm valores definidos pela empresa e pela lei.",
      },
      {
        item: "Formação",
        problema: "O ano de conclusão do ensino médio (2024) não bate com \"cursando\".",
        impacto: "Passa impressão de erro, e a empresa precisa da data para o contrato.",
        versao:
          "Ensino Médio — [nome da escola] — em andamento, conclusão prevista em [ano]\n" +
          "Curso de Assistente Administrativo — 160 horas — concluído em 2024",
        justificativa: "Informação coerente e confirmável.",
      },
    ],
    curriculoMelhorado: {
      titulo: "Currículo melhorado (copie para Word/Docs e salve em PDF)",
      texto:
        "TAILA EDUARDA KOCH CELLARIUS\n" +
        "Rio do Sul – SC | WhatsApp: [número] | E-mail: [e-mail]\n\n" +
        "OBJETIVO\n" +
        "Jovem aprendiz com mais de 1 ano de experiência em e-commerce (dados, sistemas e " +
        "eventos), buscando estágio ou nova vaga de aprendiz nas áreas administrativa, " +
        "atendimento ou eventos.\n\n" +
        "EXPERIÊNCIA\n" +
        "Jovem Aprendiz — Dados, Sistemas e Eventos\n" +
        "Magazord E-commerce | 07/2025 a 11/2026\n" +
        "• Organização e atualização de dados no sistema da empresa [confirmar].\n" +
        "• Apoio à organização de eventos [N, se souber].\n" +
        "• Uso diário de Word, Excel e e-mail.\n\n" +
        "FORMAÇÃO\n" +
        "Ensino Médio — [escola] — em andamento, conclusão prevista em [ano]\n" +
        "Assistente Administrativo — 160 horas — concluído em 2024\n\n" +
        "COMPETÊNCIAS\n" +
        "Word · Excel · E-mail · Organização de dados · Organização de eventos · Atendimento " +
        "ao público · Noções de e-commerce · Comunicação\n\n" +
        "IDIOMAS\nPortuguês (leitura, escrita e fala: bom)\n\n" +
        "REFERÊNCIAS\nFornecidas mediante solicitação.",
    },
    vagas: [
      {
        nome: "Empresa atual",
        como: "Conversar com o gestor sobre efetivação e pedir carta de recomendação em outubro.",
      },
      { nome: "CIEE (ciee.org.br)", como: "Cadastro gratuito; vagas de estágio e aprendiz em SC." },
      { nome: "IEL/SC", como: "Estágio em indústrias; inscrição pelo site do IEL Santa Catarina." },
      { nome: "Nube", como: "Plataforma de estágio e aprendiz, com cadastro gratuito." },
      {
        nome: "SINE / Agência do Trabalhador de Rio do Sul",
        como: "Cadastro presencial ou online, com vagas da cidade.",
      },
      {
        nome: "SENAI e Senac Rio do Sul",
        como: "Perguntar sobre turmas de aprendizagem com vaga em empresa parceira.",
      },
      {
        nome: "Indeed, Catho, InfoJobs, Vagas.com, LinkedIn",
        como: "Buscar \"jovem aprendiz\" e \"estágio\" em \"Rio do Sul, SC\" e ligar o alerta.",
      },
      { nome: "Gupy", como: "Empresas médias e grandes da região abrem processos por lá." },
      {
        nome: "Grupos de vagas de Rio do Sul",
        como: "Facebook e WhatsApp: informe só WhatsApp e e-mail, sem CPF e sem endereço.",
      },
    ],
    plano: {
      imediatas: [
        "Enviar o currículo SEM CPF, RG e endereço (usar a versão melhorada).",
        "Falar com o gestor atual sobre efetivação e pedir recomendação.",
        "Cadastrar-se no CIEE, IEL, Nube e SINE.",
        "Conferir o ano de conclusão do ensino médio e o nome da escola.",
      ],
      dias7: [
        "Enviar 3 candidaturas por dia, adaptando o objetivo à vaga.",
        "Salvar o currículo em PDF como Taila-Cellarius-Curriculo.pdf.",
        "Treinar 5 perguntas de entrevista (veja os prompts abaixo).",
        "Deixar currículo impresso em 5 empresas da cidade, com autorização da mãe.",
      ],
      dias30: [
        "Semana 1: cadastros e primeiras 15 candidaturas.",
        "Semana 2: entrevistas e retorno nas candidaturas sem resposta.",
        "Semana 3: ampliar para áreas vizinhas (marketing, atendimento).",
        "Semana 4: conferir o resultado antes do fim do contrato (07/11/2026).",
      ],
      conteudo: [
        "LinkedIn é permitido a partir dos 16 anos: perfil simples, foto de rosto, sem " +
          "endereço e sem telefone, com ciência da mãe.",
        "Headline sugerida: Jovem aprendiz em e-commerce | Dados, sistemas e eventos | " +
          "Buscando estágio administrativo.",
        "Publicar 1 vez por semana algo que aprendeu (eventos, Excel, e-commerce).",
      ],
      networking: [
        "Avisar familiares, professores e colegas de que está procurando vaga.",
        "Pedir indicação a quem trabalha em empresas de Rio do Sul.",
        "Visitar a agência do SINE com a mãe, levando documentos só na hora de contratar.",
      ],
      metricas: [
        "Candidaturas enviadas por semana (meta: 15).",
        "Respostas e entrevistas marcadas.",
        "Propostas recebidas antes de 07/11/2026.",
      ],
    },
    mensagens: [
      {
        titulo: "WhatsApp para o gestor atual (efetivação)",
        texto:
          "Olá, [Nome]! Meu contrato como jovem aprendiz vai até 07/11. Gosto muito de " +
          "trabalhar aqui e gostaria de saber se existe a possibilidade de continuar na " +
          "empresa. Se não houver, poderia me dar uma carta de recomendação? Obrigada!",
      },
      {
        titulo: "Mensagem para empresa ou RH",
        texto:
          "Olá! Meu nome é Taila, tenho mais de 1 ano de experiência como jovem aprendiz em " +
          "e-commerce (dados, sistemas e eventos) e busco estágio ou vaga de aprendiz na área " +
          "administrativa. Posso enviar meu currículo? Obrigada!",
      },
    ],
    prompts: [
      {
        titulo: "Análise do currículo",
        texto:
          "Analise meu currículo como recrutador de estágio e jovem aprendiz. Aponte pontos " +
          "fortes, pontos fracos, erros de português, informações que não devo divulgar e " +
          "dê uma nota geral de 0 a 10 com as 5 melhorias mais importantes.",
      },
      {
        titulo: "Adaptar o currículo a uma vaga",
        texto:
          "Esta é a vaga: [COLE O ANÚNCIO]. Adapte meu objetivo e minhas competências ao que " +
          "a vaga pede, sem inventar nada que eu não fiz e sem incluir CPF, RG ou endereço.",
      },
      {
        titulo: "Treino de entrevista",
        texto:
          "Faça uma entrevista de jovem aprendiz comigo, uma pergunta por vez, e depois de " +
          "cada resposta me diga o que melhorar. Comece pela pergunta: fale um pouco sobre você.",
      },
    ],
  },
];
