import BookingModel from "./booking.mongoType";

const Mutation = {
  addBooking: async (
    root: any,
    params: { status: string; clientName: string }
  ) => {
    const bookingModel = new BookingModel(params);
    const newBooking = await bookingModel.save();
    if (!newBooking) {
      throw new Error("error");
    }
    return newBooking;
  }
};

export default Mutation;
