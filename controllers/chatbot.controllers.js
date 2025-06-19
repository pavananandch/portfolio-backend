// const AssistantV2 = require('ibm-watson/assistant/v2')
// const { IamAuthenticator } = require('ibm-watson/auth')
// const assistant = new AssistantV2({
//   version: '2020-04-01',
//   authenticator: new IamAuthenticator({
//     apikey: 'FT8jS_zR8vkOMw--QwUWxtxC0Ef_Kdkfv65C7QhhPuiE',
//   }),
//   serviceUrl:
//     'https://api.eu-gb.assistant.watson.cloud.ibm.com/instances/b3dd3b21-8c24-40e0-b665-1483684e08b5',
// })

// getSessionId = async () => {
//   try {
//     const response = await assistant.createSession({
//       assistantId: '14a9bdf6-d8a2-4212-a5dc-2de2a314fc30',
//     })
//     return response.result.session_id
//   } catch (error) {
//     console.error(error)
//   }
// }
const dotenv = require("dotenv").config();
const dialogflow = require("dialogflow");
const uuid = require("uuid");
const projectId = process.env.PROJECT_ID || "pavan-anand-portfolio";
const credentialsPath = process.env.CREDENTIALS_PATH || "../secrets.json";
process.env.GOOGLE_APPLICATION_CREDENTIALS = credentialsPath;

getBotResponse = async (req, res) => {
      // A unique identifier for the given session
      const sessionId = req.body.sessionId || uuid.v4();

      // Create a session
      const sessionClient = new dialogflow.SessionsClient();
      const sessionPath = sessionClient.sessionPath(projectId, sessionId);

      // The text query request.
      const request = {
        session: sessionPath,
        queryInput: {
          text: {
            // The query to send to the dialogflow agent
            text: req.body.text,
            // The language used by the client (en-US)
            languageCode: "en-US",
          },
        },
      };

      // Send request and log result
      const responses = await sessionClient.detectIntent(request);
      const result = responses[0].queryResult.fulfillmentText;
      const queryText = responses[0].queryResult.queryText;

      if (result) {
        res.json({
          user: queryText,
          bot: result,
          sessionId
        });
      } else {
        return res.json({
          text: "no intents found!"
        });
      }
}


// getBotResponse = async (req, res) => {
//   let sessionId = req.body.sessionId
//   if (sessionId == '') {
//     sessionId = await getSessionId()
//   }

//   // assistant
//   //   .message({
//   //     assistantId: '14a9bdf6-d8a2-4212-a5dc-2de2a314fc30',
//   //     sessionId: sessionId,
//   //     input: {
//   //       message_type: 'text',
//   //       text: req.body.text,
//   //       options: {
//   //         return_context: true,
//   //       },
//   //     },
//   //   })
//   //   .then((resp) => {
//   //     res.send(resp.result)
//   //   })
//   //   .catch((err) => {
//   //     console.log(err)
//   //   })
// }

module.exports = {
  getBotResponse: getBotResponse,
}
