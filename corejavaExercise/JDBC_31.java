import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBC_31 {
    public static void main(String[] args) {
        String url="jdbc:postgresql://localhost:5432/logeshwaran";
        String pass="4444";
        String user="postgres";

        try {
            Connection con=DriverManager.getConnection(url,user,pass);
            System.out.println("Connection success");
        } catch (SQLException e) {
            System.out.println(e);
        }
    }




}
