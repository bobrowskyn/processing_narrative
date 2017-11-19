PGraphics pg;
float y = 100;
int numFrames = 4;
int frame = 0;
PImage[] images = new PImage[numFrames];
long timer; 
float framespeed = 10; 

import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import ddf.minim.signals.*;
import ddf.minim.spi.*;
import ddf.minim.ugens.*;

Minim minim;
AudioPlayer ears;

void setup()
{
  size(1000, 2000);
  images[0]  = loadImage("sketch0.jpg");
  images[1]  = loadImage("sketch1.jpg"); 
  images[2]  = loadImage("sketch2.jpg");
  images[3]  = loadImage("sketch3.jpg"); 
  timer = millis(); 
  imageMode(CORNER);
  pg = createGraphics(100, 200);
  y = height * 0.5;
  
   minim = new Minim(this);
  ears = minim.loadFile("ears.mp3",1024);
  
  ears.loop();
} 

void draw() 
{ 
  if (millis() - timer > framespeed) {
    timer = millis(); 
    frame ++;
  }  
  if (frame == numFrames) {
    frame = 0;
  }
  framespeed=map(mouseX, 0, width, 10, 1000);

  image(images[frame], width/2, height/2);

  color from = color(255, 102, 255);
  color to = color(0, 255, 153);
  color interA = lerpColor(from, to, .33);
  color interB = lerpColor(from, to, .66);
  fill(from);
  rect(100, 200, 200, 600);
  fill(interA);
  rect(400, 400, 400, 600);
  fill(interB);
  rect(50, 600, 600, 100);
  fill(to);
  rect(700, 200, 200, 400);

  triangle(156, 171, 542, 130, 86, 1312);
    for (int i = 127; i < 462; i ++) {
    float xloc = random(width); 
    if (xloc > width/67) {
      fill(68, 253, 245);
    } else {
      fill(201, 33, 139);
    }
     triangle(mouseX, mouseY, random(height), random(width),1,40);
         pg.beginDraw();
  pg.background(51,20,30);
  pg.noFill();
  pg.stroke(255);
  pg.triangle(mouseX-120, mouseY-60, 60, 60,90,90);
  pg.endDraw();
  }
  y = y - 1; 
  if (y < 34) { 
    y = height;
}
}