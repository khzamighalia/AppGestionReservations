$(document).ready(function () {
    $("#modbtn").click(function(){  
     
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