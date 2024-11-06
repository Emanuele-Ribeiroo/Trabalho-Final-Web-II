const apiKey = "AIzaSyBe9IdrSKUvy1qpRUshVc037upXolg95XU";

const pesquisa = document.querySelector('#pesquisa');
pesquisa.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const pesquisaLivro = event.target.value;
        console.log(pesquisaLivro);  
        showBooksData(pesquisaLivro);  // Passa o valor da pesquisa para a função
    }
});

// Função para buscar livros
async function getBooksData(pesquisaLivro) {
    const apiURL = `https://www.googleapis.com/books/v1/volumes?q=${pesquisaLivro}&maxResults=12&key=${apiKey}`;
    const res = await fetch(apiURL);
    const data = await res.json();
    return data;
}

// Função para exibir livros na página
async function showBooksData(pesquisaLivro) {
    const data = await getBooksData(pesquisaLivro);  // Chama a função para pegar os dados da API

    let text_html = "";  // String que vai armazenar o HTML gerado

    if (data.items && data.items.length > 0) {
        for (let i = 0; i < data.items.length; i++) {
            const item = data.items[i];

            let thumbnail = item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : 'default_image.jpg';
            if (thumbnail.startsWith('http://')) {
                thumbnail = thumbnail.replace('http://', 'https://');
            }

            const title = item.volumeInfo.title || 'Sem título';
            const authors = item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Autor desconhecido';
            const categories = item.volumeInfo.categories ? item.volumeInfo.categories.join(', ') : 'Sem categorias';

            text_html += "<div class='card'>";
            text_html += `<img src='${thumbnail}' alt='Imagem do livro'>`;
            text_html += `<div class='conteudo'>`;
            text_html += `<p class='titulo'>${title}</p>`;
            text_html += `<p>${authors}</p>`;
            text_html += `<p>${categories}</p>`;
            text_html += `</div>`;
            text_html += "</div>";
        }

        document.querySelector(".container").innerHTML = text_html;
    } else {
        document.querySelector(".container").innerHTML = "<p>Nenhum livro encontrado.</p>";
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    const randomBooksData = await getBooksData('fiction');  // Buscar livros aleatórios (ou uma pesquisa inicial qualquer)
    showBooksData(randomBooksData);  // Exibir os livros na tela
});

// Função para buscar livros (com limite de 5 resultados)
async function getSliderBooks() {
    const apiURL = `https://www.googleapis.com/books/v1/volumes?q=intitle:Json&maxResults=5&key=${apiKey}`;
    const res = await fetch(apiURL);
    const data = await res.json();
    return data;
}

// Função para exibir livros no slider
async function showBooksSlider() {
    const data = await getSliderBooks();  

    let slider_html = "";  // String que vai armazenar o HTML gerado

    if (data.items && data.items.length > 0) {
        for (let i = 0; i < data.items.length; i++) {
            const item = data.items[i];

            let thumbnail = item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : 'default_image.jpg';
            if (thumbnail.startsWith('http://')) {
                thumbnail = thumbnail.replace('http://', 'https://');
            }

            const title = item.volumeInfo.title || 'Sem título';
            const authors = item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Autor desconhecido';
            const categories = item.volumeInfo.categories ? item.volumeInfo.categories.join(', ') : 'Sem categorias';
            const description = item.volumeInfo.description;

            // Adiciona o conteúdo do slider
            slider_html += `<div class='slideItem'>`; 
            slider_html += `<div class='items'>`;
            slider_html += `<div class='textos'>`;
            slider_html += `<p class='titulo'>${title}</p>`;
            slider_html += `<p>${authors}</p>`;
            slider_html += `<p>${categories}</p>`;
            slider_html += `<p>${description}</p>`;
            slider_html += `</div>`;
            slider_html += `<img src='${thumbnail}' alt='Imagem do livro'>`;
            slider_html += `</div>`;
            slider_html += "</div>";
        }

        document.querySelector(".slider").innerHTML = slider_html;
    } else {
        document.querySelector(".slider").innerHTML = "<p>Nenhum livro encontrado.</p>";
    }

    let interval = 0;
    let items = document.querySelectorAll('.slideItem');
    let maxSlider = items.length - 1;

    // Exibe o primeiro item e inicia o ciclo de troca de slides
    items[0].style.display = 'block'; // Exibe o primeiro item
    setInterval(function() {
        // Oculta o item atual
        items[interval].style.display = 'none';

        // Incrementa o índice
        interval++;

        // Se atingiu o final, volta para o início
        if (interval > maxSlider) {
            interval = 0;
        }

        // Exibe o próximo item
        items[interval].style.display = 'block';
    }, 3000);  // Intervalo de 3 segundos
}

// Chama a função para exibir o slider de livros
window.addEventListener('DOMContentLoaded', async () => {
    await showBooksSlider();  // Exibe o slider com livros 
});
