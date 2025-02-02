<h2 align="center"> Microsoft Azure: Functions </h2> <p align="center"> Implementação de uma função serverless consumida via requisição HTTP </p> <hr>

### 💻 Stack
Principais tecnologias utilizadas:

<img src="https://img.shields.io/badge/Node.js-18.x-green" alt="Node.js Badge" />
<img src="https://img.shields.io/badge/Azure%20Functions-blue" alt="Azure Functions Badge" />
<img src="https://img.shields.io/badge/Gemini%20Flash%201.5-orange" alt="Gemini Flash Badge" />
<hr>

### 🚀 Objetivo do Projeto
Projeto desenvolvido para fins de aprendizado, explorando como funções serverless funcionam na plataforma Azure. O exemplo foi criado para brincar com o nome do usuário e gerar frases em diferentes estilos, como "Alegria", "Raiva", "Sarcasmo" ou "Piada" usando o modelo de LLM Google Gemini.


### ⌨️ URL em Produção (atualmente offline):
```bash
# No query param "name", atribua um nome
$ https://mood-function.azurewebsites.net/api/httptalk?name=NOME
```
🎯 Exemplo
<p align="center"> <img src="https://github.com/reidn3r/azure-function/blob/main/assets/request-example.png" alt="Function Response"> </p>
📋 OBS:
Todas as frases de saída são geradas pela LLM Gemini.
<hr>

### 🌍 Localhost:
Para reproduzir a função em localhost, basta seguir os seguintes passos:

1. **Clonar o repositório:**
    - Clone o repositório para sua máquina local utilizando o comando:
      ```bash
      git clone git@github.com:reidn3r/azure-function.git
      ```

2. **Criar um projeto de função serverless na Azure:**
    - Crie uma **Function App** na Azure usando o portal ou a Azure CLI.

3. **Configurar a variável API_KEY:**
    - Em um arquivo `.env` na raiz do projeto, adicione a variável `API_KEY` com a chave de API do Gemini. O arquivo `.env` deve ter o seguinte conteúdo:
      ```env
      API_KEY=SuaChaveAPI
      ```

4. **Executar a função localmente:**
    - Com o ambiente configurado, execute a função localmente com o seguinte comando:
      ```bash
      func start
      ```
    - Isso iniciará a função na sua máquina local, permitindo que você a teste antes de fazer o deploy na Azure.
