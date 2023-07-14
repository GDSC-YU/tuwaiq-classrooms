import { useState, useEffect } from "react";

/* Keen Slider Imports
   Swiper Not Swiping.. */
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
import ScheduleSlots from "./schedule/ScheduleSlots";

interface Props {
  room: Room;
}

const SchedulePage = ({ room }: Props) => {
  // days array
  const days = getDays(room);

  // conditionally rendering mobile header or desktop one
  const isMobile = window.innerWidth < 905;

  // selected day state (the initial day is the current day)
  const [selectedDay, setSelectedDay] = useState(() => {
    const currentDay = new Date().getDay();
    if (isMobile && (currentDay === 5 || currentDay === 6)) {
      return 0; // Set initial day to Sunday (index 0) if it's Friday or Saturday on mobile
    }
    return currentDay;
  });
  // header color, free slot color, and back ref links
  const { headerColor, freeColor, link } = roomTypeMap[room.name.charAt(0)];

  // Keen Slider Logic
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: selectedDay,
    dragSpeed: 1,

    slideChanged(slider) {
      const currentSlideIndex = slider.track.details.rel;
      setSelectedDay(days[currentSlideIndex].key);
    },

    created() {
      setLoaded(true);
    },
  });

  // Keyboard / Global Swipe Navigation
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (event: TouchEvent) => {
      touchStartX = event.touches[0].clientX;
    };

    const handleTouchMove = (event: TouchEvent) => {
      touchEndX = event.touches[0].clientX;
    };

    const handleSwipeGesture = () => {
      const threshold = 30; // Minimum swipe distance threshold

      if (touchEndX - touchStartX > threshold) {
        instanceRef.current?.prev(); // Swipe right, go to previous slide
      } else if (touchStartX - touchEndX > threshold) {
        instanceRef.current?.next(); // Swipe left, go to next slide
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        instanceRef.current?.next();
      } else if (event.key === "ArrowLeft") {
        instanceRef.current?.prev();
      }
    };

    if (isMobile) {
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleSwipeGesture);
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (isMobile) {
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleSwipeGesture);
        window.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

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
              <div
                ref={sliderRef}
                className="keen-slider mt-3 text-center"
                tabIndex={0}
                role="slider"
                aria-valuemin={1}
                aria-valuemax={5}
                aria-valuenow={selectedDay! + 1}
                aria-label={`This Is a Carousel of Days - Swipe Anywhere in the Screen To Change the Day! - Current Day Is ${
                  days[selectedDay!].day
                }`}
              >
                {days.map(({ day }) => (
                  <p
                    key={day}
                    className="keen-slider__slide text-2xl font-black"
                    aria-hidden="true"
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
              />
            ))}
          </div>
        )}
      </Header>
      <main className="grid" aria-label={`${room.name} Room's Schedule`}>
        <div
          className="flex flex-col space-y-12 p-4"
          style={{ gridArea: "1 / 1 / 2 / 2" }}
        >
          <ScheduleLines />
        </div>
        {days.map(({ key, timeSlots }) => (
          <ScheduleSlots
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
