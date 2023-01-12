function checkAdress(){
    event.preventDefault();

    let email = document.getElementById('emailField').value
    if(!email){
        alert('Please Write Email')
    }else{
        document.getElementById('output').innerHTML=email
    }
}
function fillCity(){
    var cityName;
    var zipEnter= document.getElementById('Zipcode').value;
    switch(zipEnter){
        case '3000':
        cityName='Faisalabad'
        break;
        case'4000':
        cityName='Lahore'
        break;
        case'5000':
        cityName='Karachi'
        break;
        default:
            cityName=''
    }

    document.getElementById('city').value = cityName

}

function expandME(){
    let expanParagraph = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sequi, architecto corrupti reiciendis voluptates quibusdam accusantium, quaerat enim laboriosam quae consequatur. Ipsum ipsa ut culpa delectus nesciunt, commodi sit magnam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo sed cum quos, enim dolorum adipisci dolore aperiam. Enim placeat earum eligendi aliquid animi temporibus dolore culpa ut reprehenderit eos? <a href='javascript:void(0)' onclick='reduceMe()'>Click for less</a>"
    document.getElementById('paragraph').innerHTML = expanParagraph
}

function reduceMe(){
    let shortPara = 'rem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sequi, architecto corrupti reiciendis voluptates quibusdam accusantium, quaerat enim laboriosam quae consequatur. Ipsum ipsa ut culpa delectus nesciunt, commodi sit magnam! <a href="javascript:void(0)" onclick="expanParagraph()">Click for more</a>'
    document.getElementById('paragraph').innerHTML= shortPara 
}

function change(){
    document.getElementById('title').className +=' big'
}
function change1(){
    document.getElementById('title2').className +=' big'
}
function hide(){
    document.getElementById('image').className +=' hidden'
}