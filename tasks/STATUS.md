# STATUS — Plataforma de Envio de Currículos

**Objetivo:** análise, otimização e crescimento estratégico do LinkedIn de cada pessoa, em uma
página `index.html` com um card por perfil.
**Partes interessadas:** Gelvazio (decide, aprova e usa).
**Links:** [Regras](../AGENTS.md) · [Etapas](etapas/) · [Concluídas](task_complete.md) · [Recados](RECADOS.md)

Legenda: ⬜ Pendente · 🔄 Em progresso · ✅ Concluído · ⛔ Bloqueado · 👀 Aguardando o usuário ·
Prioridade: 🔴 Máxima · 🟠 Alta · 🟡 Média · 🟢 Baixa

## 🧭 Frentes de trabalho

| Frente | Tarefa (etapa) | Situação | Atualizado em |
|---|---|---|---|
| Claude Code (Sonnet 5.5) (local · main) | LINKEDIN (001-3f9a1c7e) | 🔄 Em execução | 2026-10-16 |

## 📌 Tarefas

| Tarefa | Título | Prioridade | Modelo | Depende de | Status | Em uso por | Etapa |
|---|---|---|---|---|---|---|---|
| **LINKEDIN** | **Página `index.html` com cards de análise de LinkedIn** | 🟠 Alta | — | Nenhuma | 🔄 Em progresso | — (não reservável) | [ETAPA-001](etapas/ETAPA-001-3f9a1c7e-LINKEDIN-INDEX.md) |
| LINKEDIN.1 | Criar `index.html`, estilo, script e o card de GELVAZIO CAMARGO | 🟠 Alta | MEDIO · Sonnet | Nenhuma | 🔄 Em execução | Claude Code (Sonnet 5.5) (local · main) (desde 2026-10-16) | [ETAPA-001](etapas/ETAPA-001-3f9a1c7e-LINKEDIN-INDEX.md) |
| LINKEDIN.2 | Aceite do usuário e conteúdo da página-base do Notion | 🟠 Alta | Usuário | LINKEDIN.1 | ⬜ Pendente | — | [ETAPA-001](etapas/ETAPA-001-3f9a1c7e-LINKEDIN-INDEX.md) |

## Escopo do projeto

- **Entra:** `index.html` com um card por pessoa (Gelvazio agora; Taila Cellarius e Jéssica
  Moratelli depois), cada um com diagnóstico, otimização e plano de crescimento do LinkedIn.
- **Não entra:** automação no LinkedIn, envio de mensagens ou acesso à conta de ninguém.

## 🗂️ Etapas

| Etapa | Assunto | Arquivo |
|---|---|---|
| 001-3f9a1c7e | LINKEDIN: página `index.html` com cards | [ETAPA-001-3f9a1c7e-LINKEDIN-INDEX.md](etapas/ETAPA-001-3f9a1c7e-LINKEDIN-INDEX.md) |

## Riscos

| Risco | Chance | Impacto | Plano B | Situação |
|---|---|---|---|---|
| Página do Notion (base do pedido) não carrega sem navegador | Alta | Conteúdo do card não seguir o Notion | Basear no PDF do currículo e em boas práticas; usuário cola o texto do Notion depois | Ocorreu — ver LINKEDIN.2 |

## Bloqueios gerais (sem tarefa)

| Data | Motivo | O que destrava | Resolvido em |
|---|---|---|---|

## Registro de decisões

| Data | Decisão | Quem | Por quê |
|---|---|---|---|
| 2026-10-16 | Regras de `C:\fontes\rules-ai` aplicadas ao projeto: `AGENTS.md` + quadro em `tasks/` | Gelvazio | Pedido no chat |
| 2026-10-16 | Cards dirigidos por dados (`js/dados-perfis.js`), para acrescentar Taila e Jéssica sem mexer na página | Claude Code | Pedido: "depois farei 1 card em nome de…" |

## Pendências (ficou para depois)

| Data | Pendência | Motivo |
|---|---|---|
| 2026-10-16 | Cards de TAILA CELLARIUS e JESSICA MORATELLI | O usuário fará depois |

## Lições aprendidas

| Data | Lição | Regra criada |
|---|---|---|
