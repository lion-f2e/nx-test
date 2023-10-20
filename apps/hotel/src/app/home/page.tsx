import { HomeLayout } from "@shared-features/home";
import navigation from "./constants/navigation";

function HomePage() {
  return <HomeLayout title="訂房的小小世界" navigation={navigation} />;
}

export default HomePage;
