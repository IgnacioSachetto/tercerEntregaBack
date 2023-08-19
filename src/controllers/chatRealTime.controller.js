
export const chatRealtimeController = {
    index: async function (req, res) {
      try {
        console.log("cliente conectado al chat");
  
        return res.render("../views/chatRealTime.handlebars", {
          title: "Chat Live", 
        });
      } catch (error) {
        return res.status(500).json({
          status: "error",
          msg: "something went wrong",
          data: { error },
        });
      }
    },
  };