#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NOCOLOR='\033[0m'

if ! command -v git &> /dev/null
then
    echo -e "${RED}Erro: O Git não está instalado.${NOCOLOR}"
    echo "Por favor, instale o Git para poder clonar os repositórios e tente novamente."
    exit 1
fi

TARGET_DIR="temp/apps"
REPO_FRONTEND="https://github.com/stanleygomes/essence-tube.git"
REPO_API="https://github.com/stanleygomes/essence-tube-api.git"

echo "Criando o diretório de destino: '$TARGET_DIR'..."
mkdir -p "$TARGET_DIR"

if [ -d "$TARGET_DIR/essence-tube" ] || [ -d "$TARGET_DIR/essence-tube-api" ]; then
    echo -e "${YELLOW}Aviso: Um ou ambos os diretórios dos aplicativos já existem em '$TARGET_DIR'.${NOCOLOR}"
    echo "O script não será executado novamente."
    exit 0
fi

echo "Clonando o repositório do frontend (essence-tube)..."
git clone "$REPO_FRONTEND" "$TARGET_DIR/essence-tube"

echo "Clonando o repositório da API (essence-tube-api)..."
git clone "$REPO_API" "$TARGET_DIR/essence-tube-api"

echo -e "\n${GREEN}Sucesso!${NOCOLOR} Os dois repositórios foram clonados para o diretório '$TARGET_DIR'."
