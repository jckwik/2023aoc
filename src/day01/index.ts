import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("\n");

const isNumeric = (input: string) => {
  return /^\d/.test(input);
};

const startStringNumeric = (input: string) => {
  const numberPlace = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  numberPlace[0] = input.indexOf("one");
  numberPlace[1] = input.indexOf("two");
  numberPlace[2] = input.indexOf("three");
  numberPlace[3] = input.indexOf("four");
  numberPlace[4] = input.indexOf("five");
  numberPlace[5] = input.indexOf("six");
  numberPlace[6] = input.indexOf("seven");
  numberPlace[7] = input.indexOf("eight");
  numberPlace[8] = input.indexOf("nine");

  let minimumNumber = numberPlace
    .filter((value) => value >= 0)
    .sort((a, b) => a - b);
  // console.log(
  //   input,
  //   numberPlace,
  //   minimumNumber[0],
  //   numberPlace.indexOf(minimumNumber[0]) + 1,
  // );
  return {
    index: minimumNumber[0],
    number: numberPlace.indexOf(minimumNumber[0]) + 1,
  };
};

const endStringNumeric = (input: string) => {
  const numberPlace = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  numberPlace[0] = input.lastIndexOf("one");
  numberPlace[1] = input.lastIndexOf("two");
  numberPlace[2] = input.lastIndexOf("three");
  numberPlace[3] = input.lastIndexOf("four");
  numberPlace[4] = input.lastIndexOf("five");
  numberPlace[5] = input.lastIndexOf("six");
  numberPlace[6] = input.lastIndexOf("seven");
  numberPlace[7] = input.lastIndexOf("eight");
  numberPlace[8] = input.lastIndexOf("nine");

  let maximumNumber = numberPlace
    .filter((value) => value >= 0)
    .sort((a, b) => b - a);
  return {
    index: maximumNumber[0],
    number: numberPlace.indexOf(maximumNumber[0]) + 1,
  };
};

const getNumberp2 = (input: string) => {
  let startNumDigit = "";
  let endNumDigit = "";
  let startNum = 0;
  let endNum = 0;
  let startWord = startStringNumeric(input);
  let endWord = endStringNumeric(input);
  for (var start = 0; start < input.length; start++) {
    if (isNumeric(input[start])) {
      startNumDigit = input[start];
      break;
    }
  }
  //console.log(startWord, startNumDigit, start);
  if (Number.isNaN(Number.parseInt(startNumDigit)) || startWord.index < start) {
    startNum = startWord.number;
  } else {
    startNum = Number.parseInt(startNumDigit);
  }
  for (var end = input.length; end >= 0; end--) {
    if (isNumeric(input[end])) {
      endNumDigit = input[end];
      break;
    }
  }
  if (Number.isNaN(Number.parseInt(endNumDigit)) || endWord.index > end) {
    endNum = endWord.number;
  } else {
    endNum = Number.parseInt(endNumDigit);
  }
  //console.log(startNum, endNum);
  let finalNumber = Number.parseInt(
    String.prototype.concat(startNum.toString(), endNum.toString()),
  );
  //console.log(input, finalNumber);
  return finalNumber;
};

const getNumberp1 = (input: string) => {
  let startNum = "";
  let endNum = "";
  for (var start = 0; start < input.length; start++) {
    if (isNumeric(input[start])) {
      startNum = input[start];
      break;
    }
  }
  for (var end = input.length; end >= 0; end--) {
    if (isNumeric(input[end])) {
      endNum = input[end];
      break;
    }
  }
  //console.log(startNum, endNum);
  return parseInt(String.prototype.concat(startNum, endNum));
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let total = 0;
  input.forEach((value) => {
    total += getNumberp1(value);
  });
  return total;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let total = 0;
  input.forEach((value) => {
    total += getNumberp2(value);
  });
  return total;
};

run({
  part1: {
    tests: [
      {
        input: `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`,
        expected: 142,
      },
      {
        input: `
        2qlljdqcbeight
        eight47srvbfive
        slconeightfoureight557m38
        xvqeightwosixnine61eightsn2tdczfhx
        msixonexch1twokjbdlhchqk1
        112ninejlhhjmjzkzgdsix`,
        expected: 212,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        two1nine
        eightwothree
        abcone2threexyz
        xtwone3four
        4nineeightseven2
        zoneight234
        7pqrstsixteen`,
        expected: 281,
      },
      {
        input: `
        2qlljdqcbeight
        eight47srvbfive
        slconeightfoureight557m38
        xvqeightwosixnine61eightsn2tdczfhx
        msixonexch1twokjbdlhchqk1
        112ninejlhhjmjzkzgdsix
        6six7jr
        878eightgvsqvzfthree
        tg8
        4eight3
        29cq4tvl8
        211
        four24four62hrkhpf`,
        expected:
          28 + 85 + 18 + 82 + 61 + 16 + 67 + 83 + 88 + 43 + 28 + 21 + 42,
      },
      {
        input: `
        hmfour9zxscbsix
        15hx
        lxrptwo6four23brqnsmpnv1six
        sevenj486
        1kdt57four
        threefourqsjjfmqzgm7
        rlkfjspbb79eightlgsb78
        273sixninelpbfnjkrlninethree`,
        expected: 46 + 15 + 26 + 76 + 14 + 37 + 78 + 23,
      },
      {
        input: `
        hmfour9zxscbsix
        15hx
        lxrptwo6four23brqnsmpnv1six
        sevenj486
        1kdt57four
        threefourqsjjfmqzgm7
        rlkfjspbb79eightlgsb78
        273sixninelpbfnjkrlninethree`,
        expected: 46 + 15 + 26 + 76 + 14 + 37 + 78 + 23,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
