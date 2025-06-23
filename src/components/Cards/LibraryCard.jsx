import { Link } from "react-router";
import Button from "../Button";
import { IoPlay } from "react-icons/io5";

const LibraryCard = ({ game }) => {
  const { _id, title, image } = game;

  return (
    <>
      <Link to={`/game/${_id}`} className="cursor-pointer">
        <div className="group w-80 bg-gray-200 rounded-lg overflow-hidden transition-all ">
          <div className="h-80 overflow-hidden">
            <img
              src={image}
              alt="game poster"
              className="w-full h-full object-cover transform transition-transform ease-in duration-300 group-hover:scale-110"
            />
          </div>

          <div className="p-4 space-y-3">
            <h5 className="text-lg font-semibold h-14">{title}</h5>
            <Button
              id="play-now"
              title="PLAY NOW"
              leftIcon={<IoPlay />}
              containerClass="!w-full bg-yellow300 text-blue200"
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default LibraryCard;
