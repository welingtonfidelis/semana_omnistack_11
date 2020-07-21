# Next Level Week 1

Esse projeto é resultado da semana omnistack 11 da equipe RocketSeat. Nele foram aplicadas as tecnologias NodeJs, Reactjs, React Native e Sqlite3 (através do query builder [knex]) para construção de uma aplicação chamada **Be The Hero**, que tem objetivo de dar as Ongs uma maneira de compartilhar à população, ocorrências que precisem de auxílio financeiro, para que qualquer pessoa disposta a ajudar com alguma valor possa entrar em contato.

## Requisitos

* [NodeJs] - Nodejs 10 ou superior;
* [Expo] - Aplicativo Expo instalado em seu smartphone;

## Instalação

### API
Dentro do diretório */api*, execute os comandos **npm install** para instalar as dependências necessárias ao projeto, **npx knex migrate:latest** para que o banco de dados seja criado juntamente com as tabelas necessárias (/src/database/db.sqlite) e por fim, **npm start** para que o servidor fique em execução na porta 3001 (pode ser alterada através do arquivo /src/server.js).

### WEB
Dentro do diretório */web*, execute os comandos **npm install** para instalar as dependências necessárias ao projeto e **npm start** para que o projeto seja executado. Aguarde até que uma nova janela/aba seja aberta em seu navegador padrão.

### MOBILE
Dentro do diretório */mobile*, execute os comandos **npm install** para instalar as dependências necessárias ao projeto. Caso o [Expo] requisite sua permissão para instalar a dependência de maneira "global" em seu sistema operacional, é recomendado que aceite e permita esta instalação para um funcionamento melhor da ferramenta. Dentro do diretório /src/sercices/api.js altere o endereço IP para o endereço de seu computador. Em seguida, use **npm start** para que o projeto seja executado e uma nova aba/janela de seu navegador padrão exiba um QRCode. Considerando que você possua o aplicativo [Expo] instalado em seu smartphone, escaneie este QRCode para que o aplicativo seja instalado em seu aparelho.

## Utilização
Caso deseje executar e testar apenas a api, pode importar [este arquivo] para o [Postman] e ter acesso às rotas dentro da aplicação.
Através do front-end web, uma ONG pode se cadastrar e receberá uma chave de acesso ao sistema. Com esta chave em mãos, a ONG pode cadastrar e excluir ocorrências.
Já o usuário interessado em visualizar estas ocorrências e ajudar a ONG, poderá acessar o aplicativo e ter uma lista de ocorrências em aberto, bem como entrar em contato com a ONG através do whatsapp ou e-mail.

## Contato
welingtonfidelis@gmail.com

Sugestões e pull requests são sempre bem vindos 🤓

License
----

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[Expo]: <https://expo.io/>
[NodeJs]: <https://nodejs.org/en/>
[knex]: <http://knexjs.org/>
[Sequelize]: <https://sequelize.org/>
[Postman]: <https://www.postman.com/downloads/>
[este arquivo]: <https://drive.google.com/file/d/1VT0OlosTLE5QMyiBnwiQ87d-85DJ4VxJ/view?usp=sharing>
;
