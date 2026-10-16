/**
 * Renderiza os cards de perfis (PERFIS, de dados-perfis.js) e o detalhe do card selecionado.
 * Sem dependências externas; abre com duplo clique.
 */
const NOTA_MAXIMA = 10;
const NOTA_LIMITE_BOA = 7;
const NOTA_LIMITE_MEDIA = 5;
const MENSAGEM_COPIADO = "Copiado!";
const MENSAGEM_COPIAR = "Copiar";
const TEMPO_MENSAGEM_MS = 1500;

/**
 * Cria um elemento com classe e texto opcionais.
 * @param {string} tag - Nome da tag.
 * @param {string} [classe] - Classe CSS.
 * @param {string} [texto] - Texto (inserido como texto puro).
 * @returns {HTMLElement} Elemento criado.
 */
function criarElemento(tag, classe, texto) {
  const elemento = document.createElement(tag);
  if (classe) elemento.className = classe;
  if (texto !== undefined) elemento.textContent = texto;
  return elemento;
}

/**
 * Calcula a nota geral (média) do diagnóstico.
 * @param {{nota: number}[]} diagnostico - Itens avaliados.
 * @returns {number} Média com uma casa decimal.
 */
function calcularNotaGeral(diagnostico) {
  if (!diagnostico.length) return 0;
  const soma = diagnostico.reduce((total, linha) => total + linha.nota, 0);
  return Math.round((soma / diagnostico.length) * 10) / 10;
}

/**
 * Escolhe o modificador de cor da barra conforme a nota.
 * @param {number} nota - Nota de 0 a 10.
 * @returns {string} Classe CSS do preenchimento.
 */
function obterClasseBarra(nota) {
  if (nota >= NOTA_LIMITE_BOA) return "barra__preenchimento";
  if (nota >= NOTA_LIMITE_MEDIA) return "barra__preenchimento barra__preenchimento--media";
  return "barra__preenchimento barra__preenchimento--baixa";
}

/**
 * Copia um texto para a área de transferência.
 * @param {string} texto - Texto a copiar.
 * @returns {Promise<boolean>} true se copiou.
 */
async function copiarTexto(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    return true;
  } catch (erro) {
    return false;
  }
}

/**
 * Cria um botão que copia o texto informado e mostra confirmação.
 * @param {string} texto - Texto a copiar.
 * @returns {HTMLButtonElement} Botão pronto.
 */
function criarBotaoCopiar(texto) {
  const botao = criarElemento("button", "botao botao--secundario botao--pequeno", MENSAGEM_COPIAR);
  botao.type = "button";
  botao.addEventListener("click", async () => {
    const copiou = await copiarTexto(texto);
    if (!copiou) return;
    botao.textContent = MENSAGEM_COPIADO;
    setTimeout(() => { botao.textContent = MENSAGEM_COPIAR; }, TEMPO_MENSAGEM_MS);
  });
  return botao;
}

/**
 * Cria um bloco de texto com botão de copiar.
 * @param {string} rotulo - Título do bloco.
 * @param {string} texto - Conteúdo copiável.
 * @returns {HTMLElement} Bloco pronto.
 */
function criarBlocoCopia(rotulo, texto) {
  const bloco = criarElemento("div", "bloco-copia");
  bloco.append(criarElemento("p", "bloco-copia__rotulo", rotulo));
  bloco.append(criarElemento("pre", "bloco-copia__texto", texto));
  bloco.append(criarBotaoCopiar(texto));
  return bloco;
}

/**
 * Cria uma lista com marcadores.
 * @param {string[]} itens - Textos da lista.
 * @returns {HTMLUListElement} Lista pronta.
 */
function criarLista(itens) {
  const lista = criarElemento("ul", "lista");
  itens.forEach((item) => lista.append(criarElemento("li", "", item)));
  return lista;
}

/**
 * Cria uma seção do detalhe com título.
 * @param {string} titulo - Título da seção.
 * @param {HTMLElement[]} conteudo - Elementos internos.
 * @returns {HTMLElement} Seção pronta.
 */
function criarSecao(titulo, conteudo) {
  const secao = criarElemento("section", "secao");
  secao.append(criarElemento("h3", "secao__titulo", titulo));
  conteudo.forEach((elemento) => secao.append(elemento));
  return secao;
}

