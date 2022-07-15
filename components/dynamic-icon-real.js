import { IconContext } from "react-icons";
import loadable from "@loadable/component";

const DynamicIcon = ({ ...props }) => {
  const [library, iconComponent] = props.icon.split("/");

  if (!library || !iconComponent) return <div>Could Not Find Icon</div>;

  const lib = library.toLowerCase();
  const Icon = loadable(() => import(`react-icons/${lib}/index.js`), {
    resolveComponent: (el) =>
      el[iconComponent]
  });

  const value = {
    color: props.color,
    size: props.size,
    className: props.className,
    style: props.style,
    attr: props.attr
  };

  return (
    <IconContext.Provider value={value}>
      <Icon />
    </IconContext.Provider>
  );
};

export default DynamicIcon;
