import java.util.ArrayList;
import java.util.Scanner;

public class ArrayList_24 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<String> studentNames = new ArrayList<>();

        System.out.println("Student Names Manager");
        System.out.println("---------------------");

        while (true) {
            System.out.println("\n1. Add a student name");
            System.out.println("2. View all student names");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");

            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline

            switch (choice) {
                case 1:
                    System.out.print("Enter student name to add: ");
                    String name = scanner.nextLine();
                    studentNames.add(name);
                    System.out.println("'" + name + "' added successfully!");
                    break;

                case 2:
                    if (studentNames.isEmpty()) {
                        System.out.println("No students in the list yet.");
                    } else {
                        System.out.println("\nCurrent Student List:");
                        for (int i = 0; i < studentNames.size(); i++) {
                            System.out.println((i+1) + ". " + studentNames.get(i));
                        }
                    }
                    break;

                case 3:
                    System.out.println("Exiting program. Goodbye!");
                    scanner.close();
                    System.exit(0);

                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }
}