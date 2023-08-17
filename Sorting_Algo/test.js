function calculateVolume(water) {
  let res = 0;

  for (let i = 1; i < water.length; i++) {
    res += water[0] - water[i];
  }
  return res;
}

var trap = function (height) {
  let resStart = 0;
  let resInd = 0;
  let vol = 0;
  const max = Math.max(...height);

  for (let i = 0; i < height.length; i++) {
    if (height[i] == 0) continue;
    if (!resStart && height[i] !== 0) {
      resStart = height[i];
      resInd = i;
      continue;
    }

    if (resStart && (resStart <= height[i] || i == height.length - 1)) {
      if (i == height.length - 1 && resStart > height[i]) {
        vol += calculateVolume(height.reverse().slice(resInd, i));
      } else {
        vol += calculateVolume(height.slice(resInd, i));
      }

      if (height[i] == max) {
        resStart = 0;
        resInd = 0;
      } else {
        resStart = height[i];
        resInd = i;
      }
    }
  }
  return vol;
};

function calve(levels) {
  let res = 0;
  let min = Math.min(levels[0], levels[levels.length - 1]);
  for (let i = 1; i < levels.length; i++) {
    if (min - levels[i] > 0) res += min - levels[i];
  }
  return res;
}

var t2 = function (height) {
  let p1 = 0;
  let pindex = 0;
  let savePoint = 0;
  let i = 0;
  let total = 0;

  while (i < height.length) {
    if (height[i] == 0) {
      i++;
      continue;
    }

    if (height[i] > height[i + 1] && !p1) {
      p1 = height[i];
      pindex = i;
      i++;
      continue;
    }

    if (p1 && height[i] > height[i + 1]) savePoint = i;

    if (i == height.length - 1 || height[i] >= p1) {
      let newp = height[savePoint] > height[i] ? savePoint : i;
      total += calve(height.slice(pindex, newp + 1));
      p1 = height[i];
      pindex = i;
    }

    i++;
  }

  return total;
};

var v3 = function (height) {
  let total = 0;
  for (let i = 0; i < height.length; i++) {
    let next = i + 1;
    let p1 = height[i];
    let flag = flase;
    let savePoint;
    while (next < height.length) {
      if (height[next] >= p1) {
        total += calve(height.slice(i, next));
        i = next;
        break;
      }
      if (height[next] < height[next + 1]) savePoint = next + 1;

      if (savePoint && next == height.length - 1) {
        total += calve(height.slice(i, next + 1));
        i = next;
        break;
      }

      next++;
    }
  }

  return total;
};

console.log(v3([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
