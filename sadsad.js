function myFunc(name,age,friend,pos){
    this.name=name;
    this.age=age;
    this.friend=friend;
    this.pos=pos;
}

var a=prompt('Ismingizni yozing. ');
var b=prompt('Yoshingizni yozing. ');
var c=prompt('Do\'stingizni ismini yozing. ');
var f=prompt('Qayerda turasiz? ');

var User=new myFunc(a,b,c,f);
document.write('<h1>'+User.pos+' degan joyda '+' '+User.name+' ismli inson turar ekan. <br>Aytishlaricha uning yoshi '+User.age+' ekan. <br>U hardoim yaqin do\'sti, '+User.friend+' bilan yurar ekan,bir kuni ularning oldidan ajdarho chiqibdi. '+User.name+' qolida qilich bor ekan, uni ajdarhoga tiqib olibdi. lekin buni foydasi bolmabdi. Ajdarho uni endi yutaman deganida, Uning do\'sti '+User.friend+' ajdarhoning oyogiga 2 ta qilich sanchibdi.<br> Ajdarho oyogida tura olmaydigan darajaga kelib qolibdi. U nima qilishini bilmay uchib ketibdi. <br>'+User.name+ ' ' +(parseInt((User.age))+15)+' yoshida, qadrdon do\'sti bilan bilan ajdarhoni topib o\'dirishibdi. ' +'</h1>');
document.write('<br><br><br><marquee>Created by CL4YZ3N.</marquee>')



