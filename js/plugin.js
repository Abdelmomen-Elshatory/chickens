$(function () {
    'use strict';

    // Start popup

    $(".our-card").click(function(){
        $("." + $(this).data("popup")).fadeIn()
    })

    $(".popup").click(function(){
        $(this).fadeOut();
    });

    $(".popup .inner").click(function(e){
        e.stopPropagation()
    });

    $(".popup .close").click(function(e){
        e.preventDefault();
        $(this).parentsUntil(".popup").parent().fadeOut();
    });

    $(document).keydown(function(e){

        if (e.keyCode == 27) {
            $(".popup").fadeOut();
        }
    });


    // Image Preview

    document.getElementById('pro-image').addEventListener('change', readImage, false);
    
    $( ".preview-images-zone" ).sortable();
    
    $(document).on('click', '.image-cancel', function() {
        let no = $(this).data('no');
        $(".preview-image.preview-show-"+no).remove();
    });

})

    // Image Preview
    
var num = 1;
function readImage() {
    if (window.File && window.FileList && window.FileReader) {
        var files = event.target.files; //FileList object
        var output = $(".preview-images-zone");

        for (let i = 0; i < files.length; i++) {
            var file = files[i];
            if (!file.type.match('image')) continue;
            
            var picReader = new FileReader();
            
            picReader.addEventListener('load', function (event) {
                var picFile = event.target;
                var html =  '<div class="preview-image preview-show-' + num + '">' +

                            '<div class="image-zone"><img id="pro-img-' + num + '" src="' + picFile.result + '"></div>' +
                            '<div class="image-cancel" data-no="' + num + '">x</div>' +
                            '</div>';

                output.append(html);
                num = num + 1;
            });

            picReader.readAsDataURL(file);
        }
        $("#pro-image").val('');
    } else {
        console.log('Browser not support');
    }
}

var remove = document.querySelectorAll(".image-cancel");

  for (i = 0; i < remove.length; i++) {

    remove[i].addEventListener("click", function () {

      $(".image-zone").remove();

    }, false);
  }