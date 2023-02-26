module.exports = async function (ctx, next) {
  let status = 200;
  const result = {
    code: 0,
    data: ''
  };
  const { message, token, reverse } = ctx.request.body;
  if (!message) {
    result.code = -1;
    result.data = 'The message is empty!'
  } else {
    try {
      const { ChatGPTUnofficialProxyAPI } = await import('chatgpt');
      const api = new ChatGPTUnofficialProxyAPI({
        accessToken: token || process.env.OPENAI_ACCESS_TOKEN,
        apiReverseProxyUrl: reverse
      });

      const res = await api.sendMessage(message);
      result.data = res.text;
    } catch (e) {
      result.code = 500;
      result.data = e;
      status = 500;
    }
  }

  ctx.body = JSON.stringify(result);
  ctx.type = 'application/json';
  ctx.status = 500;

  next();
}