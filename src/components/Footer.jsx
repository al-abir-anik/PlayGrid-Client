import ScrollToTop from "./ScrollToTop";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    {
      href: "#facebook",
      icon: <FaFacebookF />,
      textColor: "hover:text-sky-400",
    },
    {
      href: "#twitter",
      icon: <FaXTwitter />,
      textColor: "hover:text-blue-600",
    },
    {
      href: "#instagram",
      icon: <FaInstagram />,
      textColor: "hover:text-pink-500",
    },
    {
      href: "#github",
      icon: <FaGithub />,
      textColor: "hover:text-gray-400",
    },
  ];

  const importantLinks = [
    {
      href: "#terms_of_service",
      title: "Terms of service",
    },
    {
      href: "#privacy_policy",
      title: "Privacy policy",
    },
    {
      href: "#safety_and_security",
      title: "Safety and security",
    },
    {
      href: "#refund_policy",
      title: "Refund Policy",
    },
  ];

  return (
    <footer className="w-full py-10 text-white50 bg-black700 border-t-2 border-black500">
      <div className="w-10/12 mx-auto">
        {/* top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <img src="/img/logo.png" alt="logo" width={130} />
          <div className="flex justify-center md:justify-start gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="blank"
                rel="noopener noreferrer"
                className={`p-3 text-lg border border-gray-700 rounded-full transition-colors duration-300 ease-in-out ${link.textColor}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <hr className="my-6 border-black500" />

        {/* bottom */}
        <div className="pb-5 flex flex-col lg:flex-row justify-between gap-8">
          <div className="lg:w-1/2 flex flex-col justify-between gap-5">
            <p className="text-sm text-gray-400">
              Copyright {new Date().getFullYear()} © PlayGrid. All Right
              Reserved. Playgrid, Playgrid Games, Unreal Engine are trademarks
              or registered trademarks of PlayGrid, Inc. in the Bangladesh and
              elsewhere. Other brands or product names are the trademarks of
              their respective owners. PlayGrid has no control over the contents
              of those sites or resources, and accepts no responsibility for
              them or for any loss or damage that may arise from your use of
              them.
            </p>

            <ul className="flex flex-wrap space-x-5">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold hover:underline uppercase text-nowrap"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ScrollToTop />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
