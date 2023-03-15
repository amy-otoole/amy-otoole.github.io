import SkinnyBannerStyles from "./SkinnyBannerStyles";
import BionicReading from "../BionicReading/BionicReading";

interface SkinnyBannerProps {
  bannerHeading: string;
}
const SkinnyBanner = ({ bannerHeading }: SkinnyBannerProps) => {
  return (
    <SkinnyBannerStyles>
      <BionicReading text={bannerHeading} as={"p"} />
    </SkinnyBannerStyles>
  );
};
export default SkinnyBanner;
