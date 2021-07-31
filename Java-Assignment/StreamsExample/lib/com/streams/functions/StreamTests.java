package com.streams.functions;

// Import dependencies.
import java.util.concurrent.*;


import com.streams.prompts.ExecutionTimer;

import static com.streams.prompts.Stream.*;
import static com.streams.functions.CompResults.*;
import static com.streams.functions.TerminalFunctions.*;
import static java.util.concurrent.TimeUnit.SECONDS;

// Import the ansi method.
import static org.fusesource.jansi.Ansi.ansi;

public class StreamTests
{
    public static class STest1 implements Runnable
    {
        @Override
        public void run()
        {
            ClearConsole();

            System.out.println(ansi().bold().fgBrightMagenta().a("Testing Stream Methods 1/3").reset().newline());

            ExecutionTimer.Start();

            TestNumber1();

            ExecutionTimer.Stop();

            ST1 = ExecutionTimer.Duration();

            System.out.printf("\nTotal execution time: %s m/s\n\n", ExecutionTimer.Duration());

            try 
            {
                STest2 test = new STest2();
                Thread thread = new Thread(test);

                TimeBetween(3, thread, false);
            } 
            catch (InterruptedException e) 
            {
                e.printStackTrace();
            }
        }
    }

    public static class STest2 implements Runnable
    {
        @Override
        public void run()
        {
            ClearConsole();

            System.out.println(ansi().bold().fgBrightMagenta().a("Testing Stream Methods 2/3").reset().newline());

            ExecutionTimer.Start();

            TestNumber2();

            ExecutionTimer.Stop();

            ST2 = ExecutionTimer.Duration();

            System.out.printf("\nTotal execution time: %s m/s\n\n", ExecutionTimer.Duration());

            try 
            {
                STest3 test = new STest3();
                Thread thread = new Thread(test);

                TimeBetween(3, thread, false);
            } 
            catch (InterruptedException e) 
            {
                e.printStackTrace();
            }
        }
    }

    public static class STest3 implements Runnable
    {
        @Override
        public void run()
        {
            ClearConsole();

            System.out.println(ansi().bold().fgBrightMagenta().a("Testing Stream Methods 3/3").reset().newline());

            ExecutionTimer.Start();

            TestNumber3();

            ExecutionTimer.Stop();

            ST3 = ExecutionTimer.Duration();

            System.out.printf("\nTotal execution time: %s m/s\n\n", ExecutionTimer.Duration());

            try 
            {
                MainMenu menu = new MainMenu();
                Thread thread = new Thread(menu);

                TimeBetween(3, thread, true);
            } 
            catch (InterruptedException e) 
            {
                e.printStackTrace();
            }
        }
    }
    
    private static void TimeBetween(int i, Thread thread, Boolean isLast) throws InterruptedException
    {
        final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);

        final Runnable runnable = new Runnable()
        {
            long countdownStarter = i;

            public void run() 
            {
                if(isLast)
                {
                    System.out.printf("Returning to Main Menu in %d seconds %n", countdownStarter);
                }
                else
                {
                    System.out.printf("Executing next test in %d seconds %n", countdownStarter);
                }

                countdownStarter--;

                if (countdownStarter < 0) 
                {
                    System.out.println("\rExecuting... ");
                    scheduler.shutdown();
                    thread.run();
                }
            }
        };

        scheduler.scheduleAtFixedRate(runnable, 0, 1, SECONDS);
    }
}
