
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
});

$('#search').click(function () {
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
});

$('#delete').click(function () {
    let input = document.getElementById('inputDelete').value;
    alert(input);
    $.ajax({
        url:'http://localhost:5000/amigos/'+input,
        type: 'delete',
        success:function (res) {
            $("#success").append("Tu amigo fue borrado con éxito");
        }
    });
});