import {
  FaMapMarkerAlt,
  FaUser,
  FaStar,
  FaRoute,
  FaFlag,
  FaUsers,
  FaMap,
  FaRunning,
  FaFeatherAlt,
  FaShieldAlt,
  FaSpa,
  FaCompass,
  FaMountain,
} from "react-icons/fa";

const iconTypes = {
  FaMapMarkerAlt,
  FaUser,
  FaStar,
  FaRoute,
  FaFlag,
  FaUsers,
  FaMap,
  FaRunning,
  FaFeatherAlt,
  FaShieldAlt,
  FaSpa,
  FaCompass,
  FaMountain,
};

const IconComponent = ({ name, ...props }) => {
  if (!iconTypes[name]) {
    return null;
  }
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;

// export const icons = {
//   FaBook: <FaBook />,
//   FaPrayingHands: <FaPrayingHands />,
//   FaMountain: <FaMountain />,
//   FaTrafficLight: <FaTrafficLight />,
// };
