API Google Books - Pesquisa de Livros

Este é um projeto que utiliza a API Google Books para realizar a pesquisa de livros e exibir os resultados em uma página web interativa. O usuário pode pesquisar por livros e visualizar informações como título, 
autor, categorias e até imagens dos livros. A aplicação também apresenta um slider com livros destacados. O projeto foi desenvolvido para fins acadêmicos.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Funcionalidades: 

Pesquisa de Livros: O usuário pode digitar o nome de um livro na barra de pesquisa ou clicar no ícone de lupa para realizar a pesquisa. O resultado será exibido com informações como título, autor e categorias. \
Exibição de Resultados: Os livros encontrados são mostrados em cards interativos que incluem a imagem do livro, título, autor e categorias. \
Slider de Livros Destacados: Exibe um slider com livros relacionados ao termo "Json" (pode ser alterado) para destacar livros de uma categoria específica. \
Responsividade: O layout é responsivo, com os cards e o slider ajustando-se automaticamente em telas menores.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Tecnologias Utilizadas: \
HTML5: Estrutura básica da página. \
CSS3: Estilos para o layout da página, incluindo a barra de pesquisa, cards e slider. \
JavaScript: \
Utilizado para interatividade na página. \
Integração com a API Google Books para buscar livros. \
Manipulação do DOM para exibição dos resultados e interação com o slider. \
API Google Books: Usada para buscar livros com base em termos de pesquisa fornecidos pelo usuário. \

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Estrutura do Projeto: \

/ (diretório raiz) \
│ \
├── index.html      # Página principal com o conteúdo HTML \
├── reset.css       # CSS para resetar estilos padrão do navegador \
├── style.css       # Estilos personalizados para o layout e design da página \
├── script.js       # Código JavaScript para buscar e exibir livros \
├── imagens/        # Diretório contendo ícones e imagens usadas no projeto \

index.html: Contém a estrutura HTML da página, incluindo a barra de pesquisa, slider e cards.  \
reset.css: Aplica um reset CSS para remover margens e paddings padrão de navegadores e padronizar o estilo. \
style.css: Define o estilo visual da página, incluindo cores, fontes, layouts de flexbox, grid e responsividade. \
script.js: Contém a lógica para buscar livros via API Google Books, exibir os resultados na página e controlar o slider de livros destacados.\

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Explicação do Código:\

HTML (index.html):\

Contém os elementos da interface do usuário: barra de pesquisa, menu, área para exibição dos livros e rodapé.\
A barra de pesquisa é composta por um input de texto e ícones para buscar e limpar a pesquisa.\

CSS (style.css):\

O estilo da página usa cores suaves e layouts responsivos.\
A barra de pesquisa tem ícones de pesquisa e de fechamento.\
Cards de livros têm bordas arredondadas, uma sombra suave e imagens ajustadas ao tamanho do card.\
O slider exibe livros de maneira interativa e automática, trocando de item a cada 3 segundos.\

JavaScript (script.js):\

Pesquisa de Livros: Quando o usuário pressiona a tecla Enter ou clica na lupa, a função showBooksData() é chamada, que faz a requisição para a API Google Books e exibe os resultados.\
Slider de Livros: A função showBooksSlider() busca livros relacionados ao termo "Json" e os exibe em um slider que alterna entre os itens a cada 3 segundos.\
Manipulação do DOM: O JavaScript também manipula a exibição de elementos na página, como os livros encontrados e a exibição do título da pesquisa.\

Como Funciona a Busca:\

A busca de livros é realizada através da API Google Books com uma URL construída a partir do termo de pesquisa inserido pelo usuário. A função getBooksData() faz uma requisição à API, que retorna um objeto JSON 
com informações sobre os livros. Em seguida, o JavaScript processa esses dados e gera o HTML para exibir os resultados.\

Exemplo de Busca:\

Ao digitar um termo na barra de pesquisa (ex: "Harry Potter") e pressionar "Enter" ou clicar na lupa, a aplicação busca livros relacionados ao termo e exibe os resultados, 
incluindo título, autor, categorias e imagens.\

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Licença:\

Este projeto está sob a licença MIT.
