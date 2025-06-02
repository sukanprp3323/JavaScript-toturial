//! Topics:
//? Array.FindLast()
//? Array.FindLastIndex()
//? Array.protoType.toReversed()
//? Array.protoType.toSorted(CompareFn)
//? Array.toSpliced(Start, deleteCount, ...Items)
//? Array.ProtoType.with(index, value)

//! 1. Array.FindLast() & Array.FindLastIndex()

const Arr1 = [1, 2, 3, 4, 5, 6, 7, 4];

console.log(Arr1.findLast((elem) => elem))

//! Array.FindLastIndex()

console.log(Arr1.findLastIndex((elem) => elem));

