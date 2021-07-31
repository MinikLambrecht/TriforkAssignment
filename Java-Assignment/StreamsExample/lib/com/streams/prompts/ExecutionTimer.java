package com.streams.prompts;

public class ExecutionTimer
{
    private static long StartTime;
    private static long StopTime;

    public static void Start()
    {
        long start = System.nanoTime();

        StartTime = start;
    }

    public static void Stop()
    {
        long stop = System.nanoTime();

        StopTime = stop;
    }

    public static String Duration()
    {
        float timeInNanoseconds = (StopTime - StartTime);
        float timeInMilliseconds = timeInNanoseconds / 1000000;

        return String.format("%.8f", timeInMilliseconds);
    }
}
