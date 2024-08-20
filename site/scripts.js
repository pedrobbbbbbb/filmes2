function filtrarFilmes() {
    // Obtém o valor da barra de pesquisa
    var input = document.getElementById('searchBar');
    var filter = input.value.toLowerCase();
    
    // Obtém a lista de filmes
    var filmes = document.getElementsByClassName('filme');

    // Loop para verificar cada filme
    for (var i = 0; i < filmes.length; i++) {
        var h2 = filmes[i].getElementsByTagName('h2')[0];
        var txtValue = h2.textContent || h2.innerText;
        
        // Se o filme corresponde ao texto da barra de pesquisa, mostra; caso contrário, esconde
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            filmes[i].style.display = "";
        } else {
            filmes[i].style.display = "none";
        }
    }
}
