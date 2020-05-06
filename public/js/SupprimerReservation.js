$(document).ready(function () {

    
        $("#delbtn").click(function(){  // Recuperation des valeurs
         
            console.log(localStorage.getItem("id"));
                 $.ajax({
                    url:'/SupprimerReservation',
                    type:'delete',
                    data:{index:localStorage.getItem("id")},
                    success:function(response){
                      getData(response);
                    }
                   
                }); 

                
            
        });  
   
});
