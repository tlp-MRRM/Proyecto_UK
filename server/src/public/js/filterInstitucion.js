const searchForm = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;

  if (name.trim() === '') {
    resultsContainer.textContent = 'Por favor, inserte el nombre de una institución.';
  } else {
    try {
      const response = await fetch(`/buscar?name=${name}`);
      const institutes = await response.json();
      displayResults(institutes);
    } catch (error) {
      console.error(error);
      resultsContainer.innerHTML = 'Error en la búsqueda.';
    }
  }
});

const displayResults = (institutes) => {
  resultsContainer.innerHTML = '';
  if (institutes.length === 0) {
    resultsContainer.textContent = 'No hay resultados encontrados.';
  } else {
    const list = document.createElement('ul');
    institutes.forEach(institute => {
      const listItem = document.createElement('li');
      listItem.textContent = institute.name;
      listItem.classList.add('result-item'); // Agrega la clase 'result-item' al elemento <li>
      list.appendChild(listItem);
    });
    resultsContainer.appendChild(list);
  }
};