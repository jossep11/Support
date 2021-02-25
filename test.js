const addReactions = (message, reactions) => {
    message.react(reactions[0])
    reactions.shift()
    if (reactions.length > 0) {
      setTimeout(() => addReactions(message, reactions), 750)
    }
  }
  
  module.exports = async (client, Embed) => {
   
   
    const channel = await client.channels.fetch('812427165995892746')
  
    channel.messages.fetch().then((messages) => {
      if (messages.size === 0) {
        // Send a new message
       
        channel.send('pinging...').then(msg => {
        Embed
                .setDescription(`que putas`)
            msg.edit(Embed)
      })
      


      
     }
      else {
        // Edit the existing message
        for (const message of messages) {

            channel.edit('pinging...').then(msg => {
                Embed
                        .setDescription(`que pputaedosdsdsds`)
                    msg.edit(Embed)
              })

         // addReactions(message[1], reactions)
        }
      }
    })
  }