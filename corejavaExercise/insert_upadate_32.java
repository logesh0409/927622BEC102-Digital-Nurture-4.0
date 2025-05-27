import java.sql.*;

public class insert_upadate_32 {
    // Database connection details
    String url = "jdbc:postgresql://localhost:5432/manoj_kumar";
    String user = "postgres";
    String password = "0000";

    // Insert method
    public void insertStudent(String name, int age) {
        try {
            Connection conn = DriverManager.getConnection(url, user, password);
            String sql = "INSERT INTO student (name, age) VALUES (?, ?)";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, name);
            stmt.setInt(2, age);
            stmt.executeUpdate();
            System.out.println("Inserted");
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Update student
    public void updateStudent(int id, String name, int age) {
        try {
            Connection conn = DriverManager.getConnection(url, user, password);
            String sql = "UPDATE student SET name = ?, age = ? WHERE id = ?";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, name);
            stmt.setInt(2, age);
            stmt.setInt(3, id);
            stmt.executeUpdate();
            System.out.println("Updated");
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

