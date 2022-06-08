const sentence = "hello there from lighthouse labs";

for (const charIndex in sentence) {
  process.stdout.write(sentence[charIndex]); // <- use this ibnstead of the console.log (within the loop)

  setTimeout(() => {
    process.stdout.write(sentence[charIndex]);
  }, charIndex * 100); //instead of 1000, it should be a number which *depends* on which character we're at
}
