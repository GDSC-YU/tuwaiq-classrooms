import { useState } from "react";

/* Keen Slider Imports
   Swiper Not Swiping..
 */
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../layouts/keen.css";

// Data & Data Types & Stores
import type { Room } from "../data/rooms";
import { roomTypeMap, getDays } from "../data/data";

// Components
import Header from "./ui/Header";
import TextChip from "./schedule/TexChip";
import ScheduleLines from "./schedule/ScheduleLines";
import TheSchedule from "./schedule/TheSchedule";

interface Props {
  room: Room;
}

const SchedulePage = ({ room }: Props) => {
  // days array
  const days = getDays(room);

  // conditionally rendering mobile header or desktop one
  const isMobile = window.innerWidth < 905;

  // selected day state (the initial day is the current day)
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());

  // header color, free slot color, and back ref links
  const { headerColor, freeColor, link } = roomTypeMap[room.name.charAt(0)];

  // Keen Slider Logic
  const [currentSlide, setCurrentSlide] = useState<number | undefined>(
    days.findIndex((day) => day.key === selectedDay)
  );
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: currentSlide,

    slideChanged(slider) {
      const currentSlideIndex = slider.track.details.rel;
      setCurrentSlide(currentSlideIndex);

      if (currentSlideIndex !== undefined) {
        setSelectedDay(days[currentSlideIndex].key);
      }
    },

    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <Header
        backButtonHref={link}
        title={room.name}
        color={headerColor!}
        padding={isMobile ? "pb-3" : undefined}
      >
        {isMobile ? (
          <>
            <div className="navigation-wrapper">
              <div ref={sliderRef} className="keen-slider mt-3 text-center">
                {days.map(({ day }) => (
                  <p
                    key={day}
                    className="keen-slider__slide text-2xl font-black"
                  >
                    {day}
                  </p>
                ))}
              </div>
            </div>
            {loaded && (
              <div className="dots">
                {days.map((day) => (
                  <div
                    key={day.key}
                    className={
                      "dot" + (selectedDay === day.key ? " active" : "")
                    }
                    aria-hidden="true"
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="mt-5 flex flex-row flex-nowrap justify-center gap-x-20 overflow-hidden">
            {days.map(({ day, key }) => (
              <TextChip
                key={day}
                text={day}
                isSelected={selectedDay === key}
                onClick={() => setSelectedDay(key)}
                ariaLabel={`Select ${day}'s Schedule`}
              />
            ))}
          </div>
        )}
      </Header>
      <main className="grid">
        <div
          className="flex flex-col space-y-12 p-4"
          style={{ gridArea: "1 / 1 / 2 / 2" }}
        >
          <ScheduleLines />
        </div>
        {days.map(({ key, timeSlots }) => (
          <TheSchedule
            key={key}
            timeSlots={timeSlots}
            freeColor={freeColor!}
            isVisible={selectedDay === key}
          />
        ))}
      </main>
    </>
  );
};

export default SchedulePage;
