const listaselecaopokemons = document.querySelectorAll('.pokemon')
const pokemonscard = document.querySelectorAll('.cartao-pokemon')
 

listaselecaopokemons.forEach(pokemon => { 
    pokemon.addEventListener('click', () => {

     const cartaopokemonaberto = document.querySelector('.aberto')  
     cartaopokemonaberto.classList.remove('aberto')
      
        //ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartao mostrar
        const idpokemonselecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idpokemonselecionado
        const cartaoPokemonPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokemon selecionado
        const PokemonAtivoNaListagem = document.querySelector('.ativo')
        PokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idpokemonselecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})

