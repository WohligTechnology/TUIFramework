import { Mongoose } from "mongoose"

export default {
    /**
     * Create new Booking in Mongodb Atlas (Only for development.)
     * This api saves the provided hotel object data into database against the schema.
     * @param {Object} booking
     * @param {Object} callback
     */
    save: (booking, callback) => {
        var bookingObj = new Booking(booking)
        bookingObj.save(callback)
    },
    /**
     * Create new Booking in Mongodb Atlas (Only for development.)
     * This api saves the provided hotel object data into database against the schema.
     * @param {Object} booking
     * @param {Object} callback
     */
    deleteAll: (callback) => {
        Booking.remove().exec(callback)
    },
    /**
     * Create new Booking in Mongodb Atlas (Only for development.)
     * This api saves the provided hotel object data into database against the schema.
     * @param {Object} filter
     * @param {Object} callback
     */
    search: (filter, callback) => {
        Booking.paginate(filter).then((result) => {
            callback(null, result)
        })
    },
    /**
     * Get one Booking
     * This api gives one Booking information by its bookingId.
     * @param {Object} filter
     * @param {Object} callback
     */
    getOne: function(filter, callback) {
        Booking.findOne({ bookingId: filter.bookingId }).exec(callback)
    },
    /**
     * Create new Booking in Mongodb Atlas (Only for development.)
     * This api saves the provided hotel object data into database against the schema.
     * @param {Object} booking
     * @param {Object} callback
     */
    deleteOne: (filter, callback) => {
        Booking.deleteOne({ bookingId: filter.bookingId }).exec(callback)
    },

    updateOneBooking: (data, bookingId, callback) => {
        Booking.updateOne({ bookingId: bookingId }, data, callback)
    }
}
