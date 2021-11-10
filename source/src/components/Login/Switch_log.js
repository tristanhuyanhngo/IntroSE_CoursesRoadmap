// import  '../../../public/anime.min'
// import '../../anime.js'
import anime from 'animejs/lib/anime.min'
// const anime = require('animejs');

function active(){
    var email = document.getElementById('floatingInputEmail')
    if (email != null) {
        //var email_parent = email.parentNode.parentNode;
        console.log('parent:', email)
        // email.style.visibility = 'hidden';
        // email.disabled= true;
    }
}

function Switch_log(){
    var btn = document.getElementById('btn1');
    // console.log('button: ', btn.value);
    active()
    if (btn != null) {
        if (btn.value === "Sign In") {
            // btn.value = "Sign Up";
            Move('.card-img-left', 45, 1);
            Move('.card-body', 55, -1);
        } else  {
            // btn.value = "Sign In";
            Move('.card-img-left', 45, 0);
            Move('.card-body', 55, 0);
        }

        setTimeout(change_intro_card_text(btn.value), 3000);
    }
}

function change_intro_card_text(status){

    var card_img = document.querySelector('.card-img-left');
    
    var card_img_title = card_img.querySelector('#title');
    var intro = card_img.querySelector('#intro');
    var question = card_img.querySelector('#question');
    var btn = card_img.querySelector('#btn1');

    console.log('title:', card_img_title.textContent);
    if (status === 'Sign In') {
        card_img_title.textContent = 'Hello friend';
        intro.textContent = 'Welcome back to our Web site \n have a nice day';
        question.textContent = 'Do not have account ?\nClick button bellow'
        btn.value = 'Sign Up';
    } else {
        card_img_title.textContent = 'Welcome';
        intro.textContent = 'Welcome to visit our website\nOn this website, you can discovery very much course you want to learn. \nWith modern rate system, you can exactly find out which courses suitable with you';
        question.textContent = 'Already have account?\nClick button bellow'
        btn.value = 'Sign In';
    }

}

function Move(target, percent, director) {
    // director = 1 -> move right else move left
    // .card-img-left = 45 percent
    var target_width =  document.querySelector(target).offsetWidth;
    var parent_width = Math.round(target_width * 100 / percent);

    // console.log(target,' ',target_width);
    // console.log('parent: ', parent_width);
    anime({
        targets:target,
        translateX: Math.abs(parent_width - target_width) * director,
        duration: 1000,
        easing: 'easeInOutExpo'
    })
}

export default Switch_log;