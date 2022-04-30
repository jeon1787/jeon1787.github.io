'use strict';

//인트로
new TypeIt("#typing", {
  speed: 50,
  startDelay: 900,
})
  .type("let Jeon_Eunwoo = ", {speed : 50})
  .type("{}", {speed : 0})
  .move(-1, {instant: true})
  .pause(200)
  .type("<br>", {speed: 0})
  .move(-1, {instant: true})

  .type("<br>", {speed: 0})
  .type("&nbsp&nbsp&nbsp&nbsp", {speed: 0})
  .pause(200)
  .type("name: \"전은우\",", {speed : 50})

  .type("<br>&nbsp&nbsp&nbsp&nbsp", {speed: 0})
  .pause(200)
  .type("email: \"wjsdmsdn1787@naver.com\",", {speed : 50})

  .type("<br>&nbsp&nbsp&nbsp&nbsp", {speed: 0})
  .pause(200)
  .type("skill: ", {speed : 50})
  .type("[]", {speed : 0})
  .move(-1, {instant: true})
  .pause(200)
  .type("\"HTML\", \"CSS\", \"javascript\", \"JAVA\", \"Spring Framework\", \"Oracle SQL Developer\", \"...\"")
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