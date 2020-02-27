// REFER TO THE RESPECTIVE REST API DOCUMENTATION 
const validator = require('validator')
var argv = require('minimist')(process.argv.slice(2))
const fetch = require('./util/fetch')

var main = async() => {

    try {
        var result = '0'
        // PARAMS, ARGS, ENV
        const key = Object.keys(argv)
        // debugging
        // console.log('main, argv =')
        // console.log(argv)
        if (key.indexOf('network') === -1 || key.indexOf('jwt') === -1){
            throw 'Missing Parameter'
        }
        const jwt = process.env.JWT_TOKEN !== undefined ? process.env.JWT_TOKEN : argv["jwt"]

        if(!validator.isJWT(jwt) && !validator.isIP(argv["network"], '4')){
            throw 'Bad Parameter'
        }
 
        // result = await fetch()

        // debugging
        console.log('main, result =')
        console.log(result)
        if(!result){
            throw 'Bad Result'
        }
        process.stdout.write(JSON.stringify(result, null, 2))
    } catch (e) {
        console.log('main, error =')
        console.error(e)
        process.stderr.write('1')
    } finally {
        await logoff(vc, un, pw, cookie)
    }
}

main()