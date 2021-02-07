import functions from "../functions"
import ROLES from "./roleTypes.json"
import * as Icons from "../assets/icons"

const data = [
  {
    id: "menu-left-item-1",
    name: functions.getTranslation("home"),
    type: ROLES.ALL,
    isLink: true,
    to: "/",
    Icon: <Icons.Home />,
  },
  {
    id: "menu-left-item-2",
    name: functions.getTranslation("content"),
    type: ROLES.CONTENT_MANAGER,
    isLink: false,
    to: "/content",
    Icon: <Icons.Content />,
    subitems: [
      {
        id: "menu-left-item-2-1",
        name: functions.getTranslation("actors"),
        isLink: true,
        to: "/content/actors",
        Icon: <Icons.Actors />,
      },
      {
        id: "menu-left-item-2-2",
        name: functions.getTranslation("categories"),
        isLink: true,
        to: "/content/categories",
        Icon: <Icons.Category />,
      },
      {
        id: "menu-left-item-2-3",
        name: functions.getTranslation("contents"),
        isLink: true,
        to: "/content/contents",
        Icon: <Icons.EmptyIcon />,
      },
      {
        id: "menu-left-item-2-4",
        name: functions.getTranslation("images"),
        isLink: true,
        to: "/content/images",
        Icon: <Icons.EmptyIcon />,
      },
      {
        id: "menu-left-item-2-5",
        name: functions.getTranslation("posters"),
        isLink: true,
        to: "/content/posters",
        Icon: <Icons.Poster />,
      },
      {
        id: "menu-left-item-2-6",
        name: functions.getTranslation("videos"),
        isLink: true,
        to: "/content/videos",
        Icon: <Icons.EmptyIcon />,
      },
    ],
  },
  {
    id: "menu-left-item-3",
    name: functions.getTranslation("apps"),
    type: ROLES.CONTENT_MANAGER,
    isLink: false,
    to: "/apps/common",
    Icon: <Icons.EmptyIcon />,
    // Icon: <Icons.Apps />,
    subitems: [
      {
        id: "menu-left-item-3-1",
        name: functions.getTranslation("menu"),
        isLink: true,
        to: "/apps/menu",
        Icon: <Icons.EmptyIcon />,
      },
      {
        id: "menu-left-item-3-2",
        name: functions.getTranslation("slider"),
        isLink: true,
        to: "/apps/slider",
        Icon: <Icons.EmptyIcon />,
      },
      {
        id: "menu-left-item-3-3",
        name: functions.getTranslation("sections"),
        isLink: true,
        to: "/apps/sections",
        Icon: <Icons.EmptyIcon />,
      },
      {
        id: "menu-left-item-3-4",
        name: functions.getTranslation("pages"),
        isLink: true,
        to: "/apps/pages",
        Icon: <Icons.EmptyIcon />,
      },
    ],
  },
  {
    id: "menu-left-item-4",
    name: functions.getTranslation("monetization"),
    type: ROLES.OWNER,
    isLink: false,
    to: "/monetization",
    Icon: <Icons.EmptyIcon />,
    subitems: [
      {
        id: "menu-left-item-4-1",
        name: functions.getTranslation("plans"),
        isLink: true,
        to: "/monetization/plans",
        Icon: <Icons.EmptyIcon />,
      },
      {
        id: "menu-left-item-4-2",
        name: functions.getTranslation("Vouchers"),
        isLink: true,
        to: "/monetization/vouchers",
        Icon: <Icons.EmptyIcon />,
      },
      {
        id: "menu-left-item-4-3",
        name: functions.getTranslation("gateways"),
        isLink: true,
        to: "/monetization/gateways",
        Icon: <Icons.EmptyIcon />,
      },
    ],
  },
  {
    id: "menu-left-item-5-pre-a",
    name: functions.getTranslation("seo_text"),
    type: ROLES.CONTENT_MANAGER,
    isLink: true,
    to: "/seo",
    Icon: <Icons.SeoText />,
  },
  {
    id: "menu-left-item-5-pre-b",
    name: functions.getTranslation("vpn"),
    type: ROLES.ADMIN,
    isLink: false,
    to: "/vpn",
    Icon: <Icons.Vpn />,
    subitems: [
      {
        id: "menu-left-item-5-pre-b-1",
        name: functions.getTranslation("all"),
        isLink: true,
        to: "/vpn",
        Icon: <Icons.Vpn />,
      },
      {
        id: "menu-left-item-5-pre-b-2",
        name: functions.getTranslation("ips"),
        isLink: true,
        to: "/ips",
        Icon: <Icons.Vpn />,
      },
    ],
  },
  {
    id: "menu-left-item-5",
    name: functions.getTranslation("geoblock"),
    type: ROLES.CONTENT_MANAGER,
    isLink: true,
    to: "/geoblock",
    Icon: <Icons.EmptyIcon />,
  },
  {
    id: "menu-left-item-6",
    name: functions.getTranslation("analytics"),
    type: ROLES.ANALYTIC,
    isLink: true,
    to: "/analytics",
    Icon: <Icons.EmptyIcon />,
    subitems: [
      {
        id: "menu-left-item-6-1",
        name: functions.getTranslation("all"),
        isLink: true,
        to: "/analytics",
        Icon: <Icons.EmptyIcon />,
      },
      {
        id: "menu-left-item-6-2",
        name: functions.getTranslation("transactions"),
        isLink: true,
        to: "/analytics/transactions",
        Icon: <Icons.EmptyIcon />,
      },
    ],
  },
  {
    id: "menu-left-item-7",
    name: functions.getTranslation("users"),
    type: ROLES.OWNER,
    isLink: true,
    to: "/users",
    Icon: <Icons.EmptyIcon />,
  },
  {
    id: "menu-left-item-8",
    name: functions.getTranslation("settings"),
    type: ROLES.ADMIN,
    isLink: false,
    to: "/settings",
    Icon: <Icons.EmptyIcon />,
    subitems: [
      {
        id: "menu-left-item-8-1",
        name: functions.getTranslation("tokens"),
        isLink: true,
        to: "/settings/tokens",
        Icon: <Icons.EmptyIcon />,
      },
      {
        id: "menu-left-item-8-2",
        name: functions.getTranslation("general"),
        isLink: true,
        to: "/setting/general",
        Icon: <Icons.EmptyIcon />,
      },
      {
        id: "menu-left-item-8-3",
        name: functions.getTranslation("limitations"),
        isLink: true,
        to: "/setting/limitations",
        Icon: <Icons.EmptyIcon />,
      },
    ],
  },
  {
    id: "menu-left-item-9",
    name: functions.getTranslation("support"),
    type: ROLES.SUPPORT,
    isLink: false,
    to: "/support",
    Icon: <Icons.EmptyIcon />,
    subitems: [
      {
        id: "menu-left-item-9-1",
        name: functions.getTranslation("Inside"),
        isLink: true,
        to: "/support/in",
        Icon: <Icons.EmptyIcon />,
      },
      {
        id: "menu-left-item-9-2",
        name: functions.getTranslation("Outside"),
        isLink: true,
        to: "/support/out",
        Icon: <Icons.EmptyIcon />,
      },
    ],
  },
  {
    id: "menu-left-item-10",
    name: functions.getTranslation("translations"),
    type: ROLES.NOT_CLIENT,
    isLink: true,
    to: "/translations",
    Icon: <Icons.EmptyIcon />,
  },
  {
    id: "menu-left-item-11",
    name: functions.getTranslation("developer"),
    type: ROLES.DEVELOPER,
    isLink: false,
    to: "/dev",
    Icon: <Icons.EmptyIcon />,
    subitems: [
      {
        id: "menu-left-item-11-1",
        name: functions.getTranslation("logs"),
        isLink: true,
        to: "/dev/logs",
        Icon: <Icons.EmptyIcon />,
      },
    ],
  },
]

export default data
