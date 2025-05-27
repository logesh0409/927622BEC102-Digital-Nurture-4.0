
public class main_32 {
    public static void main(String[] args) {
        insert_upadate_32 dao = new insert_upadate_32();

        dao.insertStudent("Manoj", 21);        // Insert
        dao.updateStudent(1, "MK", 22);        // Update where id = 1
    }
}