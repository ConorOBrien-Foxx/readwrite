const rw = require("./index.js");

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