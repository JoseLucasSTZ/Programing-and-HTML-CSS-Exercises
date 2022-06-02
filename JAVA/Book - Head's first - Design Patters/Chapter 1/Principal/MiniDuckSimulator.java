package Principal;
import Animal.*;
import Behaviors.*;

public class MiniDuckSimulator {

    public static void main(String[] args) {
        Duck mallard = new MallardDuck();
        mallard.performQuack();
        mallard.performQuack();
        mallard.performFly();
        mallard.display();
    }
    
}
