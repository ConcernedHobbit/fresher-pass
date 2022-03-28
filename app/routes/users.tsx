import { Outlet } from "remix";

export default function Users() {
  return (
    <div>
      <h1>Users</h1>
      <Outlet />
    </div>
  )
}
