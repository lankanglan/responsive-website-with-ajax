//get
$.ajax({
     url: "http://fake-people.benspoon.com/882eb8c9/people",
  success: function(res) {
        $('.name').on("click", function(){
           $('#people').empty();
        res.forEach(function(person){
          console.log(person);
      $('#people').append("<li class='person-name'>" + person.name + "</li>" ).toggle();
    });

        });
  }
  });

//get details
$.ajax({
      url: "http://fake-people.benspoon.com/882eb8c9/people",
  success: function(res) {
          $('#people').on("click",'.person-name',function(){
          	    if($(this).next().hasClass('back')){
          	    	$(this).next().remove();
          	    }

				var index=$(this).index();

			      $(this).after("<div class='back' >"+"<img class='delete' src='img/delete.png' itemid='"+res[index].id+"'>"+"</img>"+"<p>"
			        + res[index].id + "</p>" +"<p>"+res[index].picture + "</p>" +"<p>"+res[index].age + "</p>"+"<p>"+res[index].eyeColor
			        + "</p>"+"<p>"+res[index].gender + "</p>" +"<p>"+res[index].phone + "</p>"+"<p>" +res[index].address + "</p>"+"</div>");

          });
  }
});

//post
(function(){
    $('#post-person').on('click', function() {
         var person = {};
         person.name = $('#name').val();
console.log(person.name);
         $.ajax({
           method: "POST",
           url: "http://fake-people.benspoon.com/882eb8c9/people",
           data: person,
           success: function (res) {
             $('#people').append("<li class='person-name'>"+res.name+"</li>" );
           },
           error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      }
         });
    });
})();



//delete

$(function() {
$('#people').on("click",'.delete',function(){
var commentContainer = $(this).parent();
var id = $(this).attr("itemid");
var string = 'id='+ id ;
$.ajax({
method: "DELETE",
url: "http://fake-people.benspoon.com/882eb8c9/people/"+id,
cache: false,
success: function(res){
commentContainer.prev().remove();
commentContainer.slideUp('slow', function() {

  $(this).remove();});
$('.back').fadeOut();
},
error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      }

});

return false;
});
});
