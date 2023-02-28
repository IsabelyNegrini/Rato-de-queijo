var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4bcac52b-bf41-46ec-984d-82bfd076f2db","339b95eb-0428-4966-87a8-2fb9e38266f2","9ec2081d-41ba-4d4e-a20d-bc262975e9c4","fa173018-b575-484e-86e6-8e1910653952","6b5bada8-85db-47bc-b4f2-ded4f3ab2ece","911b4493-ede3-4101-a428-e4e91d0dc6db"],"propsByKey":{"4bcac52b-bf41-46ec-984d-82bfd076f2db":{"name":"mouse_gray_1","sourceUrl":null,"frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":12,"version":"lD1uIkaCF.C7ieak4ZuAmvKrNv_3SmIu","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/4bcac52b-bf41-46ec-984d-82bfd076f2db.png"},"339b95eb-0428-4966-87a8-2fb9e38266f2":{"name":"mouse_gray_1_copy_1","sourceUrl":null,"frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":12,"version":"vQ8WTNc3XjcFm4RQcLj_.uPqN7lGDick","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/339b95eb-0428-4966-87a8-2fb9e38266f2.png"},"9ec2081d-41ba-4d4e-a20d-bc262975e9c4":{"name":"mouse_gray_1_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":12,"version":"u2PCyrYQ2S7tVP3nGPeHYVWlNI7T2qZJ","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/9ec2081d-41ba-4d4e-a20d-bc262975e9c4.png"},"fa173018-b575-484e-86e6-8e1910653952":{"name":"mouse_gray_1_copy_1_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":12,"version":"6T7IPDoCiyvuAJkO6W93LWpNt_xB61TQ","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/fa173018-b575-484e-86e6-8e1910653952.png"},"6b5bada8-85db-47bc-b4f2-ded4f3ab2ece":{"name":"texture_17_1","sourceUrl":"assets/api/v1/animation-library/gamelab/MrqOCr9Ohv9fBn.29A1qtGvPFAuj8gVJ/category_backgrounds/texture_17.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"MrqOCr9Ohv9fBn.29A1qtGvPFAuj8gVJ","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MrqOCr9Ohv9fBn.29A1qtGvPFAuj8gVJ/category_backgrounds/texture_17.png"},"911b4493-ede3-4101-a428-e4e91d0dc6db":{"name":"cheese1","sourceUrl":"assets/api/v1/animation-library/gamelab/BnRZRFpznzKZ.5IPc97zl99rHJyU2geK/category_food/cheese.png","frameSize":{"x":379,"y":360},"frameCount":1,"looping":true,"frameDelay":2,"version":"BnRZRFpznzKZ.5IPc97zl99rHJyU2geK","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":379,"y":360},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BnRZRFpznzKZ.5IPc97zl99rHJyU2geK/category_food/cheese.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

  //criando os estados do jogo
  var gameState= "serve";
  
  //criando a pontuação
  var score=0;

  //criando o rato
  var mouse=createSprite(20, 15 , 15, 15);
  mouse.setAnimation("mouse_gray_1_copy_1");
  mouse.scale=.1;
  
  //criando os queijos
  var cheese1=createSprite(90,17);
  cheese1.setAnimation("cheese1");
  cheese1.scale=.08;
  
  var cheese2=createSprite(324,107);
  cheese2.setAnimation("cheese1");
  cheese2.scale=.08;
  
  var cheese3=createSprite(18,215);
  cheese3.setAnimation("cheese1");
  cheese3.scale=.08;
  
  var cheese4=createSprite(322,220);
  cheese4.setAnimation("cheese1");
  cheese4.scale=.08;
  
  var cheese5=createSprite(194,385);
  cheese5.setAnimation("cheese1");
  cheese5.scale=.08;
  
  var cheese6=createSprite(153,211);
  cheese6.setAnimation("cheese1");
  cheese6.scale=.08;
  
  var cheese7=createSprite(19,380);
  cheese7.setAnimation("cheese1");
  cheese7.scale=.08;
  
  //criando as paredes
  var wall1 = createSprite(60, 27, 13, 55);
  wall1.shapeColor=("black");
 
  var wall2=createSprite(15, 95, 70, 13);
  wall2.shapeColor=("black");
  
  var wall3=createSprite(43, 190, 13, 90);
  wall3.shapeColor=("black");
  
  var wall4=createSprite(25, 240, 50, 13);
  wall4.shapeColor=("black");
  
  var wall5=createSprite(205, 48, 90, 13);
  wall5.shapeColor=("black");
  
  var wall6=createSprite(95, 48, 60, 13);
  wall6.shapeColor=("black"); 
  
  var wall7=createSprite(246, 27, 13, 55);
  wall7.shapeColor=("black"); 
  
  var wall7=createSprite(295, 280, 13, 180);
  wall7.shapeColor=("black"); 
  
  var wall8=createSprite(118, 23, 13, 40);
  wall8.shapeColor=("black"); 
  
  var wall9=createSprite(265, 48.5, 80, 13);
  wall9.shapeColor=("black");
  
  var wall10=createSprite(300, 87.5, 13, 90);
  wall10.shapeColor=("black");
  
  var wall11=createSprite(318, 130, 50, 13);
  wall11.shapeColor=("black");
  
  var wall13=createSprite(348, 140, 13, 200);
  wall13.shapeColor=("black");
  
  var wall14=createSprite(325, 245, 60, 13);
  wall14.shapeColor=("black");
  
  var wall15=createSprite(375, 305, 70, 13);
  wall15.shapeColor=("black");
  
  var wall16=createSprite(224, 363, 130, 13);
  wall16.shapeColor=("black");
  
  var wall17=createSprite(239, 226, 13, 190);
  wall17.shapeColor=("black");
  
  var wall18=createSprite(162, 382, 13, 50);
  wall18.shapeColor=("black");

  var wall19=createSprite(75, 95, 50, 13);
  wall19.shapeColor=("black");
  
  var wall20=createSprite(93.3, 140, 13, 90);
  wall20.shapeColor=("black");
  
  var wall21=createSprite(182, 179, 13, 100);
  wall21.shapeColor=("black");
  
  var wall22=createSprite(180, 233, 130, 13);
  wall22.shapeColor=("black");
  
  var wall23=createSprite(43, 300, 13, 115);
  wall23.shapeColor=("black");
  
  var wall24=createSprite(43, 134, 13, 65);
  wall24.shapeColor=("black");
  
  var wall25=createSprite(131, 190, 90, 13);
  wall25.shapeColor=("black");
  
  var wall26=createSprite(100, 363, 130, 13);
  wall26.shapeColor=("black");
  
  var wall27=createSprite(113, 311, 130, 13);
  wall27.shapeColor=("black");
  
  playSound("assets/category_background/synthesize.mp3",true);
  
  
  
  createEdgeSprites();
  
  function draw() {
  
  background("lightyellow");
  
  if (gameState == "serve"){
  textSize(12);
  fill(0);
  text("Bem vindo! Pressione espaço",115,105);
  textSize(11);
  text("iniciar e ajude o rato pegar seus queijos.",99, 115)
  if (keyDown("space")){
  
  gameState = "play";
  }
  } 
  
  if (gameState == "play"){
  
  if (score==7){
  if (keyDown("up")){
  mouse.x=mouse.x-0;
  }
  if (keyDown("down")){
  mouse.x=mouse.x+0;
  }
  if (keyDown("LEFT")){
  mouse.y=mouse.y-0;
  }
  if (keyDown("RIGHT")){
  mouse.y=mouse.y+0;
  }
  gameState = "end";
  }

  
  
  //exibir pontuação
  textSize(15);
  fill("black");
  stroke("black");
  text("Pontuação :"+score,300,20);

  //dando movimento ao rato
  if (keyDown("up")) {
  mouse.setAnimation("mouse_gray_1");
  mouse.y=mouse.y-1.5;
  }
  if (keyDown("down")) {
  mouse.setAnimation("mouse_gray_1_copy_1");
  mouse.y=mouse.y+1.1;
  }
 
  if (keyDown("left")) {
  mouse.setAnimation("mouse_gray_1_copy_1_copy_1_copy_1");
  mouse.x=mouse.x-1.5;
  }
 
  if (keyDown("right")) {
  mouse.setAnimation("mouse_gray_1_copy_1_copy_1");
  mouse.x = mouse.x +1.5
  ;
  }
  
  //criando a destruição do queijo ao rato tocar nele
  if (mouse.isTouching(cheese1)){
  score=score+1;
  cheese1.destroy();
  }
  
  if (mouse.isTouching(cheese2)){
  score=score+1;
  cheese2.destroy();
  }
  
  if (mouse.isTouching(cheese3)){
  score=score+1;
  cheese3.destroy();
  }
  
  if (mouse.isTouching(cheese4)){
  score=score+1;
  cheese4.destroy();
  }
  
  if (mouse.isTouching(cheese5)){
  score=score+1;
  cheese5.destroy();
  }
  
  if (mouse.isTouching(cheese6)){
  score=score+1;
  cheese6.destroy();
  }
  if (mouse.isTouching(cheese7)){
  score=score+1;
  cheese7.destroy();
  }
  
  
  mouse.bounceOff(wall1);
  mouse.bounceOff(wall2);
  mouse.bounceOff(wall3);
  mouse.bounceOff(wall5);
  mouse.bounceOff(wall6);
  mouse.bounceOff(wall7);
  mouse.bounceOff(wall9);
  mouse.bounceOff(wall10);
  mouse.bounceOff(wall11);
  mouse.bounceOff(wall13);
  mouse.bounceOff(wall14);
  mouse.bounceOff(wall15);
  mouse.bounceOff(wall16);
  mouse.bounceOff(wall17);
  mouse.bounceOff(wall18);
  mouse.bounceOff(wall19);
  mouse.bounceOff(wall20);
  mouse.bounceOff(wall21);
  mouse.bounceOff(wall22);
  mouse.bounceOff(wall23);
  mouse.bounceOff(wall25);
  mouse.bounceOff(wall26);
  mouse.bounceOff(edges); 
  }
  
  if (gameState == "end"){
  stopSound("assets/category_background/synthesize.mp3");
  textSize(11);
  text("Parabéns você, achou todos os queijos." ,100,105);
  }
  
  drawSprites();
  }

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
