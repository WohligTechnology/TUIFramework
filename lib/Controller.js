const router = Router();
router.delete(
  "/",
  ValidateRequest({
    body: {
      type: "object",
      properties: {},
      required: []
    }
  }),
  (req, res) => {
    BookingModel.deleteAll(res.callback);
  }
);
export default router;
