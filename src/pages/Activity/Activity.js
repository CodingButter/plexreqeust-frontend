import { useState, useEffect } from "react";
import MediaResultContainer from "../../components/MediaResultContainer/MediaResultContainer";
import PageHeader from "../../components/PageHeader";
import getActiveTorrents from "../../hooks/getActiveTorrents";
import { ActiveMiniStats, ResultPageContainer } from "./Activity.elements";
const Activity = () => {
  const [torrents, setTorrents] = useState({ active: [], queue: [] });

  const handleSetTorrents = () => {
    const fetchedActiveTorrents = getActiveTorrents();
    if (JSON.stringify(torrents) !== JSON.stringify(fetchedActiveTorrents))
      setTorrents(fetchedActiveTorrents);
  };

  useEffect(() => {
    const useInterval = setInterval(() => {
      handleSetTorrents();
    });
    return () => {
      clearInterval(useInterval);
    };
  }, []);

  return (
    <>
      <PageHeader className="page-header">
        <span>Activity</span>
        <ActiveMiniStats />
      </PageHeader>
      <ResultPageContainer className="result-page-wrap">
        {torrents.active.length > 0 && (
          <MediaResultContainer
            containerHeader="Active"
            medialist={torrents.active}
          />
        )}
        {torrents.queue.length > 0 && (
          <MediaResultContainer
            containerHeader="Queue"
            medialist={torrents.queue}
          />
        )}
      </ResultPageContainer>
    </>
  );
};

export default Activity;
