import { HomeLayout } from "@shared-features/home";
import { cN } from "@utils/tailwind";
import navigation from "../constants/navigation";

export function App() {
  return (
    <div>
      <h1 className={cN("px-2")}>
        <HomeLayout title="訂房的小小世界" navigation={navigation} />
        <span> Hello there, </span>
        Welcome hotel 👋
      </h1>
    </div>
  );
}

export default App;
