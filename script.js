async function fetchData() {
    const response = await fetch('https://u3mto4.mimo.run/index.html');
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    
    // Captura dados específicos
    const dataElements = doc.querySelectorAll('.classe-dos-dados');
    const dataList = document.getElementById('data-list');
    
    dataElements.forEach(element => {
        const listItem = document.createElement('li');
        listItem.textContent = element.textContent;
        dataList.appendChild(listItem);
    });
}

fetchData();
                                             
