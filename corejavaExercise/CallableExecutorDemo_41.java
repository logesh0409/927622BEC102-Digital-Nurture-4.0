import java.util.concurrent.*;
import java.util.*;

public class CallableExecutorDemo_41 {

    public static void main(String[] args) throws InterruptedException, ExecutionException {
        // Create a fixed thread pool with 3 threads
        ExecutorService executor = Executors.newFixedThreadPool(3);

        // List of Callable tasks
        List<Callable<String>> tasks = List.of(
                () -> {
                    Thread.sleep(1000);
                    return "Task 1 completed";
                },
                () -> {
                    Thread.sleep(500);
                    return "Task 2 completed";
                },
                () -> {
                    Thread.sleep(200);
                    return "Task 3 completed";
                }
        );

        // Submit tasks and collect Futures
        List<Future<String>> futures = new ArrayList<>();
        for (Callable<String> task : tasks) {
            Future<String> future = executor.submit(task);
            futures.add(future);
        }

        // Retrieve results from Futures
        for (Future<String> future : futures) {
            // Blocks until the result is available
            String result = future.get();
            System.out.println(result);
        }

        // Shutdown executor
        executor.shutdown();
    }
}
