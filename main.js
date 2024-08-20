$(document).ready(function(){       //Cria uma função para quando o doc estiver pronto
    /*alert('Olá Mundo')        Cria um alerta
    console.log(document.querySelector('header button')); //Seleionar o primeiro elemento dentro de header que seja button
    console.log($('cancelar'));  //Seleciona o cancelar*/

    $('header button').click(function(){
        $('form').slideDown();              //Adiciona uma animação de SlideDown quando clicado
    }); //Forma mais compacta da de baixo
    /*document.querySelector('header button').addEventListener('click',function(){       //Seleciona o botão e quando for acionado gera um evento
    })*/

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    });

    $('form').on('submit', function(e){         //Não atualiza quando o form é clicado
        e.preventDefault();

        const enderecoNovaImg = $('#endereco-img-nova').val();  //Cria uma função que pega o endereco-img-nova e vê o value dela atraves do .val
        const novoItem = $('<li style="display:none"></li>');   //com style="display:none" a img não aparece
        $(`
            <img src="${enderecoNovaImg}" />
        `).appendTo(novoItem);        //appendTo pega todo o elemento anterior e insere em (novoItem)

        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoNovaImg}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul'); 
        $(novoItem).fadeIn(2000);   //Cria uma animação para FadeIn (5s)

        $('#endereco-img-nova').val('');            //Limpa o campo apos executado
    });
})