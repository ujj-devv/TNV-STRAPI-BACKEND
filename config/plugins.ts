module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'ujjawaljoshi.tnv@gmail.com',
          defaultReplyTo: 'ujjawaljoshi.tnv@gmail.com',
        },
      },
    },
  });