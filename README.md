# Movie Catalog
Desafio React Native

# Criar um aplicativo de consulta a API de Filmes #

Criar um aplicativo para consultar a API de Filmes e trazer os filmes enviados pelo endpoint. Seguem abaixo telas como guia:

![tela1](https://user-images.githubusercontent.com/7905193/33221593-75c45b4e-d12f-11e7-833c-cc4acbd5ef0e.png)
![tela2](https://user-images.githubusercontent.com/7905193/33221600-85b668ee-d12f-11e7-95fa-8f66bd47f6ab.png)

### **O aplicativo deve contemplar** ###

- __Uma lista de filmes__. Exemplo de chamada na API: `https://desafio-mobile-pitang.herokuapp.com/movies/list?page=0&size=3`.
    * [ ] Paginação na tela de lista, com scroll infinito (incrementando o parâmetro `page`).
    * [X] Cada filme deve exibir Nome do filme e Foto do filme.
    * [X] Ao clicar em um item da lista, deve levar ao detalhe do filme.
- __Detalhes de um filme__. Exemplo de chamada na API: `https://desafio-mobile-pitang.herokuapp.com/movies/detail/59e8ec97f36d280364369ca1`.
    * [X] O item de detalhe deve exibir Nome, Foto e Descrição do filme.

### **Essencial** ##
* [X] React Native
* [ ] Hooks ou Redux
* [ ] Guidelines UX e UI.
* [X] Maior ou igual JavaScript ES6
* [ ] Responsivo

### **Desejável** ###

* [ ] Testes
* [ ] Build no IOS

### **Sugestões** ###

Nesta seção sugerimos algumas bibliotecas para o uso, mas fique à vontade para escolher outras que não estiverem na lista.

* [X] Axios
* [X] Styled-components

### **Escolhas do autor** ###

* [X] Typescript
* [X] ESLint e Prettier
