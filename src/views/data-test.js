let beginData = require('@begin/data')

module.exports = async function go () {
  let table = 'foo'
  let key = 'bar'
  let yo = 'yoooooooooooooooooooooooooooooooooooooooo'
  await beginData.set({table, key, yo})
  let stuff = await beginData.get({table, key})
  console.log(`got stuff:`, stuff)
}