/**
 * Cria subtítulo seguido de lista.
 * @param {string} subtitulo - Texto do subtítulo.
 * @param {string[]} itens - Itens da lista.
 * @returns {HTMLElement[]} Subtítulo e lista.
 */
function criarGrupoLista(subtitulo, itens) {
  return [criarElemento("h4", "", subtitulo), criarLista(itens)];
}

/**
 * Cria a tabela de barras do diagnóstico.
 * @param {{item: string, nota: number, achado: string}[]} diagnostico - Itens avaliados.
 * @returns {HTMLElement} Bloco do diagnóstico.
 */
function criarDiagnostico(diagnostico) {
  const bloco = criarElemento("div", "diagnostico");
  diagnostico.forEach((linha) => {
    const container = criarElemento("div", "diagnostico__linha");
    const barra = criarElemento("div", "barra");
    const preenchimento = criarElemento("div", obterClasseBarra(linha.nota));
    preenchimento.style.width = `${(linha.nota / NOTA_MAXIMA) * 100}%`;
    barra.append(preenchimento);
    container.append(criarElemento("strong", "", `${linha.item} — ${linha.nota}/${NOTA_MAXIMA}`));
    container.append(barra, criarElemento("p", "diagnostico__achado", linha.achado));
    bloco.append(container);
  });
  return bloco;
}

/**
 * Monta a seção da Etapa 2 (projeto no Claude).
 * @param {object} projeto - Dados do projeto.
 * @returns {HTMLElement} Seção pronta.
 */
function montarSecaoProjeto(projeto) {
  return criarSecao("Etapa 2 — Projeto no Claude", [
    criarBlocoCopia("Nome do projeto", projeto.nome),
    criarBlocoCopia("Descrição", projeto.descricao),
    criarBlocoCopia("Instruções do projeto", projeto.instrucoes),
    ...criarGrupoLista("Materiais de referência", projeto.materiais),
  ]);
}

/**
 * Monta a seção da Etapa 3 (análise).
 * @param {object} perfil - Perfil completo.
 * @returns {HTMLElement} Seção pronta.
 */
function montarSecaoAnalise(perfil) {
  const { analise, diagnostico } = perfil;
  const nota = calcularNotaGeral(diagnostico);
  return criarSecao("Etapa 3 — Análise", [
    criarElemento("p", "", `Nota geral estimada: ${nota}/${NOTA_MAXIMA}`),
    criarDiagnostico(diagnostico),
    ...criarGrupoLista("Pontos fortes", analise.fortes),
    ...criarGrupoLista("Pontos fracos", analise.fracos),
    ...criarGrupoLista("Gargalos", analise.gargalos),
    ...criarGrupoLista("Erros de posicionamento", analise.erros),
    ...criarGrupoLista("Oportunidades ocultas", analise.ocultas),
  ]);
}

/**
 * Monta a seção da Etapa 4 (otimização).
 * @param {object[]} otimizacao - Itens a otimizar.
 * @returns {HTMLElement} Seção pronta.
 */
function montarSecaoOtimizacao(otimizacao) {
  const blocos = otimizacao.flatMap((item) => [
    criarElemento("h4", "", item.item),
    criarElemento("p", "", `Problema: ${item.problema}`),
    criarElemento("p", "", `Impacto: ${item.impacto}`),
    criarBlocoCopia("Versão otimizada", item.versao),
    criarElemento("p", "detalhe__aviso", `Por quê: ${item.justificativa}`),
  ]);
  return criarSecao("Etapa 4 — Otimização", blocos);
}

/**
 * Monta a seção da Etapa 5 (plano de ação).
 * @param {object} plano - Plano de ação.
 * @returns {HTMLElement} Seção pronta.
 */
