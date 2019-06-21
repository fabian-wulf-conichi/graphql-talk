import BookingModel from "./booking.mongoType";

const Query = {
  bookings: async () => {
    const bookings = await BookingModel.find();
    if (!bookings) {
      throw new Error("error while fetching data");
    }
    return bookings;
  }
};

export default Query;
