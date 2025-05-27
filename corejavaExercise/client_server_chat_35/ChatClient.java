package client_server_chat_35;

import java.io.*;
import java.net.*;

public class ChatClient {
    public static void main(String[] args) {
        try {
            Socket socket = new Socket("localhost", 1234);
            System.out.println("Connected to server.");

            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
            BufferedReader userInput = new BufferedReader(new InputStreamReader(System.in));

            String msgFromServer;
            while (true) {
                System.out.print("You: ");
                String message = userInput.readLine();
                out.println(message);
                msgFromServer = in.readLine();
                if (msgFromServer == null) break;
                System.out.println("Server: " + msgFromServer);
            }

            socket.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
