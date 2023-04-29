# PicPay - Frontend Challenge

O desafio consiste em desenvolver uma aplicação com um login, e um dashboard com um CRUD com paginação, filtro e ordenaçao de colunas (ASC/DESC).


## Tecnologias utilizadas

- Angular CLI: versão 15.2.6
- Angular: versão 15.2.0
- Node: versão 18.16.0
- Bootstrap: versão 5.2.3
- Karma: versão 6.4.0

## Onde a aplicação está hospedada:
[![Netlify Status](https://api.netlify.com/api/v1/badges/02ec64e3-56cf-4e8c-b834-7bc0d052f4d7/deploy-status)](https://app.netlify.com/sites/challenge-frontend-picpay/deploys)
- Netlify: `https://challenge-frontend-picpay.netlify.app`


## Como rodar a aplicação

- Rode o comando `ng build` para compilar o projeto. Os artefatos da compilação serão armazenados no diretório `dist/`
- Rode o comando `ng serve` para iniciar o servidor. A porta `http://localhost:4200/` estará disponível para a visualização da aplicação.
- Rode o comando `ng test` para iniciar os testes. 


## Como foi construído

- Commits com [[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)] - dando mais uniformidade para todos os commits feitos. 
- Nomes de variáveis, respeitando o Clean Code.
- Access token: foi salvo em um localStorage, no arquivo `payment.service.ts`. 

## Suposições

- Data eu considerei como "data e hora do registro", e não como data do pagamento. Interpretei assim. 

## O que poderia ter feito de diferente

- Testes unitários: foram feitos testes no app component. Entendo que deveriam existir muitos outros testes, separados em Login, Create, Edit, List e View. Os testes do app component foram feitos utilizando o Karma.
- Testes end-2-end: não deu tempo de adicionar testes E2E, mas a ideia era incorporar ao sistema de pagamentos, para a validação total. Para isso, seria utilizado o Cypress. Logando com o usuário e senha da Picpay, o usuário criaria um novo pagamento, clicando no botão "Criar novo pagamento". Então, preencheria as lacunas de Usuário, Nome, Sobrenome, Título, Valor e confirmaria se foi pago o valor ou não (se sim, dar o check no componente "Pago"). Clicar no botão "Enviar". Após isso, o usuário vai clicar no botão "Visualizar" e verificar suas informações. Em seguida, clicar no botão "Editar", e alterar alguma informação, clicando em seguida no botão "Atualizar". Por último, clica no botão "Deletar", para deletar as informações criadas anteriormente.
- Uso de ícones com o Fontawesome: tentei utilizar o Fontawesome para colocar ícones no site, como no input para verificar se a senha está correta (eye e eye slash), e ícones ao lado de Usuário, Título, Data, Valor, Pago e Ação, mas tive problemas na hora de fazer o deploy e por isso resolvi remover o FontAwesome.
- Também tentei colocar o favicon da Picpay (salvando em png e convertendo para ico, ou utilizando em png mesmo), porém sem sucesso por algum motivo estranho (já fiz isso em outros sites).
- Paginação: sabia o código necessário para montar uma paginação mais simples, que não consegui implementar com a API para fazer funcionar.
- Notificações: Poderia usar mais notificações, no sentido de ter mais alerts que informassem ao usuário sobre senha incorreta, usuário incorreto, tratamentos de erro em geral e mensagens de sucesso.
- Bootstrap: ter um melhor aproveitamentodo framework, com botões, paginação e visibilidade. 
- Máscaras e valores: alterar o formato de data (com a ISO) e valor em R$ e .
- A parte Mobile ficou um pouco de fora, mas vale ressaltar que sei o conceito de mobile-first e também já trabalhei em projetos de front-end para a geração de conteúdo Mobile.
- Eslint: ferramente ótima, que acredito que facilitaria muito meu código (eslint fix). Também já utilizei em outros projetos. Prettier também já utilizei.

## Aprendizados durante o desafio

- Foi a primeira vez que fiz um CRUD mais completo em Angular sozinha, sei que não concluí todas as etapas mas gostei da experiência.
- Também aprendi mais sobre API's e endpoints. O Swagger também foi uma surpresa, gostei bastante de testar, embora no início não estivesse entendendo muito bem como fazer com que os endpoits chegassem até a aplicação.
- O tempo passou bem rápido, e não consegui fazer tudo o que queria nesse desafio. Mas fiz da melhor maneira que sabia.


