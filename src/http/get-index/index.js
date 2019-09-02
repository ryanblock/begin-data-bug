let arc = require('@architect/functions')
let data = require('@architect/data')
let beginDataTest = require('@architect/views/data-test')

exports.handler = arc.http.async(beginDataTest, control, handler)

async function control () {
  let scanned = await data.data.scan({})
  console.log(`scanned out:`, stuff)
}

async function handler(req) {
  console.log(req)
  return {
    headers: {'content-type': 'text/html; charset=utf8'},
    body: '<h1>Hello world!</h1>'
  }
}
