const sentence = "hello there from lighthouse labs"
setTimeout(()=> {
    let delay = 0;
for (const char of sentence){
    setTimeout(()=> {
 process.stdout.write(char);
}, delay);
 delay += 50;
}
}, 3000)