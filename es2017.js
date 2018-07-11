console.log('ES2017');
addEventListener('load', async () => {
  document.body.appendChild(
    document.createElement('p')
  ).textContent = await 'ES2017';
});
