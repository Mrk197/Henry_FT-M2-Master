/*
$('#boton').click(function () {
    $.get("http://localhost:5000/amigos", function (respuesta) {
        document.getElementById("lista").innerHTML = "";
        for (const data of respuesta) {
            //crar elemento de la lista
            let amigos = document.createElement("li");
            amigos.textContent = data.name;
            $("#lista").append(amigos);
        }
    });
});*/

$('#boton').click(() =>{
    //tomo el elemento que tiene la lista 
    let list = $('#lista');
    list.empty();
    $.get('http://localhost:5000/amigos', (data)=>{
        //recorrer el array de objetos
        for (const datos of data){
            list.append(`<li>${datos.name}</li>`);
        } 
    });
});

/*$('#search').click(function () {
    let input = document.getElementById('input').value;
    document.getElementById('amigo').innerHTML = "";
    //alert(input.value);
    $.get('http://localhost:5000/amigos/'+input, function (res) {
        //alert(res.name);
        if(typeof res.name === "undefined"){
            $("#amigo").append("Ese amigo no existe");
        }
        else{
            $("#amigo").append(res.name);
        }
    });
});*/

$('#search').click(() => {
    let searchID = $('#input').val();
    //hacer un request con ese valor 
    $.get('http://localhost:5000/amigos/'+searchID, (data)=>{
        if (data) {
            
        }
        $('#amigo').text(data.name); //se usa text porque sólo se guarda texto y no un elemento
    });
});


/*$('#delete').click(function () {
    let input = document.getElementById('inputDelete').value;
    alert(input);
    $.ajax({
        url:'http://localhost:5000/amigos/'+input,
        type: 'delete',
        success:function (res) {
            $("#success").append("Tu amigo fue borrado con éxito");
        }
    });
});*/

$('#delete').click(() => {
    //guardamos el valor del input
    let deleteID = $('#inputDelete').val();
    $.ajax({
        url:'http://localhost:5000/amigos/'+deleteID,
        type: 'delete',
        success:(data) => {
            $("#success").text("Tu amigo fue borrado con éxito");

            //re denderizar lista
            let list = $('#lista');
            list.empty();
            for (const datos of data){
                list.append(`<li>${datos.name}</li>`);
            }
            //or $('boton').click();
        }
    });
});
