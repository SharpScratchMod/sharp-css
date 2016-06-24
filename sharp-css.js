/*
 * Sharp-CSS
 * CSS styling for sharp-www
 * License: MIT License
*/
$(document).ready(function(){
    var SharpCSS = {};

    // Notice dismiss
    $(".notice-dismiss-button").each(function(){
        $(this).click(function(){
            $(this).parent().remove();
        });
    });

    // Alert dismiss
    $(".alert-dismiss").each(function(){
        $(this).unbind("click");
        $(this).click(function(){
            $(this).parent().hide(1000);
            $(this).hide();
        });
    });
    SharpCSS.show_alert = function(title, text){
        $("body").append("<div class='alert'><strong>" + title + "</strong> " + text + "<a href='#' class='alert-dismiss'>X</a></div>");
        $(".alert-dismiss").each(function(){
            $(this).unbind("click");
            $(this).click(function(){
                $(this).parent().hide(1000);
                $(this).hide();
            });
        });    
    };

});