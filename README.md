#  Pokémon TCG Bot

Bot para Discord que consulta informações e preços de cartas de Pokémon TCG em tempo real.

##  Sobre o Projeto

Este bot utiliza a API do PokéWallet para buscar informações detalhadas sobre cartas de Pokémon, incluindo:
- Preços atualizados (USD)
- Raridade
 
## Funcionalidades

### Comando `/consultar`
Busca uma carta pelo seu ID ou Nome e retorna:
- Nome e número da carta
- Raridade
- Preços (em Dólar)

**Exemplo de uso:**
```
/consultar parametro: 075/131
```

##  Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript
- [Discord.js](https://discord.js.org/) - Biblioteca para interação com a API do Discord
- [Pokémon Pokewallet API]([(https://www.pokewallet.io/api-docs#endpoint-cards-id)]) - API de dados de cartas Pokémon

##  Pré-requisitos

- Node.js 18.x ou superior
- NPM ou Yarn
- Conta no Discord Developer Portal
- API Key do Pokewallet (gratuita)

##  Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/pokemonSearch.git
cd pokemonSearch
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `config.json` na raiz do projeto:
```json
{
  "token": "SEU_TOKEN_DO_DISCORD_BOT",
  "clientId": "ID_DO_SEU_BOT",
  "guildId": "ID_DO_SEU_SERVIDOR",
  "pokemonTcgApiKey": "SUA_CHAVE_DA_API_POKEMON"
}


