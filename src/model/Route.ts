export interface Route {
  path: string // Path of the record. Should start with / unless the record is the child of another route
  name: string // Name for the route record. Must be unique
  msg: string // Message to be displayed on the page
}
