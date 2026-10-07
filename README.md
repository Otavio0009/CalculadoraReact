# 🧮 Calculadora React

Calculadora web desenvolvida em **React** como primeiro desafio de estudos na área de front-end. O projeto usa **Vite** como bundler e **styled-components** para a estilização.

## ✨ Funcionalidades

- Soma, subtração, multiplicação e divisão
- Encadeamento de operações (ex.: `2 + 3 × 4` calcula passo a passo)
- Números decimais (exibidos com vírgula, padrão brasileiro)
- Porcentagem (`%`)
- Inverter sinal (`±`)
- Apagar o último dígito (backspace)
- Limpar tudo (`C`)
- Tratamento de erro para divisão por zero (exibe `Erro`)
- Arredondamento de resultados para evitar problemas de ponto flutuante (ex.: `0,1 + 0,2 = 0,3`)

## 🛠️ Tecnologias

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [styled-components](https://styled-components.com/)
- [React Icons](https://react-icons.github.io/react-icons/) (Feather, Tabler e Font Awesome 6)

## 📁 Estrutura do projeto

```
calculadora/
├── public/
├── src/
│   ├── Components/
│   │   ├── Button/
│   │   │   ├── index.jsx
│   │   │   └── styles.js
│   │   └── Input/
│   │       ├── index.jsx
│   │       └── styles.js
│   ├── App.jsx        # Lógica da calculadora e layout dos botões
│   ├── global.js      # Estilos globais
│   ├── main.jsx       # Ponto de entrada da aplicação
│   └── styles.js      # Container, Content e Row do layout principal
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm (já vem com o Node.js)

### Passo a passo

```bash
# 1. Clone o repositório
git clone <url-do-repositorio>

# 2. Entre na pasta do projeto
cd calculadora

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Depois, abra o endereço exibido no terminal (geralmente `http://localhost:5173`).

### Outros comandos

| Comando           | Descrição                               |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento    |
| `npm run build`   | Gera a versão de produção na pasta `dist` |
| `npm run preview` | Visualiza localmente o build de produção |

## 🧠 Como funciona

O estado da calculadora é controlado por quatro `useState` no componente `App`:

| Estado          | Função                                                      |
| --------------- | ----------------------------------------------------------- |
| `currentNumber` | Valor exibido no visor (guardado como string)               |
| `firstNumber`   | Primeiro operando, salvo ao escolher uma operação           |
| `operation`     | Operação selecionada (`+`, `-`, `*` ou `/`)                 |
| `newNumber`     | Indica se o próximo dígito deve iniciar um novo número      |

Principais funções:

- `handleAddNumber`: adiciona um dígito ao número atual
- `handleDecimal`: insere a vírgula/ponto decimal
- `handleOperation`: guarda a operação e calcula o resultado parcial, se já houver uma pendente
- `handleEquals`: calcula e exibe o resultado final
- `handleClear` / `handleBackspace`: limpam tudo ou apagam o último dígito
- `handleToggleSign` / `handlePercent`: invertem o sinal e calculam a porcentagem

## 🧩 Componentes

- **`Input`**: visor da calculadora (campo desabilitado que recebe o valor via `value`)
- **`Button`**: botão reutilizável que recebe `label` (texto ou ícone) e `onClick`

## 📌 Próximos passos

- [ ] Adicionar suporte ao teclado físico
- [ ] Reduzir o tamanho da fonte quando o número for muito grande
- [ ] Criar histórico de operações
- [ ] Deixar o layout responsivo para telas pequenas
- [ ] Adicionar testes automatizados

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo. Sinta-se à vontade para usar e modificar.
