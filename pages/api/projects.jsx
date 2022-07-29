export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://media.discordapp.net/attachments/954816907054288896/1002581312210735194/standard_12.gif",
      name: "Helixo Gifts",
      description:
        "Ucuz, gerçek ve kaliteli discord rewards sunucusu.",
      link: "https://discord.gg/WBEQUpfZU6",
    },
    {
      id: 2,
      image: "https://media.discordapp.net/attachments/954816907054288896/1002581459812483183/a341d542b2d2db55fc65aa835dbb3d83.png",
      name: "Boş",
      description:
        "Boş",
      link: "",
    },
     {
      id: 3,
      image: "https://media.discordapp.net/attachments/954816907054288896/1002581459812483183/a341d542b2d2db55fc65aa835dbb3d83.png",
      name: "Boş",
      description:
        "",
      link: "",
    }
  ];
  res.status(200).json(data);
};
