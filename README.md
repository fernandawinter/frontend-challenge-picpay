# PicPay - Frontend Challenge

O desafio consiste em desenvolver uma aplicação com um login, e um dashboard com um CRUD com paginação, filtro e ordenaçao de colunas (ASC/DESC).


## Tecnologias utilizadas

- Angular CLI: versão 15.2.6
- Angular: versão 15.2.0
- Node: versão 18.16.0
- Bootstrap: versão 5.2.3
- Karma: versão 6.4.0

## Onde a aplicação está hospedada:
- Netlify: `https://challenge-frontend-picpay.netlify.app`


## Como rodar a aplicação

- Rode o comando `ng build` para compilar o projeto. Os artefatos da compilação serão armazenados no diretório `dist/`
- Rode o comando `ng serve` para iniciar o servidor. A porta `http://localhost:4200/` estará disponível para a visualização da aplicação.
- Rode o comando `ng test` para iniciar os testes. 


## Como foi construído
- Commits com conventional commits configuration - dando mais uniformidade para todos os commits feitos.
- Nomes de variáveis sempre respeitando o Clean Code.



## O que poderia ter feito de diferente

- Testes unitários: foram feitos testes no app component. Entendo que deveriam existir muitos outros testes, separados em Login, Create, Edit, List e View. Os testes do app component foram feitos utilizando o Karma.
- Testes end-2-end: não deu tempo de adicionar testes E2E, mas a ideia era incorporar ao sistema de pagamentos, para a validação total. Para isso, seria utilizado o Protractor.
- Uso de ícones com o Fontawesome: tentei utilizar o Fontawesome para colocar ícones no site, como no input para verificar se a senha está correta (eye e eye slash), e ícones ao lado de Usuário, Título, Data, Valor, Pago e Ação.
- Também tentei colocar o favicon da Picpay (salvando em png e convertendo para ico, ou utilizando em png mesmo), porém sem sucesso.
- Paginação: sabia o código necessário para montar uma ordenação de páginas, mas não para fazer funcionar com a API.


## Aprendizados durante o desafio

- Foi a primeira vez que fiz um CRUD mais completo, com componente de pesquisa.
- Também aprendi mais sobre API's e endpoints.


