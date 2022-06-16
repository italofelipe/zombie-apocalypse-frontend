# Zombie Apocalypse

Uma aplicação de apocalipse zumbi feita com Next.js, Styled Components and TypeScript.

## Início rápido

- Clone esse projeto e o projeto https://github.com/italofelipe/zombie-apocalipse-backend
- Rode `npm i` ou `yarn` dentro da pastas do projeto
- Rode `yarn dev` ou `npm dev` dentro da pasta desse projeto, e `yarn start` ou `npm start` dentro do projeto backend mencionado acima.
- Umz vez executados os passos acima, está tudo pronto para usar a aplicação!

## Link do app em produção:

Front End: https://zombie-apocalypse-frontend.vercel.app/
Backend: https://zombie-apocalypse-backend.herokuapp.com/survivors

### Tecnologias

- Next.js (framework que implementa o React.js)
- TypeScript
- Styled Components
- React Testing Library
- Jest
- Cypress
- Axios
- React Modal

# Nos bastidores:

Inicialmente, concentrei meus esforços em configurar o ambiente de desenvolvimento, que consiste de:

- Configurar projeto (Next JS)
- Configurar ambiente de testes (Jest) e biblioteca de testes para o React (React Testing Library)
- Configurar git hooks (Husky, lint-staged e @commitlint)
- Configurar estilos globais (como por exemplo css reset) com Styled Components
- Configurar o \_app.tsx page, que é um entrypoint customizado para aplicações Next.
- Configurar Cypress.
- Configurar jobs de CI/CD (GitHub Actions) no arquivo yml.
- Configurar o projeto de backend fake (https://github.com/italofelipe/zombie-apocalipse-backend) para servir dados à aplicação.

Após a conclusão dos passos acima é que comecei a codificar de verdade. Comecei com a primeiro com a definição de tipos, tipos esses que seriam usados por toda a aplicação.

Feito isso, parti para a chamada à API dentro dos componentes, e com os dados, criei componentes menores (SelectedSurvivor e SurvivorList), que recebem esses dados via props, e caso esses componentes executem alguma lógica (como por exemplo infectar um sobrevivente), o componente sempre manda um callback para o componente pai, notificando-o assim de uma alteração. Tomei essa decisão pois optei por não usar redux ou nenhum outro gerenciador de estados, uma vez que achei a aplicação muito simples, e não queria praticar o "over-engineering".

Uma vez consumida a API no lado do front end, decidi quebrar a chamada a API em um hook, decisão essa que acabou por "sacrificando" o SSR, pois não há como o next executar um hook do React em sua função para executar lógicas no lado do servidor, algo que só descobri momentos antes de entregar, rsrs.

Uma vez criado o hook, foquei em implementar o layout e deixá-lo responsivo, tratar possíveis erros que poderiam acontecer. Então, parti para a lógica de filtro de infectados pelo nome. Para isso, normalizei as strings, comparando os nomes em lowerCase e o que o usuário digita também em lower case, afim de mitigar erros simplesmente por causa de "capitallizing".

Feito o filtro por nome, parti para o filtro por estado de saúde, que foi mais simples.

Terminados os filtros, implementei alguns tratamentos de erros, melhorias pequenas de UI, aparei as pontas soltas que tinha deixado no código, melhorei a responsividade e removi algumas coisas desnecessárias, e por fim, parti para os testes.

### A melhorar:

O tempo dado a esse teste foi mais que justo, porém, por questões de agenda e trabalho, não consegui dedicar tanto tempo quanto desejava para a confecção desse desafio, portanto, deixo aqui as coisas que sei que poderiam ser melhoradas:

- SSR. Descobri tarde de mais que não é possível chamar react hooks dentro de getServerSideProps, por isso, a busca à API de sobreviventes só acontece do lado do cliente, e não no servidor, e é algo que eu queria ter implementado.

- Melhorias de UI: Não tive tanto tempo para pensar mais cuidadosamente em paleta de cores, portanto, pensei em como fazer uma aplicação com temática de zumbis, só isso, e então, foquei mais na parte de codificação, deixando um pouco de lado o design.

- Testes: Coloquei uma cobertura bem básica de testes, e testes, definitivamente, era algo que também queria ter entregue com uma cobertura maior, tanto com o Cypress como os testes unitários. Os que foram feitos, basicamente verificam se os componentes são montados corretamente, até abordam pequenos detalhes, mas não exploram a fundo funcionalidades core, que são um pouco mais difíceis de mockar e se testar unitariamente.

- Animações/Transições: Suavizar transições, quando algo é exibido ou deixa de ser exibido na tela afim de proporcionar uma experiência de uso mais agradável.

Espero que tenham gostado ;)

#### Italo Chagas - Front End Technical Leader
