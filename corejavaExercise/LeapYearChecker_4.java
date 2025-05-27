import java.util.Scanner;

public class LeapYearChecker_4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a year: ");
        int year = scanner.nextInt();

        boolean isLeapYear = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);

        System.out.println(year + (isLeapYear ? " is" : " is not") + " a leap year.");

        scanner.close();
    }
}