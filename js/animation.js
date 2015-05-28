$(document).ready(function () {
    $("#screen").animate({
        right:87
    }, 1000)
    
    .queue(function() {  
    $(".home-write").delay(500).animate({
        height:"100%",
    }, 500)
    $(".loading").delay(1500).animate({
        opacity:1,
    }, 100)  
    $(".home-write h3").delay(2300).animate({
        opacity:1,
    }, 1500)
    $(".home-write h4").delay(3500).animate({
        opacity:1,
    }, 1500)
    $(".loading").delay(3500).animate({
        opacity:0,
    }, 1000) 
    $(".home-write h1").delay(5500).animate({
        opacity:1,
    }, 2500)
     $(".home-write h2").delay(6500).animate({
        opacity:1,
    }, 2000)
    $(".play-button").delay(7000).animate({
        height:"100px",
    }, 600)
     $(".home-write h5").delay(8000).animate({
        opacity:1,
    }, 1000)
     $(".home-write h3").delay(6000).animate({
        opacity:0,
    }, 1500)
    $(".home-write h4").delay(6000).animate({
        opacity:0,
    }, 1500)
        });
    });
     
     
$(".omenu").click(function () {
    $(".boxes h2").html('<a class="cmenu"><img src="images/ipv5_icon_menuh.png">Close</a>');
    $(".home-write").delay(100).animate({
        width:"55%",
    }, 500)
    .queue(function() {  
    $(".next-episode").delay(100).animate({
        position:'none',
    }, 500)
    $(".menu-box").delay( 500 ).animate({
        height:"80px",
        width:"100%",
        borderWidth: 5,
    }, 500)
    $(".box-content").delay( 1000 ).animate({
        opacity: 1,
    }, 1000)
           });
         });

$(".cmenu").click(function () {
    $(".boxes h2").html('<a class="omenu"><img src="images/ipv5_icon_menu.png">Menu</a>');
    $(".home-write").animate({
        width:"100%",
    }, 500)
         });
    
     
$(".play-button").click(function () {
         $("#home").animate({
        opacity:0,
    }, 500)
     .queue(function() {
        $("#screen").delay(500).animate({
        opacity:0,
    }, 1500)
     });
         });