export default defineEventHandler(async () => {
  return { toJSON: () => ({ date: new Date() }) }
})
