//style 
var myCss = {
    root: "sv_main quicksand-font",
    container: "sv_container bg-white",
    body:"sv_body border-top-none fs-responsive px-0 pt-0 mb-5",
    header: "sv_header header p-3",
    headerText: "sv_header__text w-100-xs text-center-xs header-text",
    footer: "sv_nav px-3 fixed-bottom pb-2 pt-0",
    navigation: {
		start: "btn-purple btn-size btn-nav btn-start-info float-end",
        prev:"btn-purple btn-size  btn-nav btn-prev float-start",
        next: "btn-purple btn-size  btn-nav btn-next float-end",
        complete: "btn-purple btn-size btn-nav btn-complete float-end",
	},
    row: "sv_row border-bottom-none",
    page: {
        mainRoot: "sv_q sv_qstn pb-0",
        title: "sv_page_title px-3 pb-3 border-bottom mb-0",
      },
    question: {
        mainRoot: "sv_q sv_qstn pt-0 px-3",
    },
    boolean: {
        switch: "sv-boolean__switch bg-light-purple pt-0",
    },
    dropdown: {
        control: "sv_q_dropdown_control border-purple-focus bg-grey",
    },
    text: "sv_q_text_root border-purple-focus bg-grey",
    progress:"sv_progress mx-3 mt-3",
    progressBar: "sv_progress_bar bg-purple",
};

//display no text under progress bar
    function noProgressText(){
        var localizedStrs = Survey.surveyLocalization.locales[Survey.surveyLocalization.defaultLocale];
        localizedStrs.progressText = "";
    };

//encrypt/decrypt
var k = 'secretKey';
function crypto(val,key,dir) {
    switch(dir) {
        case 'encr':
            var encr = CryptoJS.AES.encrypt(val,key);
            return encr.toString();
        case 'decr':
            var decr = CryptoJS.AES.decrypt(val,key);
            return decr.toString(CryptoJS.enc.Utf8);
    };  
};

function decryptAll(crypto_key){
    var questions = survey.getQuizQuestions();
    for(var i = 0; i < questions.length; i ++){
        //multiple choice questions
        if(Array.isArray(questions[i].correctAnswer)){
            var decr_arr = [];
            questions[i].correctAnswer.forEach(function(answer){
                answer = crypto(answer,crypto_key,'decr');
                decr_arr.push(answer);
            })
            questions[i].correctAnswer = decr_arr;
        //single choice questions
        } else {
            questions[i].correctAnswer = crypto(questions[i].correctAnswer,crypto_key,'decr');
        }
    };
}

//get url paramters 
function getURLParams(url_string, param){
    var url = new URL(url_string);
    var x = url.searchParams.get(param);  
    return x;
};

//get result from single page
var result;

function getPageResult(){
    var pageResult = false;
    var total = 0;
    var correct = 0;
    var questions = survey.getQuizQuestions();
    questions.forEach(function(question) {
        if(survey.currentPage === question.page){
            total ++
            if(question.isAnswerCorrect()){
                correct ++;
            }
        };
    });
    if(total > 0 && correct == total){
        var pageResult = 'correct';
    }else if(total > 0 && correct != total) {
        var pageResult = 'incorrect';
    }
    return pageResult;
}