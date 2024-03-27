const AssistantV2 = require('ibm-watson/assistant/v2')
const { IamAuthenticator } = require('ibm-watson/auth')

const assistant = new AssistantV2({
  version: '2020-04-01',
  authenticator: new IamAuthenticator({
    apikey: 'FT8jS_zR8vkOMw--QwUWxtxC0Ef_Kdkfv65C7QhhPuiE',
  }),
  serviceUrl:
    'https://api.eu-gb.assistant.watson.cloud.ibm.com/instances/b3dd3b21-8c24-40e0-b665-1483684e08b5',
})

getSessionId = async () => {
  try {
    const response = await assistant.createSession({
      assistantId: '14a9bdf6-d8a2-4212-a5dc-2de2a314fc30',
    })
    return response.result.session_id
  } catch (error) {
    console.error(error)
  }
}

getBotResponse = async (req, res) => {
  let sessionId = req.body.sessionId
  if (sessionId == '') {
    sessionId = await getSessionId()
  }

  assistant
    .message({
      assistantId: '14a9bdf6-d8a2-4212-a5dc-2de2a314fc30',
      sessionId: sessionId,
      input: {
        message_type: 'text',
        text: req.body.text,
        options: {
          return_context: true,
        },
      },
    })
    .then((resp) => {
      res.send(resp.result)
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = {
  getBotResponse: getBotResponse,
}
