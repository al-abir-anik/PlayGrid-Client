import { IoNotifications, IoPlay } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import Button from "../../components/Button";

const UpcomingGames = () => {
  const upcomingGames = [
    {
      name: "Among Us",
      summary:
        "Among Us is a multiplayer party game where players work together to complete tasks while one or more impostors attempt to sabotage and eliminate the crew.",
      image:
        "https://cdn2.unrealengine.com/egs-ready-or-not-breaker-1920x1080-8374d0567fac.jpg?resize=1&w=854&h=480&quality=medium",
      price: 34,
    },
    {
      name: "Grand Theft Auto V",
      summary:
        "GTA V is an open-world action-adventure game featuring three playable protagonists in a sprawling city. Players can engage in story missions, side activities, and satire.",
      image:
        "https://cdn2.unrealengine.com/egs-rimworld-odyssey-breaker-1920x1080-2348696632cd.jpg?resize=1&w=854&h=480&quality=medium",
      price: 18,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
      {upcomingGames.map((game) => (
        <div className="text-white flex gap-6">
          <div className="w-full relative pb-[40%] overflow-hidden">
            <img
              src={game.image}
              alt="game poster"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-4 pt-5">
              <p className="text-3xl font-semibold tracking-wide">
                {game.name}
              </p>
              <span className="flex items-center gap-6">
                <p className="text-sm font-semibold opacity-80 uppercase">
                  Action
                </p>
                <p>23/05</p>
              </span>
              <p className="w-11/12 text-lg opacity-70">{game.summary}</p>
            </div>

            <Button
              id="prebook"
              title="PREBOOK"
              leftIcon={<IoPlay />}
              containerClass="!w-11/12 bg-yellow300 text-blue200"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingGames;
