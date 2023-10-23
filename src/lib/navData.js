import HomeIcon from "@mui/icons-material/Home";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";

export const navData = [
  {
    id: 0,
    icon: <HomeIcon />,
    text: "Home",
    link: "/",
  },
  {
    id: 1,
    icon: <TravelExploreIcon />,
    text: "Farm Status Page",
    link: "farm-status-page",
  },
  {
    id: 2,
    icon: <BarChartIcon />,
    text: "Recovery Status Page",
    link: "recovery-status-page",
  },
  {
    id: 3,
    icon: <SettingsIcon />,
    text: "Admin Page",
    link: "admin-page",
  },
];
