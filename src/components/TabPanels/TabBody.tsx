import { TabsType } from ".";

type props = TabsType


const TabBody = ({ content}: props) => {

  return (
    <>
      {content}
    </>
  );
};

export default TabBody;