function montarSecaoPlano(plano) {
  const semanas = criarElemento("div", "semanas");
  const colunas = [
    ["Prioridades imediatas", plano.imediatas],
    ["Próximos 7 dias", plano.dias7],
    ["Próximos 30 dias", plano.dias30],
  ];
  colunas.forEach(([titulo, itens]) => {
    const coluna = criarElemento("div", "semana");
    coluna.append(...criarGrupoLista(titulo, itens));
    semanas.append(coluna);
  });
  return criarSecao("Etapa 5 — Plano de ação", [
    semanas,
    ...criarGrupoLista("Estratégia de conteúdo", plano.conteudo),
    ...criarGrupoLista("Estratégia de networking", plano.networking),
    ...criarGrupoLista("Métricas para acompanhar", plano.metricas),
  ]);
}

/**
 * Monta a seção com mensagens e prompts prontos para copiar.
 * @param {object} perfil - Perfil completo.
 * @returns {HTMLElement} Seção pronta.
 */
function montarSecaoPrompts(perfil) {
  const mensagens = perfil.mensagens.map((m) => criarBlocoCopia(m.titulo, m.texto));
  const prompts = perfil.prompts.map((p) => criarBlocoCopia(p.titulo, p.texto));
  return criarSecao("Mensagens e prompts prontos", [
    criarElemento("h4", "", "Mensagens de conexão"),
    ...mensagens,
    criarElemento("h4", "", "Prompts para usar no Claude"),
    ...prompts,
  ]);
}

/**
 * Monta o painel de detalhe completo de um perfil.
 * @param {object} perfil - Perfil completo.
 * @returns {HTMLElement} Painel pronto.
 */
function montarDetalhe(perfil) {
  const detalhe = criarElemento("article", "detalhe");
  detalhe.append(criarElemento("h2", "detalhe__titulo", perfil.nome));
  detalhe.append(criarElemento("p", "detalhe__aviso", perfil.fonte));
  detalhe.append(criarElemento("p", "", perfil.objetivo));
  detalhe.append(montarSecaoProjeto(perfil.projeto));
  detalhe.append(montarSecaoAnalise(perfil));
  detalhe.append(montarSecaoOtimizacao(perfil.otimizacao));
  detalhe.append(montarSecaoPlano(perfil.plano));
  detalhe.append(montarSecaoPrompts(perfil));
  return detalhe;
}

/**
 * Cria o card resumido de um perfil.
 * @param {object} perfil - Perfil completo.
 * @param {(perfil: object, cartao: HTMLElement) => void} aoSelecionar - Ação do botão.
 * @returns {HTMLElement} Card pronto.
 */
function criarCartao(perfil, aoSelecionar) {
  const cartao = criarElemento("article", "cartao");
  const topo = criarElemento("div", "cartao__topo");
  const textos = criarElemento("div");
  textos.append(criarElemento("h2", "cartao__nome", perfil.nome));
  textos.append(criarElemento("p", "cartao__titulo", perfil.titulo));
  topo.append(criarElemento("div", "avatar", perfil.iniciais), textos);

  const nota = criarElemento("div", "nota-geral");
  nota.append(criarElemento("span", "nota-geral__valor", String(calcularNotaGeral(perfil.diagnostico))));
  nota.append(criarElemento("span", "nota-geral__rotulo", `/ ${NOTA_MAXIMA} nota estimada`));

  const etiquetas = criarElemento("div", "etiquetas");
  perfil.etiquetas.forEach((texto) => etiquetas.append(criarElemento("span", "etiqueta", texto)));

  const botao = criarElemento("button", "botao", "Ver análise completa");
  botao.type = "button";
  botao.addEventListener("click", () => aoSelecionar(perfil, cartao));
  cartao.append(topo, nota, etiquetas, botao);
  return cartao;
}

/**
 * Inicializa a página: renderiza os cards e controla o detalhe aberto.
 * @param {object[]} perfis - Lista de perfis.
 * @returns {void}
 */
function iniciarPagina(perfis) {
  const grade = document.getElementById("grade-cartoes");
  const area = document.getElementById("area-detalhe");
  if (!grade || !area) return;

  const abrirDetalhe = (perfil, cartao) => {
    grade.querySelectorAll(".cartao--ativo").forEach((c) => c.classList.remove("cartao--ativo"));
    cartao.classList.add("cartao--ativo");
    area.replaceChildren(montarDetalhe(perfil));
    area.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  perfis.forEach((perfil) => grade.append(criarCartao(perfil, abrirDetalhe)));
}

iniciarPagina(PERFIS);
