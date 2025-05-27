public class threads_40 {

    private static final int THREAD_COUNT = 100_000;

    public static void main(String[] args) throws InterruptedException {
        System.out.println("Running with traditional threads...");
        runTraditionalThreads();

        System.out.println("\nRunning with virtual threads...");
        runVirtualThreads();
    }

    private static void runTraditionalThreads() throws InterruptedException {
        Thread[] threads = new Thread[THREAD_COUNT];
        long start = System.currentTimeMillis();

        for (int i = 0; i < THREAD_COUNT; i++) {
            threads[i] = new Thread(() -> {
                // Just print thread name once to avoid flooding output
                if (Thread.currentThread().getId() % 10000 == 0) {
                    System.out.println("Traditional: " + Thread.currentThread().getName());
                }
            });
            threads[i].start();
        }

        for (Thread t : threads) {
            t.join();
        }

        long end = System.currentTimeMillis();
        System.out.println("Traditional threads completed in " + (end - start) + " ms");
    }

    private static void runVirtualThreads() throws InterruptedException {
        Thread[] threads = new Thread[THREAD_COUNT];
        long start = System.currentTimeMillis();

        for (int i = 0; i < THREAD_COUNT; i++) {
            threads[i] = Thread.startVirtualThread(() -> {
                if (Thread.currentThread().getId() % 10000 == 0) {
                    System.out.println("Virtual: " + Thread.currentThread().getName());
                }
            });
        }

        for (Thread t : threads) {
            t.join();
        }

        long end = System.currentTimeMillis();
        System.out.println("Virtual threads completed in " + (end - start) + " ms");
    }
}
