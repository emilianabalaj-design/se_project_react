import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  clothingItem,
  handleOpenAddGarmentModal,
  handleOpenItemModal,
  currentUser,
  handleSignOut,
  handleEditProfileClick,
}) {
  return (
    <main className="profile">
      <SideBar
        currentUser={currentUser}
        handleSignOut={handleSignOut}
        handleEditProfileClick={handleEditProfileClick}
      />
      <ClothesSection
        clothingItem={clothingItem}
        handleOpenItemModal={handleOpenItemModal}
        handleOpenAddGarmentModal={handleOpenAddGarmentModal}
      />
    </main>
  );
}

export default Profile;
