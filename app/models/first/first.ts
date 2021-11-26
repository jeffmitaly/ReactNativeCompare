import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const FirstModel = types
  .model("First")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type FirstType = Instance<typeof FirstModel>
export interface First extends FirstType {}
type FirstSnapshotType = SnapshotOut<typeof FirstModel>
export interface FirstSnapshot extends FirstSnapshotType {}
export const createFirstDefaultModel = () => types.optional(FirstModel, {})
