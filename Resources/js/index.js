$(document).ready(function(){

 $("select.moreOptions").change(function(){
        var selectedChoice = $(".moreOptions option:selected").val();

        if (selectedChoice == 1) {
            $("#hide").show();
        }
        else{
            $("#hide").hide();
        }


    });


});