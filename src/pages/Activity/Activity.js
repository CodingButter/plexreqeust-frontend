import MediaResultContainer from "../../components/MediaResultContainer/MediaResultContainer";
import PageHeader from "../../components/PageHeader";
import { useActivity } from "../../context/ActivityContext";
import { ActiveMiniStats, ResultPageContainer } from "./Activity.elements";
const Activity = () => {
  const { active, qued } = useActivity();
  return (
    <>
      <PageHeader className="page-header">
        <span>Activity</span>
        <ActiveMiniStats />
      </PageHeader>
      <ResultPageContainer className="result-page-wrap">
        {active.length > 0 && (
          <MediaResultContainer containerHeader="Active" medialist={active} />
        )}
        {qued.length > 0 && (
          <MediaResultContainer containerHeader="Qued" medialist={qued} />
        )}
      </ResultPageContainer>
    </>
  );
};

export default Activity;
