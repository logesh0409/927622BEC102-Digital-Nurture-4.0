public class hello_37 {
    public void sayHello() {
        System.out.println("Hello, bytecode!");
    }

    public static void main(String[] args) {
        new hello_37().sayHello();
    }
}

/*
run in terminal & javap -c hello_37
 */
