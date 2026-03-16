import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  clothingItem,
  handleOpenAddGarmentModal,
  handleOpenItemModal,
}) {
  return (
    <main className="profile">
      <SideBar />
      <ClothesSection
        clothingItem={clothingItem}
        handleOpenItemModal={handleOpenItemModal}
        handleOpenAddGarmentModal={handleOpenAddGarmentModal}
      />
    </main>
  );
}

export default Profile;
