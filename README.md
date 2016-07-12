# `readwrite`, for all of your reading and writing

This simple, lightweight, elegant library allows you to read files simply and efficiently.

## Installation

    λ npm install readwrite

Simple!

## Examples

    rw.write("forty.two", "42 is a very special number.\nUse it wisely.");

    rw.logln(rw.read("forty.two"));

    rw.log("Hello! ");
    rw.log("My name is...");

    rw.logln("...!");
    rw.logln("I have no idea... what my name is...");

    rw.logfln("Oh wait, my name is %0, and I am a %1!", "Derpy", "programmer");
    rw.log("Here are your lucky numbers! ");
    rw.logfln("[%[ ]]", 3, 2, 9, 6, 3);
    rw.logfln("You are running readwrite version %{version}, by the way.", rw);

Outputs:

    42 is a very special number.
    Use it wisely.
    Hello! My name is......!
    I have no idea... what my name is...
    Oh wait, my name is Derpy, and I am a programmer!
    Here are your lucky numbers! [3 2 9 6 3]
    You are running readwrite version 1.0.2, by the way.

----

More documentation is to come, but hopefully the examples are sufficient for the moment.