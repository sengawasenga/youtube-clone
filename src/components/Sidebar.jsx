import { Stack, Icon } from "@mui/material";
import { categories } from "../utils/contants";
// import Icon from "@mui/material/Icon";

const selectedCategory = "New";

const Sidebar = () => (
  <Stack
    direction="row"
    sx={{
      flexDirection: { md: "column" },
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        style={{
          background: category.name === selectedCategory && "#6b6b6b7e",
        }}
        key={category.name}
      >
        <Icon sx={{ mr: 2 }}>{category.icon}</Icon>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
