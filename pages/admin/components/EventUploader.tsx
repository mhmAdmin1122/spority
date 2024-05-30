import axios from "axios";
import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

const EventUploader = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [eventchannel1, setEventchannel1] = useState("");
  const [eventchannel2, setEventchannel2] = useState("");
  const [eventchannel3, setEventchannel3] = useState("");
  const [eventCountry, setEventCountry] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const [eventday, setEventday] = useState<any>(null);
  const [eventmonth, setEventmonth] = useState<any>(null);
  const [eventyear, setEventyear] = useState<any>(null);
  const [myAlert, setMyAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader() as any;
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPicture(reader.result);
    };
    reader.onerror = (error: any) => {
      console.log("Error", error);
    };
  };

  async function event(ev: any) {
    ev.preventDefault();
    const data = {
      name,
      category,
      eventchannel1,
      eventchannel2,
      eventchannel3,
      eventCountry,
      description,
      eventday,
      eventmonth,
      eventyear,
      picture,
    };
    const response: any = await axios.post("/api/event", data);
    if (response.ok) {
      console.log("Form submission failed.");
    } else {
      setName("");
      setCategory("");
      setEventchannel1("");
      setEventchannel2("");
      setEventchannel3("");
      setEventCountry("");
      setDescription("");
      setEventday(null);
      setEventmonth(null);
      setEventyear(null);
      setMyAlert("Event uploaded successfully.");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 8000);
      const audio = new Audio("/audio/notification.mp3");
      audio.play();
    }
  }

  return (
    <div>
      <form
        className="flex flex-col gap-6 justify-center py-6 items-center w-full"
        onSubmit={event}
      >
        <div className="flex items-center w-full gap-6 flex-wrap justify-center">
          <input
            type="text"
            className="outline-none px-2 py-1 rounded-[2.86px] w-[40%] text-[#000]"
            placeholder="Event Name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            type="text"
            className="outline-none px-2 py-1 rounded-[2.86px] w-[40%] text-[#000]"
            placeholder="Event Category"
            value={category}
            onChange={(ev) => setCategory(ev.target.value)}
          />
          <input
            type="text"
            className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
            placeholder="Channel Api Base 1"
            value={eventchannel1}
            onChange={(ev) => setEventchannel1(ev.target.value)}
          />
          <input
            type="text"
            className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
            placeholder="Channel Api Base 2"
            value={eventchannel2}
            onChange={(ev) => setEventchannel2(ev.target.value)}
          />
          <input
            type="text"
            className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
            placeholder="Channel Api Base 3"
            value={eventchannel3}
            onChange={(ev) => setEventchannel3(ev.target.value)}
          />
          <input
            type="text"
            className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
            placeholder="Country Name"
            value={eventCountry}
            onChange={(ev) => setEventCountry(ev.target.value)}
          />
          <textarea
            rows={6}
            cols={10}
            className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
            placeholder="About Event"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          />
        </div>

        <div className="flex items-center w-full gap-6 flex-wrap justify-center">
          <input
            type="number"
            className="outline-none px-2 py-1 rounded-[2.86px] w-[40%] text-[#000]"
            placeholder="Event Day"
            value={eventday}
            onChange={(ev) => setEventday(ev.target.value)}
          />
          <input
            type="number"
            className="outline-none px-2 py-1 rounded-[2.86px] w-[40%] text-[#000]"
            placeholder="Event Month"
            value={eventmonth}
            onChange={(ev) => setEventmonth(ev.target.value)}
          />
          <input
            type="number"
            className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
            placeholder="Event Year"
            value={eventyear}
            onChange={(ev) => setEventyear(ev.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3 w-[83%]">
          <h2 className="text-left w-full text-xl font-bold">Event Pic</h2>
          <div className="bg-[#fff] px-6 py-3 w-full">
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>
        </div>

        <button type="submit" className="bg-colored-post-btn px-5 py-2">
          Submit Now
        </button>
      </form>

      {/* Alert Message */}
      {showAlert ? (
        <div className="fixed top-20 right-4 z-[99999] bg-[#208520] text-white text-medium px-6 py-2 rounded-md animate-pulse flex items-center justify-center gap-2">
          <FaCircleCheck />
          <p>{myAlert}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default EventUploader;
