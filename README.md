# garden-of-eden - Laboratório de Estudos Cloud-Native

Este repositório serve como um ambiente prático para o estudo e experimentação com tecnologias de contêineres, orquestração e GitOps.

---

## 🎯 Objetivo

O objetivo principal é aprofundar o conhecimento nas seguintes tecnologias, utilizando esta aplicação como base para os testes:

-   **Podman**
-   **Kubernetes**
-   **ArgoCD**

---

Inicialmente, todo o ambiente está configurado para ser executado com **Podman**. A escolha foi feita para explorar uma alternativa *daemonless* e *rootless* para a gestão de contêineres, compreendendo suas vantagens e diferenças em relação ao Docker.

---

## 🚀 Ponto de Partida

Clonar projetos das apps com git.

```
# conceder permissao de execucao do script
chmod +x ./scripts/clone-apps.sh

# executar o script
./scripts/clone-apps.sh
```

## 🛠️ Começando (com Podman)

### Pré-requisitos

-   **Podman**: [Guia de Instalação](https://podman.io/getting-started/installation)

### Executando a Aplicação

1.  **Clone o repositório:**
    ```bash
    git clone git@github.com:stanleygomes/garden-of-eden.git
    cd garden-of-eden
    ```

2.  **Construa a imagem do contêiner:**
    ```bash
    podman-compose up -d
    ```

A aplicação estará disponível em `http://localhost:4500`.
