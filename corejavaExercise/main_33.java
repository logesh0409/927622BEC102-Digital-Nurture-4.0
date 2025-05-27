public class main_33 {
    public static void main(String[] args) {
        transaction_handling_32 dao = new transaction_handling_32();

        // Transfer 200 from account ID 1 to account ID 2
        dao.transferMoney(1, 2, 200);
    }
}
