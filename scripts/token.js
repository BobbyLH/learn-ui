require('dotenv').config();

(async function () {
  const { default: Authenticator } = await import('openai-token');

  const auth = new Authenticator(process.env.OPENAI_ACCOUNT, process.env.OPENAI_PASSWORD)

  await auth.begin()

  const token = await auth.getAccessToken()

  console.log('Your Token is: \n', token)
}())