let input = prompt("What Would You like to do?")
const list = [];
while (input !== "quit") {
    if (input === "new") {
        const newtodo = prompt("Enter New Todo")
        list.push(newtodo);
        console.log(`${newtodo} Added to the List`)
    }
    else if (input === "list") {
        console.log("******************");
        for (let i = 0; i < list.length; i++) {
            console.log(`${i}: ${list[i]}`)
        }
        console.log("******************")
    }
    else if (input === "delete") {
        const index = parseInt(prompt("Ok! Enter an index to delete"))
        if (!Number.isNaN(index)) {
            const deleted = list.splice(index, 1);
            console.log(`${deleted} Deleted`);
        } else {
            console.log("invalid index")
        }
    }
    input = prompt("What Would You like to do?")
}
console.log("Ok! You Quit The App")