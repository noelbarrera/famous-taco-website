import { useState } from "react";
import "../../styles/TabPanel.css";
import TabBody from "./TabBody";
import DinnerMenu from "./DinnerMenu";
import KidsMenu from "./KidsMenu";
import DessertsMenu from "./DessertsMenu";
import BeveragesMenu from "./BeveragesMenu";

export type TabsType = {
  tabName: string;
  content: React.ReactNode;
};

const TabPanel = () => {
  const tabs: TabsType[] = [
    {
      tabName: "Dinner",
      content: <DinnerMenu />,
    },
    {
      tabName: "KidsMenu",
      content: <KidsMenu/>,
    },
    {
      tabName: "Desserts",
      content: <DessertsMenu/>,
    },
    {
      tabName: "Beverages",
      content: <BeveragesMenu/>,
    },
  ];
  const [activeTab, setActiveTab] = useState<TabsType>(tabs[0]);

  console.log("active", activeTab);
  return (
    <>
      <ul className="tab-panel-header">
        <li
          onClick={() => setActiveTab(tabs[0])}
          className={activeTab.tabName === "Dinner" ? "active" : ""}
        >
          <a>
            Dinner
            </a>
        </li>
        <li
          onClick={() => setActiveTab(tabs[1])}
          className={activeTab.tabName === "KidsMenu" ? " active" : ""}
        >
          <a>
            Kids Menu
            </a>
        </li>
        <li
          onClick={() => setActiveTab(tabs[2])}
          className={activeTab.tabName === "Desserts" ? "active" : ""}
        > <a>
          Desserts
        </a>
        </li>
        <li
          onClick={() => setActiveTab(tabs[3])}
          className={activeTab.tabName === "Beverages" ? "active" : ""}
        > <a>
          Beverages
        </a>
        </li>
      </ul>

      <TabBody tabName={activeTab.tabName} content={activeTab.content} />
    </>
  );
};

export default TabPanel;
