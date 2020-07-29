# Aplicativo de consulta a API de Filmes #

## :camera: Demonstração
<h1 align="center"> <img alt="resultado" src="https://github.com/Samuel-Rodrigues/desafio-rn/blob/master/pitangar.gif"/>
</h1>

Aplicativo para consultar a API de Filmes e trazer os filmes enviados pelo endpoint.

### **O aplicativo deve contemplar** ###

- __Uma lista de filmes__. Exemplo de chamada na API: `https://desafio-mobile-pitang.herokuapp.com/movies/list?page=0&size=3`.
    * Paginação na tela de lista, com scroll infinito (incrementando o parâmetro `page`).
    * Cada filme deve exibir Nome do filme e Foto do filme.
    * Ao clicar em um item da lista, deve levar ao detalhe do filme.
- __Detalhes de um filme__. Exemplo de chamada na API: `https://desafio-mobile-pitang.herokuapp.com/movies/detail/59e8ec97f36d280364369ca1`.
    * O item de detalhe deve exibir Nome, Foto e Descrição do filme.

## :clipboard: Iniciando a aplicação Mobile (React-native)

1. Clone o repositório com `https://github.com/Samuel-Rodrigues/fortbrasil.git`
2. Instale todas as dependencias com o comando `yarn` e `cd ios; pod install; cd ..`
3. Digite `react-native run-ios` ou `react-native run-android`  para rodar o projeto

## :hammer: Ferramentas usadas

- ⚛️ **React-native** - Uma biblioteca JavaScript para criar mobile Apps 
- ⚛️ **Styled Components** - Biblioteca Javascript pra estilizar componentes
- 📄 **Axios** - Biblioteca Javascript para fazer requisições http
- 📄 **Redux** - Biblioteca Javascript para manipular estado da aplicação
- 📄 **Axios** - Biblioteca Javascript para fazer requisições httpo
- 📄 **Axios** - Biblioteca Javascript para fazer requisições http
... entre outras.
