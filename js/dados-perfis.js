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
];
