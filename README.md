# Alura
Estudos Alura, aqui está oque estou estudando na alura
FRONT_END 
01- Oque é o HTTP?
O HTTP é um protocolo que define as regras de comunicação entre cliente e servidor na internet.
Navegador -> Internet -> Servidor
*Qual é o significado do HTTP?
R= Hypertext Transfer Protocol
----------------------------
*O protocolo HTTP segue o modelo Client-Server. O que o navegador (como Chrome ou Firefox) representa nesse modelo? O cliente ou o servidor?
R= Cliente
-------------------------------------------------------------------------------------------------------------------------------------------
*O cliente inicia a comunicação e o servidor responde. No entanto, qual é o papel do HTTP entre o cliente e o servidor?
R= Estabelecer regras de comunicação
-----------------------------------------------------------------------------------------------------------------------
02 - A Web segura - HTTPS
*O que acontece com nossos dados quando usamos HTTP , ou seja sem a letra S ao final?
R= Os dados são transportados em texto puro para o servidor, visível para qualquer um.
------------------------------------------------------------------------------------
-Só com HTTPS a web é segura.
-HTTPS significa usar um certificado digital no servidor.
-O certificado prova a identidade e tem validade
-O certificado possui uma chave publica.
-A chave é utilizada pelo navegador para criptografar os dados.
HTTPS é basicamnete o  protocolo HTTP, só que em vez de transportar o texto puro par ao servidor, com o HTTPS os dados vão criptografados, sem permitir que
outros intermediários nesta requisição possam ver os daods que estão sendo enviados, ultiliza o certificado digital, e o navegador tem uma chave publica e o
servidor possui uma chave privada.
* CERTIFICADO DIGITAL
Um certificado digital prova uma identidade para um site, onde temos informações sobre o seu domínio e a data de expiração desse certificado.
Além disso, o certificado ainda guarda a chave pública que é utilizada para criptografar (cifrar) os dados que são trafegados entre cliente e servidor.
-----------------------------------------------------------------------------------------------------------------------------------------------------------
*Sobre as características do HTTPS, selecione todas as opções abaixo que estejam corretas:
R= A chave privada fica apenas no lado do servidor.
R= O certificado prova a identidade e tem validade.
R= O certificado guarda a chave pública.
-------------------------------------------------------------------------------------------
*Qual é a finalidade das autoridades certificadoras?
R= Garantir que podemos confiar naquele certificado (identidade).
------------------------------------------------------------------
03 - Endereços sob o seu Domínio
----------------------------------
HTTP://WWW.ALURA.COM.BR
HTTP = Protocolo
WWW.ALURA.COM.BR = Domínio
Domínio é basicamnete o endereço IP, só que com um nome facil de ser chamado e gravado, um endereço IP raíz por exmeplo é
HTTP://52.206.164.173, usando tanto este quando o (WWW.ALURA.COM.BR), nos levariam para o mesmo caminho
DNS = (Domain Name System) Age como um banco de dados dos dominios, o navegador manda o seu dominio por escrito para o servidor DNS
e lá ele procura o endereço IP deste link e manda de volta este resultado para o navegador

---------------------------------------------------------------
*O que é um domínio (ou domain name) e qual a sua importância?
R= O domínio é o nome do site na Web. Ele facilita a navegação do usuário, que não precisa lembrar o IP de cada site.
----------------------------------------------------------------------------------------------------------------------
*Qual é o objetivo ou a função do DNS (Domain Name System ou servidor de domínios)?
R= O DNS tem como função realizar a tradução do nome de um domínio para o endereço de IP correspondente.
O DNS realiza a tradução do nome de um domínio para o endereço de IP. Existem vários servidores DNS no mundo e é fundamental para a nossa web o funcionamento deles
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
PORTAS
Porta padrão de HTTP é 80
Porta padrão de HTTP é 443
ambas as portas não são necessárias serem preenchidas, o navegador e o servidor já fazem a requissição e te dão o resultado sem necessidade do usuário colocar a porta
RECURSOS
Recursos fica na parte da URL e é onde voce pode especificar qual parte especifica daquele site voce quer ou esta acessando no momento
HTTPS://WWW.ALURA.COM.BR.443/COURSE/INTRODUCAO-HTML-CSS = URL
URL = Endereço da Web 
HTTPS = Protocolo
WWW.ALURA.COM.BR. = Domínio
WWW =  Estamos na Web
.COM = Define se é comercial, governamental (GOV) etc..
.BR = Site do brasil
:443 = Porta (opcional)
/COURSE/INTRODUCAO-HTML-CSS = Recurso
-URL são os endereços da Web
-Uma URL começa com o protocolo (por exemplo https://) seguido pelo domínio (www.alura.com.br)
-Depois do domínio pode vir a porta, se não for definida é utilizada a porta padrão desse protocolo
-Após o domínio:porta, é especificado o caminho para um recurso (/course/introducao-html-css)
-Um recurso é algo concreto na aplicação que queremos acessar.

-----------------------------------------------------------------------------------------------------
04 - O cliente pede e o servidor responde
-----------------------------------------
REQUEST - RESPONDE
o Navegador PEDE e o Servidor RESPONDE
Cada requisição é unica, EXEMPLO:
quando fazemo so login e o navegado rmnad aestes dados para o servidor, e o servidor verifica os dados e gera uma identificação
para i usuario e fala pra o navegador guardar etsa requisição e mandar para o servidor em outras futuras requisições.
SESSÂO
Serve pra guardar e manter os usuarios logados, pra guaradar infromações
COOKIES
A tecnologia de sessão só é possivel pois ele guarda os cookies, no caso eles são as infromações, areas que voce acessou para continuar logado quando acessar
outras paginas que acessar no site
-O HTTP usa sessões para salvar informações do usuário
-Sessões só são possíveis por uso de Cookies
-Cookies são pequenos arquivos que guardam informações no navegador
-O HTTP é stateless, não mantem estado.

--------------------------------------------
*Qual das informações abaixo é verdadeira?
R= Uma requisição sempre deve ser enviada com todas as informações necessárias, o que faz uma requisição ser sempre independente das demais.
--------------------------------------------------------------------------------------------------------------------------------------------
*O que é uma sessão HTTP?
R= É o tempo que o cliente utiliza um web app.
-----------------------------------------------
*Qual dessas alternativas é verdadeira?
R= Uma comunicação com HTTP sempre é iniciada pelo cliente que manda uma requisição ao servidor esperando por uma resposta.
----------------------------------------------------------------------------------------------------------------------------
O que você aprendeu nesse capítulo?
-O protocolo HTTP segue o modelo Requisição-Resposta
-Sempre o cliente inicia a comunicação
-Uma requisição precisa ter todas as informações para o servidor gerar a resposta
-HTTP é stateless, não mantém informações entre requisições
-As plataformas de desenvolvimento usam sessões para guardar informações entre requisições
-------------------------------------------------------------------------------------------
05 - Depurando a requisição HTTP
--------------------------------
STATUS CODE
200 - Ok
301 - Moved Permanently
404 - Not Found
500 - Internal Server Error
Se começar com tal numero é tal situação 
2 - Sucefull Responses (Deu Certo)
3 - Redirection Messages (Redirecionamento)
4 - Client Error Responses (Erro do cliente)
5 - server Error Responses (Erro do Servidor)

----------------------------------------------
*Qual dos códigos abaixo indica que a requisição foi bem sucedida?
R= 200
-------------------------------------------------------------------
*Qual deles representa algum problema gerado no servidor?
R= 500
---------------------------------------------------------
*Qual foi o código da resposta?
R= 404
-------------------------------
06 - Parâmetros da Requisição


























