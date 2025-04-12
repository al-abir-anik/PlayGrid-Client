const LatestNews = () => {
  const slides3 = [
    {
      id: 1,
      img: "https://i.ibb.co.com/rGx7kwgF/wp12988880-call-of-duty-modern-warfare-iii-gaming-poster-wallpapers.jpg",
      title: "Modern Warfare III",
      description:
        "Call of Duty: Modern Warfare III is a 2023 first-person shooter game developed by Sledgehammer Games and published by Activision. It is the twentieth installment of the Call of Duty series and is the third entry in the rebooted Modern Warfare sub-series, following Call of Duty: Modern Warfare II.",
      platform: "PLAYSTATION 4, XBOX, PC",
      category: "FIRST PERSON SHOOTER",
      price: "29.9",
    },
    {
      id: 2,
      img: "https://i.ibb.co.com/hR00yMbW/wp6072800-gaming-poster-wallpapers.jpg",
      title: "Assassin's Creed",
      description:
        "London, 1868. In the heart of the Industrial Revolution, lead your underworld organization and grow your influence to fight those who exploit the less privileged in the name of progress.",
      platform: "PLAYSTATION 5, XBOX",
      category: "ACTION, ADVENTURE",
      price: "29.9",
    },
    {
      id: 3,
      img: "https://i.ibb.co.com/YTjPS2GN/wp9129545-playstation-4-4k-wallpapers.jpg",
      title: "GOD OF WAR",
      description:
        "God of War is an action-adventure game franchise created by David Jaffe and developed by Sony's Santa Monica Studio. It began in 2005 on the PlayStation 2 video game console and has become a flagship series for PlayStation, consisting of nine installments across multiple platforms.",
      platform: "PLAYSTATION 2, PC",
      category: "ROLEPLAY, ADVENTURE",
      price: "29.9",
    },
    {
      id: 4,
      img: "https://i.ibb.co.com/rGx7kwgF/wp12988880-call-of-duty-modern-warfare-iii-gaming-poster-wallpapers.jpg",
      title: "Modern Warfare III",
      description:
        "Call of Duty: Modern Warfare III is a 2023 first-person shooter game developed by Sledgehammer Games and published by Activision. It is the twentieth installment of the Call of Duty series and is the third entry in the rebooted Modern Warfare sub-series, following Call of Duty: Modern Warfare II.",
      platform: "PLAYSTATION 4, XBOX, PC",
      category: "FIRST PERSON SHOOTER",
      price: "29.9",
    },
  ];

  return (
    <section className="w-2/3 mx-auto my-32">
      <h2 className="text-[#282828] font-extrabold text-4xl text-center mb-16">
        LATEST <span className="text-[#FFA725]">NEWS</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {slides3.map((game) => (
          <div
            key={game.id}
            className="card group md:w-96 overflow-hidden mx-auto hover:shadow sm:max-w-sm">
            <figure>
              <img
                src={game.img}
                alt="meal image"
                className="h-60 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </figure>
            <div className="card-body">
              <p className="text-sm text-gray-600 mt-4">Rating: 9.3/10</p>
              <h5 className="card-title text-2xl font-bold mb-2.5">
                {game.title}
              </h5>
              <p className="text-lg my-2">${game.description}</p>
              {/* <p className="mb-6">
            Nike Air Max is a popular line of athletic shoes that feature Nike's
            signature Air cushioning technology in the sole.
          </p> */}

              {/* <Link to={`/meal/${_id}`}>
            <button className="btn btn-primary mt-2">Meal Details</button>
          </Link> */}
            </div>
          </div>
        ))}
      </div>

      <button className="text-2xl my-5 p-3 rounded-2xl bg-amber-300">
        View All News
      </button>
    </section>
  );
};

export default LatestNews;
