
//display no text under progress bar
noProgressText();

//Survey
window.survey = new Survey.Model(quiz_content);

//decrypt answers when survey is started
survey.onStarted.add(function(){
  decryptAll(k);
});

//display intermediate result
survey.onCurrentPageChanging.add(function(){
  //get results from current page
  result = getPageResult();
  //display button to continue
  if(document.getElementsByClassName('d-none')){
    if(document.getElementsByClassName('btn-next')[0].classList.contains('d-none')){
      document.getElementsByClassName('btn-next')[0].classList.remove('d-none');
    } else {
      document.getElementsByClassName('btn-complete')[0].classList.remove('d-none');
    }
  }
});
survey.onAfterRenderQuestion.add(function(options){
  if(result){
    var img = document.getElementById('resImg');
    if(document.getElementById('singleResult')){
      if(result=='correct'){
        document.getElementById('singleResult').innerHTML = "Your answer is <b>correct</b>.";
        img.src = './img/correct.png';
      }else{
        document.getElementById('singleResult').innerHTML = "Your answer is <b>incorrect</b>.";
        img.src = './img/incorrect.png';
        //hide button to continue
        document.getElementsByClassName('btn-next')[0].classList.add('d-none');
        document.getElementsByClassName('btn-complete')[0].classList.add('d-none');
      }
    } else if (document.getElementById('multipleResults')){
      if(result=='correct'){
        document.getElementById('multipleResults').innerHTML = "Your answers are <b>correct</b>.";
        img.src = './img/correct.png';
      }else{
        document.getElementById('multipleResults').innerHTML = "At least one answer is <b>incorrect</b>.";
        img.src = './img/incorrect.png';
        //hide button to continue
        document.getElementsByClassName('btn-next')[0].classList.add('d-none');
        document.getElementsByClassName('btn-complete')[0].classList.add('d-none');
      }
    }
  }
});

//stay on top of the page, avoid scrolling to question
survey.onCurrentPageChanged.add(function(){
  $('html,body').scrollTop(0);
});

//render survey
$("#surveyContainer").Survey({model: survey, css: myCss});