import React from "react";
import { ISchool } from "../InterfaceRepository/ISchool";
import { Loader } from "../Loader/Loader";
import "../../Css/About.css";

const FakeSchool: ISchool = {
  schoolId: "sdfsd",
  schoolName: 'Shkolla Fillore dhe e Mesme e Ulët "Hysni Zajmi"',
  about:
    "lorem ipsum dosdlfksdiofhsdufhsdufsdufgsduifg sudgfsdukg fkjsdgf kjsdgfjk sdgfkj sdgjk fsgkdjs gflorem ipsum dosdlfksdiofhsdufhsdufsdufgsduifg sudgfsdukg fkjsdgf kjsdgfjk sdgfkj sdgjk fsgkdjs gflorem ipsum dosdlfksdiofhsdufhsdufsdufgsduifg sudgfsdukg fkjsdgf kjsdgfjk sdgfkj sdgjk fsgkdjs gflorem ipsum dosdlfksdiofhsdufhsdufsdufgsduifg sudgfsdukg fkjsdgf kjsdgfjk sdgfkj sdgjk fsgkdjs gflorem ipsum dosdlfksdiofhsdufhsdufsdufgsduifg sudgfsdukg fkjsdgf kjsdgfjk sdgfkj sdgjk fsgkdjs gflorem ipsum dosdlfksdiofhsdufhsdufsdufgsduifg sudgfsdukg fkjsdgf kjsdgfjk sdgfkj sdgjk fsgkdjs gflorem ipsum dosdlfksdiofhsdufhsdufsdufgsduifg sudgfsdukg fkjsdgf kjsdgfjk sdgfkj sdgjk fsgkdjs gf",
};

export const About = () => {
  const [School, SetSchool] = React.useState<ISchool>({} as ISchool);
  return (
    <section onClick={() => SetSchool(FakeSchool)} id="About">
      {Object.keys(School).length === 0 ? (
        <Loader />
      ) : (
        <AboutSection school={School} />
      )}
    </section>
  );
};

interface AboutSectionProps {
  school: ISchool;
}

const AboutSection: React.FunctionComponent<AboutSectionProps> = ({
  school,
}) => {
  return (
    <div className="about-yellowbox">
      <h2>{school.schoolName}</h2>
      <p>{school.about}</p>
    </div>
  );
};
