public class CarDemo {
    public static void main(String[] args) {
        Car car1 = new Car();
        car1.make = "Toyota";
        car1.model = "Corolla";
        car1.year = 2020;

        Car car2 = new Car();
        car2.make = "Honda";
        car2.model = "Civic";
        car2.year = 2018;

        car1.displayDetails();
        System.out.println();
        car2.displayDetails();
    }
}