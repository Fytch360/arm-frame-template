import { Routes, Route } from "react-router-dom";

import { Layout } from "./layout";

export function Page() {
  return (
    <Layout.AppLayout>
      <Routes>
        <Route path={"/"} element={<div>This is main Page</div>} />
        <Route path={"/payments"} element={<div>This is payments Page</div>} />
        <Route
          path={"/operations"}
          element={<div>This is Operations Paage </div>}
        />
        <Route path={"/history"} element={<div>This is History Page </div>} />
      </Routes>
    </Layout.AppLayout>
  );
}
