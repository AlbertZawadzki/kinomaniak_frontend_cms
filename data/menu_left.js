import functions from "../functions"

import ROLES from "./_role_types.json"

const data = [
  {
    id: "menu-left-item-1",
    name: functions.getTranslation("home"),
    type: ROLES.ALL,
    isLink: true,
    to: "/",
  },
  {
    id: "menu-left-item-2",
    name: functions.getTranslation("content"),
    type: ROLES.CONTENT_MANAGER,
    isLink: false,
    to: "/content",
    subitems: [
      {
        id: "menu-left-item-2-1",
        name: functions.getTranslation("actors"),
        isLink: false,
        to: "/content/actors",
        subitems: [
          {
            id: "menu-left-item-2-1-a",
            name: functions.getTranslation("create"),
            isLink: true,
            to: "/content/actors/new",
          },
          {
            id: "menu-left-item-2-1-b",
            name: functions.getTranslation("all"),
            isLink: true,
            to: "/content/actors/all",
          },
        ],
      },
      {
        id: "menu-left-item-2-2",
        name: functions.getTranslation("categories"),
        isLink: false,
        to: "/content/categories",
        subitems: [
          {
            id: "menu-left-item-2-2-a",
            name: functions.getTranslation("create"),
            isLink: true,
            to: "/content/categories/new",
          },
          {
            id: "menu-left-item-2-2-b",
            name: functions.getTranslation("all"),
            isLink: true,
            to: "/content/categories/all",
          },
        ],
      },
      {
        id: "menu-left-item-2-3",
        name: functions.getTranslation("contents"),
        isLink: false,
        to: "/content/contents",
        subitems: [
          {
            id: "menu-left-item-2-3-a",
            name: functions.getTranslation("create"),
            isLink: true,
            to: "/content/contents/new",
          },
          {
            id: "menu-left-item-2-3-b",
            name: functions.getTranslation("all"),
            isLink: true,
            to: "/content/contents/all",
          },
        ],
      },
      {
        id: "menu-left-item-2-4",
        name: functions.getTranslation("images"),
        isLink: false,
        to: "/content/images",
        subitems: [
          {
            id: "menu-left-item-2-4-a",
            name: functions.getTranslation("add"),
            isLink: true,
            to: "/content/images/new",
          },
          {
            id: "menu-left-item-2-4-b",
            name: functions.getTranslation("all"),
            isLink: true,
            to: "/content/images/all",
          },
        ],
      },
      {
        id: "menu-left-item-2-5",
        name: functions.getTranslation("posters"),
        isLink: false,
        to: "/content/posters",
        subitems: [
          {
            id: "menu-left-item-2-5-a",
            name: functions.getTranslation("create"),
            isLink: true,
            to: "/content/posters/new",
          },
          {
            id: "menu-left-item-2-5-b",
            name: functions.getTranslation("all"),
            isLink: true,
            to: "/content/posters/all",
          },
        ],
      },
      {
        id: "menu-left-item-2-6",
        name: functions.getTranslation("videos"),
        isLink: false,
        to: "/content/videos",
        subitems: [
          {
            id: "menu-left-item-2-6-a",
            name: functions.getTranslation("add"),
            isLink: true,
            to: "/content/videos/new",
          },
          {
            id: "menu-left-item-2-6-b",
            name: functions.getTranslation("all"),
            isLink: true,
            to: "/content/videos/all",
          },
        ],
      },
    ],
  },
  {
    id: "menu-left-item-3",
    name: functions.getTranslation("apps"),
    type: ROLES.CONTENT_MANAGER,
    isLink: true,
    to: "/apps/common",
  },
  {
    id: "menu-left-item-4",
    name: functions.getTranslation("monetization"),
    type: ROLES.OWNER,
    isLink: false,
    to: "/monetization",
    subitems: [
      {
        id: "menu-left-item-4-1",
        name: functions.getTranslation("plans"),
        isLink: false,
        to: "/monetization/plans",
        subitems: [
          {
            id: "menu-left-item-4-1-a",
            name: functions.getTranslation("create"),
            isLink: true,
            to: "/monetization/plans/new",
          },
          {
            id: "menu-left-item-4-1-b",
            name: functions.getTranslation("all"),
            isLink: true,
            to: "/monetization/plans/all",
          },
          {
            id: "menu-left-item-4-1-d",
            name: functions.getTranslation("historical"),
            isLink: true,
            to: "/monetization/plans/historical",
          },
        ],
      },
      {
        id: "menu-left-item-4-2",
        name: functions.getTranslation("Vouchers"),
        isLink: false,
        to: "/monetization/vouchers",
        subitems: [
          {
            id: "menu-left-item-4-2-a",
            name: functions.getTranslation("create"),
            isLink: true,
            to: "/monetization/vouchers/new",
          },
          {
            id: "menu-left-item-4-2-b",
            name: functions.getTranslation("all"),
            isLink: true,
            to: "/monetization/vouchers/all",
          },
          {
            id: "menu-left-item-4-2-c",
            name: functions.getTranslation("historical"),
            isLink: true,
            to: "/monetization/vouchers/historical",
          },
        ],
      },
      {
        id: "menu-left-item-4-3",
        name: functions.getTranslation("gateways"),
        isLink: true,
        to: "/monetization/gateways",
      },
    ],
  },
  {
    id: "menu-left-item-5",
    name: functions.getTranslation("geoblock"),
    type: ROLES.CONTENT_MANAGER,
    isLink: false,
    to: "/geoblock",
    subitems: [
      {
        id: "menu-left-item-5-1",
        name: functions.getTranslation("create"),
        isLink: true,
        to: "/geoblock/new",
      },
      {
        id: "menu-left-item-5-2",
        name: functions.getTranslation("all"),
        isLink: true,
        to: "/geoblock/all",
      },
    ],
  },
  {
    id: "menu-left-item-6",
    name: functions.getTranslation("analytics"),
    type: ROLES.ANALYTIC,
    isLink: true,
    to: "/analytics",
  },
  {
    id: "menu-left-item-7",
    name: functions.getTranslation("users"),
    type: ROLES.OWNER,
    isLink: false,
    to: "/users",
    subitems: [
      {
        id: "menu-left-item-7-1",
        name: functions.getTranslation("all"),
        isLink: true,
        to: "/users/all",
      },
      {
        id: "menu-left-item-7-2",
        name: functions.getTranslation("owners"),
        isLink: true,
        to: "/users/owners",
      },
      {
        id: "menu-left-item-7-3",
        name: functions.getTranslation("admins"),
        isLink: true,
        to: "/users/admins",
      },
      {
        id: "menu-left-item-7-4",
        name: functions.getTranslation("content_managers"),
        isLink: true,
        to: "/users/content-managers",
      },
      {
        id: "menu-left-item-7-5",
        name: functions.getTranslation("analytics"),
        isLink: true,
        to: "/users/analytics",
      },
      {
        id: "menu-left-item-7-6",
        name: functions.getTranslation("developers"),
        isLink: true,
        to: "/users/developers",
      },
    ],
  },
  {
    id: "menu-left-item-8",
    name: functions.getTranslation("settings"),
    type: ROLES.ADMIN,
    isLink: false,
    to: "/settings",
    subitems: [
      {
        id: "menu-left-item-8-1",
        name: functions.getTranslation("tokens"),
        isLink: true,
        to: "/settings/all",
      },
      {
        id: "menu-left-item-8-2",
        name: functions.getTranslation("other"),
        isLink: true,
        to: "/users/all",
      },
    ],
  },
  {
    id: "menu-left-item-9",
    name: functions.getTranslation("support"),
    type: ROLES.SUPPORT,
    isLink: false,
    to: "/support",
    subitems: [
      {
        id: "menu-left-item-9-1",
        name: functions.getTranslation("Inside"),
        isLink: true,
        to: "/support/in",
      },
      {
        id: "menu-left-item-9-2",
        name: functions.getTranslation("Outside"),
        isLink: true,
        to: "/support/out",
      },
    ],
  },
  {
    id: "menu-left-item-10",
    name: functions.getTranslation("translations"),
    type: ROLES.TRANSLATOR,
    isLink: false,
    to: "/translations",
    subitems: [
      {
        id: "menu-left-item-10-1",
        name: functions.getTranslation("create"),
        isLink: true,
        to: "/translations/new",
      },
      {
        id: "menu-left-item-10-2",
        name: functions.getTranslation("all"),
        isLink: true,
        to: "/translations/all",
      },
    ],
  },
]

export default data
