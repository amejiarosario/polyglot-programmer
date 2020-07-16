// Without package:
// $ javac HelloWorld.java
// $ java -Xmx128M -Xms16M HelloWorld

// With package:
// javac HelloWorld.java
// option 1: java -classpath .. javapkg.HelloWorld
// option 2: cd .. && java javapkg.HelloWorld
// https://www.baeldung.com/java-could-not-find-load-main-class
package javapkg;

public class HelloWorld {
  public static void main(String []args){
    System.out.println("Hello World");
  }
}
