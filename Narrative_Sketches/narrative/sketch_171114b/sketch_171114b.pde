import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import ddf.minim.signals.*;
import ddf.minim.spi.*;
import ddf.minim.ugens.*;

Minim minim;
AudioPlayer rabbithole;

void setup() {
  size(800,800);
  minim = new Minim(this);
  rabbithole = minim.loadFile("rabbithole.mp3",1024);
  rabbithole.play();
  
}

void draw() {
}