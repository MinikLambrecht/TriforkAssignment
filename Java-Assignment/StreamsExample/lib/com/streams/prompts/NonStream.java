package com.streams.prompts;

import java.util.Collection;

import static com.streams.prompts.Lists.*;

import static com.streams.functions.CompResults.*;

// Import the ansi method.
import static org.fusesource.jansi.Ansi.ansi;

public class NonStream
{
    public static void TestNumber1()
    {
        System.out.println(ansi().fgBrightGreen().a("Result").reset());
        NST1Res = join(L1());

        System.out.println(NST1Res);
    }

    public static void TestNumber2()
    {
        System.out.println(ansi().fgBrightGreen().a("Result").reset());
        NST2Res = join(L2());

        System.out.println(NST2Res);
    }

    public static void TestNumber3()
    {
        System.out.println(ansi().fgBrightGreen().a("Result").reset());
        NST3Res = join(L3());

        System.out.println(NST3Res);
    }

    private static String join(Collection<?> collection)
    {
        final StringBuilder sb = new StringBuilder();
        boolean isFirst = true;

        for (Object item : collection)
        {
            if (item != null) 
            { 
                // Disregard `null` entries
                if (isFirst) 
                {
                    isFirst = false; // Don't append delimiter on first entry.
                } 
                else
                {
                    sb.append(", "); // Delimit remaining.
                }
                
                sb.append("[") // Wrap entry
                .append(item)
                .append("]");
            }
        }

        return sb.toString();
    }
}
