/**
 * Created by Hernan Y.Ke on 4/9/15.
 */
function printHelp(){

    console.log("1.js");
    console.log("");
    console.log("usage:");
    console.log("--help print this help");
    console.log("--name print this {name}");
    console.log("");

}


var args=require("minimist")(process.argv.slice(2),{string:"name"});


if(args.help || !args.name){
    printHelp();
    process.exit(1);
}


var name=args.name;

console.log("Hello "+ name);