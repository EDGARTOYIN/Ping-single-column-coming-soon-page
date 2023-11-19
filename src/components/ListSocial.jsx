import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";

function ListSocial() {
  return (
    <ul className="flex gap-4 items-center">
      <li className="rounded-full border border-pale-blue-custom cursor-pointer  p-2">
        <TiSocialFacebook
          style={{ color: "hsl(223, 87%, 63%)" }}
          size={"1.5rem"}
        />
      </li>
      <li className="rounded-full border border-pale-blue-custom cursor-pointer  p-2">
        <TiSocialTwitter
          style={{ color: "hsl(223, 87%, 63%)" }}
          size={"1.5rem"}
        />
      </li>
      <li className="rounded-full border border-pale-blue-custom cursor-pointer  p-2">
        <SlSocialInstagram
          style={{ color: "hsl(223, 87%, 63%)" }}
          size={"1.5rem"}
        />
      </li>
    </ul>
  );
}

export default ListSocial;
