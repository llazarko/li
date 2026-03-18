const stripe = require('stripe')('sk_test_your_secret_key_here');
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [{
      price: req.body.priceId,   // 'price_1R0uGxP99SZwJ6I87d5Qvq8k'
      quantity: req.body.quantity,
    }],
    mode: 'payment',
    success_url: req.body.successUrl,
    cancel_url: req.body.cancelUrl,
  });
  res.json({ id: session.id });
});