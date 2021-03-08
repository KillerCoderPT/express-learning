# Express Learning Server

Este projecto é apenas um servidor de express para testes.



## Enviroment Variables

Para definir variaveis no windows, usamos o comando `set variable=value` e depois iniciamos o server. O comando para iniciar o servidor, tem que ser onde executamos este comando, isto porque estas variaveis são temporarias e só existem no terminal onde a executamos.

Se usarmos o terminal Git Bash, podemos usar o mesmo comando que usamos no linux `export variable=value`.

#### Neste Projecto

Neste projecto utilizei a biblioteca `config`.

Com esta biblioteca criei alguns ficheiros dentro da pasta `config`, e no ficheiro `config/custom-environment-variables.json` eu criei `mail.password`, para fazer esta variavel funcionar, primeiro precisamos de a definir `export app_password=1234` e depois podemos iniciar o servidor, se não a definirmos antes, vai dar erro.

## Debug

Ao utilizar a biblioteca `debug`, temos que definir um namespace para esta funcionar, por exemplo `const debug = require("debug")("app:debug");` aqui dei o nome de app:debug ao namespace que defini, outro exemplo utilizando o namespace startup `const debug = require("debug")("app:startup");`.

Para utilizarmos o debug durante o desenvolvimento, temos que exportar estes namespaces, por exemplo o namespace debug `export DEBUG=app:debug` e depois `npm run start`, para o namespace startup `export DEBUG=app:startup` e depois `npm run start`. Se quisermos utilizar os dois debugs, podemos exportar os dois da seguinte forma `export DEBUG=app:debug,app:startup` e depois `npm run start`, mas vamos imaginar que temos 5 ou 6 namespaces diferentes, seria chato ter que escrever todos eles não é? Para facilitar existe uma forma mais pratica do que escrever todos os namespaces `export DEBUG=app:*`.

Uma forma mais pratica ainda de iniciar o nosso server sem termos que fazer export seria ao usarmos o comando da seguinte forma `DEBUG=app:* npm run start`.

