import axios from "axios";
import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [pic, setPic] = useState("");
  const [heading1, setHeading1] = useState("");
  const [heading2, setHeading2] = useState("");
  const [heading3, setHeading3] = useState("");
  const [heading4, setHeading4] = useState("");
  const [heading5, setHeading5] = useState("");
  const [heading6, setHeading6] = useState("");
  const [heading7, setHeading7] = useState("");
  const [subPic1, setSubPic1] = useState("");
  const [subPic2, setSubPic2] = useState("");
  const [subPic3, setSubPic3] = useState("");
  const [subPic4, setSubPic4] = useState("");
  const [subPic5, setSubPic5] = useState("");
  const [subPic6, setSubPic6] = useState("");
  const [subPic7, setSubPic7] = useState("");
  const [subDescription1, setSubDescription1] = useState("");
  const [subDescription2, setSubDescription2] = useState("");
  const [subDescription3, setSubDescription3] = useState("");
  const [subDescription4, setSubDescription4] = useState("");
  const [subDescription5, setSubDescription5] = useState("");
  const [subDescription6, setSubDescription6] = useState("");
  const [subDescription7, setSubDescription7] = useState("");
  const [myAlert, setMyAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handlePicCard = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader() as any;
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPic(reader.result);
    };
    reader.onerror = (error: any) => {
      console.log("Error", error);
    };
  };
  const handleSubPic1 = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader() as any;
    reader.readAsDataURL(file);
    reader.onload = () => {
      setSubPic1(reader.result);
    };
    reader.onerror = (error: any) => {
      console.log("Error", error);
    };
  };
  const handleSubPic2 = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader() as any;
    reader.readAsDataURL(file);
    reader.onload = () => {
      setSubPic2(reader.result);
    };
    reader.onerror = (error: any) => {
      console.log("Error", error);
    };
  };
  const handleSubPic3 = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader() as any;
    reader.readAsDataURL(file);
    reader.onload = () => {
      setSubPic3(reader.result);
    };
    reader.onerror = (error: any) => {
      console.log("Error", error);
    };
  };
  const handleSubPic4 = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader() as any;
    reader.readAsDataURL(file);
    reader.onload = () => {
      setSubPic4(reader.result);
    };
    reader.onerror = (error: any) => {
      console.log("Error", error);
    };
  };
  const handleSubPic5 = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader() as any;
    reader.readAsDataURL(file);
    reader.onload = () => {
      setSubPic5(reader.result);
    };
    reader.onerror = (error: any) => {
      console.log("Error", error);
    };
  };
  const handleSubPic6 = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader() as any;
    reader.readAsDataURL(file);
    reader.onload = () => {
      setSubPic6(reader.result);
    };
    reader.onerror = (error: any) => {
      console.log("Error", error);
    };
  };
  const handleSubPic7 = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader() as any;
    reader.readAsDataURL(file);
    reader.onload = () => {
      setSubPic7(reader.result);
    };
    reader.onerror = (error: any) => {
      console.log("Error", error);
    };
  };

  async function post(ev: any) {
    ev.preventDefault();
    const data = {
      title,
      description,
      category,
      pic,
      heading1,
      heading2,
      heading3,
      heading4,
      heading5,
      heading6,
      heading7,
      subPic1,
      subPic2,
      subPic3,
      subPic4,
      subPic5,
      subPic6,
      subPic7,
      subDescription1,
      subDescription2,
      subDescription3,
      subDescription4,
      subDescription5,
      subDescription6,
      subDescription7,
    };
    const response: any = await axios.post("/api/post", data);
    if (response.ok) {
      console.log("Form submission failed.");
    } else {
      setTitle("");
      setDescription("");
      setCategory("");
      setPic("");
      setHeading1("");
      setHeading2("");
      setHeading3("");
      setHeading4("");
      setHeading5("");
      setHeading6("");
      setHeading7("");
      setSubPic1("");
      setSubPic2("");
      setSubPic3("");
      setSubPic4("");
      setSubPic5("");
      setSubPic6("");
      setSubPic7("");
      setSubDescription1("");
      setSubDescription2("");
      setSubDescription3("");
      setSubDescription4("");
      setSubDescription5("");
      setSubDescription6("");
      setSubDescription7("");
      setMyAlert("Post uploaded successfully.");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 8000);
      const audio = new Audio("/audio/notification.mp3");
      audio.play();
    }
  }
  return (
    <form className="flex flex-col gap-6 justify-center py-6 items-center w-full" onSubmit={post}>
      <div className="flex items-center w-full gap-6 flex-wrap justify-center">
        <input
          type="text"
          className="outline-none px-2 py-1 rounded-[2.86px] w-[40%] text-[#000]"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="outline-none px-2 py-1 rounded-[2.86px] w-[40%] text-[#000]"
          placeholder="Post Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <textarea
          rows={6}
          cols={10}
          className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
          placeholder="Post Desription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-3 w-[83%]">
        <h2 className="text-left w-full text-xl font-bold">Card Pic</h2>
        <div className="bg-[#fff] px-6 py-3 w-full">
          <input type="file" accept="image/*" onChange={handlePicCard} />
        </div>
      </div>

      <div className="flex items-center w-full gap-6 flex-wrap justify-center">
        <input
          type="text"
          className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
          placeholder="Sub Heading 1"
          value={heading1}
          onChange={(e) => setHeading1(e.target.value)}
        />
        <textarea
          rows={6}
          cols={10}
          className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
          placeholder="Post Sub-Desription-1"
          value={subDescription1}
          onChange={(e) => setSubDescription1(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-3 w-[83%]">
        <h2 className="text-left w-full text-xl font-bold">Sub-Pic 1</h2>
        <div className="bg-[#fff] px-6 py-3 w-full">
          <input type="file" accept="image/*" onChange={handleSubPic1} />
        </div>
      </div>

      <div className="flex items-center w-full gap-6 flex-wrap justify-center">
        <input
          type="text"
          className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
          placeholder="Sub Heading 2"
          value={heading2}
          onChange={(e) => setHeading2(e.target.value)}
        />
        <textarea
          rows={6}
          cols={10}
          className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
          placeholder="Post Sub-Desription-2"
          value={subDescription2}
          onChange={(e) => setSubDescription2(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-3 w-[83%]">
        <h2 className="text-left w-full text-xl font-bold">Sub-Pic 2</h2>
        <div className="bg-[#fff] px-6 py-3 w-full">
          <input type="file" accept="image/*" onChange={handleSubPic2} />
        </div>
      </div>

      <div className="flex items-center w-full gap-6 flex-wrap justify-center">
        <input
          type="text"
          className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
          placeholder="Sub Heading 3"
          value={heading3}
          onChange={(e) => setHeading3(e.target.value)}
        />
        <textarea
          rows={6}
          cols={10}
          className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
          placeholder="Post Sub-Desription-3"
          value={subDescription3}
          onChange={(e) => setSubDescription3(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-3 w-[83%]">
        <h2 className="text-left w-full text-xl font-bold">Sub-Pic 3</h2>
        <div className="bg-[#fff] px-6 py-3 w-full">
          <input type="file" accept="image/*" onChange={handleSubPic3} />
        </div>
      </div>

      <div className="flex items-center w-full gap-6 flex-wrap justify-center">
        <input
          type="text"
          className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
          placeholder="Sub Heading 4"
          value={heading4}
          onChange={(e) => setHeading4(e.target.value)}
        />
        <textarea
          rows={6}
          cols={10}
          className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
          placeholder="Post Sub-Desription-4"
          value={subDescription4}
          onChange={(e) => setSubDescription4(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-3 w-[83%]">
        <h2 className="text-left w-full text-xl font-bold">Sub-Pic 4</h2>
        <div className="bg-[#fff] px-6 py-3 w-full">
          <input type="file" accept="image/*" onChange={handleSubPic4} />
        </div>
      </div>

      <div className="flex items-center w-full gap-6 flex-wrap justify-center">
        <input
          type="text"
          className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
          placeholder="Sub Heading 5"
          value={heading5}
          onChange={(e) => setHeading5(e.target.value)}
        />
        <textarea
          rows={6}
          cols={10}
          className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
          placeholder="Post Sub-Desription-5"
          value={subDescription5}
          onChange={(e) => setSubDescription5(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-3 w-[83%]">
        <h2 className="text-left w-full text-xl font-bold">Sub-Pic 5</h2>
        <div className="bg-[#fff] px-6 py-3 w-full">
          <input type="file" accept="image/*" onChange={handleSubPic5} />
        </div>
      </div>

      <div className="flex items-center w-full gap-6 flex-wrap justify-center">
        <input
          type="text"
          className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
          placeholder="Sub Heading 6"
          value={heading6}
          onChange={(e) => setHeading6(e.target.value)}
        />
        <textarea
          rows={6}
          cols={10}
          className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
          placeholder="Post Sub-Desription-6"
          value={subDescription6}
          onChange={(e) => setSubDescription6(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-3 w-[83%]">
        <h2 className="text-left w-full text-xl font-bold">Sub-Pic 6</h2>
        <div className="bg-[#fff] px-6 py-3 w-full">
          <input type="file" accept="image/*" onChange={handleSubPic6} />
        </div>
      </div>

      <div className="flex items-center w-full gap-6 flex-wrap justify-center">
        <input
          type="text"
          className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
          placeholder="Sub Heading 7"
          value={heading7}
          onChange={(e) => setHeading7(e.target.value)}
        />
        <textarea
          rows={6}
          cols={10}
          className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
          placeholder="Post Sub-Desription-7"
          value={subDescription7}
          onChange={(e) => setSubDescription7(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-3 w-[83%]">
        <h2 className="text-left w-full text-xl font-bold">Sub-Pic 7</h2>
        <div className="bg-[#fff] px-6 py-3 w-full">
          <input type="file" accept="image/*" onChange={handleSubPic7} />
        </div>
      </div>

      <button type="submit" className="bg-colored-post-btn px-5 py-2">
        Submit Now
      </button>

      {/* Alert Message */}
      {showAlert ? (
        <div className="fixed top-20 right-4 z-[99999] bg-[#208520] text-white text-medium px-6 py-2 rounded-md animate-pulse flex items-center justify-center gap-2">
          <FaCircleCheck />
          <p>{myAlert}</p>
        </div>
      ) : (
        ""
      )}
    </form>
  );
};

export default PostForm;
