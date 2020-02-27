const got = require('got')

// httpFetch Func
var httpFetch = async function (url, json = true, method = 'GET', user = null, pwd = null, cookie = null, jwt = null){
    const sso = `${user}:${pwd}`
    var headers = null
    if (cookie){
        headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Cookie: cookie
        }
    }
    else if (jwt !== null){
        headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`
        }
    }
    else {
        headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    // debugging
    // console.log({'fetch, url': `${url}`})

    const client = got.extend({
        json, 
        baseUrl: url,
        // port,
        // default is no timeout
        timeout: 10000,
        rejectUnauthorized: false,
        agent: false,
        requestCert: true,
        method,
        auth: sso,
        headers
    })

    try {
        var http = await client(url)
        if(!method === 'DELETE' && !http.body){
            throw ('Bad Body or Method')
        }
        return http
    } catch (e) {
        // console.error(e)
        throw (e)
    }
}


module.exports = {
    httpFetch
}