public class TypeCasting_7 {
    public static void main(String[] args) {
        double myDouble = 9.78;
        int castedInt = (int) myDouble;
        System.out.println("Double value: " + myDouble);
        System.out.println("Casted to int: " + castedInt);

        int myInt = 42;
        double myDoubleFromInt = myInt;  // implicit casting
        System.out.println("Int value: " + myInt);
        System.out.println("Implicitly casted to double: " + myDoubleFromInt);
    }
}
