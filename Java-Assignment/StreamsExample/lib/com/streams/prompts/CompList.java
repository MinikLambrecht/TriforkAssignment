package com.streams.prompts;

// Import the ansi method.
import static org.fusesource.jansi.Ansi.ansi;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import static java.util.Optional.ofNullable;
import static com.streams.functions.CompResults.*;
import static com.streams.functions.TerminalFunctions.*;

public class CompList
{
    public static class Results implements Runnable
    {
        @Override
        public void run()
        {
            ClearConsole();

            List<String> NonStreamTests = Arrays.asList(String.format("%s m/s", ofNullable(NST1).orElse("00.00000000")), 
                                                     String.format("%s m/s", ofNullable(NST2).orElse("00.00000000")), 
                                                     String.format("%s m/s", ofNullable(NST3).orElse("00.00000000")));
            List<String> NonStreamTestResults = Arrays.asList(String.format("%s", ofNullable(NST1Res).orElse("No Results Found")),
                                                              String.format("%s", ofNullable(NST2Res).orElse("No Results Found")),
                                                              String.format("%s", ofNullable(NST3Res).orElse("No Results Found")));

            List<String> StreamTests = Arrays.asList(String.format("%s m/s", ofNullable(ST1).orElse("00.00000000")), 
                                                     String.format("%s m/s", ofNullable(ST2).orElse("00.00000000")), 
                                                     String.format("%s m/s", ofNullable(ST3).orElse("00.00000000")));
            List<String> StreamTestResults = Arrays.asList(String.format("%s", ofNullable(ST1Res).orElse("No Results Found")),
                                                              String.format("%s", ofNullable(ST2Res).orElse("No Results Found")),
                                                              String.format("%s", ofNullable(ST3Res).orElse("No Results Found")));

            System.out.println(ansi().bold().fgMagenta().a("-------------------------------------").reset());
            System.out.print(ansi().bold().fgBrightCyan().a(String.format("%4s %1s %15s %1s %10s", "Test", " ", "Execution Time", " ", "Method")).reset());
            System.out.println();
            System.out.println(ansi().bold().fgMagenta().a("-------------------------------------").reset());

            for (int i = 0; i < NonStreamTests.size(); i++)
            {
                System.out.format("%4s", (i + 1) + "   ");
                System.out.format("%1s", "   ");
                System.out.format("%15s", NonStreamTests.get(i));
                System.out.format("%1s", " ");
                System.out.format("%10s", "    Non-Stream");

                System.out.println(); 
            }

            System.out.println(ansi().bold().fgMagenta().a("-------------------------------------").reset());

            for (int i = 0; i < StreamTests.size(); i++)
            {
                System.out.format("%4s", (i + 1) + "   ");
                System.out.format("%1s", "   ");
                System.out.format("%15s", StreamTests.get(i));
                System.out.format("%1s", " ");
                System.out.format("%10s", "        Stream");

                System.out.println(); 
            }

            System.out.println(ansi().bold().fgMagenta().a("-------------------------------------").reset());

            System.out.println("\nPress any key to return to the Main Menu");

            try
            {
                System.in.read();
            }
            catch (IOException e)
            {
                e.printStackTrace();
            }

            MainMenu menu = new MainMenu();
            Thread menuThread = new Thread(menu);

            menuThread.run();
        }
    }
}
