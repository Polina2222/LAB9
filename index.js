$(document).ready(function(){
   $('h1').addClass('selected');

   $("#hide").click(function(){
      $("p").hide(1000);
      });
      $("#show").click(function(){
          $("p").show(500);
      });

      $("#nazmi").click(function(){
         $("h3").toggle();
     });

     $('#button-1').click(function(){
      $('#top-header').toggleClass('pinkcolor')
    });

   $('#testArea').on('mouseenter', function(){
       $('#testArea').toggleClass('orangecolor')
   });
    
  $('#testArea').on('mouseleave', function(){
     $('#testAreav').toggleClass('orangecolor')
 });
 $('#customCSS').on('click', function(){
    $('#form').css('border', '5px solid black')
 
 });

  $('.append').append('<a> Проверка</a>');

  $( ".inner" ).prepend( "<a>Test</a>" );

  $( "wwwww" ).click(function(){
   $('p').wrap(document.createElement("div"));
});

$( "li.item-ii" ).find( "li" ).css( "color", "red" );

$("#but1").click(function(){
   $("#wrap1 div").filter(".sel").css({"color":"red","font-weight":"bold"});
});
$("#but2").click(function(){
   $("#wrap2 div" ).filter(function(index){
      if (index==2 || index==4)
         {return true;}
   }).css({"color":"green","font-weight":"bold"});
});
 
// $( "input" ).change(function(){ // вызываем событие при изменении элемента
//    $( "span" ).html( // добавляем в элемент <div> содержимое
//      '<p>.attr( "checked" ) - <b>' + $( this ).attr( "checked" ) + "</b></p>" + // вызываем метод attr() на элементе <input>
//      '<p>.prop( "checked" ) - <b>' + $( this ).prop( "checked" ) + "</b></p>" // вызываем метод prop() на элементе <input>
//    );
//  }).change(); // вызываем событие change после загрузки документа

    $("#drag").draggable();
    $("#sortable").sortable();
    $("#sortable").disableSelection();
    $("#datepicker").datepicker({ monthNames:
       ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август",  
       "Сентябрь","Октябрь","Ноябрь","Декабрь"],
       dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]});

    $( function() {
    $( "#dialog" ).dialog();
    } );
 });