const { v4: uuidv4 } = require('uuid');

let buttons = new Array(12).fill({ img: 'example.png' });

buttons = buttons.map((btn, i) => {
  const idGenerated = { id: uuidv4(), name: `X-${i + 1}` };
  return { ...btn, ...idGenerated };
});

export { buttons };
