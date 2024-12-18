module.exports.handler = async (event, context) => {
   const {version, session, request} = event;

   let text = "Hello! I\'ll repeat anything you say to me.";
   if (request["original_utterance"].length > 0)
       text = request["original_utterance"];
   return {
       version,
       session,
       response: {
           text: text,
           end_session: false,
       },
   };
};