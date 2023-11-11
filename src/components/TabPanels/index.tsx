import { useState } from "react";
import "../../styles/TabPanel.css";
import TabBody from "./TabBody";
import DinnerMenu from "./DinnerMenu";

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
      content: <div>kids</div>,
    },
    {
      tabName: "Desserts",
      content: <div>desserts</div>,
    },
    {
      tabName: "Beverages",
      content: <div>beverages</div>,
    },
  ];
  const [activeTab, setActiveTab] = useState<TabsType>(tabs[0]);

  console.log("active", activeTab);
  return (
    <>
      <ul className="tab-panel-header flex">
        <li
          onClick={() => setActiveTab(tabs[0])}
          className={activeTab.tabName === "Dinner" ? "active" : ""}
        >
          Dinner
        </li>
        <li
          onClick={() => setActiveTab(tabs[1])}
          className={activeTab.tabName === "KidsMenu" ? " active" : ""}
        >
          Kids Menu
        </li>
        <li
          onClick={() => setActiveTab(tabs[2])}
          className={activeTab.tabName === "Desserts" ? "active" : ""}
        >
          Desserts
        </li>
        <li
          onClick={() => setActiveTab(tabs[3])}
          className={activeTab.tabName === "Beverages" ? "active" : ""}
        >
          Beverages
        </li>
      </ul>

      <TabBody tabName={activeTab.tabName} content={activeTab.content} />
    </>
  );
};

export default TabPanel;
