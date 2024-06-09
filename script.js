async function fetchData() {
    try {
        const corsProxy = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'https://u3mto4.mimo.run/index.html';
        const response = await fetch(corsProxy + targetUrl);
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        
        // Captura dados pelos IDs
        const nameElement = doc.getElementById('name');
        const secretElement = doc.getElementById('secret');
        const birthdayElement = doc.getElementById('birthday');
        
        // Elemento onde os dados serão exibidos
        const dataList = document.getElementById('data-list');
        
        // Cria elementos de lista para cada dado e adiciona ao dataList
        const createListItem = (content) => {
            const listItem = document.createElement('li');
            listItem.textContent = content;
            return listItem;
        };
        
        if (nameElement) {
            dataList.appendChild(createListItem(`Nome: ${nameElement.textContent}`));
        } else {
            dataList.appendChild(createListItem('Nome não encontrado'));
        }

        if (secretElement) {
            dataList.appendChild(createListItem(`Segredo: ${secretElement.textContent}`));
        } else {
            dataList.appendChild(createListItem('Segredo não encontrado'));
        }

        if (birthdayElement) {
            dataList.appendChild(createListItem(`Aniversário: ${birthdayElement.textContent}`));
        } else {
            dataList.appendChild(createListItem('Aniversário não encontrado'));
        }
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

fetchData();
                
