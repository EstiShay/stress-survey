$(function(){
  var stressPoints = 0
  var copingPoints = 0
  $("form#stresstestsurvey").submit(function(event){
    $("input:checkbox[name=feelings]:checked").each(function(){
      stressPoints += 1
    });
    $("input:checkbox[name=symptoms]:checked").each(function(){
      stressPoints += 1
    });
    $("input:checkbox[name=strategies]:checked").each(function(){
      copingPoints += 1
    });

    $(".surveyresult").show();

    if (stressPoints >= 4 && copingPoints <= 1) {
      $('.surveyresult').append("Your stress level is very high. You need a) to find ways to lower your stress level and b) learn more coping strategies.");
    } else if (stressPoints <= 2 && copingPoints >=2){
      $('.surveyresult').append("Good job managing your stress levels! You're in great shape.");
    } else if (stressPoints >= 5 && copingPoints >=3) {
      $('.surveyresult').append("Good job learning coping strategies, but you really need to lower your stress level too!");
    } else {
      $('.surveyresult').append("You're doing ok, but keep an eye on those stress levels.  It's always good to learn another coping strategy too.");
    }
    event.preventDefault();
  });
});
