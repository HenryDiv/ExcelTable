# Tabela para Excel

Este repositório contém uma aplicação web que permite inserir dados em uma tabela e exportá-los para um arquivo Excel. A aplicação é construída usando HTML, CSS e JavaScript.

## Demonstração

![Tabela Excel](link-da-imagem-da-tabela)

## Tecnologias Utilizadas

- **HTML**: Para estruturar a interface da tabela.
- **CSS**: Para estilizar a tabela e melhorar a apresentação.
- **JavaScript**: Para adicionar a funcionalidade de inserção de dados na tabela e exportação para Excel.
- **Biblioteca `xlsx`**: Utilizada para gerar o arquivo Excel a partir da tabela.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

- `index.html`: O arquivo principal que contém a estrutura da tabela e os inputs.
- `style.css`: O arquivo de estilo que define a aparência da tabela e dos inputs.
- `script.js`: O arquivo que contém a lógica para adicionar itens à tabela e exportar para Excel.

### `index.html`

Este arquivo contém a estrutura da aplicação. Ele inclui campos de entrada para descrição do produto, valor e quantidade, além de uma tabela para exibir os dados inseridos.

### `style.css`

Este arquivo estiliza a tabela, campos de entrada e botões, proporcionando uma melhor experiência visual. As principais características do CSS incluem:

- Estilização global que remove margens e preenchimentos, definindo uma fonte padrão.
- Estilo centralizado para o cabeçalho (`h1`), com espaçamento de letras e margens.
- Um layout flexível para os campos de entrada, permitindo uma melhor distribuição e alinhamento.
- Estilo dos botões que inclui transições suaves e efeitos de sombra ao passar o mouse.
- Estilo da tabela com cabeçalhos escuros e células com bordas.
- Regras de mídia para ajustar a largura e altura dos inputs em telas menores.

### `script.js`

Contém as funções para:

- **Adicionar Itens**: A função `addItem()` coleta os valores inseridos nos campos de entrada e os adiciona à tabela. Se algum campo estiver vazio, um alerta é exibido solicitando que o usuário insira todos os valores. Após adicionar os dados, os campos de entrada são limpos.

- **Exportar para Excel**: A função `exportarExcel()` converte a tabela em um arquivo Excel utilizando a biblioteca `xlsx`. O arquivo gerado será nomeado como `tabela_produtos.xlsx`.

## Como Usar

1. Clone o repositório:
`git clone https://github.com/HenryDiv/ExcelTable.git`

2. Navegue até o diretório do projeto:
`cd ExcelTable`

3. Abra o arquivo index.html em seu navegador.

4. Preencha os campos de entrada com a descrição, valor e quantidade do produto.

5. Clique no botão "Inserir na tabela" para adicionar os itens à tabela.

6. Clique no botão "Gerar tabela" para exportar a tabela para um arquivo Excel.


