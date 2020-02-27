// REFER TO THE RESPECTIVE REST API DOCUMENTATION 
const validator = require('validator')
var argv = require('minimist')(process.argv.slice(2))
const { httpFetch } = require('./util/fetch')

var main = async() => {

    try {
        var result = '0'
        // PARAMS, ARGS, ENV
        const key = Object.keys(argv)
        // debugging
        // console.log('main, argv =')
        // console.log(argv)

        if (key.indexOf('url') === -1 || key.indexOf('network') === -1 || key.indexOf('jwt') === -1){
            throw 'Missing Parameter'
        }
        
        const url = process.env.IPAM_URL !== undefined ? process.env.IPAM_URL : argv["url"]
        const jwt = process.env.JWT_TOKEN !== undefined ? process.env.JWT_TOKEN : argv["jwt"]
        const network = argv["network"]
        if(!validator.isJWT(jwt) && !validator.isIP(network)){
            throw 'Bad Parameter'
        }

        // GET NETWORK 
        result = await httpFetch(`${url}/networks?network=${network}`, true, 'GET', null, null, null, jwt)
        if(!result && result['body'] === undefined){
            throw 'Bad Network'
        }
        // COUNT
        result = await httpFetch(`${url}/networks/${result.body._id}?&count=true`, true, 'GET', null, null, null, jwt)
        if(result.body.numHosts < 1){
            throw 'Bad Count'
        }
        // CHECK OUT
        // NOTICE YOU CAN EXTEND THIS SCRIPT TO INCLUDE THE PORT AND HOSTNAME OF THE CALLER 
        // Example /checkout?network=10.11.11.0&fqdn=service.domain.co.za&port=888
        result = await httpFetch(`${url}/addresses/checkout?network=${network}&populate=true`, true, 'GET', null, null, null, jwt)
        if(result.body === undefined){
            throw 'Bad Address Checkout'
        }
        // debugging
        // console.log('main, result =')
        // console.log(result.body)

        process.stdout.write(JSON.stringify(result.body, null, 2))
    } catch (e) {
        console.log('main, error =')
        const err = e['message'] !== undefined ? e.message : e
        console.error(err)
        process.stderr.write('1')
    } 
}

main()