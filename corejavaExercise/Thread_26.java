class MessagePrinter implements Runnable {
    private String message;

    public MessagePrinter(String message) {
        this.message = message;
    }

    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(message + " - " + i);
            try {
                Thread.sleep(500); // pause to observe interleaving
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted.");
            }
        }
    }
}

public class Thread_26 {
    public static void main(String[] args) {
        Thread thread1 = new Thread(new MessagePrinter("Thread 1 Message"));
        Thread thread2 = new Thread(new MessagePrinter("Thread 2 Message"));

        thread1.start();
        thread2.start();
    }
}
