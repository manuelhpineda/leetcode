let minWindow = function(s, t) {
  let map = new Map()

  for(let i = 0; i < t.length; i++) {
    let char = t[i]
    map.set(char, (map.get(char) || 0) + 1)
  }

  let i = 0;
  let j = 0;
  let count = map.size

  let left = 0
  let right = s.length - 1
  let minLength = s.length

  let found = false

  while (j < s.length) {
   let endChar = s.charAt(j++)

    if (map.has(endChar)) {
      map.set(endChar, map.get(endChar) - 1)

      if (map.get(endChar) === 0) {
        count--
      }
    }

    if (count > 0) continue;

    while (count === 0) {
      let startChar = s.charAt(i++)

      if (map.has(startChar)) {
        map.set(startChar, map.get(startChar) + 1)

        if (map.get(startChar) > 0) {
          count++
        }
      }
    }

    if ((j - i) < minLength) {
      left = i
      right = j
      minLength = j - i
      found = true
    }
  }

  return !found ? "" : s.substring(left -1, right)
};

console.log(minWindow("ADOBECODEBANC", "ABC"))
