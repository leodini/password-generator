import { useState, useRef, useEffect, Activity } from "react";
import styles from "@/styles/tabs.module.css";

interface TabsProps {
  tabs: { label: string | React.ReactElement; content: React.ReactElement }[];
  defaultTab: number;
}

const Tabs = ({ tabs, defaultTab = 0 }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);

  const tabRefs = useRef<HTMLButtonElement[] | []>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    tabRefs.current = tabRefs.current.slice(0, tabs.length);
  }, [tabs.length]);

  const updateIndicator = (tabIndex: number, animate = true) => {
    if (tabRefs.current[tabIndex] && containerRef.current) {
      const tabElement = tabRefs.current[tabIndex];
      const containerRect = containerRef.current?.getBoundingClientRect();
      const tabRect = tabElement.getBoundingClientRect();

      const left = tabRect.left - containerRect.left;
      const width = tabRect.width;

      if (animate) {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 300);
      }

      setIndicatorStyle({
        left: `${left}px`,
        width: `${width}px`,
        transition: animate ? "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
      });
    }
  };

  const renderContent = (el: any) => {
    console.log(el);

    return el;
  };

  useEffect(() => {
    setTimeout(() => {
      updateIndicator(activeTab, false);
    }, 50);
  }, []);

  useEffect(() => {
    updateIndicator(activeTab);
  }, [activeTab]);

  const handleTabClick = (index: number) => {
    if (index !== activeTab && !isAnimating) {
      setActiveTab(index);
    }
  };

  return (
    <div className={styles["tabs-container"]}>
      <div className={styles["tabs-header"]} ref={containerRef}>
        <div className="tabs-background">
          <div
            className={styles["tabs-indicator"]}
            style={indicatorStyle}
          ></div>
        </div>

        <div className={styles["tabs-list"]}>
          {tabs.map((tab, index: number) => (
            <button
              key={index}
              ref={(el) => (tabRefs.current[index] = el)}
              className={`${styles["tab-button"]} ${activeTab === index ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles["tab-content"]}>
        {tabs.map((tab, index) => (
          <Activity mode={activeTab === index ? "visible" : "hidden"}>
            <div key={index} className={`${styles["tab-panel"]}`}>
              {tab.content}
            </div>
          </Activity>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
