import { useLoaderData } from "react-router";

const NewsDetails = () => {
  const newsDetails = useLoaderData();
  const { _id, title, image, category, summary, date } = newsDetails;

  return (
    <div className="w-2/3 mx-auto my-10 space-y-12">
      <img
        src={image}
        alt="game image"
        className="w-full h-[45rem] rounded bg-cover"
      />
      <div className="space-y-5">
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <p className="text-lg leading-8 text-gray-600">{summary}</p>
        <p className="text-lg leading-8 text-gray-600">
          Both franchises have found enormous success in the horror genre over
          the last decade. Five Nights at Freddy’s terrified a whole generation
          of gamers with its ghastly stories and animatronic villains, launching
          a multimedia empire that now spans books and movies. And people are
          still hooked on DBD’s intense survivors vs. killer gameplay thanks to
          numerous updates that include original creations and licensed IP like
          Dungeons & Dragons and Castlevania. Behaviour invites other worlds and
          characters to its universe for all sorts of reasons, sometimes
          stretching the definition of what horror can be. But the inclusion of
          FNAF is, in some ways, a reflection of the impact video games have had
          on the horror genre as a whole. “In the case of Five Nights at
          Freddy's, it's not just because it's a movie or it's a video game or
          it's this or that—it is such an integral part of horror culture
          nowadays,” said Mathieu Côté, Head of Partnerships at Behaviour. “A
          lot of people grew up around Five Nights at Freddy’s, or are parents
          of kids who have been obsessed with it for years now.” The studio is
          still keeping some details of the new chapter—including its release
          date, the new killer’s abilities, and the specific features of the
          map—a closely guarded secret. But in a recent interview with the team,
          we were able to get a high-level overview of the collaboration and how
          they worked closely with FNAF creator Scott Cawthon.{" "}
        </p>
        <iframe
          className="w-full my-10 mx-auto"
          width="1076"
          height="550"
          src="https://www.youtube.com/embed/7B4r1jbpS2A?si=irZBthpoy5C8GLkV&rel=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
        <p className="text-lg leading-8 text-gray-600">
          Both franchises have found enormous success in the horror genre over
          the last decade. Five Nights at Freddy’s terrified a whole generation
          of gamers with its ghastly stories and animatronic villains, launching
          a multimedia empire that now spans books and movies. And people are
          still hooked on DBD’s intense survivors vs. killer gameplay thanks to
          numerous updates that include original creations and licensed IP like
          Dungeons & Dragons and Castlevania. Behaviour invites other worlds and
          characters to its universe for all sorts of reasons, sometimes
          stretching the definition of what horror can be. But the inclusion of
          FNAF is, in some ways, a reflection of the impact video games have had
          on the horror genre as a whole. “In the case of Five Nights at
          Freddy's, it's not just because it's a movie or it's a video game or
          it's this or that—it is such an integral part of horror culture
          nowadays,” said Mathieu Côté, Head of Partnerships at Behaviour. “A
          lot of people grew up around Five Nights at Freddy’s, or are parents
          of kids who have been obsessed with it for years now.” The studio is
          still keeping some details of the new chapter—including its release
          date, the new killer’s abilities, and the specific features of the
          map—a closely guarded secret. But in a recent interview with the team,
          we were able to get a high-level overview of the collaboration and how
          they worked closely with FNAF creator Scott Cawthon.{" "}
        </p>
      </div>

      {/* Review Section */}
      <div className="mt-20 space-y-5">
        <h5 className="text-xl font-semibold">COMMENTS</h5>
        <div className="py-3 mb-6">
          <textarea
            className="w-full border border-gray-300 rounded p-4 mb-4 focus:outline-none focus:ring focus:ring-blue-200"
            rows="3"
            placeholder="Write your comment here..."
          ></textarea>
          <button
            disabled
            className="grow px-8 py-3 bg-[#45F882] text-gray-700 rounded-lg hover:bg-[#ffa825]/80 transition ease-in focus:scale-90 cursor-pointer "
          >
            Add Comment
          </button>
        </div>

        {/* Display Reviews */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4">
            <p className="text-gray-600 mb-2">
              <strong>User1:</strong> gta v was absolutely fun!
            </p>
            <p className="text-sm text-gray-400">Posted on January 12, 2025</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-gray-600 mb-2">
              <strong>User2:</strong> All gamer should experience this. Highly
              recommend!
            </p>
            <p className="text-sm text-gray-400">Posted on January 11, 2025</p>
          </div>
          {/* Add more reviews here */}
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
