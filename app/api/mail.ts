// pages/api/subscribe.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const apikey= 'd31d94c54218a9e3fff1a39d277965f1-us12'
    const { email, message,name } = req.body;

    try {
      const response = await axios.post(
        'https://<dc>.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members',
        {
          message,
          name,
          email_address: email,
          status: 'subscribed',
        },
        {
          headers: {
            Authorization: `Bearer ${apikey}`,
          },
        }
      );

      console.log('Mailchimp response:', response.data);
      res.status(200).json({ success: true, message: 'Subscription successful' });
    } catch (error) {
      console.error('Mailchimp error:', error.response.data);
      res.status(500).json({ success: false, message: 'Subscription failed' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
