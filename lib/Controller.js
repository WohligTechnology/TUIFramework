const router = Router()
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
        NewModel.deleteAll(res.callback)
    }
)
export default router
