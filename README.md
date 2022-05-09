<h1>Feedget - Backend com Node</h1>
<p align="center">
<a href="#tools">Ferramentas</a> • 
<a href="#routes">Rotas</a> • 
<a href="#study">Aprendizado</a>
</p>
<p>Projeto da nlw ( evento da Rocketseat ), o frontend foi feito react, que consome uma api do backend em node. Este projeto está hospeadado na Railway, acesse em <a href="https://feedget-backend-node-production.up.railway.app/">https://feedget-backend-node-production.up.railway.app/</a>.</p>

<br>
<h2 id="tools">🛠️ Ferramentas</h2>

<ul>
<li>Node</li>
<li>Typescript</li>
<li>Mailtrap com Nodemailer</li>
<li>Prisma</li>
<li>Express</li>
<li>Jest para testes</li>
</ul>

<br>
<h2 id="routes">🔗 Rotas</h2>

<br>
<ul>
<li>/ [ GET ]</li>
<li>/feedbacks [ POST ]</li>
</ul>

<br>
<h2 id="study">🚀 Inversão de dependência</h2>
<p>
    Nesta técnica criamos implementações de contratos/interfaces para que bibliotecas e códigos de terceiros respeitem esses contratos/interfaces. O principal
    ganho com a utilização dessa técnica se aplica nas funções, objetos, classes que não dependerão diretamente desses serviçoes de terceiros, além facilidade de
    trocar as ferramentas, como prisma ou Nodemailer.
</p>



