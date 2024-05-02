import { SvgIconComponent } from "@mui/icons-material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import GridViewIcon from '@mui/icons-material/GridView';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';

interface SidebarItem{
    label: string,
    icon: SvgIconComponent
}

export const UpperSidebarItems: SidebarItem[] = [
    {
      label: "Application",
      icon: GridViewIcon
    },
    {
      label: "Connection",
      icon: InboxIcon
    },
    {
      label: "Cost",
      icon: AttachMoneyIcon
    },
    {
      label: "Security",
      icon: ShieldOutlinedIcon
    },
  ];

  export const LowerSidebarItems: SidebarItem[] = [
    {
      label: "Admin",
      icon: PersonOutlineOutlinedIcon
    },
    {
      label: "Docs",
      icon: TurnedInNotOutlinedIcon
    },
  ];