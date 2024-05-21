import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex justify-between p-7 bg-[#ffebce]">
      <div>
        <Image
          src="/logo.png"
          alt="logo"
          className="w-32"
          width={100}
          height={100}
        />
        <div>
        <p>P.O Box:</p>
        <p>Address:</p>
        <p>Phone:</p>
        </div>
      </div>

      <div>
        <h4 className="text-[1.5rem] font-bold">Features</h4>
        <p>Primary Explorers</p>
        <p>Junior Adventurers</p>
        <p>Senior Champions</p>

      </div>

      <div>
        <h4 className="text-[1.5rem] font-bold">Customer Support</h4>
        <p>Privacy Policy</p>
        <p>Terms of service</p>
        <p>Copyright Information</p>
        <p>FAQ</p>
        <p>Help Center</p>
        <p>Support Resources</p>
      </div>
        

      <div>
        <h4 className="text-[1.5rem] font-bold">About</h4>
        <p>The Company</p>
        <p>Gamified Learning</p>
        <p>Token Earning</p>
      </div>
    </footer>
  );
};
export default Footer;
