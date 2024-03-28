const { default: puppeteer } = require("puppeteer")
const codeObj=require('./codes')
const loginlink="https://www.hackerrank.com/auth/login"
const email='niku21fbd@gmail.com'
const password='Niku2000@'
const pup=require("puppeteer")
let browserOpen=puppeteer.launch({
    headless:false,
    args:['--start-maximized'],
    defaultViewport:null

})
let page;
browserOpen.then(function(browserObj){
    let browserOpenPromise=browserObj.pages();
    return browserOpenPromise;


}).then(function(newTab){
    page=newTab[0];
    const hackerrankpromise=page.goto(loginlink)
    return hackerrankpromise;


}).then(function(){
    let enteremail=page.type("input[id='input-1']",email,{delay:200});
    return enteremail

}).then(function(){
    let enterepassword=page.type("input[type='password']",password,{delay:100});
   return enterepassword;

}).then(function(){
    let enterlogin=page.click("button[class='ui-btn ui-btn-large ui-btn-primary auth-button ui-btn-styled']",{delay:50});
   return  enterlogin;

}).then(function(){
    const r=page.waitForSelector('div[data-automation="algorithms"]',{visible:true})
return r;
}).then(function(){
    let enteralgorithm=page.click('div[data-automation="algorithms"]',{delay:50});
   return  enteralgorithm;

}).then(function(){
   const  r=page.waitForSelector('input[value="warmup"]',{visible:true})
return r;
}).then(function(){
  let gotowarmup= page.click('input[value="warmup"]',{delay:100});
  return gotowarmup;
   
}).then(function(){
    let waitfor3seconds=page.waitForTimeout(3000);
    return waitfor3seconds;
}).then(function(){
    let allchallengespromise=page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled");
    return allchallengespromise
}).then(function(questionArr){
    console.log("niknkfjdn",questionArr.length);
    let questionS=questionsolver(questionArr[0],page,codeObj.answers[0]);
    
    return questionS;
}).then

function questionsolver(question,page,answers){
return new Promise(function(resolve,reject){
    let nnn=question.click();
    nnn.then(function(){

        let Editorfocuspromise=page.waitForSelector('.monaco-editor.no-user-select.vs',{visible:true})
        return Editorfocuspromise;
    }).then(function(){
        let LL= page.click('.monaco-editor.no-user-select.vs');
        return LL;
         
      }).then(function(){

        return page.waitForSelector('.checkbox-input',{visible:true})
       
    }).then(function(){
       return  page.click('.checkbox-input');
        
         
    
    }).then(function(){
        return page.type('textarea.custominput',answers,{delay:100})
    }).then(function(){
        let ctrlispressed=page.keyboard.down('Control')
        return ctrlispressed
    }).then(function(){
        let aispressed=page.keyboard.press('A',{delay:100})
        return aispressed;
    }).then(function(){
        let xispressed=page.keyboard.press('X',{delay:100})
        return xispressed
    }).then(function(){
        let ctrlisunpressed=page.keyboard.up('Control')
        return ctrlisunpressed
    }).then(function(){

        let Editorfocuspromise=page.waitForSelector('.monaco-editor.no-user-select.vs',{visible:true})
        return Editorfocuspromise;
    }).then(function(){
        let LL= page.click('.monaco-editor.no-user-select.vs');
        return LL;
         
      }).then(function(){
        let ctrlispressed=page.keyboard.down('Control')
        return ctrlispressed
    }).then(function(){
        let aispressed=page.keyboard.press('A',{delay:100})
        return aispressed;
    }).then(function(){
        let vispressed=page.keyboard.press('v',{delay:100})
        return vispressed
    }).then(function(){
        let ctrlisunpressed=page.keyboard.up('Control')
        return ctrlisunpressed
    })
    .then(function(){
        resolve()
    })

})
    
}
