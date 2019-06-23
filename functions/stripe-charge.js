// 收費設計

const stripe = require('stripe')('sk_test_9EtYrOHEe3U1Mhx5Zq4GKXsN00XLOBXG3u')

exports.handler = async function(event) {
    const {
        tokenId,
        email,
        name,
        description,
        amount
    } = JSON.parse(event.body)

    const customer = await stripe.customer.create({
        description: email,
        source: tokenId
    })

await stripe.charges.create({
    customer: customer.id,
    amount,
    name,
    description,
    currency: 'usd'
})


}