// {
//   // 상태 기억
//   const factorializeWithCache = (function () {
//     const cache = {};
//     return function factorialize(num) {
//       if (num < 0) throw new Error('0보다 큰 수 입력');
//       if (cache[num]) return cache[num];

//       cache[num] = num === 0 ? 1 : num * factorialize(num - 1);
//       return cache[num];
//     };
//   })();

//   console.log(factorializeWithCache(3));
// }

// {
//   // 상태 은닉
//   function makeAddNumFunc(addEnd) {
//     return function (num) {
//       return num + addEnd;
//     };
//   }

//   const add5 = makeAddNumFunc(5);
//   console.log(add5(3));
//   console.log(add5(5));
// }

{
  // 상태 공유
  const func = (function makeClass(classTeacherName) {
    return function (name) {
      return {
        name,
        getTeacherName: () => classTeacherName,
        setTeacherName: (name) => {
          classTeacherName = name;
        },
      };
    };
  })();

  const makeStudent = func();

  const 철수 = makeStudent('원범');
  console.log(철수.getTeacherName());

  철수.setTeacherName('재현');
  console.log(철수.getTeacherName());
}
