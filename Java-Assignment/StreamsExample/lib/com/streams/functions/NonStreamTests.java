package com.streams.functions;

// Import dependencies.
import java.util.concurrent.*;


import com.streams.prompts.ExecutionTimer;

import static com.streams.prompts.NonStream.*;
import static com.streams.functions.CompResults.*;
import static com.streams.functions.TerminalFunctions.*;
import static java.util.concurrent.TimeUnit.SECONDS;

// Import the ansi method.
import static org.fusesource.jansi.Ansi.ansi;

public class NonStreamTests
{
    public static class NSTest1 implements Runnable
    {
        @Override
        public void run()
        {
            ClearConsole();

            System.out.println(ansi().bold().fgBrightMagenta().a("Testing Non-Stream Methods 1/3").reset().newline());

            ExecutionTimer.Start();

            TestNumber1();

            ExecutionTimer.Stop();

            NST1 = ExecutionTimer.Duration();

            System.out.printf("\nTotal execution time: %s m/s\n\n", ExecutionTimer.Duration());

            try 
            {
                NSTest2 test = new NSTest2();
                Thread thread = new Thread(test);

                TimeBetween(3, thread, false);
            } 
            catch (InterruptedException e) 
            {
                e.printStackTrace();
            }
        }
    }

    public static class NSTest2 implements Runnable
    {
        @Override
        public void run()
        {
            ClearConsole();

            System.out.println(ansi().bold().fgBrightMagenta().a("Testing Non-Stream Methods 2/3").reset().newline());

            ExecutionTimer.Start();

            TestNumber2();

            ExecutionTimer.Stop();

            NST2 = ExecutionTimer.Duration();

            System.out.printf("\nTotal execution time: %s m/s\n\n", ExecutionTimer.Duration());

            try 
            {
                NSTest3 test = new NSTest3();
                Thread thread = new Thread(test);

                TimeBetween(3, thread, false);
            } 
            catch (InterruptedException e) 
            {
                e.printStackTrace();
            }
        }
    }

    public static class NSTest3 implements Runnable
    {
        @Override
        public void run()
        {
            ClearConsole();

            System.out.println(ansi().bold().fgBrightMagenta().a("Testing Non-Stream Methods 3/3").reset().newline());

            ExecutionTimer.Start();

            TestNumber3();

            ExecutionTimer.Stop();

            NST3 = ExecutionTimer.Duration();

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
