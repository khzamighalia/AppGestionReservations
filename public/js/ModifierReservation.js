$(document).ready(function () {

    
    // $("#SaveUpdate").click(function(){  // Recuperation des valeurs
     
    //     console.log(localStorage.getItem("id"));
    //     var name = $("#nameUpdate").val();
    //     var Description = $("#DescriptionUpdate").val();
    //     var Status = $("#StatusUpdate").val();
    //          $.ajax({
    //             url:'/UpdateTache',
    //             type:'post',
    //             data:{index:localStorage.getItem("id"),tache:{name,Description,Status}},
    //             success:function(response){
    //               getData(response);
    //             }
               
    //         }); 

            
        
    // });  
    $("#modbtn").click(function(){  // Recuperation des valeurs
     
        console.log(localStorage.getItem("id"));
        var nom = $("#nomupdate").val();
        var cin = $("#cinupdate").val();
        var datedebut = $("#datedebutupdate").val();
        var datefin = $("#datefinupdate").val();
        var chambres = $("#chambresupdate").val();
             $.ajax({
                url:'/ModifierReservation',
                type:'post',
                data:{index:localStorage.getItem("id"),reservation:{nom,cin,datedebut,datefin,chambres}},
                success:function(response){
                  getData(response);
                }
               
            }); 

            
        
    });  

});