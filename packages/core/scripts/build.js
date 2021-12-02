function buildCore() {
  return Promise.resolve()
}
console.info("Building CSS...");

Promise.all([buildCore()]).then(() => {
  console.log("Finished building CSS.");
});
