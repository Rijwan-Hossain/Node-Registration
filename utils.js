
let actors = [
    {  
        name: 'Robert Downey Jr.', 
        birthday: new Date(1970, 5, 29), 
        country: 'USA' 
    }, 
    {  
        name: 'Mark Ruffalo', 
        birthday: new Date(1967, 11, 22), 
        country: 'USA' 
    }, 
] 

let movies = [
    {
        title: 'Avenger', 
        year: new Date(2012, 8, 3), 
        rating: '8/10 - ‎1,200,176 votes', 
        actors: [ 
            ...actors 
        ] 
    }, 
    {
        title: 'Thor', 
        year: new Date(2011, 8, 31), 
        rating: 'Rating: 7/10 - ‎696,908 votes', 
        actors: [ 
            { 
                name: 'Chris Hemsworth', 
                birthday: new Date(1983, 8, 11), 
                country: 'USA' 
            }, 
            {  
                name: 'Natalie Portman', 
                birthday: new Date(1981, 6, 9), 
                country: 'USA' 
            }, 
        ] 
    } 
] 

let arr = [ 
    {
        GET: 'host/api/actors', 
        return: '[{ name, birthday, country }]'
    }, 
    {
        POST: 'host/api/user/signup', 
        return: 'JWT Token'
    }, 
    {
        POST: 'host/api/user/login', 
        return: 'JWT Token'
    }, 
    { 
        POST: 'host/api/movies', 
        type: 'Protected Route', 
        return: 'JWT Token' 
    } 
];

module.exports.arr = arr; 

module.exports.actors = actors; 

module.exports.movies = movies; 