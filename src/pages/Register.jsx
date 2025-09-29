import React from "react";

const Register = () => {
  return (
    <div className=" w-[95%] mx-auto bg-gray-100 flex items-center justify-center p-4">
      <form className="w-full bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h1 className="text-4xl text-black font-black text-center pb-6 pt-3 ">Course Form</h1>
        <input
          type="text"
          placeholder="Student Name*"
          className="w-full p-2 rounded bg-white border border-gray-300"
        />
        <input
          type="text"
          placeholder="Father's Name*"
          className="w-full p-2 rounded bg-white border border-gray-300"
        />
        <input
          type="text"
          placeholder="Mother's Name*"
          className="w-full p-2 rounded bg-white border border-gray-300"
        />
        <input
          type="date"
          className="w-full p-2 rounded bg-white border border-gray-300"
        />
        <input
          type="tel"
          placeholder="Phone Number*"
          className="w-full p-2 rounded bg-white border border-gray-300"
        />

        <div>
          <label className="block font-semibold mb-1">
            Select Your District*
          </label>
          <select className="w-full p-2 rounded bg-white border border-gray-300">
            <option>Dhaka</option>
            <option>Chattogram</option>
            <option>Brahmanbaria</option>
            <option>Rajshahi</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Home District*</label>
          <select className="w-full p-2 rounded bg-white border border-gray-300">
            <option>Dhaka</option>
            <option>Chattogram</option>
            <option>Brahmanbaria</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">Upazila*</label>
          <select className="w-full p-2 rounded bg-white border border-gray-300">
            <option>Nawabgonj</option>
            <option>Sarail</option>
            <option>Sadar</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">
            Select Your Course*
          </label>
          <select className="w-full p-2 rounded bg-white border border-gray-300">
            <option>Graphic Design</option>
            <option>Web Development</option>
            <option>Digital Marketing</option>
          </select>
        </div>

        <div className="flex gap-4 items-center">
          <label className="font-semibold">Gender*:</label>
          <label>
            <input type="radio" name="gender" value="Male" /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" /> Female
          </label>
        </div>

        <div>
          <label className="block font-semibold mb-1">
            Identification Type*
          </label>
          <select className="w-full p-2 rounded bg-white border border-gray-300">
            <option>National ID</option>
            <option>Birth Certificate</option>
            <option>Passport</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Identification Number*"
          className="w-full p-2 rounded bg-white border border-gray-300"
        />

        <input
          type="text"
          placeholder="Village / House No. / Road No. / Others*"
          className="w-full p-2 rounded bg-white border border-gray-300"
        />
        <input
          type="text"
          placeholder="Postal Code*"
          className="w-full p-2 rounded bg-white border border-gray-300"
        />

        <div>
          <label className="block font-semibold mb-1">
            Educational Qualification*
          </label>
          <select className="w-full p-2 rounded bg-white border border-gray-300">
            <option>SSC</option>
            <option>HSC</option>
            <option>Bachelor's Degree</option>
          </select>
        </div>

        <div className="flex gap-4 items-center">
          <label className="font-semibold">Do you have a computer?</label>
          <label>
            <input type="radio" name="computer" value="Yes" /> Yes
          </label>
          <label>
            <input type="radio" name="computer" value="No" /> No
          </label>
        </div>

        <div>
          <label className="block font-semibold mb-1">
            Upload Your Recent Photograph*
          </label>
          <input
            type="file"
            className="w-full p-2 rounded bg-white border border-gray-300"
          />
        </div>
        <input type="submit" value="Click to Register" className="px-5 py-2 rounded-lg bg-green-500 text-white font-bold text-xl" />
      </form>
    </div>
  );
};

export default Register;
