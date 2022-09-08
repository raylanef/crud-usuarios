$(document).ready(function () {
    $('#inputCep').mask("99999-999");
});



function search() {
    let CEP = cep.value;

    fetch(`https://viacep.com.br/ws/${CEP}/json/`)
        .then((response) => response.json())
        .then(function (response) {

            let neighborhood = response.bairro;
            let state = response.uf;
            let city = response.localidade;

            document.getElementById('neighborhood').value = neighborhood;
            document.getElementById('city').value = city;
            document.getElementById('state').value = state;
        })
        .catch(function (erro) {
            console.log('Alguma coisa deu errado');
            console.log(erro);
        })
}

let counter = 0;
function list() {
    $(document).ready(
        function () {
            $.ajax({
                url: '/usuarios',
                type: 'GET',
                dataType: 'JSON',

                success: function (resp) {
                    if (counter != 0) {
                        $('#tbody').remove();
                    }

                    $('#table').append(
                        '<tbody id="tbody">' +
                        resp.forEach(element => {
                            $('#tbody').append(
                                '<tr class="table-secondary" id="tr">' +
                                '<th scope="row">' + element.id + '</th>' +
                                '<td>' + element.nome + '</td>' +
                                '<td>' + element.cep + '</td>' +
                                '<td>' + element.bairro + '</td>' +
                                '<td>' + element.localidade + '</td>' +
                                '<td>' + element.uf + '</td>' +
                                '</tr>'
                            );
                            + '</tbody>'
                        })
                    )
                    counter++;
                },
                error: function (resp) {
                    throw resp;
                }

            });
        });
}



function cadastrar(){
    let url = "/usuarios";

    let nome = document.getElementById("name").value;
    let idade = document.getElementById("age").value;
    let cep = (document.getElementById("cep").value).replace("-","");
    let bairro = document.getElementById("neighborhood").value;
    let localidade = document.getElementById("city").value;
    let estado = document.getElementById("state").value;

    let body = {
        name: nome,
        age: idade,
        cep: cep,
        neighborhood:bairro,
        city: localidade,
        state: estado
    }

    const init = {
        method: 'POST',
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(body)
    }

   const response = fetch(url, init)
   const dados = response.json();

   console.log(dados);
   
}

function deleteUser(){
    let id = inputId.value;
    let url = `/usuarios/${id}`;
 
  const init = {
        method: 'DELETE',
    }

   const response = fetch(url, init);

   console.log(response);
   document.getElementById('inputID').value = '';
}
