export default defineEventHandler(async () => {
  return toSuperJSON({ date: new Date() })
})
