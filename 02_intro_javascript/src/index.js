
// const users = [
//     {
//         id: 1,
//         name: "Jack",
//         isActive: true,
//     },
//     {
//         id: 2,
//         name: "John",
//         isActive: true,
//     },
//     {
//         id: 3,
//         name: "Mike",
//         isActive: false,
//     },
// ]

// const names = users.map(user => user.name)
// console.log(names)

// const activeUsers = users.filter(user => user.isActive)
// console.log(activeUsers)

const append = ( arr , el ) => [ ...arr, el  ]
console.log(append([1,2], 3))

const array = [1,3,5,87]

const maxValue = array.reduce( ( prev, current ) => prev > current ? prev : current )
console.log(maxValue)

const average = array.reduce( (prev, current) =>  prev + current  ) / array.length
console.log(average)