package com.streams.prompts;

import java.util.Arrays;
import java.util.Collection;

public class Lists
{
    public static Collection<?> L1()
    {
        return Arrays.asList(new Object(), false, null, "foo", "bar", null, "baz");
    }

    public static Collection<?> L2()
    {
        return Arrays.asList(18, 1, "Doe", "bar", new Object(), "Jane", false, "foo", "Special", "baz", "space", "John", true, null); 
    }

    public static Collection<?> L3()
    {
        return Arrays.asList(18, new Object(), "Jane", "space", "ipsum", "sit", 1, new Object(), null, "dolor", new Object(), "consectetur", null, false, "John", "amet", null, true, "Lorem", "Special", "Doe", "baz", "bar", "foo");
    }
}
