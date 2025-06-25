const Footer = () => {
  return (
    <footer className="w-full bg-[#202020] text-white">
      <div className="w-3/4 mx-auto py-16 flex flex-col md:flex-row justify-around">
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
      </div>

      {/* Copyright division */}
      <div className="h-20 bg-[#070707]">
        <p className="text-white text-center pt-5">
          Copyright © {new Date().getFullYear()} PlayGrid - All rights reserved.
        </p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
