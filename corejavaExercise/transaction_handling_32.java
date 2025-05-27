import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class transaction_handling_32{
    String url = "jdbc:postgresql://localhost:5432/logeshwaran";
    String user = "postgres";
    String password = "4444";

    // Transfer money from one account to another
    public void transferMoney(int fromId, int toId, int amount) {
        try {
            Connection conn = DriverManager.getConnection(url, user, password);
            conn.setAutoCommit(false);  // Begin transaction

            // Debit from sender
            PreparedStatement debit = conn.prepareStatement(
                    "UPDATE accounts SET balance = balance - ? WHERE id = ?"
            );
            debit.setInt(1, amount);
            debit.setInt(2, fromId);
            debit.executeUpdate();

            // Credit to receiver
            PreparedStatement credit = conn.prepareStatement(
                    "UPDATE accounts SET balance = balance + ? WHERE id = ?"
            );
            credit.setInt(1, amount);
            credit.setInt(2, toId);
            credit.executeUpdate();

            conn.commit();  // Commit transaction
            System.out.println("Transfer successful.");
            conn.close();

        } catch (Exception e) {
            e.printStackTrace();
            try {
                Connection conn = DriverManager.getConnection(url, user, password);
                conn.rollback();  // Rollback on error
                System.out.println("Transfer failed. Transaction rolled back.");
                conn.close();
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
        }
    }
}
