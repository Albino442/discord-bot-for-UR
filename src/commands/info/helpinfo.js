exports.run = (client, message, args) => {
  console.log(`${message.author.tag} used the helpinfo command.`)
  message.channel.send({
    embed: {
      color: 000000,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Info Help",
      description: "These are all the info commands.",
      fields: [{
        name: "_**!ping**_",
        value: "Gets the bot's ping in ms."
      },
      {
        name: "_**!server**_",
        value: "Shows the server's information."
      },
      {
        name: "_**!helpauthor**_",
        value: "Shows the creators info."
      },
      {
        name: "_**!userinfo (user)**_",
        value: "Shows your information."
      },
      {
        name: "_**!roleinfo (role)**_",
        value: "Shows the information for the mentioned role."
      },
      {
        name: "_**!Rank Or !r**_",
        value: "Shows the Your Rank and your Xp levels"
      },
      {
        name: "_**!leaderboard**_",
        value: "Shows the Highest ranking people"
      },
      {
        name: "Suggestions",
        value: "Have any suggestion? Click [here](https://discord.gg/SvNrenM)"
      }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
      }
    }
  })
};
