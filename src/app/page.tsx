import Drawer from "@/components/Drawer";
import RightBar from "@/components/RightBar";
import BottomBar from "@/components/BottomBar";
import { ControlsProvider } from "@/contexts/ControlsProvider";

export default function HomePage() {
  return (
    <main className="w-full h-full">
      <section className="w-full h-full flex flex-col">
        <div className="flex flex-grow">
          <ControlsProvider>
            <div className="flex-grow cursor-grab">
              <Drawer />
            </div>

            <div className="w-1/4 h-full bg-gray-200">
              <RightBar />
            </div>
          </ControlsProvider>
        </div>

        <div className="w-full h-24 bg-gray-300">
          <BottomBar />
        </div>
      </section>
    </main>
  );
}
