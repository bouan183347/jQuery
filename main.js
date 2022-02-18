var test;

function photoChange(){
  $.get("https://jsonplaceholder.typicode.com/photos",function(data){
        
        //console.log(test);
        var cpt=0;
        var texte = "";

        $.each(data,function(key,value){

            if(value.albumId == $("#albumsList").val())
            {

                texte += "<div class='col-lg-2 col-md-4 col-sm-12'> <input type='image' data-bs-toggle='modal' data-bs-target='#test"+value.id+"' class='photos' src='"+value.thumbnailUrl+"'> </div>";
                texte += '<div class="modal fade" id="test'+value.id+'" tabindex="-1" aria-labelledby="canvaModalLabel" aria-hidden="true"><div class="modal-dialog"> <div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel"></h5> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><img src ="'+value.url+'" class="img-fluid"></img></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button></div></div></div></div>';

                if(cpt == 4)
                {
                    $("#containerPhoto").append("<div class='row'>"+texte+"</div>");
                }
        
                cpt++;

                if(cpt==5)
                    {
                        cpt = 0;
                        //console.log(texte);
                        texte="";
                    }
                    //console.log(cpt);
            }
          
        })
    })
}


$(document).ready(function() {

   
     $.get("https://jsonplaceholder.typicode.com/albums",function(data){

        $.each(data,function(key,value){
            $("#albumsList").append("<option value='"+value.id+"'>"+value.id+"</option>");
           //total+= "<option value='"+value.id+"'>"+value.id+"</option>"
        });
       
    });

    photoChange();

 



});


$("#formAlbums").change(function(){
    $("#containerPhoto").html("");
    photoChange();
});

$(document).on("click",".photos" , function(){
    
});






/*<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
			Launch demo modal
		</button>
		
		<!-- Modal -->
		<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
				...
				</div>
				<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary">Save changes</button>
				</div>
			</div>
			</div>
		</div>*/