import java.lang.reflect.*;

public class reflection_39 {
    public static void main(String[] args) throws Exception {
        // Load class dynamically
        Class<?> clazz = Class.forName("person");

        // Print all declared methods and their parameter types
        Method[] methods = clazz.getDeclaredMethods();
        System.out.println("Methods in " + clazz.getName() + ":");
        for (Method method : methods) {
            System.out.print(method.getName() + "(");
            Class<?>[] params = method.getParameterTypes();
            for (int i = 0; i < params.length; i++) {
                System.out.print(params[i].getSimpleName());
                if (i < params.length - 1) System.out.print(", ");
            }
            System.out.println(")");
        }

        // Create instance of Person
        Object obj = clazz.getDeclaredConstructor().newInstance();

        // Invoke sayHello method dynamically
        Method sayHelloMethod = clazz.getDeclaredMethod("sayHello", String.class);
        sayHelloMethod.invoke(obj, "MK");

        // Invoke private method 'secret' (need to set accessible)
        Method secretMethod = clazz.getDeclaredMethod("secret");
        secretMethod.setAccessible(true);
        secretMethod.invoke(obj);
    }
}
