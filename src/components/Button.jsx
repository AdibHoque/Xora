import clsx from "clsx";
import {Marker} from "./Marker";

export default function Button({
  icon,
  href,
  onClick,
  children,
  containerClassName,
  markerFill,
}) {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px] ">
          <Marker fill={markerFill} />
        </span>
        {icon && (
          <img src={icon} className="z-10 object-contain mr-5 size-10"></img>
        )}
        <span className="relative uppercase z-2 font-poppins base-bold text-p1">
          {children}
        </span>
        <span className="glow-before glow-after"></span>
      </span>
    </>
  );

  return href ? (
    <a
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      href={href}
    >
      <Inner></Inner>
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      onClick={onClick}
    >
      <Inner></Inner>
    </button>
  );
}
