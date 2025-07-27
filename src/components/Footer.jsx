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
    <footer className="w-full py-10 text-white bg-black">
      {/* <div className="w-3/4 mx-auto py-16 flex flex-col md:flex-row justify-around">
        <div className="space-y-5">
          <p className="text-3xl font-black ">
            PLAY<span className="text-[#45F882]">GRID</span>
          </p>
          <p className="max-w-80">
            Enhance your gaming experience with premium games available right in
            the game store.
          </p>
        </div>
        <nav className="flex flex-col text-[#ADB0BC] font-semibold space-y-2">
          <h6 className="text-xl font-bold text-white mb-5">SUPPORTS</h6>
          <a href="#">Help & Support</a>
          <a href="#">24/7 Supports</a>
          <a href="#">Contact Us</a>
        </nav>
        <nav className="flex flex-col text-[#ADB0BC] font-semibold space-y-2">
          <h6 className="text-xl font-bold text-white mb-5">LEGAL INFO</h6>
          <a href="#">Terms of service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Safety & Security</a>
        </nav>
        <div className="flex flex-col text-[#ADB0BC] font-semibold space-y-2">
          <h6 className="text-xl font-bold text-white mb-5">NEWSLETTER</h6>
          <p>
            Subscribe our newsletter to get our <br /> latest update &
            newsconsectetur.
          </p>
          <form className="gap-6">
            <fieldset>
              <div className="flex flex-wrap sm:flex-nowrap w-full gap-1">
                <input
                  className="input input-sm"
                  id="subscribeNewsletter"
                  placeholder="johndoe@gmail.com"
                />
                <button className="">sUBMIT</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div> */}

      <div className="w-10/12 mx-auto">
        {/* top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-left text-3xl logo-font text-violet-100">
            PLAY<span className="text-blue300 ">GRID</span>
          </p>
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

        <hr className="my-8 opacity-30" />

        {/* bottom */}
        <div className="flex justify-between pb-5">
          <div className="w-1/2 flex flex-col gap-5">
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
            <ul className="flex gap-5">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold hover:underline uppercase"
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
