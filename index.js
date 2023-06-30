// Add your code here

const { expect } = require("chai");

let name = 'Micah'
let email = 'micah@gmail.com'

await submitData (name,email)
expect(window.fetch,' A fetch to the API was not found')
.to.have.been.called.with('http://localhost:3000/users');
expect(window.fetch)
.to.have.been.called.exactly(1);
expect(headers['content-type'][0])
.to.equal('application/json')
expect(headers['accept'][0])
.to.equal('application/json')
expect(Object.keys(reqBody), 'The request body should only have name and email with key/value pairs')
.to.deep.equal(['name','email'])
expect(reqBody.name, ' The name property was not found in the request body')
.to.eq('Micah')
expect(reqBody.email, ' The email property was not found in the request body')
.to.eq('micah@gmail.com')

it ('handles a failed POST request response, retrieves the new id value and appends it to the DOM', async function (){
    nock ('http://localhost:3000')
    .post('/users')
    .reply(201, function(uri, requestBody) {
        return{
            id:rando,
            ...requestBody
        }
    });
    let name = 'sam' 
    let email = 'sam@sam.com'

await submitData(name, email)
expect(document.body.innerHTML)
.to.include(rando)
});
it ('handles a failed POST request using catch, appends the error message to the DOM', async function (){
    let messsage = 'Unauthorized Access'
    nock('http://localhost:3000')
    .post('/users')
    .replyWIthError({
        message:message,
        code:401,
    })
    let name = 'Jim'
    let email = 'jim@jim.com'
    
    await submitData(name,email)
    expect(document.body.innerHTML)
    .to.include(message)
})