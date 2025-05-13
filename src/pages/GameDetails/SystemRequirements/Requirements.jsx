import { TabView, TabPanel } from "primereact/tabview";
import "./requirements.css";

const Requirements = ({ systemRequirements }) => {
  const { minimum, recommended } = systemRequirements;

  return (
    <div className="card">
      <TabView className="primary-font font-bold">
        <TabPanel header="Minimum">
          <div className="w-3/4 text-black/90 rounded-lg space-y-4">
            <p className="flex gap-2">
              <span className="min-w-28 text-lg font-medium">Os</span>
              <span>:</span>
              <span className="pl-3">$ {minimum.os}</span>
            </p>
            <p className="flex gap-2">
              <span className="min-w-28 text-lg font-medium">Processor</span>
              <span>:</span>
              <span className="pl-3">{minimum.processor}</span>
            </p>
            <p className="flex gap-2">
              <span className="min-w-28 text-lg font-medium">Memory</span>
              <span>:</span>
              <span className="pl-3">{minimum.memory}</span>
            </p>
            <p className="flex gap-2">
              <span className="min-w-28 text-lg font-medium">Graphics</span>
              <span>:</span>
              <span className="pl-3">{minimum.graphics}</span>
            </p>
            <p className="flex gap-2">
              <span className="min-w-28 text-lg font-medium">Storage</span>
              <span>:</span>
              <span className="pl-3">{minimum.storage}</span>
            </p>
            <p className="flex gap-2">
              <span className="min-w-28 text-lg font-medium">Sound Card</span>
              <span>:</span>
              <span className="pl-3">{minimum.soundCard}</span>
            </p>
          </div>
        </TabPanel>

        <TabPanel header="Recommended">
          <div className="w-3/4 text-black/90 rounded-lg space-y-4">
            <p className="flex gap-2">
              <span className="min-w-28 text-lg font-medium">Os</span>
              <span>:</span>
              <span className="pl-3">$ {recommended.os}</span>
            </p>
            <p className="flex gap-2">
              <span className="min-w-28 text-lg font-medium">Processor</span>
              <span>:</span>
              <span className="pl-3">{recommended.processor}</span>
            </p>
            <p className="flex gap-2">
              <span className="min-w-28 text-lg font-medium">Memory</span>
              <span>:</span>
              <span className="pl-3">{recommended.memory}</span>
            </p>
            <p className="flex gap-2">
              <span className="min-w-28 text-lg font-medium">Graphics</span>
              <span>:</span>
              <span className="pl-3">{recommended.graphics}</span>
            </p>
            <p className="flex gap-2">
              <span className="min-w-28 text-lg font-medium">Storage</span>
              <span>:</span>
              <span className="pl-3">{recommended.storage}</span>
            </p>
            <p className="flex gap-2">
              <span className="min-w-28 text-lg font-medium">Sound Card</span>
              <span>:</span>
              <span className="pl-3">{recommended.soundCard}</span>
            </p>
          </div>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default Requirements;
