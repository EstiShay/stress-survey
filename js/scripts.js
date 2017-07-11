$(function(){
  $("form#stresstestsurvey").submit(function(event){
    $("input:checkbox[name=feelings]:checked").each(function(){
      var feelings = $(this).val();
    });
    $("input:checkbox[name=symptoms]:checked").each(function(){
      var feelings = $(this).val();
    });
    $("input:checkbox[name=strategies]:checked").each(function(){
      var feelings = $(this).val();
    event.preventDefault();
  })
});
