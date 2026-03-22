import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./Booking.css";
import API_URLS from "../../config/api";


function Booking() {

  const [booking, setBooking] = useState({
    fullName: "",
    mobileNo: "",
    location: "",
    eventType: "",
    startDate: "",
    endDate: "",
    eventLocation: ""
  });

  const [selectedRange, setSelectedRange] = useState();
  const [bookedDates, setBookedDates] = useState([]);

  const today = new Date();
  const minDate = new Date();
  minDate.setDate(today.getDate() + 15);

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios.get(API_URLS.GET_BOOKINGS)
      .then(res => {
        const dates = [];
        res.data.forEach(booking => {
          let start = new Date(booking.startDate);
          let end = new Date(booking.endDate);
          while (start <= end) {
            dates.push(new Date(start));
            start.setDate(start.getDate() + 1);
          }
        });
        setBookedDates(dates);
      })
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    const bookingData = { ...booking, [e.target.name]: e.target.value };

    try {
      await axios.post(API_URLS.POST_BOOKING(userId), bookingData);
      toast.success("Booking Submitted Successfully!");
      toast.info("Our Team Will Contact You Soon!");
      setBooking({
        fullName: "",
        mobileNo: "",
        location: "",
        eventType: "",
        startDate: "",
        endDate: "",
        eventLocation: ""
      });
      setSelectedRange(undefined);
    } catch (error) {
      toast.error("Booking Failed. Please try again.");
      console.error(error);
    }
  };

  function formatLocalDate(date) {
    const year  = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day   = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`
}

  // Input field reusable style
  const inputClass = `
    w-full  py-3
    border-2 border-gray-300
    rounded-xl text-sm outline-none
    focus:border-blue-400
    focus:ring-2 focus:ring-blue-100
    transition-all duration-300
    bg-gray-50 hover:bg-white
    placeholder-gray-400`;

  return (
    <div className="w-full overflow-x-hidden pb-20">

      <h1 className="text-center text-white text-2xl md:text-3xl
                      font-bold tracking-wide py-8">
        Event Booking Form
      </h1>

      <div className="flex justify-center items-start px-4 pb-10">

        <form
          onSubmit={handleSubmit}
          className="bg-white w-full max-w-lg
                     rounded-3xl shadow-2xl
                     p-8 md:p-10"
        >
          <div className="text-center mb-8">
            <div className="text-5xl mb-3">🎉</div>
            <h2 className="text-xl font-bold text-gray-800">
              Book Your Event
            </h2>
            <p className="text-sm text-gray-400 mt-1">
               Fill in the details and we will get back to you
            </p>
          </div>

          <div className="mb-5">
            <p className="text-xs font-bold text-blue-500
                           uppercase tracking-widest mb-3">
              Personal Details
            </p>

            <div className="mb-4">
              <label className="block text-gray-600 font-semibold text-sm mb-1">
                Full Name
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  
                </span>
                <input
                  type="text"
                  name="fullName"
                  value={booking.fullName}
                  placeholder="Enter your full name"
                  required
                  onChange={handleChange}
                  className={`${inputClass} pl-12 pr-4`}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 font-semibold text-sm mb-1">
                Mobile Number
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                 
                </span>
                <input
                  type="tel"
                  name="mobileNo"
                  value={booking.mobileNo}
                  placeholder="Enter mobile number"
                  required
                  onChange={handleChange}
                  className={`${inputClass} pl-12 pr-4`}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 font-semibold text-sm mb-1">
                Your Location
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                
                </span>
                <input
                  type="text"
                  name="location"
                  value={booking.location}
                  placeholder="Enter your city / area"
                  required
                  onChange={handleChange}
                  className={`${inputClass} pl-12 pr-4`}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-gray-400 text-xs uppercase tracking-widest">
              Event Details
            </span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-semibold text-sm mb-1">
              Event Type
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                
              </span>
              <select
                name="eventType"
                value={booking.eventType}
                required
                onChange={handleChange}
                className={`${inputClass} pl-12 pr-4 cursor-pointer`}
              >
                <option value="">Select Event Type</option>
                <option value="Engagement">💍 Engagement</option>
                <option value="Wedding">👰 Wedding</option>
                <option value="Birthday">🎂 Birthday</option>
                <option value="Pre Wedding">💑 Pre Wedding</option>
                <option value="Party Event">🎉 Party Event</option>
                <option value="Candid Photoshoot">📸 Candid Photoshoot</option>
                <option value="Other">✨ Other</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 font-semibold text-sm mb-1">
              Event Location
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
               
              </span>
              <input
                type="text"
                name="eventLocation"
                value={booking.eventLocation}
                placeholder="Enter event venue / location"
                required
                onChange={handleChange}
                className={`${inputClass} pl-12 pr-4`}
              />
            </div>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-gray-400 text-xs uppercase tracking-widest">
              Select Date Range
            </span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <div className="mb-2">
            <p className="text-blue-500 text-sm font-semibold text-center mb-2">
              📆 Select your date range (e.g. 1 to 5 days)
            </p>

            {selectedRange?.from && (
              <div className="flex gap-2 justify-center mb-3">
                <span className="bg-green-100 text-green-700 text-xs
                                  font-semibold px-3 py-1 rounded-full">
                  From: {selectedRange.from.toDateString()}
                </span>
                {selectedRange?.to && (
                  <span className="bg-blue-100 text-blue-700 text-xs
                                    font-semibold px-3 py-1 rounded-full">
                    To: {selectedRange.to.toDateString()}
                  </span>
                )}
              </div>
            )}

            <div className="flex justify-center
                            border-2 border-gray-200
                            rounded-2xl p-3 bg-gray-50">
              <DayPicker
                mode="range"
                selected={selectedRange}
                onSelect={(range) => {
                  setSelectedRange(range);
                  if (range?.from && range?.to) {
                    setBooking({
                      ...booking,
                      startDate: formatLocalDate(range.from),
                      endDate: formatLocalDate(range.to)
                    });
                  }
                }}
                disabled={[{ before: minDate }, ...bookedDates]}
                modifiers={{ booked: bookedDates }}
                modifiersClassNames={{ booked: "booked-day" }}
              />
            </div>

            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
              <span className="text-red-500 text-xs font-semibold">
                Already Booked Dates
              </span>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              className="flex-1 py-3 rounded-xl font-bold text-white text-sm
                         bg-gradient-to-r from-green-400 to-emerald-500
                         hover:from-green-500 hover:to-emerald-600
                         shadow-md hover:shadow-lg
                         transition-all duration-300 hover:-translate-y-1"
            >
               Submit Booking
            </button>
            <button
              type="reset"
              onClick={() => {
                setBooking({
                  fullName: "",
                  mobileNo: "",
                  location: "",
                  eventType: "",
                  startDate: "",
                  endDate: "",
                  eventLocation: ""
                });
                setSelectedRange(undefined);
              }}
              className="flex-1 py-3 rounded-xl font-bold text-white text-sm
                         bg-gradient-to-r from-red-400 to-orange-400
                         hover:from-red-500 hover:to-orange-500
                         shadow-md hover:shadow-lg
                         transition-all duration-300 hover:-translate-y-1"
            >
               Reset
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Booking;
