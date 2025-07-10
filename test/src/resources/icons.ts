import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads } from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";

export const iconLibrary: Record<string, IconType> = {
  x: FaX,
  eye: HiOutlineEye,
  github: FaGithub,
  email: HiEnvelope,
  threads: FaThreads,
  discord: FaDiscord,
  home: PiHouseDuotone,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  gallery: PiImageDuotone,
  grid: PiGridFourDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  arrowRight: HiArrowRight,
  eyeOff: HiOutlineEyeSlash,
  person: PiUserCircleDuotone,
  document: HiOutlineDocument,
  book: PiBookBookmarkDuotone,
  arrowUpRight: HiArrowUpRight,
  rocket: HiOutlineRocketLaunch,
  globe: HiOutlineGlobeAsiaAustralia,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;