document.getElementById('produtoForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  
  const nome = document.getElementById('nome').value;
  const descricao = document.getElementById('descricao').value;

  try {
      const response = await fetch('http://localhost:3000/produtos', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nome, descricao }),
      });

      if (response.ok) {
          alert('Produto adicionado com sucesso!');
          // Limpar o formulário
          document.getElementById('produtoForm').reset();
          // Atualizar a lista de produtos
          await atualizarListaDeProdutos();
      } else {
          alert('Erro ao adicionar o produto.');
      }
  } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao se conectar ao servidor.');
  }
});

async function atualizarListaDeProdutos() {
  try {
      const response = await fetch('http://localhost:3000/produtos');
      const produtos = await response.json();

      // Limpar os produtos existentes
      const produtosContainer = document.getElementById('produtosContainer');
      produtosContainer.innerHTML = '';

      // Adicionar novos produtos à página
      produtos.forEach(produto => {
          const produtoDiv = document.createElement('div');
          produtoDiv.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4');
          produtoDiv.innerHTML = `
              <div class="card">
                  <img src="img/produtos/produto_default.jpg" class="card-img-top" alt="${produto.nome}">
                  <div class="card-body d-flex flex-column justify-content-between">
                      <h5 class="card-title">${produto.nome}</h5>
                      <p class="card-text">${produto.descricao}</p>
                      <a href="#" class="btn btn-primary align-self-center">Comprar</a>
                  </div>
              </div>
          `;
          produtosContainer.appendChild(produtoDiv);
      });
  } catch (error) {
      console.error('Erro ao buscar produtos:', error);
  }
}

// Chama a função para carregar produtos ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarListaDeProdutos);
