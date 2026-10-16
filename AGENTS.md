# 🤖 AGENTS.md — Plataforma de Envio de Currículos

> 🌐 **Regras globais:** além deste arquivo, valem as regras de `C:\fontes\rules-ai`
> (`regras/*.md`). Em divergência, vale a regra deste projeto; o usuário decide o que fazer.

## Antes de qualquer tarefa

1. Sincronizar (`git pull --rebase`) e ler [`tasks/STATUS.md`](tasks/STATUS.md).
2. Tarefa que muda algo vira etapa em [`tasks/etapas/`](tasks/etapas/) **antes** de executar;
   concluídas vão para [`tasks/task_complete.md`](tasks/task_complete.md).
3. Ciclo, reserva de subtarefa e níveis: `C:\fontes\rules-ai\regras\ciclo-da-task.md`,
   `frentes-e-reserva.md`, `niveis-e-modelos.md`, `quadro-de-tarefas.md`.

## Regras do projeto

- Página principal: `index.html` (estrutura) + `css/estilo.css` + `js/` — sem `style=""` nem JS inline.
- Cada pessoa é um objeto em `js/dados-perfis.js`; novo card = novo objeto, sem mexer em `app.js`.
- Código: SOLID, funções ≤ 45 linhas, nomes em português sem acentos, JSDoc, linhas ≤ 100.
- Sem navegador para validar e sem testes automatizados (só em correção de bug): `testes-validacao.md`.
- Git: tudo na `main`, `git add` por caminho, um commit por subtarefa, commit + push ao finalizar.
- Dados pessoais (endereço, telefone) do currículo não vão para a página.
- Ao concluir: responder apenas **TAREFA FINALIZADA E SINCRONIZADA!**
