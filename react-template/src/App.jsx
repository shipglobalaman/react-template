import OuterCard from "./Components/OuterCard";
import InnerCard from "./Components/InnerCard";
import Elements from "./Components/Elements";
import Select from "./Components/Select";
import Like from "./Components/Like";
import DisLike from "./Components/DisLike";
import ProgressBar from "./Components/ProgressBar";
import Badge from "./Components/Badge";
``

const App = () => {

  return (
    <div className="bg-gray-900 w-full h-[700px]   flex flex-row gap ">
      <OuterCard>
        <InnerCard
          type="image"
          imageUrl="https://m.media-amazon.com/images/S/pv-target-images/bf89a5e29566cac43ab49fbe6b7ef62f1a7acb448e21b96959ffe4e85888f116.jpg"
        />
        <Elements>
          <Select shape="circle"></Select>
          <Like style="circle"></Like>
          <DisLike style="circle" tooltipPosition="top"></DisLike>
          <Badge days="5" />
        </Elements>
        <ProgressBar progress="20" color="blue" vlength="10m" />
      </OuterCard>
      <OuterCard>
        <InnerCard type="carousel"  />
        <Elements>
          <Select shape="rounded"></Select>
          <Like style="rounded"></Like>
          <DisLike style="rounded" tooltipPosition="bottom"></DisLike>
          <Badge days="7" />
        </Elements>
        <ProgressBar progress="60" color="purple" vlength="30m" />
      </OuterCard>
      <OuterCard>
        <InnerCard
          type="image"
          imageUrl="https://static.tvtropes.org/pmwiki/pub/images/d712d7a9_0b77_401e_916a_dc123d0994fe.jpeg"
        />
        <Elements>
          <Select shape="none"></Select>
          <Like style="none"></Like>
          <DisLike style="none" tooltipPosition=" "></DisLike>
          <Badge days="2" />
        </Elements>
        <ProgressBar progress="80" color="red" vlength="40m" />
      </OuterCard>
    </div>
  );
};

export default App;
