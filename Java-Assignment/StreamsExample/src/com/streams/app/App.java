package com.streams.app;

// Import Dependencies & Custom Libraries.
import static com.streams.functions.TerminalFunctions.*;

public class App
{
    public static void main(String[] args) throws Exception
    {
        MainMenu menu = new MainMenu();
        Thread thread = new Thread(menu);

        thread.run();
    }
}

