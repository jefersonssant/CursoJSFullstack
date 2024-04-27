function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hey, sou a promise.');
    }, 2000)
  })
}

export default async function () {
  await promise();
  console.log('Terminou');
}