const Footer = () => {
  return (
    <footer className="w-full bg-[#202020] text-white">
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

      {/* Copyright division */}
      {/* <div className="h-20 bg-[#070707]">
        <p className="text-white text-center pt-5">
          Copyright © {new Date().getFullYear()} PlayGrid - All rights reserved.
        </p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div> */}








       <footer className="px-6 pt-8 md:px-16 lg:px-36 w-full text-gray-300">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
                <div className="md:max-w-96">
                    <img alt="" className="h-11" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiLogoSquareShape.svg" />
                    <p className="mt-6 text-sm">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg" alt="google play" className="h-10 w-auto border border-white rounded" />
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg" alt="app store" className="h-10 w-auto border border-white rounded" />
                    </div>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+1-234-567-890</p>
                            <p>contact@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()} © PreBuiltUI. All Right Reserved.
            </p>
        </footer>
    </footer>
  );
};

export default Footer;
