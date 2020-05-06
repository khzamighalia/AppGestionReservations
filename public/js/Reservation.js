$(document).ready(function () {
        getData();
        $("#sub").click(function () { // Recuperation des valeurs

            var nom = $("#nom").val();
            var cin = $("#cin").val();
            var datedebut = $("#datedebut").val();
            var datefin = $("#datefin").val();
            var chambres = $("#chambres").val();

            if (nom != "" && cin!= "" && datedebut!= "" && datedebut!= "" && datefin!="" && chambres!= "") {  
                $.ajax({
                    url: '/AjouterReservation',
                    type: 'post',
                    data: {nom,cin,datedebut,datefin,chambres},
                    success: function (response) {
                        if (response.request) {
                            //send fetched
                            getData(response);
                            $("#nom").val('');
                            $("#cin").val('');
                            $("#datedebut").val('');
                            $("#datefin").val('');
                            $("#chambres").val('');
                        }
                    }

                });
            }
        });

    
});


function getData(fetched) {
    if (fetched === undefined) {
        $.ajax({
            url: '/Reservation',
            type: 'get',
            success: function (response) {
                if (response.request) {

                    // data correc
                    AjouterTab(response.data);

                }
            },
        });
    } else {
        AjouterTab(fetched.data);
    }
}


function AjouterTab(data) {

    var ReservationData = '';
    $("#listereservations").html(ReservationData);
    $.each(data, function (index, value) {

        ReservationData += '<tr>';
        ReservationData += '<td>' + value.nom + '</td>';
        ReservationData += '<td>' + value.cin + '</td>';
        ReservationData += '<td>' + value.datedebut + '</td>';
        ReservationData += '<td>' + value.datefin + '</td>';
        ReservationData += '<td>' + value.chambres + '</td>';
        ReservationData += `<td><button type="button" data-toggle="modal" data-target="#UpdatePopUp" data-uid="1" onclick="show(${index},'${value.nom}','${value.cin}','${value.datedebut}','${value.datefin}','${value.chambres}')" class="btn3 upbtn"><img src="images/edit.png"></button>`;
        ReservationData += ' <button type="button" data-toggle="modal" data-target="#DeletePopUp" data-uid="1" onclick="show(' + index +')" id="delbtn" class="delbtn btn3"><img src="images/delete.png"></button>';
        ReservationData += '</td></td>'
    });
    $("#listereservations").append(ReservationData);


}

function show(index,nom,cin,datedebut,datefin,chambres) {
    localStorage.setItem("id", index);
    $("#nomupdate").val(nom);
    $("#cinupdate").val(cin);
    $("#datedebutupdate").val(datedebut);
    $("#datedebutupdate").val(datefin);
    $("#chambresupdate").val(chambres);
}