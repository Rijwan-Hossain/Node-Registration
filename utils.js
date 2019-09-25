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