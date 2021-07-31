package com.streams.functions;

// Import dependencies.
import org.fusesource.jansi.AnsiConsole;

import java.io.Console;

import com.streams.functions.NonStreamTests.*;
import com.streams.functions.StreamTests.*;
import com.streams.prompts.CompList.Results;

// Import the ansi method.
import static org.fusesource.jansi.Ansi.ansi;

public class TerminalFunctions 
{
    public static void ClearConsole()
    {
        try
        {
            // Check which operating system the user runs.
            String OS = System.getProperty("os.name");

            if (OS.contains("Windows"))
            {
                ProcessBuilder pb = new ProcessBuilder("cmd", "/c", "cls");
                Process start = pb.inheritIO().start();

                start.waitFor();
            }
            else
            {
                ProcessBuilder pb = new ProcessBuilder("clear");
                Process start = pb.inheritIO().start();

                start.waitFor();
            }
        } 
        catch (Exception e)
        {
            System.out.println(e);
        }
    }

    public static class MainMenu implements Runnable
    {
        @Override
        public void run()
        {
            ClearConsole();

            // Initialize Jansi library for ANSI code support.
            AnsiConsole.systemInstall();

            // Setup the menu.
            System.out.println(ansi().bold().fgGreen().a("Choose from these choices").reset());
            System.out.println(ansi().bold().fgMagenta().a("-------------------------\n").reset());
            System.out.println(ansi().fgYellow().a("1 - Benchmark non-stream method"));
            System.out.println(ansi().fgYellow().a("2 - Benchmark stream method"));
            System.out.println(ansi().fgYellow().a("3 - Compare Benchmarks *WIP*"));
            System.out.println(ansi().fgBrightRed().a("4 - Quit\n").reset());

            // Get the user input, provided by the user using the keyboard.
            Console console = System.console();
            String input = console.readLine("Choice: ");

            // After the user has made a choice, act according to their choice.
            switch(Integer.parseInt(input))
            {
                case 1:
                {
                    // Initialize a new NSTest1 Class.
                    NSTest1 t1 = new NSTest1();
                    // Initialize a new Thread with the NSTest1 Class.
                    Thread t1Thread = new Thread(t1);

                    // Run the thread.
                    t1Thread.run();
                    break;
                }

                case 2:
                {
                    STest1 t1 = new STest1();
                    Thread t1Thread = new Thread(t1);

                    t1Thread.run();
                    break;
                }

                case 3:
                {
                    Results res = new Results();
                    Thread clThread = new Thread(res);

                    clThread.run();

                    break;
                }

                case 4:
                {
                    System.exit(0);
                    break;
                }
            }
        }
    }
}
