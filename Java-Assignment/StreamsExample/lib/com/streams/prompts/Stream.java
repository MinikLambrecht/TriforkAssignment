package com.streams.prompts;

import java.util.Collection;
import java.util.stream.Collectors;

import static com.streams.prompts.Lists.*;

import static com.streams.functions.CompResults.*;

// Import the ansi method.
import static org.fusesource.jansi.Ansi.ansi;

public class Stream
{
    public static void TestNumber1()
    {
        System.out.println(ansi().fgBrightGreen().a("Result").reset());
        ST1Res = join(L1());

        System.out.println(ST1Res);
    }

    public static void TestNumber2()
    {
        System.out.println(ansi().fgBrightGreen().a("Result").reset());
        ST2Res = join(L2());

        System.out.println(ST2Res);
    }

    public static void TestNumber3()
    {
        System.out.println(ansi().fgBrightGreen().a("Result").reset());
        ST3Res = join(L3());

        System.out.println(ST3Res);
    }

    private static String join(Collection<?> collection)
    {
        return collection.stream()
                         .filter(x -> x != null)
                         .map(e -> "[" + e.toString() + "]")
                         .collect(Collectors.joining(", "));
                         
    }
}
