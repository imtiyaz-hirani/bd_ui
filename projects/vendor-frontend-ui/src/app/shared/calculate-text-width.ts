const calcTW = (value, font = 'normal 400 14px sans-serif') => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(value);
  return metrics.width + 7;
};

export default calcTW;
