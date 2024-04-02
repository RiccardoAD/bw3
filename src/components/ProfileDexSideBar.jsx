import { Container } from "react-bootstrap";
import OtherProfiles from "./OtherProfiles";
import ProfilesSugg from "./ProfilesSugg";
import SideBarSettings from "./SideBarSettings";
import Companies from "./Companies";
import ImgAdv from "../assets/ImgAdv.png";

function ProfileDexSideBar() {
  return (
    <Container>
      <SideBarSettings />
      <img src={ImgAdv} alt="Adv" className="img-fluid" />
      <OtherProfiles />
      <ProfilesSugg />
      <Companies />
      <img src={ImgAdv} alt="Adv" className="img-fluid" />
    </Container>
  );
}

export default ProfileDexSideBar;
