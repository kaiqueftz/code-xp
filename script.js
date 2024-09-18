document.getElementById('produtoForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  
  const nome = document.getElementById('nome').value;
  const descricao = document.getElementById('descricao').value;

  const produtoData = {
      nome,
      descricao
  };

  try {
      const response = await fetch('http://localhost:3000/produtos', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(produtoData),
      });

      if (response.ok) {
          const produto = await response.json();
          alert('Produto adicionado com sucesso!');
          adicionarProdutoNoDOM(produto); // Adiciona o produto no DOM
      } else {
          alert('Erro ao adicionar o produto.');
      }
  } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao se conectar ao servidor.');
  }
});

function adicionarProdutoNoDOM(produto) {
  const produtosContainer = document.querySelector('.row'); // Supondo que os produtos estejam em uma div com a classe "row"
  
  const produtoDiv = document.createElement('div');
  produtoDiv.className = 'col-12 col-sm-6 col-md-4 col-lg-3 mb-4';
  
  produtoDiv.innerHTML = `
      <div class="card">
          <img src="img/produtos/default.jpg" class="card-img-top" alt="${produto.nome}"> <!-- Imagem padrão -->
          <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">${produto.nome}</h5>
              <p class="card-text">${produto.descricao}</p>
              <a href="#" class="btn btn-primary align-self-center">Comprar</a>
          </div>
      </div>
  `;
  
  produtosContainer.appendChild(produtoDiv);
}
