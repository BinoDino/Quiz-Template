var quiz_content= {
    title:"Machine Learning Education", 
    description: "Information and Quiz",
    showProgressBar: "top",
    firstPageIsStarted: true,
    startSurveyText: " ",
    pagePrevText: " ",
    pageNextText: " ",
    completeText:" ",
    requiredText: "",
    showQuestionNumbers:'off',
    pages:[
        {
            name:'start',
            questions: [
                {
                    type: "html",
                    html: `<h3 class="text-center mt-4 mt-lg-5"> Quiz about Machine Learning </h3>
                            <div class="row mt-3 pt-3 bg-grey border-top border-bottom">
                                <p class="text-center"> On the following pages you will learn about the term of machine learning. Through questions provided during the learning process you can check what you learned. Please click on the button at the <b>right bottom</b> to start.</p> 
                            </div>
                            <div class="attribution"><a href="https://www.flaticon.com/free-icons/education" title="education icons">Education icons created by Freepik - Flaticon</a></div>`
                }
            ]
        },{
            name: "info0",
            title:"Machine Learning",
            elements: [
                {
                    type: "html",
                    name: "p0",
                    html: `<div>
                                <h3 class='mt-3'> What is Machine Learning? </h3>
                                <p class='mt-3'> We encounter <i>machine learning</i> in our everyday lives. One example is the music or movie recommendations from streaming providers. </p>
                                <p class='mt-3'> A commonly cited definition of machine learning in the literature is from Tom M. Mitchell 1997. He describes machine learning as computer programs learning from experience to perform a particular task when their performance with respect to that task improves with experience.</p>
                                <p>What is understood by experience? Machine learning distinguishes between two types of experience: learning from data and learning through reward or punishment. Based on this, three main forms of machine learning can be distinguished.</p>
                            </div>`
                }
            ]
        },{
            name: "question0",
            title:"Questions",
            questions: [
                {
                    type: "radiogroup",
                    name: "q0_1",
                    isRequired: true,
                    requiredErrorText:"Please select an answer.",
                    title: "In machine learning, a human learns a behavior through a machine.",
                    correctAnswer:"U2FsdGVkX1+3ErjmTHG1LhMC4D14dNfU0TTi9sEVbME=",
                    choices:["True","False"]
                },{
                    type: "radiogroup",
                    name: "q0_2",
                    isRequired: true,
                    requiredErrorText:"Please select an answer.",
                    title:"In machine learning, a computer program learns from experience.",
                    correctAnswer:"U2FsdGVkX19dpW2pYRFT7QPhdbc5gy3541lCa2uzTpM=",
                    choices:["True","False"]
                },{
                    type: "radiogroup",
                    name: "q0_3",
                    isRequired: true,
                    requiredErrorText:"Please select an answer.",
                    title:"Machine learning has nothing to do with everyday life.",
                    correctAnswer:"U2FsdGVkX18zriFMUQQKPzyygQNY47sTFOh/h/LEa2U=",
                    choices:["True","False"]
                }
            ]
        },{
            name: "multipleResults",
            title:"Result",
            elements: [
                {
                    type: "html",
                    name: "res0",
                    html: `<h4 id="multipleResults" class="text-center mt-3"></h4>
                            <div class="row justify-content-center px-2">
                                    <img class="col-6 col-sm-4 px-0 rounded" id="resImg"/>
                            <div>`,
                }
            ]
        },{
            name: "info1",
            title:"Forms of Machine Learning",
            elements: [
                {
                    type: "html",
                    name: "p1",
                    html:`<h3 class='mt-3'>Main Forms of Machine Learning</h3>
                            <table class="table table-bordered border-secondary mt-3 text-secondary">
                                <tr class="bg-white">
                                    <td class="align-top"><h5>Supervised Learning</h5></td>
                                    <td>In this form of learning, an algorithm learns a specific behavior from <b>data that is labeled</b>.</td> 
                                </tr>
                                <tr class="bg-light-purple">
                                    <td class="align-top"><h5>Unsupervised Learning</h5></td>
                                    <td>Here, an algorithm learns to solve a particular task through <b>data that is not labeled</b>.</td> 
                                </tr>
                                <tr class="bg-white">
                                    <td class="align-top"><h5>Reinforcement Learning</h5></td>
                                    <td>Through <b>feedback</b> in the form of punishment or reward, an algorithm learns to optimize its strategy.</td> 
                                </tr>
                            </table>`
                }
            ]
        },{
            name: "question1",
            title:"Question",
            questions: [{
                type: "radiogroup",
                name: "q1_1",
                isRequired: true,
                requiredErrorText: "Please select an answer.",
                title:"Which of the terms below is not a main form of machine learning?", 
                correctAnswer: "U2FsdGVkX194IUAtLdzU5eAXQSZAYslU1kTZiJaSJ3g=",
                choices: ["Supervised Learning","Visual Learning","Unsupervised Learning","Reinforcement Learning"],
                choicesOrder: "random"
             }
            ]
        },{
            name: "result1",
            title:"Result",
            elements: [
                {
                    type: "html",
                    name: "res1",
                    html: `<h4 id="singleResult" class="text-center mt-3"></h4>
                            <div class="row justify-content-center px-2">
                                    <img class="col-6 col-sm-4 px-0 rounded" id="resImg"/>
                            <div>`,
                }
            ]
        },{
            name: "references",
            title:"References",
            elements: [
                {
                    type: "html",
                    name: "p1",
                    html:`<h3 class='mt-3'>References</h3>
                        <table class="table table-borderless">
                            <tr>
                                <td><small>Aust, H. (2021). <i>Das Zeitalter der Daten: Was Sie über Grundlagen, Algorithmen und Anwendungen wissen sollten (1. Aufl.)</i>. <a "text-dark" target="_blank" rel="noopener noreferrer" href="https://doi.org/10.1007/978-3-662-62336-7">https://doi.org/10.1007/978-3-662-62336-7</a></small></td>
                            </tr>
                            <tr>
                                <td><small>Kossen, J., Kuruc, F. and Müller, M. E.: <i>Einleitung</i>. In: Kersting, K., C. Lampert und C. Rothkopf (Hrsg.): <i>Wie Maschinen lernen. Künstliche Intelligenz verständlich erklärt</i>, S. 3–10. Springer, Wiesbaden, 2019.<a class="text-dark" target="_blank" rel="noopener noreferrer" href="https://doi.org/10.1007/978-3-658-26763-6_1">https://doi.org/10.1007/978-3-658-26763-6_1</a></small></td>
                            </tr>
                            <tr>
                                <td><small>Krause, M. and Natterer, E.: <i>Maschinelles Lernen</i>. In: Kersting, K., C. Lampert und C. Rothkopf (Hrsg.): <i>Wie Maschinen lernen. Künstliche Intelligenz verständlich erklärt</i>, S. 21–27. Springer, Wiesbaden, 2019.<a "text-dark" target="_blank" rel="noopener noreferrer" href="https://doi.org/10.1007/978-3-658-26763-6_3">https://doi.org/10.1007/978-3-658-26763-6_3</a></small></td>
                            </tr>
                            <tr>
                                <td><small>Mitchell, T. M. (1997). <i>Machine Learning</i>. McGraw-Hill Education.</small></td>
                            </tr>
                        </table>`
                }
            ]
        }
    ],
    completedHtml: `<h4 class="text-center mt-4 mt-lg-5">Great Job!</h4>                
            <div class="row justify-content-center mt-3 p-3 mx-0 bg-grey border-top border-bottom">
                <img class="col-6 col-sm-4 px-0 rounded" src="./img/complete.png" alt='Well done'/>
                <p class="mt-3 text-center">You can close the window now.</p>
            </div>`
}

/* NOTE: correct answers have to be encrypted manually. Code: 

<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>

<script>
var k = 'secretKey';
function crypto(val,key,dir) {
    switch(dir) {
        case 'encr':
            var encr = CryptoJS.AES.encrypt(val,key);
            document.write(encr.toString());
        case 'decr':
            var decr = CryptoJS.AES.decrypt(val,key);
            document.write(decr.toString(CryptoJS.enc.Utf8));
    };  
};

crypto("ANSWER",k,"encr");
</script>
*/