import { FirstModel } from "./first"

test("can be created", () => {
  const instance = FirstModel.create({})

  expect(instance).toBeTruthy()
})
