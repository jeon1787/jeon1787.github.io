'use strict';

//인트로
new TypeIt("#typing", {
  speed: 50,
  startDelay: 900,
})
  // .type("let Jeon_Eunwoo = ", {speed : 50})
  // .type("{}", {speed : 0})
  // .move(-1, {instant: true})
  // .pause(200)
  // .type("<br>", {speed: 0})
  // .move(-1, {instant: true})

  // .type("<br>", {speed: 0})
  // .type("&nbsp&nbsp&nbsp&nbsp", {speed: 0})
  // .pause(200)
  // .type("name: \"전은우\",", {speed : 50})

  // .type("<br>&nbsp&nbsp&nbsp&nbsp", {speed: 0})
  // .pause(200)
  // .type("email: \"wjsdmsdn1787@naver.com\",", {speed : 50})

  // .type("<br>&nbsp&nbsp&nbsp&nbsp", {speed: 0})
  // .pause(200)
  // .type("skill: ", {speed : 50})
  // .type("[]", {speed : 0})
  // .move(-1, {instant: true})
  // .pause(200)
  // .type("\"HTML\", \"CSS\", \"javascript\", \"JAVA\", \"Spring Framework\", \"Oracle SQL Developer\", \"...\"")
  .type("안녕하세요. 백엔드를 지망하는 신입개발자 전은우입니다.")
  .type("<br>처음 개발을 시작하게 된 이유는 자신의 노력 여하에 따라 그리고 습득한 기술의 종류에 따라 발전가능성이 무궁무진하다고 느꼈기 때문입니다.")
  .type("<br>국비지원 학원을 다니며 저는 Spring Framework에 기반하여 MVC모델로 첫 프로젝트를 진행하였습니다.")
  .type("<br>여전히 모르는 점이 산더미 같지만 여러 log와 message를 확인하고 고치는 과정에서 쾌감을 느꼈고")
  .type("<br>더 많은 새로운 기술을 배워 프로젝트에 적용해보고 싶다고 느꼈습니다.")
  .type("<br>아직 개발자로서 부족하지만 새로운 것을 즐기는 도전하는 개발자가 되겠습니다!")
  .go();

  let jeon = {}

  let Jeon_Eunwoo = {
    name : "전은우",
    email : "wjsdmsdn1787@naver.com",
    gender : "male",
    status : "구직중!",
    like : "",
    dislike : "",
    hobby : "",
    // skills: [

    // ]
    skill : ["HTML", "CSS", "javascript", "VSCode", "JAVA11", "Spring Framework", "Thymeleaf", "RestAPI", "AJAX", "Bootstrap5", "Oracle 18c XE", "MVC", "IntelliJ IDEA", "Git", "GitHub", "Github Desktop"],
    hello: function(){ return `이름은 ${this.name}이고, 나이는 ${this.age}입니다.`; }
  }
  console.log(Jeon_Eunwoo);